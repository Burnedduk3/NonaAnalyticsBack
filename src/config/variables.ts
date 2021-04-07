// docker run --name nona-Analytics-DB -e POSTGRES_PASSWORD=Patipuna1  -d -p 5432:5432 postgres

// Enviroment
export const CONFIG_ENVIROMENT = process.env.ENVIROMENT || 'development';

// Server port
export const CONFIG_SERVER_PORT = process.env.PORT || 3500;

// Database
export const CONFIG_DATABASE_URL = process.env.DATABASE_URL || 'postgres://LifeProjectUser:GcRBWSd4zT2r26pW@terraform-20210401174332229800000001.c4kx0bmqhjaj.us-east-1.rds.amazonaws.com:5432/prodLifeProjectDatabase';

export const CONFIG_TEST_DATABASE_URL =
  process.env.TESTDATABASE_URL || 'postgres://postgres:Patipuna1@localhost:5432/test';

// encription secretWord
export const CONFIG_BCRYPT_SALT_ROUNDS: number = process.env.CONFIG_BCRYPT_SALT_ROUNDS
  ? +process.env.CONFIG_BCRYPT_SALT_ROUNDS
  : 10;
