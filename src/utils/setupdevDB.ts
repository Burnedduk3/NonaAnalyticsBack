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
  let multiselectionQuestionCategory = await Category.findOne({ name: 'MultiSelection' });
  if (!multiselectionQuestionCategory) {
    multiselectionQuestionCategory = await Category.create({ name: 'MultiSelection' }).save();
  }
  let yesnoQuestionCategory = await Category.findOne({ name: 'YesNo' });
  if (!yesnoQuestionCategory) {
    yesnoQuestionCategory = await Category.create({ name: 'YesNo' }).save();
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
    .set(yesnoQuestionCategory);

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
    .set(yesnoQuestionCategory);

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
    .set(yesnoQuestionCategory);

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
    .set(yesnoQuestionCategory);

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



  let DemographicsFirstQuestion = await Question.findOne({ question: 'How old are you?' });
  if (!DemographicsFirstQuestion) {
    DemographicsFirstQuestion = await Question.create({
      question: 'How old are you?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: '18',

      order: 0,

      inputConfirmation: 'Numerical',
    }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(DemographicsFirstQuestion)
    .set(openQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(DemographicsFirstQuestion)
    .set(DemographicsSubSection);



  let DemographicsSecondQuestion = await Question.findOne({ question: 'What sex were you assigned at birth?' });
  if (!DemographicsSecondQuestion) {
    DemographicsSecondQuestion = await Question.create({
      question: 'What sex were you assigned at birth?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'Male/Female',

      order: 1,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let sexQuestionItem1 = await QuestionItems.findOne({ name: 'Male' });
  if (!sexQuestionItem1) {
    sexQuestionItem1 = await QuestionItems.create({ name: 'Male', order: 0 }).save();
  }
  let sexQuestionItem2 = await QuestionItems.findOne({ name: 'Female' });
  if (!sexQuestionItem2) {
    sexQuestionItem2 = await QuestionItems.create({ name: 'Female', order: 1 }).save();
  }
  let sexQuestionItem3 = await QuestionItems.findOne({ name: 'Other' });
  if (!sexQuestionItem3) {
    sexQuestionItem3 = await QuestionItems.create({ name: 'Other', order: 2 }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(DemographicsSecondQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(DemographicsSecondQuestion)
    .set(DemographicsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsSecondQuestion).add(sexQuestionItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsSecondQuestion).add(sexQuestionItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsSecondQuestion).add(sexQuestionItem3);



  let DemographicsThirdQuestion = await Question.findOne({ question: 'What is the gender with which you currently identify?' });
  if (!DemographicsThirdQuestion) {
    DemographicsThirdQuestion = await Question.create({
      question: 'What is the gender with which you currently identify?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'Man/Woman/Genderqueer/Nonbinary',

      order: 2,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let genderQuestionItem1 = await QuestionItems.findOne({ name: 'Man' });
  if (!genderQuestionItem1) {
    genderQuestionItem1 = await QuestionItems.create({ name: 'Man', order: 0 }).save();
  }
  let genderQuestionItem2 = await QuestionItems.findOne({ name: 'Woman' });
  if (!genderQuestionItem2) {
    genderQuestionItem2 = await QuestionItems.create({ name: 'Woman', order: 1 }).save();
  }
  let genderQuestionItem3 = await QuestionItems.findOne({ name: 'Genderqueer' });
  if (!genderQuestionItem3) {
    genderQuestionItem3 = await QuestionItems.create({ name: 'Genderqueer', order: 2 }).save();
  }
  let genderQuestionItem4 = await QuestionItems.findOne({ name: 'Nonbinary' });
  if (!genderQuestionItem4) {
    genderQuestionItem4 = await QuestionItems.create({ name: 'Nonbinary', order: 3 }).save();
  }
  let genderQuestionItem5 = await QuestionItems.findOne({ name: 'Other' });
  if (!genderQuestionItem5) {
    genderQuestionItem5 = await QuestionItems.create({ name: 'Other', order: 4 }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(DemographicsThirdQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(DemographicsThirdQuestion)
    .set(DemographicsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsThirdQuestion).add(genderQuestionItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsThirdQuestion).add(genderQuestionItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsThirdQuestion).add(genderQuestionItem3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsThirdQuestion).add(genderQuestionItem4);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsThirdQuestion).add(genderQuestionItem5);


  let DemographicsFourthQuestion = await Question.findOne({ question: 'Do you identify as transgender?' });
  if (!DemographicsFourthQuestion) {
    DemographicsFourthQuestion = await Question.create({
      question: 'Do you identify as transgender?',

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
    .of(DemographicsFourthQuestion)
    .set(yesnoQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(DemographicsFourthQuestion)
    .set(DemographicsSubSection);

  let DemographicsFifthQuestion = await Question.findOne({ question: 'Were you born in the US or some other country?' });
  if (!DemographicsFifthQuestion) {
    DemographicsFifthQuestion = await Question.create({
      question: 'Were you born in the US or some other country?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'US/SOMEOTHER',

      order: 4,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let countryQuestionItem1 = await QuestionItems.findOne({ name: 'US' });
  if (!countryQuestionItem1) {
    countryQuestionItem1 = await QuestionItems.create({ name: 'US', order: 0 }).save();
  }
  let countryQuestionItem2 = await QuestionItems.findOne({ name: 'Some Other Country' });
  if (!countryQuestionItem2) {
    countryQuestionItem2 = await QuestionItems.create({ name: 'Some Other Country', order: 1 }).save();
  }


  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(DemographicsFifthQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(DemographicsFifthQuestion)
    .set(DemographicsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsFifthQuestion).add(countryQuestionItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsFifthQuestion).add(countryQuestionItem2);

  let DemographicsSixthQuestion = await Question.findOne({ question: 'How many years have you lived in Florida?' });
  if (!DemographicsSixthQuestion) {
    DemographicsSixthQuestion = await Question.create({
      question: 'How many years have you lived in Florida?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: '0',

      order: 5,

      inputConfirmation: 'Numerical',
    }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(DemographicsSixthQuestion)
    .set(openQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(DemographicsSixthQuestion)
    .set(DemographicsSubSection);

  let DemographicsSeventhQuestion = await Question.findOne({ question: 'Are you Hispanic/Latino?' });
  if (!DemographicsSeventhQuestion) {
    DemographicsSeventhQuestion = await Question.create({
      question: 'Are you Hispanic/Latino?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'Yes/no',

      order: 6,

      inputConfirmation: 'Alpha',
    }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(DemographicsSeventhQuestion)
    .set(yesnoQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(DemographicsSeventhQuestion)
    .set(DemographicsSubSection);

  let DemographicsEighthQuestion = await Question.findOne({ question: 'Select all that apply:' });
  if (!DemographicsEighthQuestion) {
    DemographicsEighthQuestion = await Question.create({
      question: 'Select all that apply:',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'None',

      order: 7,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let hispanicQuestionItem1 = await QuestionItems.findOne({ name: 'Mexican/Mexican-American/Chicano' });
  if (!hispanicQuestionItem1) {
    hispanicQuestionItem1 = await QuestionItems.create({ name: 'Mexican/Mexican-American/Chicano', order: 0 }).save();
  }
  let hispanicQuestionItem2 = await QuestionItems.findOne({ name: 'Puerto Rican' });
  if (!hispanicQuestionItem2) {
    hispanicQuestionItem2 = await QuestionItems.create({ name: 'Puerto Rican', order: 1 }).save();
  }
  let hispanicQuestionItem3 = await QuestionItems.findOne({ name: 'Cuban' });
  if (!hispanicQuestionItem3) {
    hispanicQuestionItem3 = await QuestionItems.create({ name: 'Cuban', order: 2 }).save();
  }
  let hispanicQuestionItem4 = await QuestionItems.findOne({ name: 'Other' });
  if (!hispanicQuestionItem4) {
    hispanicQuestionItem4 = await QuestionItems.create({ name: 'Other', order: 4 }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(DemographicsEighthQuestion)
    .set(multiselectionQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(DemographicsEighthQuestion)
    .set(DemographicsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsEighthQuestion).add(hispanicQuestionItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsEighthQuestion).add(hispanicQuestionItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsEighthQuestion).add(hispanicQuestionItem3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsEighthQuestion).add(hispanicQuestionItem4);


  let DemographicsNinthQuestion = await Question.findOne({ question: 'With which racial groups do you identify? (Select all that apply.)' });
  if (!DemographicsNinthQuestion) {
    DemographicsNinthQuestion = await Question.create({
      question: 'With which racial groups do you identify? (Select all that apply.)',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'None',

      order: 8,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let raceQuestionItem1 = await QuestionItems.findOne({ name: 'White or Caucasian' });
  if (!raceQuestionItem1) {
    raceQuestionItem1 = await QuestionItems.create({ name: 'White or Caucasian', order: 0 }).save();
  }
  let raceQuestionItem2 = await QuestionItems.findOne({ name: 'Black or African American' });
  if (!raceQuestionItem2) {
    raceQuestionItem2 = await QuestionItems.create({ name: 'Black or African American', order: 1 }).save();
  }
  let raceQuestionItem3 = await QuestionItems.findOne({ name: 'Native American Indian or Native Alaskan' });
  if (!raceQuestionItem3) {
    raceQuestionItem3 = await QuestionItems.create({ name: 'Native American Indian or Native Alaskan', order: 2 }).save();
  }
  let raceQuestionItem4 = await QuestionItems.findOne({ name: 'Asian (e.g., Chinese, Filipino, Indian)' });
  if (!raceQuestionItem4) {
    raceQuestionItem4 = await QuestionItems.create({ name: 'Asian (e.g., Chinese, Filipino, Indian)', order: 3 }).save();
  }
  let raceQuestionItem5 = await QuestionItems.findOne({ name: 'Native Hawaiian or other Pacific Islander' });
  if (!raceQuestionItem5) {
    raceQuestionItem5 = await QuestionItems.create({ name: 'Native Hawaiian or other Pacific Islander', order: 4 }).save();
  }
  let raceQuestionItem6 = await QuestionItems.findOne({ name: 'Arab, Middle Eastern, or North African' });
  if (!raceQuestionItem6) {
    raceQuestionItem6 = await QuestionItems.create({ name: 'Arab, Middle Eastern, or North African', order: 5 }).save();
  }
  let raceQuestionItem7 = await QuestionItems.findOne({ name: 'Other' });
  if (!raceQuestionItem7) {
    raceQuestionItem7 = await QuestionItems.create({ name: 'Other', order: 6 }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(DemographicsNinthQuestion)
    .set(multiselectionQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(DemographicsNinthQuestion)
    .set(DemographicsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsNinthQuestion).add(raceQuestionItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsNinthQuestion).add(raceQuestionItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsNinthQuestion).add(raceQuestionItem3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsNinthQuestion).add(raceQuestionItem4);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsNinthQuestion).add(raceQuestionItem5);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsNinthQuestion).add(raceQuestionItem6);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsNinthQuestion).add(raceQuestionItem7);

  let DemographicsTenthQuestion = await Question.findOne({ question: 'Do you think of yourself as' });
  if (!DemographicsTenthQuestion) {
    DemographicsTenthQuestion = await Question.create({
      question: 'Select all that apply:',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'None',

      order: 9,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let sexualityQuestionItem1 = await QuestionItems.findOne({ name: 'Straight/Heterosexual' });
  if (!sexualityQuestionItem1) {
    sexualityQuestionItem1 = await QuestionItems.create({ name: 'Straight/Heterosexual', order: 0 }).save();
  }
  let sexualityQuestionItem2 = await QuestionItems.findOne({ name: 'Gay' });
  if (!sexualityQuestionItem2) {
    sexualityQuestionItem2 = await QuestionItems.create({ name: 'Gay', order: 1 }).save();
  }
  let sexualityQuestionItem3 = await QuestionItems.findOne({ name: 'Lesbian' });
  if (!sexualityQuestionItem3) {
    sexualityQuestionItem3 = await QuestionItems.create({ name: 'Lesbian', order: 2 }).save();
  }
  let sexualityQuestionItem4 = await QuestionItems.findOne({ name: 'Bisexual' });
  if (!sexualityQuestionItem4) {
    sexualityQuestionItem4 = await QuestionItems.create({ name: 'Bisexual', order: 4 }).save();
  }
  let sexualityQuestionItem5 = await QuestionItems.findOne({ name: 'Other' });
  if (!sexualityQuestionItem5) {
    sexualityQuestionItem5 = await QuestionItems.create({ name: 'Other', order: 5 }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(DemographicsTenthQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(DemographicsTenthQuestion)
    .set(DemographicsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsTenthQuestion).add(sexualityQuestionItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsTenthQuestion).add(sexualityQuestionItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsTenthQuestion).add(sexualityQuestionItem3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsTenthQuestion).add(sexualityQuestionItem4);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsTenthQuestion).add(sexualityQuestionItem5);



};
