pipeline {
    agent any
    environment {
        HOME = '.'
        registry = '342495404680.dkr.ecr.us-east-1.amazonaws.com/life-project-back-end'
        dockerImage = ''
    }
    stages {
        stage('setup') {
            steps {
                git changelog: false, credentialsId: 'github_account', url: 'https://github.com/Burnedduk3/NonaAnalyticsBack.git'
            }
        }

        stage('build') {
            steps {
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }

        stage('test') {
            steps {
                sh 'echo Running tests'
            }
        }

        stage('push'){
            steps{
                script {
                    docker.withRegistry('https://342495404680.dkr.ecr.us-east-1.amazonaws.com/life-project-back-end', 'ecr:us-east-1:AWS_Jenkins') {
                        dockerImage.push()
                        dockerImage.push('latest')
                    }
                }
            }
        }

        stage('deploy'){
            steps{
                 sh "sudo salt -C 'ip-10-0-[2-3]-*' state.apply docker-run-back"
            }
        }
    }
    post {
        always {
            echo 'One way or another, I have finished'
            sh "docker rm \$(docker ps -a -q)"
            sh "docker rmi \$(docker images -q -f dangling=true)"
        }
    }
}