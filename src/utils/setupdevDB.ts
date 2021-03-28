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
  let ladderQuestionCategory = await Category.findOne({ name: 'Ladder' });
  if (!ladderQuestionCategory) {
    ladderQuestionCategory = await Category.create({ name: 'Ladder' }).save();
  }
  let multiselectionQuestionCategory = await Category.findOne({ name: 'MultiSelection' });
  if (!multiselectionQuestionCategory) {
    multiselectionQuestionCategory = await Category.create({ name: 'MultiSelection' }).save();
  }
  let yesnoQuestionCategory = await Category.findOne({ name: 'YesNo' });
  if (!yesnoQuestionCategory) {
    yesnoQuestionCategory = await Category.create({ name: 'YesNo' }).save();
  }
  let radiogroupQuestionCategory = await Category.findOne({ name: 'RadioGroup' });
  if (!radiogroupQuestionCategory) {
    radiogroupQuestionCategory = await Category.create({ name: 'RadioGroup' }).save();
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

  let QOLSubSection = await SubSection.findOne({ name: 'Quality of Life' });
  if (!QOLSubSection) {
    QOLSubSection = await SubSection.create({ name: 'Quality of Life', order: 1 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(QOLSubSection)
    .set(HealthSection);

  let YourHealthSubSection = await SubSection.findOne({ name: 'Your Health' });
  if (!YourHealthSubSection) {
    YourHealthSubSection = await SubSection.create({ name: 'Your Health', order: 2 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(YourHealthSubSection)
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

  let LakeNonaThirdQuestion = await Question.findOne({ question: 'Do you study in lake nona?'});
  if (!LakeNonaThirdQuestion){
    LakeNonaThirdQuestion = await Question.create({
      question: 'Do you study in lake nona?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'Yes/No',
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
    hispanicQuestionItem4 = await QuestionItems.create({ name: 'Other', order: 3 }).save();
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

  let DemographicsTenthQuestion = await Question.findOne({ question: 'Do you think of yourself as'});
  if (!DemographicsTenthQuestion){
    DemographicsTenthQuestion = await Question.create({
      question: 'Do you think of yourself as',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 9,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let DemographicsTenthQuestionItem1 = await QuestionItems.findOne({ name: 'Straight/Heterosexual'});
  if (!DemographicsTenthQuestionItem1) {
    DemographicsTenthQuestionItem1 = await QuestionItems.create({ name: 'Straight/Heterosexual', order:0}).save();
  }
  let DemographicsTenthQuestionItem2 = await QuestionItems.findOne({ name: 'Gay'});
  if (!DemographicsTenthQuestionItem2) {
    DemographicsTenthQuestionItem2 = await QuestionItems.create({ name: 'Gay', order:1}).save();
  }
  let DemographicsTenthQuestionItem3 = await QuestionItems.findOne({ name: 'Lesbian'});
  if (!DemographicsTenthQuestionItem3) {
    DemographicsTenthQuestionItem3 = await QuestionItems.create({ name: 'Lesbian', order:2}).save();
  }
  let DemographicsTenthQuestionItem4 = await QuestionItems.findOne({ name: 'Bisexual'});
  if (!DemographicsTenthQuestionItem4) {
    DemographicsTenthQuestionItem4 = await QuestionItems.create({ name: 'Bisexual', order:3}).save();
  }
  let DemographicsTenthQuestionItem5 = await QuestionItems.findOne({ name: 'Other'});
  if (!DemographicsTenthQuestionItem5) {
    DemographicsTenthQuestionItem5 = await QuestionItems.create({ name: 'Other', order:4}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsTenthQuestion).add(DemographicsTenthQuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsTenthQuestion).add(DemographicsTenthQuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsTenthQuestion).add(DemographicsTenthQuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsTenthQuestion).add(DemographicsTenthQuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsTenthQuestion).add(DemographicsTenthQuestionItem5);


  let DemographicsEleventhQuestion = await Question.findOne({ question: 'What is the highest level of education you completed?' });
  if (!DemographicsEleventhQuestion) {
    DemographicsEleventhQuestion = await Question.create({
      question: 'What is the highest level of education you completed?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'None',

      order: 10,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let educationQuestionItem1 = await QuestionItems.findOne({ name: 'Less than high school (including no education)l' });
  if (!educationQuestionItem1) {
    educationQuestionItem1 = await QuestionItems.create({ name: 'Less than high school (including no education)', order: 0 }).save();
  }
  let educationQuestionItem2 = await QuestionItems.findOne({ name: 'GED or equivalent' });
  if (!educationQuestionItem2) {
    educationQuestionItem2 = await QuestionItems.create({ name: 'GED or equivalent', order: 1 }).save();
  }
  let educationQuestionItem3 = await QuestionItems.findOne({ name: 'High school diploma' });
  if (!educationQuestionItem3) {
    educationQuestionItem3 = await QuestionItems.create({ name: 'High school diploma', order: 2 }).save();
  }
  let educationQuestionItem4 = await QuestionItems.findOne({ name: 'Some post high school education, but no certificate or degree' });
  if (!educationQuestionItem4) {
    educationQuestionItem4 = await QuestionItems.create({ name: 'Some post high school education, but no certificate or degree', order: 3 }).save();
  }
  let educationQuestionItem5 = await QuestionItems.findOne({ name: 'Post high school technical school certificate or degree (e.g., EMT)' });
  if (!educationQuestionItem5) {
    educationQuestionItem5 = await QuestionItems.create({ name: 'Post high school technical school certificate or degree (e.g., EMT)', order: 4 }).save();
  }
  let educationQuestionItem6 = await QuestionItems.findOne({ name: '2-year college Associate Degree' });
  if (!educationQuestionItem6) {
    educationQuestionItem6 = await QuestionItems.create({ name: '2-year college Associate Degree', order: 5 }).save();
  }
  let educationQuestionItem7 = await QuestionItems.findOne({ name: '4-year college degree (BA, BS, or equivalent)' });
  if (!educationQuestionItem7) {
    educationQuestionItem7 = await QuestionItems.create({ name: '4-year college degree (BA, BS, or equivalent)', order: 6 }).save();
  }
  let educationQuestionItem8 = await QuestionItems.findOne({ name: 'Masters Degree (e.g., MA, MS, MSN, MPH)' });
  if (!educationQuestionItem8) {
    educationQuestionItem8 = await QuestionItems.create({ name: 'Masters Degree (e.g., MA, MS, MSN, MPH)', order: 7 }).save();
  }
  let educationQuestionItem9 = await QuestionItems.findOne({ name: 'Doctoral Degree (e.g., MD, PhD, JD) ' });
  if (!educationQuestionItem9) {
    educationQuestionItem9 = await QuestionItems.create({ name: 'Doctoral Degree (e.g., MD, PhD, JD) ', order: 8 }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(DemographicsEleventhQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(DemographicsEleventhQuestion)
    .set(DemographicsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsEleventhQuestion).add(educationQuestionItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsEleventhQuestion).add(educationQuestionItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsEleventhQuestion).add(educationQuestionItem3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsEleventhQuestion).add(educationQuestionItem4);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsEleventhQuestion).add(educationQuestionItem5);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsEleventhQuestion).add(educationQuestionItem6);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsEleventhQuestion).add(educationQuestionItem7);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsEleventhQuestion).add(educationQuestionItem8);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsEleventhQuestion).add(educationQuestionItem9);

  let DemographicsTwelfthQuestion = await Question.findOne({ question: 'What is your marital status?' });
  if (!DemographicsTwelfthQuestion) {
    DemographicsTwelfthQuestion = await Question.create({
      question: 'What is your marital status?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'None',

      order: 11,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let marriageQuestionItem1 = await QuestionItems.findOne({ name: 'Married' });
  if (!marriageQuestionItem1) {
    marriageQuestionItem1 = await QuestionItems.create({ name: 'Married', order: 0 }).save();
  }
  let marriageQuestionItem2 = await QuestionItems.findOne({ name: 'Never Married' });
  if (!marriageQuestionItem2) {
    marriageQuestionItem2 = await QuestionItems.create({ name: 'Never Married', order: 1 }).save();
  }
  let marriageQuestionItem3 = await QuestionItems.findOne({ name: 'Divorced' });
  if (!marriageQuestionItem3) {
    marriageQuestionItem3 = await QuestionItems.create({ name: 'Divorced', order: 2 }).save();
  }
  let marriageQuestionItem4 = await QuestionItems.findOne({ name: 'Separated' });
  if (!marriageQuestionItem4) {
    marriageQuestionItem4 = await QuestionItems.create({ name: 'Separated', order: 3 }).save();
  }
  let marriageQuestionItem5 = await QuestionItems.findOne({ name: 'Widowed' });
  if (!marriageQuestionItem5) {
    marriageQuestionItem5 = await QuestionItems.create({ name: 'Widowed', order: 4 }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(DemographicsTwelfthQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(DemographicsTwelfthQuestion)
    .set(DemographicsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsTwelfthQuestion).add(marriageQuestionItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsTwelfthQuestion).add(marriageQuestionItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsTwelfthQuestion).add(marriageQuestionItem3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsTwelfthQuestion).add(marriageQuestionItem4);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(DemographicsTwelfthQuestion).add(marriageQuestionItem5);

  let Demographics13Question = await Question.findOne({ question: 'Are you currently living with someone in a marriage-like relationship? ' });
  if (!Demographics13Question) {
    Demographics13Question = await Question.create({
      question: 'Are you currently living with someone in a marriage-like relationship? ',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'Yes/no',

      order: 12,

      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Demographics13Question)
    .set(yesnoQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Demographics13Question)
    .set(DemographicsSubSection);

  let Demographics14Question = await Question.findOne({ question: 'How many biological children do you have, not counting step or adopted children? ' });
  if (!Demographics14Question) {
    Demographics14Question = await Question.create({
      question: 'How many biological children do you have, not counting step or adopted children? ',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: '0',

      order: 13,

      inputConfirmation: 'Numerical',
    }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Demographics14Question)
    .set(openQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Demographics14Question)
    .set(DemographicsSubSection);

  let Demographics15Question = await Question.findOne({ question: 'Have you ever been diagnosed by a health professional with any of the following during pregnancy?' });
  if (!Demographics15Question) {
    Demographics15Question = await Question.create({
      question: 'Have you ever been diagnosed by a health professional with any of the following during pregnancy?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'None',

      order: 14,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let l10bQuestionItem1 = await QuestionItems.findOne({ name: 'Gestational hypertension' });
  if (!l10bQuestionItem1) {
    l10bQuestionItem1 = await QuestionItems.create({ name: 'Gestational hypertension', order: 0 }).save();
  }
  let l10bQuestionItem2 = await QuestionItems.findOne({ name: 'Pre-eclampsia' });
  if (!l10bQuestionItem2) {
    l10bQuestionItem2 = await QuestionItems.create({ name: 'Pre-eclampsia', order: 1 }).save();
  }
  let l10bQuestionItem3 = await QuestionItems.findOne({ name: 'Eclampsia' });
  if (!l10bQuestionItem3) {
    l10bQuestionItem3 = await QuestionItems.create({ name: 'Eclampsia', order: 2 }).save();
  }
  let l10bQuestionItem4 = await QuestionItems.findOne({ name: 'Gestational diabetes mellitus' });
  if (!l10bQuestionItem4) {
    l10bQuestionItem4 = await QuestionItems.create({ name: 'Gestational diabetes mellitus', order: 3 }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Demographics15Question)
    .set(multiselectionQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Demographics15Question)
    .set(DemographicsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics15Question).add(l10bQuestionItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics15Question).add(l10bQuestionItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics15Question).add(l10bQuestionItem3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics15Question).add(l10bQuestionItem4);


  let Demographics16Question = await Question.findOne({ question: 'If yes to any of the above, did you ever obtain treatment?' });
  if (!Demographics16Question) {
    Demographics16Question = await Question.create({
      question: 'If yes to any of the above, did you ever obtain treatment?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'Yes/no',

      order: 15,

      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Demographics16Question)
    .set(yesnoQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Demographics16Question)
    .set(DemographicsSubSection);

  let Demographics17Question = await Question.findOne({ question: 'Have you ever been diagnosed with postpartum depression?' });
  if (!Demographics17Question) {
    Demographics17Question = await Question.create({
      question: 'Have you ever been diagnosed with postpartum depression?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'Yes/no',

      order: 16,

      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Demographics17Question)
    .set(yesnoQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Demographics17Question)
    .set(DemographicsSubSection);

  let Demographics18Question = await Question.findOne({ question: 'Did you ever obtain treatment for postpartum depression?' });
  if (!Demographics18Question) {
    Demographics18Question = await Question.create({
      question: 'Did you ever obtain treatment for postpartum depression?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'Yes/no',

      order: 17,

      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Demographics18Question)
    .set(yesnoQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Demographics18Question)
    .set(DemographicsSubSection);

  let Demographics19Question = await Question.findOne({ question: 'How many step-children or adoptive children do you have?' });
  if (!Demographics19Question) {
    Demographics19Question = await Question.create({
      question: 'How many step-children or adoptive children do you have?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: '0',

      order: 18,

      inputConfirmation: 'Numerical',
    }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Demographics19Question)
    .set(openQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Demographics19Question)
    .set(DemographicsSubSection);


  let Demographics20Question = await Question.findOne({ question: 'How many children aged 0 to 17 live with you?' });
  if (!Demographics20Question) {
    Demographics20Question = await Question.create({
      question: 'How many children aged 0 to 17 live with you?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: '0',

      order: 19,

      inputConfirmation: 'Numerical',
    }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Demographics20Question)
    .set(openQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Demographics20Question)
    .set(DemographicsSubSection);

  let Demographics21Question = await Question.findOne({ question: 'What is your employment status?  Please select all that apply.' });
  if (!Demographics21Question) {
    Demographics21Question = await Question.create({
      question: 'What is your employment status?  Please select all that apply.',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'None',

      order: 20,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let employmentQuestionItem1 = await QuestionItems.findOne({ name: 'Full-time employment' });
  if (!employmentQuestionItem1) {
    employmentQuestionItem1 = await QuestionItems.create({ name: 'Full-time employment', order: 0 }).save();
  }
  let employmentQuestionItem2 = await QuestionItems.findOne({ name: 'Part-time employment' });
  if (!employmentQuestionItem2) {
    employmentQuestionItem2 = await QuestionItems.create({ name: 'Part-time employment', order: 1 }).save();
  }
  let employmentQuestionItem3 = await QuestionItems.findOne({ name: 'Student' });
  if (!employmentQuestionItem3) {
    employmentQuestionItem3 = await QuestionItems.create({ name: 'Student', order: 2 }).save();
  }
  let employmentQuestionItem4 = await QuestionItems.findOne({ name: 'Unemployed and currently looking for work' });
  if (!employmentQuestionItem4) {
    employmentQuestionItem4 = await QuestionItems.create({ name: 'Unemployed and currently looking for work', order: 3 }).save();
  }
  let employmentQuestionItem5 = await QuestionItems.findOne({ name: 'Unemployed and not currently looking for work' });
  if (!employmentQuestionItem5) {
    employmentQuestionItem5 = await QuestionItems.create({ name: 'Unemployed and not currently looking for work', order: 4 }).save();
  }
  let employmentQuestionItem6 = await QuestionItems.findOne({ name: 'Retired' });
  if (!employmentQuestionItem6) {
    employmentQuestionItem6 = await QuestionItems.create({ name: 'Retired', order: 5 }).save();
  }
  let employmentQuestionItem7 = await QuestionItems.findOne({ name: 'Unable to work' });
  if (!employmentQuestionItem7) {
    employmentQuestionItem7 = await QuestionItems.create({ name: 'Unable to work', order: 6 }).save();
  }


  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Demographics21Question)
    .set(multiselectionQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Demographics21Question)
    .set(DemographicsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics21Question).add(employmentQuestionItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics21Question).add(employmentQuestionItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics21Question).add(employmentQuestionItem3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics21Question).add(employmentQuestionItem4);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics21Question).add(employmentQuestionItem5);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics21Question).add(employmentQuestionItem6);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics21Question).add(employmentQuestionItem7);

  let Demographics22Question = await Question.findOne({ question: 'For all members living in your household, what is the combined annual income (the total pre-tax income from all sources earned in the past year)? ' });
  if (!Demographics22Question) {
    Demographics22Question = await Question.create({
      question: 'For all members living in your household, what is the combined annual income (the total pre-tax income from all sources earned in the past year)? ',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'None',

      order: 10,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let incomeQuestionItem1 = await QuestionItems.findOne({ name: 'Under $25,000' });
  if (!incomeQuestionItem1) {
    incomeQuestionItem1 = await QuestionItems.create({ name: 'Under $25,000', order: 0 }).save();
  }
  let incomeQuestionItem2 = await QuestionItems.findOne({ name: '$25,000 to $49,999' });
  if (!incomeQuestionItem2) {
    incomeQuestionItem2 = await QuestionItems.create({ name: '$25,000 to $49,999', order: 1 }).save();
  }
  let incomeQuestionItem3 = await QuestionItems.findOne({ name: '$50,000 to $74,999' });
  if (!incomeQuestionItem3) {
    incomeQuestionItem3 = await QuestionItems.create({ name: '$50,000 to $74,999', order: 2 }).save();
  }
  let incomeQuestionItem4 = await QuestionItems.findOne({ name: '$75,000 to $99,999' });
  if (!incomeQuestionItem4) {
    incomeQuestionItem4 = await QuestionItems.create({ name: '$75,000 to $99,999', order: 3 }).save();
  }
  let incomeQuestionItem5 = await QuestionItems.findOne({ name: '$100,000 to $144,999' });
  if (!incomeQuestionItem5) {
    incomeQuestionItem5 = await QuestionItems.create({ name: '$100,000 to $144,999', order: 4 }).save();
  }
  let incomeQuestionItem6 = await QuestionItems.findOne({ name: '$150,000 to $199,999' });
  if (!incomeQuestionItem6) {
    incomeQuestionItem6 = await QuestionItems.create({ name: '$150,000 to $199,999', order: 5 }).save();
  }
  let incomeQuestionItem7 = await QuestionItems.findOne({ name: '$200,000 to $249,999' });
  if (!incomeQuestionItem7) {
    incomeQuestionItem7 = await QuestionItems.create({ name: '$200,000 to $249,999', order: 6 }).save();
  }
  let incomeQuestionItem8 = await QuestionItems.findOne({ name: '$250,000 to $299,999' });
  if (!incomeQuestionItem8) {
    incomeQuestionItem8 = await QuestionItems.create({ name: '$250,000 to $299,999', order: 7 }).save();
  }
  let incomeQuestionItem9 = await QuestionItems.findOne({ name: '$300,000 or more' });
  if (!incomeQuestionItem9) {
    incomeQuestionItem9 = await QuestionItems.create({ name: '$300,000 or more', order: 8 }).save();
  }
  let incomeQuestionItem10 = await QuestionItems.findOne({ name: 'Don\'t know' });
  if (!incomeQuestionItem10) {
    incomeQuestionItem10 = await QuestionItems.create({ name: 'Don\'t know', order: 9 }).save();
  }
  let incomeQuestionItem11 = await QuestionItems.findOne({ name: 'Prefer not to answer' });
  if (!incomeQuestionItem11) {
    incomeQuestionItem11 = await QuestionItems.create({ name: 'Prefer not to answer', order: 10 }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Demographics22Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Demographics22Question)
    .set(DemographicsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics22Question).add(incomeQuestionItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics22Question).add(incomeQuestionItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics22Question).add(incomeQuestionItem3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics22Question).add(incomeQuestionItem4);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics22Question).add(incomeQuestionItem5);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics22Question).add(incomeQuestionItem6);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics22Question).add(incomeQuestionItem7);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics22Question).add(incomeQuestionItem8);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics22Question).add(incomeQuestionItem9);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics22Question).add(incomeQuestionItem10);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics22Question).add(incomeQuestionItem11);

  let QOL1Question = await Question.findOne({ question: 'Your quality of life in general?' });
  if (!QOL1Question) {
    QOL1Question = await Question.create({
      question: 'Your quality of life in general?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'Excellent',

      order: 0,

      inputConfirmation: 'Alpha',
    }).save();
  }
  let QOL1Item1 = await QuestionItems.findOne({ name: 'Poor' });
  if (!QOL1Item1) {
    QOL1Item1 = await QuestionItems.create({ name: 'Poor', order: 0 }).save();
  }
  let QOL1Item2 = await QuestionItems.findOne({ name: 'Fair' });
  if (!QOL1Item2) {
    QOL1Item2 = await QuestionItems.create({ name: 'Fair', order: 1 }).save();
  }
  let QOL1Item3 = await QuestionItems.findOne({ name: 'Good' });
  if (!QOL1Item3) {
    QOL1Item3 = await QuestionItems.create({ name: 'Good', order: 2 }).save();
  }
  let QOL1Item4 = await QuestionItems.findOne({ name: 'Very Good' });
  if (!QOL1Item4) {
    QOL1Item4 = await QuestionItems.create({ name: 'Very Good', order: 3 }).save();
  }
  let QOL1Item5 = await QuestionItems.findOne({ name: 'Excellent' });
  if (!QOL1Item5) {
    QOL1Item5 = await QuestionItems.create({ name: 'Excellent', order: 4 }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(QOL1Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(QOL1Question)
    .set(QOLSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL1Question).add(QOL1Item1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL1Question).add(QOL1Item2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL1Question).add(QOL1Item3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL1Question).add(QOL1Item4);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL1Question).add(QOL1Item5);

  let QOL2Question = await Question.findOne({ question: 'Your health in general?' });
  if (!QOL2Question) {
    QOL2Question = await Question.create({
      question: 'Your health in general?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'Excellent',

      order: 1,

      inputConfirmation: 'Alpha',
    }).save();
  }
  let QOL2Item1 = await QuestionItems.findOne({ name: 'Poor' });
  if (!QOL2Item1) {
    QOL2Item1 = await QuestionItems.create({ name: 'Poor', order: 0 }).save();
  }
  let QOL2Item2 = await QuestionItems.findOne({ name: 'Fair' });
  if (!QOL2Item2) {
    QOL2Item2 = await QuestionItems.create({ name: 'Fair', order: 1 }).save();
  }
  let QOL2Item3 = await QuestionItems.findOne({ name: 'Good' });
  if (!QOL2Item3) {
    QOL2Item3 = await QuestionItems.create({ name: 'Good', order: 2 }).save();
  }
  let QOL2Item4 = await QuestionItems.findOne({ name: 'Very Good' });
  if (!QOL2Item4) {
    QOL2Item4 = await QuestionItems.create({ name: 'Very Good', order: 3 }).save();
  }
  let QOL2Item5 = await QuestionItems.findOne({ name: 'Excellent' });
  if (!QOL2Item5) {
    QOL2Item5 = await QuestionItems.create({ name: 'Excellent', order: 4 }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(QOL2Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(QOL2Question)
    .set(QOLSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL2Question).add(QOL2Item1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL2Question).add(QOL2Item2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL2Question).add(QOL2Item3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL2Question).add(QOL2Item4);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL2Question).add(QOL2Item5);


  let QOL3Question = await Question.findOne({ question: 'Compared to others like you, how would you rate your own health?' });
  if (!QOL3Question) {
    QOL3Question = await Question.create({
      question: 'Compared to others like you, how would you rate your own health?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'None',

      order: 2,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let QOL3Item1 = await QuestionItems.findOne({ name: 'Much worse than others like you' });
  if (!QOL3Item1) {
    QOL3Item1 = await QuestionItems.create({ name: 'Much worse than others like you', order: 0 }).save();
  }
  let QOL3Item2 = await QuestionItems.findOne({ name: 'Worse' });
  if (!QOL3Item2) {
    QOL3Item2 = await QuestionItems.create({ name: 'Worse', order: 1 }).save();
  }
  let QOL3Item3 = await QuestionItems.findOne({ name: 'Average' });
  if (!QOL3Item3) {
    QOL3Item3 = await QuestionItems.create({ name: 'Average', order: 2 }).save();
  }
  let QOL3Item4 = await QuestionItems.findOne({ name: 'Better' });
  if (!QOL3Item4) {
    QOL3Item4 = await QuestionItems.create({ name: 'Better', order: 3 }).save();
  }
  let QOL3Item5 = await QuestionItems.findOne({ name: 'Much better than others like you' });
  if (!QOL3Item5) {
    QOL3Item5 = await QuestionItems.create({ name: 'Much better than others like you', order: 4 }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(QOL3Question)
    .set(comboQuestionCategory);


  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(QOL3Question)
    .set(QOLSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL3Question).add(QOL3Item1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL3Question).add(QOL3Item2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL3Question).add(QOL3Item3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL3Question).add(QOL3Item4);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL3Question).add(QOL3Item5);



  let YourHealth1Question = await Question.findOne({ question: 'How tall are you to the nearest inch?' });
  if (!YourHealth1Question) {
    YourHealth1Question = await Question.create({
      question: 'How tall are you to the nearest inch?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: '0',

      order: 0,

      inputConfirmation: 'Numerical',
    }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth1Question)
    .set(openQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth1Question)
    .set(YourHealthSubSection);

  let YourHealth2Question = await Question.findOne({ question: 'How much do you weigh?' });
  if (!YourHealth2Question) {
    YourHealth2Question = await Question.create({
      question: 'How much do you weigh?',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: '0',

      order: 1,

      inputConfirmation: 'Numerical',
    }).save();
  }

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth2Question)
    .set(openQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth2Question)
    .set(YourHealthSubSection);

  let YourHealth3Question = await Question.findOne({ question: 'CARDIOVASCULAR DISORDERS' });
  if (!YourHealth3Question) {
    YourHealth3Question = await Question.create({
      question: 'CARDIOVASCULAR DISORDERS',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'None',

      order: 2,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let cardioDisItem1 = await QuestionItems.findOne({ name: 'Clotting disorder (embolism, atrial fibrillation, stroke)' });
  if (!cardioDisItem1) {
    cardioDisItem1 = await QuestionItems.create({ name: 'Clotting disorder (embolism, atrial fibrillation, stroke)', order: 0 }).save();
  }
  let cardioDisItem2 = await QuestionItems.findOne({ name: 'High blood pressure (hypertension)' });
  if (!cardioDisItem2) {
    cardioDisItem2 = await QuestionItems.create({ name: 'High blood pressure (hypertension)', order: 1 }).save();
  }
  let cardioDisItem3 = await QuestionItems.findOne({ name: 'Heart attack' });
  if (!cardioDisItem3) {
    cardioDisItem3 = await QuestionItems.create({ name: 'Heart attack', order: 2 }).save();
  }
  let cardioDisItem4 = await QuestionItems.findOne({ name: 'High Cholesterol' });
  if (!cardioDisItem4) {
    cardioDisItem4 = await QuestionItems.create({ name: 'High Cholesterol', order: 3 }).save();
  }
  let cardioDisItem5 = await QuestionItems.findOne({ name: 'Any other cardiovascular disease' });
  if (!cardioDisItem5) {
    cardioDisItem5 = await QuestionItems.create({ name: 'Any other cardiovascular disease', order: 4 }).save();
  }


  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth3Question)
    .set(multiselectionQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth3Question)
    .set(YourHealthSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth3Question).add(cardioDisItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth3Question).add(cardioDisItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth3Question).add(cardioDisItem3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth3Question).add(cardioDisItem4);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth3Question).add(cardioDisItem5);

  let YourHealth4Question = await Question.findOne({ question: 'JOINT OR BONE DISORDERS' });
  if (!YourHealth4Question) {
    YourHealth4Question = await Question.create({
      question: 'JOINT OR BONE DISORDERS',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'None',

      order: 3,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let jointBoneDisItem1 = await QuestionItems.findOne({ name: 'Osteoarthritis' });
  if (!jointBoneDisItem1) {
    jointBoneDisItem1 = await QuestionItems.create({ name: 'Osteoarthritis', order: 0 }).save();
  }
  let jointBoneDisItem2 = await QuestionItems.findOne({ name: 'Rheumatoid arthritis' });
  if (!jointBoneDisItem2) {
    jointBoneDisItem2 = await QuestionItems.create({ name: 'Rheumatoid arthritis', order: 1 }).save();
  }
  let jointBoneDisItem3 = await QuestionItems.findOne({ name: 'Osteoporosis' });
  if (!jointBoneDisItem3) {
    jointBoneDisItem3 = await QuestionItems.create({ name: 'Osteoporosis', order: 2 }).save();
  }


  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth4Question)
    .set(multiselectionQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth4Question)
    .set(YourHealthSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth4Question).add(jointBoneDisItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth4Question).add(jointBoneDisItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth4Question).add(jointBoneDisItem3);


  let YourHealth5Question = await Question.findOne({ question: 'RESPIRATORY DISORDERS' });
  if (!YourHealth5Question) {
    YourHealth5Question = await Question.create({
      question: 'RESPIRATORY DISORDERS',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'None',

      order: 4,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let respDisItem1 = await QuestionItems.findOne({ name: 'Asthma, chronic bronchitis or emphysem' });
  if (!respDisItem1) {
    respDisItem1 = await QuestionItems.create({ name: 'Asthma, chronic bronchitis or emphysem', order: 0 }).save();
  }
  let respDisItem2 = await QuestionItems.findOne({ name: 'Chronic obstructive pulmonary disease (COPD)' });
  if (!respDisItem2) {
    respDisItem2 = await QuestionItems.create({ name: 'Chronic obstructive pulmonary disease (COPD)', order: 1 }).save();
  }
  let respDisItem3 = await QuestionItems.findOne({ name: 'Seasonal allergies' });
  if (!respDisItem3) {
    respDisItem3 = await QuestionItems.create({ name: 'Seasonal allergies', order: 2 }).save();
  }
  let respDisItem4 = await QuestionItems.findOne({ name: 'Any other respiratory disease' });
  if (!respDisItem4) {
    respDisItem4 = await QuestionItems.create({ name: 'Any other respiratory disease', order: 3 }).save();
  }


  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth5Question)
    .set(multiselectionQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth5Question)
    .set(YourHealthSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth5Question).add(respDisItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth5Question).add(respDisItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth5Question).add(respDisItem3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth5Question).add(respDisItem4);


  let YourHealth6Question = await Question.findOne({ question: 'CANCERS' });
  if (!YourHealth6Question) {
    YourHealth6Question = await Question.create({
      question: 'CANCERS',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'None',

      order: 5,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let cancersItem1 = await QuestionItems.findOne({ name: 'Skin cancer' });
  if (!cancersItem1) {
    cancersItem1 = await QuestionItems.create({ name: 'Skin cancer', order: 0 }).save();
  }
  let cancersItem2 = await QuestionItems.findOne({ name: 'Prostate cancer' });
  if (!cancersItem2) {
    cancersItem2 = await QuestionItems.create({ name: 'Prostate cancer', order: 1 }).save();
  }
  let cancersItem3 = await QuestionItems.findOne({ name: 'Colorectal cancer' });
  if (!cancersItem3) {
    cancersItem3 = await QuestionItems.create({ name: 'Colorectal cancer', order: 2 }).save();
  }
  let cancersItem4 = await QuestionItems.findOne({ name: 'Breast cancer' });
  if (!cancersItem4) {
    cancersItem4 = await QuestionItems.create({ name: 'Breast cancer', order: 3 }).save();
  }
  let cancersItem5 = await QuestionItems.findOne({ name: 'Thyroid cancer' });
  if (!cancersItem5) {
    cancersItem5 = await QuestionItems.create({ name: 'Thyroid cancer', order: 4 }).save();
  }
  let cancersItem6 = await QuestionItems.findOne({ name: 'Lung cancer' });
  if (!cancersItem6) {
    cancersItem6 = await QuestionItems.create({ name: 'Lung cancer', order: 5 }).save();
  }
  let cancersItem7 = await QuestionItems.findOne({ name: 'Uterine (endometrial) cancer' });
  if (!cancersItem7) {
    cancersItem7 = await QuestionItems.create({ name: 'Uterine (endometrial) cancer', order: 6 }).save();
  }
  let cancersItem8 = await QuestionItems.findOne({ name: 'Stomach cancer' });
  if (!cancersItem8) {
    cancersItem8 = await QuestionItems.create({ name: 'Stomach cancer', order: 7 }).save();
  }
  let cancersItem9 = await QuestionItems.findOne({ name: 'Kidney (renal) cancer' });
  if (!cancersItem9) {
    cancersItem9 = await QuestionItems.create({ name: 'Kidney (renal) cancer', order: 8 }).save();
  }
  let cancersItem10 = await QuestionItems.findOne({ name: 'Leukemia or Lymphoma' });
  if (!cancersItem10) {
    cancersItem10 = await QuestionItems.create({ name: 'Leukemia or Lymphoma', order: 9 }).save();
  }
  let cancersItem11 = await QuestionItems.findOne({ name: 'Other' });
  if (!cancersItem11) {
    cancersItem11 = await QuestionItems.create({ name: 'Other', order: 10 }).save();
  }


  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth6Question)
    .set(multiselectionQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth6Question)
    .set(YourHealthSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth6Question).add(cancersItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth6Question).add(cancersItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth6Question).add(cancersItem3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth6Question).add(cancersItem4);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth6Question).add(cancersItem5);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth6Question).add(cancersItem6);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth6Question).add(cancersItem7);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth6Question).add(cancersItem8);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth6Question).add(cancersItem9);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth6Question).add(cancersItem10);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth6Question).add(cancersItem11);


  let YourHealth7Question = await Question.findOne({ question: 'OTHER DISORDERS' });
  if (!YourHealth7Question) {
    YourHealth7Question = await Question.create({
      question: 'OTHER DISORDERS',

      stack: 0,

      stackPhrase: 'Whatever phrase',

      placeHolder: 'None',

      order: 6,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let otherdisItem1 = await QuestionItems.findOne({ name: 'Autoimmune disorder (Lupus, Multiple sclerosis, etc.)' });
  if (!otherdisItem1) {
    otherdisItem1 = await QuestionItems.create({ name: 'Autoimmune disorder (Lupus, Multiple sclerosis, etc.)', order: 0 }).save();
  }
  let otherdisItem2 = await QuestionItems.findOne({ name: 'Inflammatory skin disorders (Eczema, atopic dermatitis, psoriasis)' });
  if (!otherdisItem2) {
    otherdisItem2 = await QuestionItems.create({ name: 'Inflammatory skin disorders (Eczema, atopic dermatitis, psoriasis)', order: 1 }).save();
  }
  let otherdisItem3 = await QuestionItems.findOne({ name: 'Diabetes, insulin dependent' });
  if (!otherdisItem3) {
    otherdisItem3 = await QuestionItems.create({ name: 'Diabetes, insulin dependent', order: 2 }).save();
  }
  let otherdisItem4 = await QuestionItems.findOne({ name: 'Diabetes, non-insulin dependent' });
  if (!otherdisItem4) {
    otherdisItem4 = await QuestionItems.create({ name: 'Diabetes, non-insulin dependent', order: 3 }).save();
  }
  let otherdisItem5 = await QuestionItems.findOne({ name: 'Migraine' });
  if (!otherdisItem5) {
    otherdisItem5 = await QuestionItems.create({ name: 'Migraine', order: 4 }).save();
  }
  let otherdisItem6 = await QuestionItems.findOne({ name: 'Kidney disease' });
  if (!otherdisItem6) {
    otherdisItem6 = await QuestionItems.create({ name: 'Kidney disease', order: 5 }).save();
  }
  let otherdisItem7 = await QuestionItems.findOne({ name: 'Liver disease' });
  if (!otherdisItem7) {
    otherdisItem7 = await QuestionItems.create({ name: 'Liver disease', order: 6 }).save();
  }
  let otherdisItem8 = await QuestionItems.findOne({ name: 'Anemia or other blood disease' });
  if (!otherdisItem8) {
    otherdisItem8 = await QuestionItems.create({ name: 'Anemia or other blood disease', order: 7 }).save();
  }
  let otherdisItem9 = await QuestionItems.findOne({ name: 'An ulcer in your stomach or intestine' });
  if (!otherdisItem9) {
    otherdisItem9 = await QuestionItems.create({ name: 'An ulcer in your stomach or intestine', order: 8 }).save();
  }
  let otherdisItem10 = await QuestionItems.findOne({ name: 'Acid reflux, GERD' });
  if (!otherdisItem10) {
    otherdisItem10 = await QuestionItems.create({ name: 'Acid reflux, GERD', order: 9 }).save();
  }
  let otherdisItem11 = await QuestionItems.findOne({ name: 'Thyroid disorders (eg hypothyroidism, hyperthyroidism)' });
  if (!otherdisItem11) {
    otherdisItem11 = await QuestionItems.create({ name: 'Thyroid disorders (eg hypothyroidism, hyperthyroidism)', order: 10 }).save();
  }
  let otherdisItem12 = await QuestionItems.findOne({ name: 'Chronic Pain' });
  if (!otherdisItem12) {
    otherdisItem12 = await QuestionItems.create({ name: 'Chronic Pain', order: 11 }).save();
  }
  let otherdisItem13 = await QuestionItems.findOne({ name: 'Sleep disorder (eg Insomnia)' });
  if (!otherdisItem13) {
    otherdisItem13 = await QuestionItems.create({ name: 'Sleep disorder (eg Insomnia)', order: 12 }).save();
  }
  let otherdisItem14 = await QuestionItems.findOne({ name: 'None of these apply' });
  if (!otherdisItem14) {
    otherdisItem14 = await QuestionItems.create({ name: 'None of these apply', order: 13 }).save();
  }


  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth7Question)
    .set(multiselectionQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth7Question)
    .set(YourHealthSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth7Question).add(otherdisItem1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth7Question).add(otherdisItem2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth7Question).add(otherdisItem3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth7Question).add(otherdisItem4);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth7Question).add(otherdisItem5);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth7Question).add(otherdisItem6);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth7Question).add(otherdisItem7);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth7Question).add(otherdisItem8);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth7Question).add(otherdisItem9);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth7Question).add(otherdisItem10);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth7Question).add(otherdisItem11);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth7Question).add(otherdisItem12);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth7Question).add(otherdisItem13);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth7Question).add(otherdisItem14);

  let YourHealth8Question = await Question.findOne({ question: 'Using a 0-10 scale where 0 means “no energy” and 10 means “full of energy,” what number best describes how much energy you usually have during the day? (You can use any number between 0 and 10 to answer.)'});
  if (!YourHealth8Question){
    YourHealth8Question = await Question.create({
      question: 'Using a 0-10 scale where 0 means “no energy” and 10 means “full of energy,” what number best describes how much energy you usually have during the day? (You can use any number between 0 and 10 to answer.)',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 7,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let YourHealth8QuestionItem1 = await QuestionItems.findOne({ name: '0'});
  if (!YourHealth8QuestionItem1) {
    YourHealth8QuestionItem1 = await QuestionItems.create({ name: '0', order:0}).save();
  }
  let YourHealth8QuestionItem2 = await QuestionItems.findOne({ name: '1'});
  if (!YourHealth8QuestionItem2) {
    YourHealth8QuestionItem2 = await QuestionItems.create({ name: '1', order:1}).save();
  }
  let YourHealth8QuestionItem3 = await QuestionItems.findOne({ name: '2'});
  if (!YourHealth8QuestionItem3) {
    YourHealth8QuestionItem3 = await QuestionItems.create({ name: '2', order:2}).save();
  }
  let YourHealth8QuestionItem4 = await QuestionItems.findOne({ name: '3'});
  if (!YourHealth8QuestionItem4) {
    YourHealth8QuestionItem4 = await QuestionItems.create({ name: '3', order:3}).save();
  }
  let YourHealth8QuestionItem5 = await QuestionItems.findOne({ name: '4'});
  if (!YourHealth8QuestionItem5) {
    YourHealth8QuestionItem5 = await QuestionItems.create({ name: '4', order:4}).save();
  }
  let YourHealth8QuestionItem6 = await QuestionItems.findOne({ name: '5'});
  if (!YourHealth8QuestionItem6) {
    YourHealth8QuestionItem6 = await QuestionItems.create({ name: '5', order:5}).save();
  }
  let YourHealth8QuestionItem7 = await QuestionItems.findOne({ name: '6'});
  if (!YourHealth8QuestionItem7) {
    YourHealth8QuestionItem7 = await QuestionItems.create({ name: '6', order:6}).save();
  }
  let YourHealth8QuestionItem8 = await QuestionItems.findOne({ name: '7'});
  if (!YourHealth8QuestionItem8) {
    YourHealth8QuestionItem8 = await QuestionItems.create({ name: '7', order:7}).save();
  }
  let YourHealth8QuestionItem9 = await QuestionItems.findOne({ name: '8'});
  if (!YourHealth8QuestionItem9) {
    YourHealth8QuestionItem9 = await QuestionItems.create({ name: '8', order:8}).save();
  }
  let YourHealth8QuestionItem10 = await QuestionItems.findOne({ name: '9'});
  if (!YourHealth8QuestionItem10) {
    YourHealth8QuestionItem10 = await QuestionItems.create({ name: '9', order:9}).save();
  }
  let YourHealth8QuestionItem11 = await QuestionItems.findOne({ name: '10'});
  if (!YourHealth8QuestionItem11) {
    YourHealth8QuestionItem11 = await QuestionItems.create({ name: '10', order:10}).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth8Question)
    .set(ladderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth8Question)
    .set(YourHealthSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth8Question).add(YourHealth8QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth8Question).add(YourHealth8QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth8Question).add(YourHealth8QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth8Question).add(YourHealth8QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth8Question).add(YourHealth8QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth8Question).add(YourHealth8QuestionItem6);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth8Question).add(YourHealth8QuestionItem7);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth8Question).add(YourHealth8QuestionItem8);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth8Question).add(YourHealth8QuestionItem9);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth8Question).add(YourHealth8QuestionItem10);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth8Question).add(YourHealth8QuestionItem11);

  let YourHealth9Question = await Question.findOne({ question: 'Your home management (e.g., cleaning, repairs, cooking, shopping)?  '});
  if (!YourHealth9Question){
    YourHealth9Question = await Question.create({
      question: 'Your home management (e.g., cleaning, repairs, cooking, shopping)?  ',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 8,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let YourHealth9QuestionItem1 = await QuestionItems.findOne({ name: '0'});
  if (!YourHealth9QuestionItem1) {
    YourHealth9QuestionItem1 = await QuestionItems.create({ name: '0', order:0}).save();
  }
  let YourHealth9QuestionItem2 = await QuestionItems.findOne({ name: '1'});
  if (!YourHealth9QuestionItem2) {
    YourHealth9QuestionItem2 = await QuestionItems.create({ name: '1', order:1}).save();
  }
  let YourHealth9QuestionItem3 = await QuestionItems.findOne({ name: '2'});
  if (!YourHealth9QuestionItem3) {
    YourHealth9QuestionItem3 = await QuestionItems.create({ name: '2', order:2}).save();
  }
  let YourHealth9QuestionItem4 = await QuestionItems.findOne({ name: '3'});
  if (!YourHealth9QuestionItem4) {
    YourHealth9QuestionItem4 = await QuestionItems.create({ name: '3', order:3}).save();
  }
  let YourHealth9QuestionItem5 = await QuestionItems.findOne({ name: '4'});
  if (!YourHealth9QuestionItem5) {
    YourHealth9QuestionItem5 = await QuestionItems.create({ name: '4', order:4}).save();
  }
  let YourHealth9QuestionItem6 = await QuestionItems.findOne({ name: '5'});
  if (!YourHealth9QuestionItem6) {
    YourHealth9QuestionItem6 = await QuestionItems.create({ name: '5', order:5}).save();
  }
  let YourHealth9QuestionItem7 = await QuestionItems.findOne({ name: '6'});
  if (!YourHealth9QuestionItem7) {
    YourHealth9QuestionItem7 = await QuestionItems.create({ name: '6', order:6}).save();
  }
  let YourHealth9QuestionItem8 = await QuestionItems.findOne({ name: '7'});
  if (!YourHealth9QuestionItem8) {
    YourHealth9QuestionItem8 = await QuestionItems.create({ name: '7', order:7}).save();
  }
  let YourHealth9QuestionItem9 = await QuestionItems.findOne({ name: '8'});
  if (!YourHealth9QuestionItem9) {
    YourHealth9QuestionItem9 = await QuestionItems.create({ name: '8', order:8}).save();
  }
  let YourHealth9QuestionItem10 = await QuestionItems.findOne({ name: '9'});
  if (!YourHealth9QuestionItem10) {
    YourHealth9QuestionItem10 = await QuestionItems.create({ name: '9', order:9}).save();
  }
  let YourHealth9QuestionItem11 = await QuestionItems.findOne({ name: '10'});
  if (!YourHealth9QuestionItem11) {
    YourHealth9QuestionItem11 = await QuestionItems.create({ name: '10', order:10}).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth9Question)
    .set(ladderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth9Question)
    .set(YourHealthSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth9Question).add(YourHealth9QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth9Question).add(YourHealth9QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth9Question).add(YourHealth9QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth9Question).add(YourHealth9QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth9Question).add(YourHealth9QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth9Question).add(YourHealth9QuestionItem6);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth9Question).add(YourHealth9QuestionItem7);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth9Question).add(YourHealth9QuestionItem8);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth9Question).add(YourHealth9QuestionItem9);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth9Question).add(YourHealth9QuestionItem10);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth9Question).add(YourHealth9QuestionItem11);

  let YourHealth10Question = await Question.findOne({ question: 'Your ability to work?'});
  if (!YourHealth10Question){
    YourHealth10Question = await Question.create({
      question: 'Your ability to work?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 9,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let YourHealth10QuestionItem1 = await QuestionItems.findOne({ name: '0'});
  if (!YourHealth10QuestionItem1) {
    YourHealth10QuestionItem1 = await QuestionItems.create({ name: '0', order:0}).save();
  }
  let YourHealth10QuestionItem2 = await QuestionItems.findOne({ name: '1'});
  if (!YourHealth10QuestionItem2) {
    YourHealth10QuestionItem2 = await QuestionItems.create({ name: '1', order:1}).save();
  }
  let YourHealth10QuestionItem3 = await QuestionItems.findOne({ name: '2'});
  if (!YourHealth10QuestionItem3) {
    YourHealth10QuestionItem3 = await QuestionItems.create({ name: '2', order:2}).save();
  }
  let YourHealth10QuestionItem4 = await QuestionItems.findOne({ name: '3'});
  if (!YourHealth10QuestionItem4) {
    YourHealth10QuestionItem4 = await QuestionItems.create({ name: '3', order:3}).save();
  }
  let YourHealth10QuestionItem5 = await QuestionItems.findOne({ name: '4'});
  if (!YourHealth10QuestionItem5) {
    YourHealth10QuestionItem5 = await QuestionItems.create({ name: '4', order:4}).save();
  }
  let YourHealth10QuestionItem6 = await QuestionItems.findOne({ name: '5'});
  if (!YourHealth10QuestionItem6) {
    YourHealth10QuestionItem6 = await QuestionItems.create({ name: '5', order:5}).save();
  }
  let YourHealth10QuestionItem7 = await QuestionItems.findOne({ name: '6'});
  if (!YourHealth10QuestionItem7) {
    YourHealth10QuestionItem7 = await QuestionItems.create({ name: '6', order:6}).save();
  }
  let YourHealth10QuestionItem8 = await QuestionItems.findOne({ name: '7'});
  if (!YourHealth10QuestionItem8) {
    YourHealth10QuestionItem8 = await QuestionItems.create({ name: '7', order:7}).save();
  }
  let YourHealth10QuestionItem9 = await QuestionItems.findOne({ name: '8'});
  if (!YourHealth10QuestionItem9) {
    YourHealth10QuestionItem9 = await QuestionItems.create({ name: '8', order:8}).save();
  }
  let YourHealth10QuestionItem10 = await QuestionItems.findOne({ name: '9'});
  if (!YourHealth10QuestionItem10) {
    YourHealth10QuestionItem10 = await QuestionItems.create({ name: '9', order:9}).save();
  }
  let YourHealth10QuestionItem11 = await QuestionItems.findOne({ name: '10'});
  if (!YourHealth10QuestionItem11) {
    YourHealth10QuestionItem11 = await QuestionItems.create({ name: '10', order:10}).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth10Question)
    .set(ladderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth10Question)
    .set(YourHealthSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth10Question).add(YourHealth10QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth10Question).add(YourHealth10QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth10Question).add(YourHealth10QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth10Question).add(YourHealth10QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth10Question).add(YourHealth10QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth10Question).add(YourHealth10QuestionItem6);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth10Question).add(YourHealth10QuestionItem7);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth10Question).add(YourHealth10QuestionItem8);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth10Question).add(YourHealth10QuestionItem9);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth10Question).add(YourHealth10QuestionItem10);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth10Question).add(YourHealth10QuestionItem11);

  let YourHealth11Question = await Question.findOne({ question: 'The speed or quality of your work?'});
  if (!YourHealth11Question){
    YourHealth11Question = await Question.create({
      question: 'The speed or quality of your work?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 10,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let YourHealth11QuestionItem1 = await QuestionItems.findOne({ name: '0'});
  if (!YourHealth11QuestionItem1) {
    YourHealth11QuestionItem1 = await QuestionItems.create({ name: '0', order:0}).save();
  }
  let YourHealth11QuestionItem2 = await QuestionItems.findOne({ name: '1'});
  if (!YourHealth11QuestionItem2) {
    YourHealth11QuestionItem2 = await QuestionItems.create({ name: '1', order:1}).save();
  }
  let YourHealth11QuestionItem3 = await QuestionItems.findOne({ name: '2'});
  if (!YourHealth11QuestionItem3) {
    YourHealth11QuestionItem3 = await QuestionItems.create({ name: '2', order:2}).save();
  }
  let YourHealth11QuestionItem4 = await QuestionItems.findOne({ name: '3'});
  if (!YourHealth11QuestionItem4) {
    YourHealth11QuestionItem4 = await QuestionItems.create({ name: '3', order:3}).save();
  }
  let YourHealth11QuestionItem5 = await QuestionItems.findOne({ name: '4'});
  if (!YourHealth11QuestionItem5) {
    YourHealth11QuestionItem5 = await QuestionItems.create({ name: '4', order:4}).save();
  }
  let YourHealth11QuestionItem6 = await QuestionItems.findOne({ name: '5'});
  if (!YourHealth11QuestionItem6) {
    YourHealth11QuestionItem6 = await QuestionItems.create({ name: '5', order:5}).save();
  }
  let YourHealth11QuestionItem7 = await QuestionItems.findOne({ name: '6'});
  if (!YourHealth11QuestionItem7) {
    YourHealth11QuestionItem7 = await QuestionItems.create({ name: '6', order:6}).save();
  }
  let YourHealth11QuestionItem8 = await QuestionItems.findOne({ name: '7'});
  if (!YourHealth11QuestionItem8) {
    YourHealth11QuestionItem8 = await QuestionItems.create({ name: '7', order:7}).save();
  }
  let YourHealth11QuestionItem9 = await QuestionItems.findOne({ name: '8'});
  if (!YourHealth11QuestionItem9) {
    YourHealth11QuestionItem9 = await QuestionItems.create({ name: '8', order:8}).save();
  }
  let YourHealth11QuestionItem10 = await QuestionItems.findOne({ name: '9'});
  if (!YourHealth11QuestionItem10) {
    YourHealth11QuestionItem10 = await QuestionItems.create({ name: '9', order:9}).save();
  }
  let YourHealth11QuestionItem11 = await QuestionItems.findOne({ name: '10'});
  if (!YourHealth11QuestionItem11) {
    YourHealth11QuestionItem11 = await QuestionItems.create({ name: '10', order:10}).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth11Question)
    .set(ladderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth11Question)
    .set(YourHealthSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth11Question).add(YourHealth11QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth11Question).add(YourHealth11QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth11Question).add(YourHealth11QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth11Question).add(YourHealth11QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth11Question).add(YourHealth11QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth11Question).add(YourHealth11QuestionItem6);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth11Question).add(YourHealth11QuestionItem7);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth11Question).add(YourHealth11QuestionItem8);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth11Question).add(YourHealth11QuestionItem9);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth11Question).add(YourHealth11QuestionItem10);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth11Question).add(YourHealth11QuestionItem11);

  let YourHealth12Question = await Question.findOne({ question: 'Your social life?'});
  if (!YourHealth12Question){
    YourHealth12Question = await Question.create({
      question: 'Your social life?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 11,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let YourHealth12QuestionItem1 = await QuestionItems.findOne({ name: '0'});
  if (!YourHealth12QuestionItem1) {
    YourHealth12QuestionItem1 = await QuestionItems.create({ name: '0', order:0}).save();
  }
  let YourHealth12QuestionItem2 = await QuestionItems.findOne({ name: '1'});
  if (!YourHealth12QuestionItem2) {
    YourHealth12QuestionItem2 = await QuestionItems.create({ name: '1', order:1}).save();
  }
  let YourHealth12QuestionItem3 = await QuestionItems.findOne({ name: '2'});
  if (!YourHealth12QuestionItem3) {
    YourHealth12QuestionItem3 = await QuestionItems.create({ name: '2', order:2}).save();
  }
  let YourHealth12QuestionItem4 = await QuestionItems.findOne({ name: '3'});
  if (!YourHealth12QuestionItem4) {
    YourHealth12QuestionItem4 = await QuestionItems.create({ name: '3', order:3}).save();
  }
  let YourHealth12QuestionItem5 = await QuestionItems.findOne({ name: '4'});
  if (!YourHealth12QuestionItem5) {
    YourHealth12QuestionItem5 = await QuestionItems.create({ name: '4', order:4}).save();
  }
  let YourHealth12QuestionItem6 = await QuestionItems.findOne({ name: '5'});
  if (!YourHealth12QuestionItem6) {
    YourHealth12QuestionItem6 = await QuestionItems.create({ name: '5', order:5}).save();
  }
  let YourHealth12QuestionItem7 = await QuestionItems.findOne({ name: '6'});
  if (!YourHealth12QuestionItem7) {
    YourHealth12QuestionItem7 = await QuestionItems.create({ name: '6', order:6}).save();
  }
  let YourHealth12QuestionItem8 = await QuestionItems.findOne({ name: '7'});
  if (!YourHealth12QuestionItem8) {
    YourHealth12QuestionItem8 = await QuestionItems.create({ name: '7', order:7}).save();
  }
  let YourHealth12QuestionItem9 = await QuestionItems.findOne({ name: '8'});
  if (!YourHealth12QuestionItem9) {
    YourHealth12QuestionItem9 = await QuestionItems.create({ name: '8', order:8}).save();
  }
  let YourHealth12QuestionItem10 = await QuestionItems.findOne({ name: '9'});
  if (!YourHealth12QuestionItem10) {
    YourHealth12QuestionItem10 = await QuestionItems.create({ name: '9', order:9}).save();
  }
  let YourHealth12QuestionItem11 = await QuestionItems.findOne({ name: '10'});
  if (!YourHealth12QuestionItem11) {
    YourHealth12QuestionItem11 = await QuestionItems.create({ name: '10', order:10}).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth12Question)
    .set(ladderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth12Question)
    .set(YourHealthSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth12Question).add(YourHealth12QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth12Question).add(YourHealth12QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth12Question).add(YourHealth12QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth12Question).add(YourHealth12QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth12Question).add(YourHealth12QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth12Question).add(YourHealth12QuestionItem6);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth12Question).add(YourHealth12QuestionItem7);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth12Question).add(YourHealth12QuestionItem8);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth12Question).add(YourHealth12QuestionItem9);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth12Question).add(YourHealth12QuestionItem10);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth12Question).add(YourHealth12QuestionItem11);

  let YourHealth13Question = await Question.findOne({ question: 'Your close personal relationships?'});
  if (!YourHealth13Question){
    YourHealth13Question = await Question.create({
      question: 'Your close personal relationships?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 12,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let YourHealth13QuestionItem1 = await QuestionItems.findOne({ name: '0'});
  if (!YourHealth13QuestionItem1) {
    YourHealth13QuestionItem1 = await QuestionItems.create({ name: '0', order:0}).save();
  }
  let YourHealth13QuestionItem2 = await QuestionItems.findOne({ name: '1'});
  if (!YourHealth13QuestionItem2) {
    YourHealth13QuestionItem2 = await QuestionItems.create({ name: '1', order:1}).save();
  }
  let YourHealth13QuestionItem3 = await QuestionItems.findOne({ name: '2'});
  if (!YourHealth13QuestionItem3) {
    YourHealth13QuestionItem3 = await QuestionItems.create({ name: '2', order:2}).save();
  }
  let YourHealth13QuestionItem4 = await QuestionItems.findOne({ name: '3'});
  if (!YourHealth13QuestionItem4) {
    YourHealth13QuestionItem4 = await QuestionItems.create({ name: '3', order:3}).save();
  }
  let YourHealth13QuestionItem5 = await QuestionItems.findOne({ name: '4'});
  if (!YourHealth13QuestionItem5) {
    YourHealth13QuestionItem5 = await QuestionItems.create({ name: '4', order:4}).save();
  }
  let YourHealth13QuestionItem6 = await QuestionItems.findOne({ name: '5'});
  if (!YourHealth13QuestionItem6) {
    YourHealth13QuestionItem6 = await QuestionItems.create({ name: '5', order:5}).save();
  }
  let YourHealth13QuestionItem7 = await QuestionItems.findOne({ name: '6'});
  if (!YourHealth13QuestionItem7) {
    YourHealth13QuestionItem7 = await QuestionItems.create({ name: '6', order:6}).save();
  }
  let YourHealth13QuestionItem8 = await QuestionItems.findOne({ name: '7'});
  if (!YourHealth13QuestionItem8) {
    YourHealth13QuestionItem8 = await QuestionItems.create({ name: '7', order:7}).save();
  }
  let YourHealth13QuestionItem9 = await QuestionItems.findOne({ name: '8'});
  if (!YourHealth13QuestionItem9) {
    YourHealth13QuestionItem9 = await QuestionItems.create({ name: '8', order:8}).save();
  }
  let YourHealth13QuestionItem10 = await QuestionItems.findOne({ name: '9'});
  if (!YourHealth13QuestionItem10) {
    YourHealth13QuestionItem10 = await QuestionItems.create({ name: '9', order:9}).save();
  }
  let YourHealth13QuestionItem11 = await QuestionItems.findOne({ name: '10'});
  if (!YourHealth13QuestionItem11) {
    YourHealth13QuestionItem11 = await QuestionItems.create({ name: '10', order:10}).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth13Question)
    .set(ladderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth13Question)
    .set(YourHealthSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth13Question).add(YourHealth13QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth13Question).add(YourHealth13QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth13Question).add(YourHealth13QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth13Question).add(YourHealth13QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth13Question).add(YourHealth13QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth13Question).add(YourHealth13QuestionItem6);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth13Question).add(YourHealth13QuestionItem7);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth13Question).add(YourHealth13QuestionItem8);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth13Question).add(YourHealth13QuestionItem9);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth13Question).add(YourHealth13QuestionItem10);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth13Question).add(YourHealth13QuestionItem11);

  let YourHealth14Question = await Question.findOne({ question: 'About how many days out of 30 in the past month were you totally unable to work or carry out your other usual activities because of problems with your health?'});
  if (!YourHealth14Question){
    YourHealth14Question = await Question.create({
      question: 'About how many days out of 30 in the past month were you totally unable to work or carry out your other usual activities because of problems with your health?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 13,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth14Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth14Question)
    .set(YourHealthSubSection);


  let YourHealth15Question = await Question.findOne({ question: 'About how many days out of 30 in the past month were you able to work but you had to cut back on how long you worked, your amount of work, or how carefully you worked because of problems with your health?'});
  if (!YourHealth15Question){
    YourHealth15Question = await Question.create({
      question: 'About how many days out of 30 in the past month were you able to work but you had to cut back on how long you worked, your amount of work, or how carefully you worked because of problems with your health?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 14,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth15Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth15Question)
    .set(YourHealthSubSection);


};
