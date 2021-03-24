import { getDBConfig } from '@config/database';
import { Category } from '@entities/Category.entity';
import { Question } from '@entities/Question.entity';
import { QuestionItems } from '@entities/QuestionItems.entity';
import { Section } from '@entities/Section.entity';
import { SubSection } from '@entities/SubSection.entity';
import { getConnection } from 'typeorm';

export const connectSqlDB = async () => await getDBConfig();

export const boilerplateData = async () => {
  let openQuestionCategory = await Category.findOne({ name: 'Open' });
  if (!openQuestionCategory) {
    openQuestionCategory = await Category.create({ name: 'Open' }).save();
  }

  let comboQuestionCategory = await Category.findOne({ name: 'Combo' });
  if (!comboQuestionCategory) {
    comboQuestionCategory = await Category.create({ name: 'Combo' }).save();
  }



  // CREATING SECTION AND SUBSECTION
  let LakeNonaSection = await Section.findOne({ name: 'Lake-Nona' });
  if (!LakeNonaSection) {
    LakeNonaSection = await Section.create({ name: 'Lake-Nona', order: 0 }).save();
  }

  let LakeNonaSubSection = await SubSection.findOne({ name: 'Lake-Nona' });
  if (!LakeNonaSubSection) {
    LakeNonaSubSection = await SubSection.create({ name: 'Lake-Nona', order: 0 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(LakeNonaSubSection)
    .set(LakeNonaSection);

  let HealthSection = await Section.findOne({ name: 'Health' });
  if (!HealthSection) {
    HealthSection = await Section.create({ name: 'Health', order: 1 }).save();
  }

  let DemographicsSubSection = await SubSection.findOne({ name: 'Demographics' });
  if (!DemographicsSubSection) {
    DemographicsSubSection = await SubSection.create({ name: 'Demographics', order: 0 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(DemographicsSubSection)
    .set(HealthSection);

  // LAKE NONA QUESTIONS
  let LakeNonaFirstQuestion = await Question.findOne({ question: 'Do you live in lake nona?' });
  if (!LakeNonaFirstQuestion) {
    LakeNonaFirstQuestion = await Question.create({
      question: 'Do you live in lake nona?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'Yes/no',

      order: 0,

      inputConfirmation: 'Alpha',
    }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LakeNonaFirstQuestion)
    .set(openQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LakeNonaFirstQuestion)
    .set(LakeNonaSubSection);

  let LakeNonaSecQuestion = await Question.findOne({ question: 'Do you work in lake nona?' });
  if (!LakeNonaSecQuestion) {
    LakeNonaSecQuestion = await Question.create({
      question: 'Do you work in lake nona?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'Yes/no',

      order: 1,

      inputConfirmation: 'Alpha',
    }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LakeNonaSecQuestion)
    .set(openQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LakeNonaSecQuestion)
    .set(LakeNonaSubSection);

  let LakeNonaThirdQuestion = await Question.findOne({ question: 'Do you study in lake nona?' });
  if (!LakeNonaThirdQuestion) {
    LakeNonaThirdQuestion = await Question.create({
      question: 'Do you study in lake nona?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'Yes/no',

      order: 2,

      inputConfirmation: 'Alpha',
    }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LakeNonaThirdQuestion)
    .set(openQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LakeNonaThirdQuestion)
    .set(LakeNonaSubSection);

  let LakeNonaFourthQuestion = await Question.findOne({ question: 'Do you play in lake nona?' });
  if (!LakeNonaFourthQuestion) {
    LakeNonaFourthQuestion = await Question.create({
      question: 'Do you play in lake nona?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'Yes/no',

      order: 3,

      inputConfirmation: 'Alpha',
    }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LakeNonaFourthQuestion)
    .set(openQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LakeNonaFourthQuestion)
    .set(LakeNonaSubSection);

  let LakeNonaFifthQuestion = await Question.findOne({ question: 'What is the zip code for your primary residence?' });
  if (!LakeNonaFifthQuestion) {
    LakeNonaFifthQuestion = await Question.create({
      question: 'What is the zip code for your primary residence?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: '00000',

      order: 4,

      inputConfirmation: 'Numerical',
    }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LakeNonaFifthQuestion)
    .set(openQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LakeNonaFifthQuestion)
    .set(LakeNonaSubSection);


  let DemographicsFirstQuestion = await Question.findOne({ question: 'What sex were you assigned at birth?' });
  if (!DemographicsFirstQuestion) {
    DemographicsFirstQuestion = await Question.create({
      question: 'What sec were you assigned at birth?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'Male/Female',

      order: 5,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let sexQuestionItem1 = await QuestionItems.findOne({ name: 'Male' });
  if (!sexQuestionItem1) {
    sexQuestionItem1 = await QuestionItems.create({ name: 'Male', order: 0 }).save();
  }
  let sexQuestionItem2 = await QuestionItems.findOne({ name: 'Female' });
  if (!sexQuestionItem2) {
    sexQuestionItem2 = await QuestionItems.create({ name: 'Female', order: 0 }).save();
  }
  let sexQuestionItem3 = await QuestionItems.findOne({ name: 'Other' });
  if (!sexQuestionItem3) {
    sexQuestionItem3 = await QuestionItems.create({ name: 'Other', order: 0 }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(DemographicsFirstQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(DemographicsFirstQuestion)
    .set(DemographicsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsFirstQuestion).add(sexQuestionItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsFirstQuestion).add(sexQuestionItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsFirstQuestion).add(sexQuestionItem3);





  let LakeNonaSecondQuestion = await Question.findOne({ question: 'Select one of this?' });
  if (!LakeNonaSecondQuestion) {
    LakeNonaSecondQuestion = await Question.create({
      question: 'Select one of this?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'Yes/no',

      order: 8,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let questionItem1 = await QuestionItems.findOne({ name: 'this is an option' });
  if (!questionItem1) {
    questionItem1 = await QuestionItems.create({ name: 'this is an option', order: 0 }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LakeNonaSecondQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LakeNonaSecondQuestion)
    .set(LakeNonaSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(LakeNonaSecondQuestion).add(questionItem1);
};
