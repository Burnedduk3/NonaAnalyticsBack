import { getDBConfig } from '@config/database';
import { Category } from '@entities/Category.entity';
import { Question } from '@entities/Question.entity';
import { QuestionItems } from '@entities/QuestionItems.entity';
import { Section } from '@entities/Section.entity';
import { SubSection } from '@entities/SubSection.entity';
import { getConnection } from 'typeorm';

export const connectSqlDB = async () => await getDBConfig();

export const boilerplateData = async () => {
  let comboQuestionCategory = await Category.findOne({ name: 'Combo' });
  if (!comboQuestionCategory) {
    comboQuestionCategory = await Category.create({ name: 'Combo' }).save();
  }

  let multiLadderQuestionCategory = await Category.findOne({ name: 'MultiLadder' });
  if (!multiLadderQuestionCategory) {
    multiLadderQuestionCategory = await Category.create({ name: 'MultiLadder' }).save();
  }
  let openQuestionCategory = await Category.findOne({ name: 'Open' });
  if (!openQuestionCategory) {
    openQuestionCategory = await Category.create({ name: 'Open' }).save();
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
  await getConnection().createQueryBuilder().relation(SubSection, 'section').of(QOLSubSection).set(HealthSection);

  let YourHealthSubSection = await SubSection.findOne({ name: 'Your Health' });
  if (!YourHealthSubSection) {
    YourHealthSubSection = await SubSection.create({ name: 'Your Health', order: 2 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(YourHealthSubSection)
    .set(HealthSection);

  let ScreeningsSubSection = await SubSection.findOne({ name: 'Screenings Vaccinations and Beliefs' });
  if (!ScreeningsSubSection) {
    ScreeningsSubSection = await SubSection.create({ name: 'Screenings Vaccinations and Beliefs', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(ScreeningsSubSection)
    .set(HealthSection);

  let HealthcareSubSection = await SubSection.findOne({ name: 'Health care info and health care access' });
  if (!HealthcareSubSection) {
    HealthcareSubSection = await SubSection.create({
      name: 'Health care info and health care access',
      order: 4,
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(HealthcareSubSection)
    .set(HealthSection);

  let UtilizationSubSection = await SubSection.findOne({ name: 'Health care utilization' });
  if (!UtilizationSubSection) {
    UtilizationSubSection = await SubSection.create({ name: 'Health care utilization', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(UtilizationSubSection)
    .set(HealthSection);

  let MoodSection = await Section.findOne({ name: 'Mood' });
  if (!MoodSection) {
    MoodSection = await Section.create({ name: 'Mood', order: 2 }).save();
  }

  let OralHealthSubSection = await SubSection.findOne({ name: 'Oral health' });
  if (!OralHealthSubSection) {
    OralHealthSubSection = await SubSection.create({ name: 'Oral health', order: 0 }).save();
  }
  await getConnection().createQueryBuilder().relation(SubSection, 'section').of(OralHealthSubSection).set(MoodSection);

  let HealthBehaviorsSubSection = await SubSection.findOne({ name: 'Health Behaviors' });
  if (!HealthBehaviorsSubSection) {
    HealthBehaviorsSubSection = await SubSection.create({ name: 'Health Behaviors', order: 1 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(HealthBehaviorsSubSection)
    .set(MoodSection);

  let TimeUseSubSection = await SubSection.findOne({ name: 'Time Use' });
  if (!TimeUseSubSection) {
    TimeUseSubSection = await SubSection.create({ name: 'Time Use', order: 2 }).save();
  }
  await getConnection().createQueryBuilder().relation(SubSection, 'section').of(TimeUseSubSection).set(MoodSection);

  let LowMoodSubSection = await SubSection.findOne({ name: 'Low Mood and Anxiety' });
  if (!LowMoodSubSection) {
    LowMoodSubSection = await SubSection.create({ name: 'Low Mood and Anxiety', order: 3 }).save();
  }
  await getConnection().createQueryBuilder().relation(SubSection, 'section').of(LowMoodSubSection).set(MoodSection);

  let SelfCompassionSubSection = await SubSection.findOne({ name: 'Self-Compassion' });
  if (!SelfCompassionSubSection) {
    SelfCompassionSubSection = await SubSection.create({ name: 'Self-Compassion', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(SelfCompassionSubSection)
    .set(MoodSection);

  // LAKE NONA QUESTIONS
  let LakeNonaFirstQuestion = await Question.findOne({ question: 'Do you live in lake nona?' });
  if (!LakeNonaFirstQuestion) {
    LakeNonaFirstQuestion = await Question.create({
      question: 'Do you live in lake nona?',

      stack: 0,

      stackPhrase: '',

      placeHolder: '',

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

      stackPhrase: '',

      placeHolder: '',

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
      stackPhrase: '',
      placeHolder: '',
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

      stackPhrase: '',

      placeHolder: '',

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

      stackPhrase: '',

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

      stackPhrase: '',

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

      stackPhrase: '',

      placeHolder: '',

      order: 1,

      inputConfirmation: 'Alpha',
    }).save();
  }

  const sexQuestionItem1 = await QuestionItems.create({ name: 'Male', order: 1 }).save();

  const sexQuestionItem2 = await QuestionItems.create({ name: 'Female', order: 2 }).save();

  const sexQuestionItem3 = await QuestionItems.create({ name: 'Other', order: 3 }).save();

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

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsSecondQuestion)
    .add(sexQuestionItem1);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsSecondQuestion)
    .add(sexQuestionItem2);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsSecondQuestion)
    .add(sexQuestionItem3);

  let DemographicsThirdQuestion = await Question.findOne({
    question: 'What is the gender with which you currently identify?',
  });
  if (!DemographicsThirdQuestion) {
    DemographicsThirdQuestion = await Question.create({
      question: 'What is the gender with which you currently identify?',

      stack: 0,

      stackPhrase: '',

      placeHolder: '',

      order: 2,

      inputConfirmation: 'Alpha',
    }).save();
  }

  const genderQuestionItem1 = await QuestionItems.create({ name: 'Man', order: 1 }).save();

  const genderQuestionItem2 = await QuestionItems.create({ name: 'Woman', order: 2 }).save();

  const genderQuestionItem3 = await QuestionItems.create({ name: 'Genderqueer', order: 3 }).save();

  const genderQuestionItem4 = await QuestionItems.create({ name: 'Nonbinary', order: 4 }).save();

  const genderQuestionItem5 = await QuestionItems.create({ name: 'Other', order: 5 }).save();

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

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsThirdQuestion)
    .add(genderQuestionItem1);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsThirdQuestion)
    .add(genderQuestionItem2);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsThirdQuestion)
    .add(genderQuestionItem3);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsThirdQuestion)
    .add(genderQuestionItem4);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsThirdQuestion)
    .add(genderQuestionItem5);

  let DemographicsFourthQuestion = await Question.findOne({ question: 'Do you identify as transgender?' });
  if (!DemographicsFourthQuestion) {
    DemographicsFourthQuestion = await Question.create({
      question: 'Do you identify as transgender?',

      stack: 0,

      stackPhrase: '',

      placeHolder: '',

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

  let DemographicsFifthQuestion = await Question.findOne({
    question: 'Were you born in the US or some other country?',
  });
  if (!DemographicsFifthQuestion) {
    DemographicsFifthQuestion = await Question.create({
      question: 'Were you born in the US or some other country?',

      stack: 1,

      stackPhrase: '',

      placeHolder: '',

      order: 0,

      inputConfirmation: 'Alpha',
    }).save();
  }

  const countryQuestionItem1 = await QuestionItems.create({ name: 'US', order: 1 }).save();

  const countryQuestionItem2 = await QuestionItems.create({ name: 'Some Other Country', order: 2 }).save();

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

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsFifthQuestion)
    .add(countryQuestionItem1);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsFifthQuestion)
    .add(countryQuestionItem2);

  let DemographicsSixthQuestion = await Question.findOne({ question: 'How many years have you lived in Florida?' });
  if (!DemographicsSixthQuestion) {
    DemographicsSixthQuestion = await Question.create({
      question: 'How many years have you lived in Florida?',

      stack: 1,

      stackPhrase: '',

      placeHolder: '0',

      order: 1,

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

      stack: 2,

      stackPhrase: '',

      placeHolder: '',

      order: 1,

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

  let DemographicsEighthQuestion = await Question.findOne({
    question: 'Select your Hispanic/Latin race or N/A if none apply:',
  });
  if (!DemographicsEighthQuestion) {
    DemographicsEighthQuestion = await Question.create({
      question: 'Select your Hispanic/Latin race or N/A if none apply:',

      stack: 2,

      stackPhrase: '',

      placeHolder: '',

      order: 3,

      inputConfirmation: 'Alpha',
    }).save();
  }

  const hispanicQuestionItem1 = await QuestionItems.create({
    name: 'Mexican/Mexican-American/Chicano',
    order: 1,
  }).save();
  const hispanicQuestionItem2 = await QuestionItems.create({ name: 'Puerto Rican', order: 2 }).save();
  const hispanicQuestionItem3 = await QuestionItems.create({ name: 'Cuban', order: 3 }).save();
  const hispanicQuestionItem4 = await QuestionItems.create({ name: 'Other', order: 4 }).save();
  const hispanicQuestionItem5 = await QuestionItems.create({ name: 'N/A', order: 5 }).save();

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(DemographicsEighthQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(DemographicsEighthQuestion)
    .set(DemographicsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsEighthQuestion)
    .add(hispanicQuestionItem1);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsEighthQuestion)
    .add(hispanicQuestionItem2);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsEighthQuestion)
    .add(hispanicQuestionItem3);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsEighthQuestion)
    .add(hispanicQuestionItem4);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsEighthQuestion)
    .add(hispanicQuestionItem5);

  let DemographicsNinthQuestion = await Question.findOne({ question: 'With which racial groups do you identify?' });
  if (!DemographicsNinthQuestion) {
    DemographicsNinthQuestion = await Question.create({
      question: 'With which racial groups do you identify? ',

      stack: 3,

      stackPhrase: '',

      placeHolder: '',

      order: 0,

      inputConfirmation: 'Alpha',
    }).save();
  }

  const raceQuestionItem1 = await QuestionItems.create({ name: 'White or Caucasian', order: 1 }).save();
  const raceQuestionItem2 = await QuestionItems.create({ name: 'Black or African American', order: 2 }).save();
  const raceQuestionItem3 = await QuestionItems.create({
    name: 'Native American Indian or Native Alaskan',
    order: 3,
  }).save();
  const raceQuestionItem4 = await QuestionItems.create({
    name: 'Asian (e.g., Chinese, Filipino, Indian)',
    order: 4,
  }).save();
  const raceQuestionItem5 = await QuestionItems.create({
    name: 'Native Hawaiian or other Pacific Islander',
    order: 5,
  }).save();
  const raceQuestionItem6 = await QuestionItems.create({
    name: 'Arab, Middle Eastern, or North African',
    order: 6,
  }).save();
  const raceQuestionItem7 = await QuestionItems.create({ name: 'Other', order: 6 }).save();

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(DemographicsNinthQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(DemographicsNinthQuestion)
    .set(DemographicsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsNinthQuestion)
    .add(raceQuestionItem1);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsNinthQuestion)
    .add(raceQuestionItem2);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsNinthQuestion)
    .add(raceQuestionItem3);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsNinthQuestion)
    .add(raceQuestionItem4);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsNinthQuestion)
    .add(raceQuestionItem5);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsNinthQuestion)
    .add(raceQuestionItem6);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsNinthQuestion)
    .add(raceQuestionItem7);

  let DemographicsTenthQuestion = await Question.findOne({ question: 'Do you think of yourself as' });
  if (!DemographicsTenthQuestion) {
    DemographicsTenthQuestion = await Question.create({
      question: 'Do you think of yourself as',
      stack: 4,
      stackPhrase: '',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }

  const DemographicsTenthQuestionItem1 = await QuestionItems.create({ name: 'Straight/Heterosexual', order: 1 }).save();
  const DemographicsTenthQuestionItem2 = await QuestionItems.create({ name: 'Gay', order: 2 }).save();
  const DemographicsTenthQuestionItem3 = await QuestionItems.create({ name: 'Lesbian', order: 3 }).save();
  const DemographicsTenthQuestionItem4 = await QuestionItems.create({ name: 'Bisexual', order: 4 }).save();
  const DemographicsTenthQuestionItem5 = await QuestionItems.create({ name: 'Other', order: 5 }).save();

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

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsTenthQuestion)
    .add(DemographicsTenthQuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsTenthQuestion)
    .add(DemographicsTenthQuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsTenthQuestion)
    .add(DemographicsTenthQuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsTenthQuestion)
    .add(DemographicsTenthQuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsTenthQuestion)
    .add(DemographicsTenthQuestionItem5);

  let DemographicsEleventhQuestion = await Question.findOne({
    question: 'What is the highest level of education you completed?',
  });
  if (!DemographicsEleventhQuestion) {
    DemographicsEleventhQuestion = await Question.create({
      question: 'What is the highest level of education you completed?',

      stack: 5,

      stackPhrase: '',

      placeHolder: '',

      order: 0,

      inputConfirmation: 'Alpha',
    }).save();
  }

  const educationQuestionItem1 = await QuestionItems.create({
    name: 'Less than high school (including no education)',
    order: 1,
  }).save();
  const educationQuestionItem2 = await QuestionItems.create({ name: 'GED or equivalent', order: 2 }).save();
  const educationQuestionItem3 = await QuestionItems.create({ name: 'High school diploma', order: 3 }).save();
  const educationQuestionItem4 = await QuestionItems.create({
    name: 'Some post high school education, but no certificate or degree',
    order: 4,
  }).save();
  const educationQuestionItem5 = await QuestionItems.create({
    name: 'Post high school technical school certificate or degree (e.g., EMT)',
    order: 5,
  }).save();
  const educationQuestionItem6 = await QuestionItems.create({
    name: '2-year college Associate Degree',
    order: 6,
  }).save();
  const educationQuestionItem7 = await QuestionItems.create({
    name: '4-year college degree (BA, BS, or equivalent)',
    order: 7,
  }).save();
  const educationQuestionItem8 = await QuestionItems.create({
    name: 'Masters Degree (e.g., MA, MS, MSN, MPH)',
    order: 8,
  }).save();
  const educationQuestionItem9 = await QuestionItems.create({
    name: 'Doctoral Degree (e.g., MD, PhD, JD) ',
    order: 9,
  }).save();

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

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsEleventhQuestion)
    .add(educationQuestionItem1);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsEleventhQuestion)
    .add(educationQuestionItem2);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsEleventhQuestion)
    .add(educationQuestionItem3);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsEleventhQuestion)
    .add(educationQuestionItem4);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsEleventhQuestion)
    .add(educationQuestionItem5);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsEleventhQuestion)
    .add(educationQuestionItem6);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsEleventhQuestion)
    .add(educationQuestionItem7);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsEleventhQuestion)
    .add(educationQuestionItem8);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsEleventhQuestion)
    .add(educationQuestionItem9);

  let DemographicsTwelfthQuestion = await Question.findOne({ question: 'What is your marital status?' });
  if (!DemographicsTwelfthQuestion) {
    DemographicsTwelfthQuestion = await Question.create({
      question: 'What is your marital status?',

      stack: 6,

      stackPhrase: '',

      placeHolder: 'None',

      order: 0,

      inputConfirmation: 'Alpha',
    }).save();
  }

  const marriageQuestionItem1 = await QuestionItems.create({ name: 'Married', order: 1 }).save();
  const marriageQuestionItem2 = await QuestionItems.create({ name: 'Never Married', order: 2 }).save();
  const marriageQuestionItem3 = await QuestionItems.create({ name: 'Divorced', order: 3 }).save();
  const marriageQuestionItem4 = await QuestionItems.create({ name: 'Separated', order: 4 }).save();
  const marriageQuestionItem5 = await QuestionItems.create({ name: 'Widowed', order: 5 }).save();

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

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsTwelfthQuestion)
    .add(marriageQuestionItem1);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsTwelfthQuestion)
    .add(marriageQuestionItem2);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsTwelfthQuestion)
    .add(marriageQuestionItem3);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsTwelfthQuestion)
    .add(marriageQuestionItem4);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(DemographicsTwelfthQuestion)
    .add(marriageQuestionItem5);

  let Demographics13Question = await Question.findOne({
    question: 'Are you currently living with someone in a marriage-like relationship? ',
  });
  if (!Demographics13Question) {
    Demographics13Question = await Question.create({
      question: 'Are you currently living with someone in a marriage-like relationship? ',

      stack: 6,

      stackPhrase: '',

      placeHolder: '',

      order: 0,

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

  let Demographics14Question = await Question.findOne({
    question: 'How many biological children do you have, not counting step or adopted children? ',
  });
  if (!Demographics14Question) {
    Demographics14Question = await Question.create({
      question: 'How many biological children do you have, not counting step or adopted children? ',

      stack: 7,

      stackPhrase: '',

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

  let Demographics15Question = await Question.findOne({
    question: 'Have you ever been diagnosed by a health professional with any of the following during pregnancy?',
  });
  if (!Demographics15Question) {
    Demographics15Question = await Question.create({
      question: 'Have you ever been diagnosed by a health professional with any of the following during pregnancy?',

      stack: 8,

      stackPhrase: '',

      placeHolder: '',

      order: 0,

      inputConfirmation: 'Alpha',
    }).save();
  }

  const l10bQuestionItem1 = await QuestionItems.create({ name: 'Gestational hypertension', order: 0 }).save();
  const l10bQuestionItem2 = await QuestionItems.create({ name: 'Pre-eclampsia', order: 1 }).save();
  const l10bQuestionItem3 = await QuestionItems.create({ name: 'Eclampsia', order: 2 }).save();
  const l10bQuestionItem4 = await QuestionItems.create({ name: 'Gestational diabetes mellitus', order: 3 }).save();

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

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics15Question)
    .add(l10bQuestionItem1);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics15Question)
    .add(l10bQuestionItem2);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics15Question)
    .add(l10bQuestionItem3);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics15Question)
    .add(l10bQuestionItem4);

  let Demographics17Question = await Question.findOne({
    question: 'Have you ever been diagnosed with postpartum depression?',
  });
  if (!Demographics17Question) {
    Demographics17Question = await Question.create({
      question: 'Have you ever been diagnosed with postpartum depression?',

      stack: 9,

      stackPhrase: '',

      placeHolder: '',

      order: 0,

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

  let Demographics18Question = await Question.findOne({
    question: 'Did you ever obtain treatment for postpartum depression?',
  });
  if (!Demographics18Question) {
    Demographics18Question = await Question.create({
      question: 'Did you ever obtain treatment for postpartum depression?',

      stack: 9,

      stackPhrase: '',

      placeHolder: '',

      order: 2,

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

  let Demographics16Question = await Question.findOne({
    question: 'If yes to any of the above, did you ever obtain treatment?',
  });
  if (!Demographics16Question) {
    Demographics16Question = await Question.create({
      question: 'If yes to any of the above, did you ever obtain treatment?',

      stack: 9,

      stackPhrase: '',

      placeHolder: '',

      order: 3,

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

  let Demographics19Question = await Question.findOne({
    question: 'How many step-children or adoptive children do you have?',
  });
  if (!Demographics19Question) {
    Demographics19Question = await Question.create({
      question: 'How many step-children or adoptive children do you have?',

      stack: 7,

      stackPhrase: '',

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

      stack: 7,

      stackPhrase: '',

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

  let Demographics21Question = await Question.findOne({
    question: 'What is your employment status?  Please select all that apply.',
  });
  if (!Demographics21Question) {
    Demographics21Question = await Question.create({
      question: 'What is your employment status?  Please select all that apply.',

      stack: 10,

      stackPhrase: '',

      placeHolder: 'None',

      order: 0,

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
    employmentQuestionItem4 = await QuestionItems.create({
      name: 'Unemployed and currently looking for work',
      order: 3,
    }).save();
  }
  let employmentQuestionItem5 = await QuestionItems.findOne({ name: 'Unemployed and not currently looking for work' });
  if (!employmentQuestionItem5) {
    employmentQuestionItem5 = await QuestionItems.create({
      name: 'Unemployed and not currently looking for work',
      order: 4,
    }).save();
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

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics21Question)
    .add(employmentQuestionItem1);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics21Question)
    .add(employmentQuestionItem2);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics21Question)
    .add(employmentQuestionItem3);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics21Question)
    .add(employmentQuestionItem4);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics21Question)
    .add(employmentQuestionItem5);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics21Question)
    .add(employmentQuestionItem6);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics21Question)
    .add(employmentQuestionItem7);

  let Demographics22Question = await Question.findOne({
    question:
      'For all members living in your household, what is the combined annual income (the total pre-tax income from all sources earned in the past year)? ',
  });
  if (!Demographics22Question) {
    Demographics22Question = await Question.create({
      question:
        'For all members living in your household, what is the combined annual income (the total pre-tax income from all sources earned in the past year)?',

      stack: 10,

      stackPhrase: '',

      placeHolder: '',

      order: 1,

      inputConfirmation: 'Alpha',
    }).save();
  }
  let incomeQuestionItem1 = await QuestionItems.findOne({ name: 'Under $25,000' });
  if (!incomeQuestionItem1) {
    incomeQuestionItem1 = await QuestionItems.create({ name: 'Under $25,000', order: 1 }).save();
  }
  let incomeQuestionItem2 = await QuestionItems.findOne({ name: '$25,000 to $49,999' });
  if (!incomeQuestionItem2) {
    incomeQuestionItem2 = await QuestionItems.create({ name: '$25,000 to $49,999', order: 2 }).save();
  }
  let incomeQuestionItem3 = await QuestionItems.findOne({ name: '$50,000 to $74,999' });
  if (!incomeQuestionItem3) {
    incomeQuestionItem3 = await QuestionItems.create({ name: '$50,000 to $74,999', order: 3 }).save();
  }
  let incomeQuestionItem4 = await QuestionItems.findOne({ name: '$75,000 to $99,999' });
  if (!incomeQuestionItem4) {
    incomeQuestionItem4 = await QuestionItems.create({ name: '$75,000 to $99,999', order: 5 }).save();
  }
  let incomeQuestionItem5 = await QuestionItems.findOne({ name: '$100,000 to $144,999' });
  if (!incomeQuestionItem5) {
    incomeQuestionItem5 = await QuestionItems.create({ name: '$100,000 to $144,999', order: 6 }).save();
  }
  let incomeQuestionItem6 = await QuestionItems.findOne({ name: '$150,000 to $199,999' });
  if (!incomeQuestionItem6) {
    incomeQuestionItem6 = await QuestionItems.create({ name: '$150,000 to $199,999', order: 7 }).save();
  }
  let incomeQuestionItem7 = await QuestionItems.findOne({ name: '$200,000 to $249,999' });
  if (!incomeQuestionItem7) {
    incomeQuestionItem7 = await QuestionItems.create({ name: '$200,000 to $249,999', order: 8 }).save();
  }
  let incomeQuestionItem8 = await QuestionItems.findOne({ name: '$250,000 to $299,999' });
  if (!incomeQuestionItem8) {
    incomeQuestionItem8 = await QuestionItems.create({ name: '$250,000 to $299,999', order: 9 }).save();
  }
  let incomeQuestionItem9 = await QuestionItems.findOne({ name: '$300,000 or more' });
  if (!incomeQuestionItem9) {
    incomeQuestionItem9 = await QuestionItems.create({ name: '$300,000 or more', order: 10 }).save();
  }
  let incomeQuestionItem10 = await QuestionItems.findOne({ name: "Don't know" });
  if (!incomeQuestionItem10) {
    incomeQuestionItem10 = await QuestionItems.create({ name: "Don't know", order: 11 }).save();
  }
  let incomeQuestionItem11 = await QuestionItems.findOne({ name: 'Prefer not to answer' });
  if (!incomeQuestionItem11) {
    incomeQuestionItem11 = await QuestionItems.create({ name: 'Prefer not to answer', order: 12 }).save();
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

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics22Question)
    .add(incomeQuestionItem1);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics22Question)
    .add(incomeQuestionItem2);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics22Question)
    .add(incomeQuestionItem3);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics22Question)
    .add(incomeQuestionItem4);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics22Question)
    .add(incomeQuestionItem5);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics22Question)
    .add(incomeQuestionItem6);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics22Question)
    .add(incomeQuestionItem7);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics22Question)
    .add(incomeQuestionItem8);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics22Question)
    .add(incomeQuestionItem9);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics22Question)
    .add(incomeQuestionItem10);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Demographics22Question)
    .add(incomeQuestionItem11);

  let QOL1Question = await Question.findOne({ question: 'Your quality of life in general?' });
  if (!QOL1Question) {
    QOL1Question = await Question.create({
      question: 'Your quality of life in general?',

      stack: 0,

      stackPhrase: 'How would you rate each of the following:',

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

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(QOL1Question).set(QOLSubSection);

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

      stackPhrase: '',

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

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(QOL2Question).set(QOLSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL2Question).add(QOL2Item1);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL2Question).add(QOL2Item2);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL2Question).add(QOL2Item3);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL2Question).add(QOL2Item4);
  await getConnection().createQueryBuilder().relation(Question, 'items').of(QOL2Question).add(QOL2Item5);

  let QOL3Question = await Question.findOne({
    question: 'Compared to others like you, how would you rate your own health?',
  });
  if (!QOL3Question) {
    QOL3Question = await Question.create({
      question: 'Compared to others like you, how would you rate your own health?',

      stack: 1,

      stackPhrase: '',

      placeHolder: 'None',

      order: 0,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let QOL3Item1 = await QuestionItems.findOne({ name: 'Much worse than others like you' });
  if (!QOL3Item1) {
    QOL3Item1 = await QuestionItems.create({ name: 'Much worse than others like you', order: 1 }).save();
  }
  let QOL3Item2 = await QuestionItems.findOne({ name: 'Worse' });
  if (!QOL3Item2) {
    QOL3Item2 = await QuestionItems.create({ name: 'Worse', order: 2 }).save();
  }
  let QOL3Item3 = await QuestionItems.findOne({ name: 'Average' });
  if (!QOL3Item3) {
    QOL3Item3 = await QuestionItems.create({ name: 'Average', order: 3 }).save();
  }
  let QOL3Item4 = await QuestionItems.findOne({ name: 'Better' });
  if (!QOL3Item4) {
    QOL3Item4 = await QuestionItems.create({ name: 'Better', order: 4 }).save();
  }
  let QOL3Item5 = await QuestionItems.findOne({ name: 'Much better than others like you' });
  if (!QOL3Item5) {
    QOL3Item5 = await QuestionItems.create({ name: 'Much better than others like you', order: 5 }).save();
  }

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(QOL3Question).set(QOLSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'category').of(QOL3Question).set(comboQuestionCategory);

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

      stackPhrase: '',

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

      stackPhrase: '',

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

      stack: 1,

      stackPhrase: '',

      placeHolder: 'None',

      order: 2,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let cardioDisItem1 = await QuestionItems.findOne({
    name: 'Clotting disorder (embolism, atrial fibrillation, stroke)',
  });
  if (!cardioDisItem1) {
    cardioDisItem1 = await QuestionItems.create({
      name: 'Clotting disorder (embolism, atrial fibrillation, stroke)',
      order: 0,
    }).save();
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
  const cardioDisItem6 = await QuestionItems.create({ name: 'NONE OF THESE APPLY', order: 5 }).save();

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
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth3Question).add(cardioDisItem6);

  let YourHealth4Question = await Question.findOne({ question: 'JOINT OR BONE DISORDERS' });
  if (!YourHealth4Question) {
    YourHealth4Question = await Question.create({
      question: 'JOINT OR BONE DISORDERS',

      stack: 1,

      stackPhrase: '',

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
  const jointBoneDisItem4 = await QuestionItems.create({ name: 'NONE OF THESE APPLY', order: 3 }).save();

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
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth4Question).add(jointBoneDisItem4);

  let YourHealth5Question = await Question.findOne({ question: 'RESPIRATORY DISORDERS' });
  if (!YourHealth5Question) {
    YourHealth5Question = await Question.create({
      question: 'RESPIRATORY DISORDERS',

      stack: 2,

      stackPhrase: '',

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
    respDisItem2 = await QuestionItems.create({
      name: 'Chronic obstructive pulmonary disease (COPD)',
      order: 1,
    }).save();
  }
  let respDisItem3 = await QuestionItems.findOne({ name: 'Seasonal allergies' });
  if (!respDisItem3) {
    respDisItem3 = await QuestionItems.create({ name: 'Seasonal allergies', order: 2 }).save();
  }
  let respDisItem4 = await QuestionItems.findOne({ name: 'Any other respiratory disease' });
  if (!respDisItem4) {
    respDisItem4 = await QuestionItems.create({ name: 'Any other respiratory disease', order: 3 }).save();
  }

  const respDisItem5 = await QuestionItems.create({ name: 'NONE OF THESE APPLY', order: 4 }).save();

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
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth5Question).add(respDisItem5);

  let YourHealth6Question = await Question.findOne({ question: 'CANCERS' });
  if (!YourHealth6Question) {
    YourHealth6Question = await Question.create({
      question: 'CANCERS',

      stack: 2,

      stackPhrase: '',

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

  const cancersItem12 = await QuestionItems.create({ name: 'NONE OF THESE APPLY', order: 11 }).save();

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
  await getConnection().createQueryBuilder().relation(Question, 'items').of(YourHealth6Question).add(cancersItem12);

  let YourHealth7Question = await Question.findOne({ question: 'OTHER DISORDERS' });
  if (!YourHealth7Question) {
    YourHealth7Question = await Question.create({
      question: 'OTHER DISORDERS',

      stack: 3,

      stackPhrase: '',

      placeHolder: 'None',

      order: 6,

      inputConfirmation: 'Alpha',
    }).save();
  }

  let otherdisItem1 = await QuestionItems.findOne({ name: 'Autoimmune disorder (Lupus, Multiple sclerosis, etc.)' });
  if (!otherdisItem1) {
    otherdisItem1 = await QuestionItems.create({
      name: 'Autoimmune disorder (Lupus, Multiple sclerosis, etc.)',
      order: 0,
    }).save();
  }
  let otherdisItem2 = await QuestionItems.findOne({
    name: 'Inflammatory skin disorders (Eczema, atopic dermatitis, psoriasis)',
  });
  if (!otherdisItem2) {
    otherdisItem2 = await QuestionItems.create({
      name: 'Inflammatory skin disorders (Eczema, atopic dermatitis, psoriasis)',
      order: 1,
    }).save();
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
    otherdisItem11 = await QuestionItems.create({
      name: 'Thyroid disorders (eg hypothyroidism, hyperthyroidism)',
      order: 10,
    }).save();
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
    otherdisItem14 = await QuestionItems.create({ name: 'NONE OF THESE APPLY', order: 13 }).save();
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

  let YourHealth8Question = await Question.findOne({
    question:
      'Using a 0-10 scale where 0 means “no energy” and 10 means “full of energy,” what number best describes how much energy you usually have during the day? (You can use any number between 0 and 10 to answer.)',
  });
  if (!YourHealth8Question) {
    YourHealth8Question = await Question.create({
      question:
        'Using a 0-10 scale where 0 means “no energy” and 10 means “full of energy,” what number best describes how much energy you usually have during the day? (You can use any number between 0 and 10 to answer.)',
      stack: 4,
      stackPhrase: '',
      placeHolder: '8',
      order: 7,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let YourHealth8QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!YourHealth8QuestionItem1) {
    YourHealth8QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let YourHealth8QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!YourHealth8QuestionItem2) {
    YourHealth8QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let YourHealth8QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!YourHealth8QuestionItem3) {
    YourHealth8QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let YourHealth8QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!YourHealth8QuestionItem4) {
    YourHealth8QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let YourHealth8QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!YourHealth8QuestionItem5) {
    YourHealth8QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let YourHealth8QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!YourHealth8QuestionItem6) {
    YourHealth8QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  let YourHealth8QuestionItem7 = await QuestionItems.findOne({ name: '6' });
  if (!YourHealth8QuestionItem7) {
    YourHealth8QuestionItem7 = await QuestionItems.create({ name: '6', order: 6 }).save();
  }
  let YourHealth8QuestionItem8 = await QuestionItems.findOne({ name: '7' });
  if (!YourHealth8QuestionItem8) {
    YourHealth8QuestionItem8 = await QuestionItems.create({ name: '7', order: 7 }).save();
  }
  let YourHealth8QuestionItem9 = await QuestionItems.findOne({ name: '8' });
  if (!YourHealth8QuestionItem9) {
    YourHealth8QuestionItem9 = await QuestionItems.create({ name: '8', order: 8 }).save();
  }
  let YourHealth8QuestionItem10 = await QuestionItems.findOne({ name: '9' });
  if (!YourHealth8QuestionItem10) {
    YourHealth8QuestionItem10 = await QuestionItems.create({ name: '9', order: 9 }).save();
  }
  let YourHealth8QuestionItem11 = await QuestionItems.findOne({ name: '10' });
  if (!YourHealth8QuestionItem11) {
    YourHealth8QuestionItem11 = await QuestionItems.create({ name: '10', order: 10 }).save();
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

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth8Question)
    .add(YourHealth8QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth8Question)
    .add(YourHealth8QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth8Question)
    .add(YourHealth8QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth8Question)
    .add(YourHealth8QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth8Question)
    .add(YourHealth8QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth8Question)
    .add(YourHealth8QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth8Question)
    .add(YourHealth8QuestionItem7);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth8Question)
    .add(YourHealth8QuestionItem8);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth8Question)
    .add(YourHealth8QuestionItem9);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth8Question)
    .add(YourHealth8QuestionItem10);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth8Question)
    .add(YourHealth8QuestionItem11);

  let YourHealth9Question = await Question.findOne({
    question: 'Your home management (e.g., cleaning, repairs, cooking, shopping)?  ',
  });
  if (!YourHealth9Question) {
    YourHealth9Question = await Question.create({
      question: 'Your home management (e.g., cleaning, repairs, cooking, shopping)?  ',
      stack: 5,
      stackPhrase:
        'The next questions are about the effects of all your health problems taken together. Using a 0-to-10 scale where 0 means “no interference” and 10 means “very severe interference,” what number best describes how much problems with your physical or mental health have interfered with each of the following areas of your life over the past 30 days? (You can use any number between 0 and 10 to answer.)',
      placeHolder: '',
      order: 8,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let YourHealth9QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!YourHealth9QuestionItem1) {
    YourHealth9QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let YourHealth9QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!YourHealth9QuestionItem2) {
    YourHealth9QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let YourHealth9QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!YourHealth9QuestionItem3) {
    YourHealth9QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let YourHealth9QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!YourHealth9QuestionItem4) {
    YourHealth9QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let YourHealth9QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!YourHealth9QuestionItem5) {
    YourHealth9QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let YourHealth9QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!YourHealth9QuestionItem6) {
    YourHealth9QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  let YourHealth9QuestionItem7 = await QuestionItems.findOne({ name: '6' });
  if (!YourHealth9QuestionItem7) {
    YourHealth9QuestionItem7 = await QuestionItems.create({ name: '6', order: 6 }).save();
  }
  let YourHealth9QuestionItem8 = await QuestionItems.findOne({ name: '7' });
  if (!YourHealth9QuestionItem8) {
    YourHealth9QuestionItem8 = await QuestionItems.create({ name: '7', order: 7 }).save();
  }
  let YourHealth9QuestionItem9 = await QuestionItems.findOne({ name: '8' });
  if (!YourHealth9QuestionItem9) {
    YourHealth9QuestionItem9 = await QuestionItems.create({ name: '8', order: 8 }).save();
  }
  let YourHealth9QuestionItem10 = await QuestionItems.findOne({ name: '9' });
  if (!YourHealth9QuestionItem10) {
    YourHealth9QuestionItem10 = await QuestionItems.create({ name: '9', order: 9 }).save();
  }
  let YourHealth9QuestionItem11 = await QuestionItems.findOne({ name: '10' });
  if (!YourHealth9QuestionItem11) {
    YourHealth9QuestionItem11 = await QuestionItems.create({ name: '10', order: 10 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth9Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth9Question)
    .set(YourHealthSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth9Question)
    .add(YourHealth9QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth9Question)
    .add(YourHealth9QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth9Question)
    .add(YourHealth9QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth9Question)
    .add(YourHealth9QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth9Question)
    .add(YourHealth9QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth9Question)
    .add(YourHealth9QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth9Question)
    .add(YourHealth9QuestionItem7);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth9Question)
    .add(YourHealth9QuestionItem8);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth9Question)
    .add(YourHealth9QuestionItem9);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth9Question)
    .add(YourHealth9QuestionItem10);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth9Question)
    .add(YourHealth9QuestionItem11);

  let YourHealth10Question = await Question.findOne({ question: 'Your ability to work?' });
  if (!YourHealth10Question) {
    YourHealth10Question = await Question.create({
      question: 'Your ability to work?',
      stack: 5,
      stackPhrase: '',
      placeHolder: '',
      order: 9,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let YourHealth10QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!YourHealth10QuestionItem1) {
    YourHealth10QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let YourHealth10QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!YourHealth10QuestionItem2) {
    YourHealth10QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let YourHealth10QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!YourHealth10QuestionItem3) {
    YourHealth10QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let YourHealth10QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!YourHealth10QuestionItem4) {
    YourHealth10QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let YourHealth10QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!YourHealth10QuestionItem5) {
    YourHealth10QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let YourHealth10QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!YourHealth10QuestionItem6) {
    YourHealth10QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  let YourHealth10QuestionItem7 = await QuestionItems.findOne({ name: '6' });
  if (!YourHealth10QuestionItem7) {
    YourHealth10QuestionItem7 = await QuestionItems.create({ name: '6', order: 6 }).save();
  }
  let YourHealth10QuestionItem8 = await QuestionItems.findOne({ name: '7' });
  if (!YourHealth10QuestionItem8) {
    YourHealth10QuestionItem8 = await QuestionItems.create({ name: '7', order: 7 }).save();
  }
  let YourHealth10QuestionItem9 = await QuestionItems.findOne({ name: '8' });
  if (!YourHealth10QuestionItem9) {
    YourHealth10QuestionItem9 = await QuestionItems.create({ name: '8', order: 8 }).save();
  }
  let YourHealth10QuestionItem10 = await QuestionItems.findOne({ name: '9' });
  if (!YourHealth10QuestionItem10) {
    YourHealth10QuestionItem10 = await QuestionItems.create({ name: '9', order: 9 }).save();
  }
  let YourHealth10QuestionItem11 = await QuestionItems.findOne({ name: '10' });
  if (!YourHealth10QuestionItem11) {
    YourHealth10QuestionItem11 = await QuestionItems.create({ name: '10', order: 10 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth10Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth10Question)
    .set(YourHealthSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth10Question)
    .add(YourHealth10QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth10Question)
    .add(YourHealth10QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth10Question)
    .add(YourHealth10QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth10Question)
    .add(YourHealth10QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth10Question)
    .add(YourHealth10QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth10Question)
    .add(YourHealth10QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth10Question)
    .add(YourHealth10QuestionItem7);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth10Question)
    .add(YourHealth10QuestionItem8);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth10Question)
    .add(YourHealth10QuestionItem9);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth10Question)
    .add(YourHealth10QuestionItem10);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth10Question)
    .add(YourHealth10QuestionItem11);

  let YourHealth11Question = await Question.findOne({ question: 'The speed or quality of your work?' });
  if (!YourHealth11Question) {
    YourHealth11Question = await Question.create({
      question: 'The speed or quality of your work?',
      stack: 5,
      stackPhrase: '',
      placeHolder: '',
      order: 10,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let YourHealth11QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!YourHealth11QuestionItem1) {
    YourHealth11QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let YourHealth11QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!YourHealth11QuestionItem2) {
    YourHealth11QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let YourHealth11QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!YourHealth11QuestionItem3) {
    YourHealth11QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let YourHealth11QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!YourHealth11QuestionItem4) {
    YourHealth11QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let YourHealth11QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!YourHealth11QuestionItem5) {
    YourHealth11QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let YourHealth11QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!YourHealth11QuestionItem6) {
    YourHealth11QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  let YourHealth11QuestionItem7 = await QuestionItems.findOne({ name: '6' });
  if (!YourHealth11QuestionItem7) {
    YourHealth11QuestionItem7 = await QuestionItems.create({ name: '6', order: 6 }).save();
  }
  let YourHealth11QuestionItem8 = await QuestionItems.findOne({ name: '7' });
  if (!YourHealth11QuestionItem8) {
    YourHealth11QuestionItem8 = await QuestionItems.create({ name: '7', order: 7 }).save();
  }
  let YourHealth11QuestionItem9 = await QuestionItems.findOne({ name: '8' });
  if (!YourHealth11QuestionItem9) {
    YourHealth11QuestionItem9 = await QuestionItems.create({ name: '8', order: 8 }).save();
  }
  let YourHealth11QuestionItem10 = await QuestionItems.findOne({ name: '9' });
  if (!YourHealth11QuestionItem10) {
    YourHealth11QuestionItem10 = await QuestionItems.create({ name: '9', order: 9 }).save();
  }
  let YourHealth11QuestionItem11 = await QuestionItems.findOne({ name: '10' });
  if (!YourHealth11QuestionItem11) {
    YourHealth11QuestionItem11 = await QuestionItems.create({ name: '10', order: 10 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth11Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth11Question)
    .set(YourHealthSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth11Question)
    .add(YourHealth11QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth11Question)
    .add(YourHealth11QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth11Question)
    .add(YourHealth11QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth11Question)
    .add(YourHealth11QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth11Question)
    .add(YourHealth11QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth11Question)
    .add(YourHealth11QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth11Question)
    .add(YourHealth11QuestionItem7);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth11Question)
    .add(YourHealth11QuestionItem8);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth11Question)
    .add(YourHealth11QuestionItem9);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth11Question)
    .add(YourHealth11QuestionItem10);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth11Question)
    .add(YourHealth11QuestionItem11);

  let YourHealth12Question = await Question.findOne({ question: 'Your social life?' });
  if (!YourHealth12Question) {
    YourHealth12Question = await Question.create({
      question: 'Your social life?',
      stack: 6,
      stackPhrase:
        'The next questions are about the effects of all your health problems taken together. Using a 0-to-10 scale where 0 means “no interference” and 10 means “very severe interference,” what number best describes how much problems with your physical or mental health have interfered with each of the following areas of your life over the past 30 days? (You can use any number between 0 and 10 to answer.)',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let YourHealth12QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!YourHealth12QuestionItem1) {
    YourHealth12QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let YourHealth12QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!YourHealth12QuestionItem2) {
    YourHealth12QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let YourHealth12QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!YourHealth12QuestionItem3) {
    YourHealth12QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let YourHealth12QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!YourHealth12QuestionItem4) {
    YourHealth12QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let YourHealth12QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!YourHealth12QuestionItem5) {
    YourHealth12QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let YourHealth12QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!YourHealth12QuestionItem6) {
    YourHealth12QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  let YourHealth12QuestionItem7 = await QuestionItems.findOne({ name: '6' });
  if (!YourHealth12QuestionItem7) {
    YourHealth12QuestionItem7 = await QuestionItems.create({ name: '6', order: 6 }).save();
  }
  let YourHealth12QuestionItem8 = await QuestionItems.findOne({ name: '7' });
  if (!YourHealth12QuestionItem8) {
    YourHealth12QuestionItem8 = await QuestionItems.create({ name: '7', order: 7 }).save();
  }
  let YourHealth12QuestionItem9 = await QuestionItems.findOne({ name: '8' });
  if (!YourHealth12QuestionItem9) {
    YourHealth12QuestionItem9 = await QuestionItems.create({ name: '8', order: 8 }).save();
  }
  let YourHealth12QuestionItem10 = await QuestionItems.findOne({ name: '9' });
  if (!YourHealth12QuestionItem10) {
    YourHealth12QuestionItem10 = await QuestionItems.create({ name: '9', order: 9 }).save();
  }
  let YourHealth12QuestionItem11 = await QuestionItems.findOne({ name: '10' });
  if (!YourHealth12QuestionItem11) {
    YourHealth12QuestionItem11 = await QuestionItems.create({ name: '10', order: 10 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth12Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth12Question)
    .set(YourHealthSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth12Question)
    .add(YourHealth12QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth12Question)
    .add(YourHealth12QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth12Question)
    .add(YourHealth12QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth12Question)
    .add(YourHealth12QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth12Question)
    .add(YourHealth12QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth12Question)
    .add(YourHealth12QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth12Question)
    .add(YourHealth12QuestionItem7);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth12Question)
    .add(YourHealth12QuestionItem8);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth12Question)
    .add(YourHealth12QuestionItem9);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth12Question)
    .add(YourHealth12QuestionItem10);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth12Question)
    .add(YourHealth12QuestionItem11);

  let YourHealth13Question = await Question.findOne({ question: 'Your close personal relationships?' });
  if (!YourHealth13Question) {
    YourHealth13Question = await Question.create({
      question: 'Your close personal relationships?',
      stack: 6,
      stackPhrase: '',
      placeHolder: '',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let YourHealth13QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!YourHealth13QuestionItem1) {
    YourHealth13QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let YourHealth13QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!YourHealth13QuestionItem2) {
    YourHealth13QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let YourHealth13QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!YourHealth13QuestionItem3) {
    YourHealth13QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let YourHealth13QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!YourHealth13QuestionItem4) {
    YourHealth13QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let YourHealth13QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!YourHealth13QuestionItem5) {
    YourHealth13QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let YourHealth13QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!YourHealth13QuestionItem6) {
    YourHealth13QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  let YourHealth13QuestionItem7 = await QuestionItems.findOne({ name: '6' });
  if (!YourHealth13QuestionItem7) {
    YourHealth13QuestionItem7 = await QuestionItems.create({ name: '6', order: 6 }).save();
  }
  let YourHealth13QuestionItem8 = await QuestionItems.findOne({ name: '7' });
  if (!YourHealth13QuestionItem8) {
    YourHealth13QuestionItem8 = await QuestionItems.create({ name: '7', order: 7 }).save();
  }
  let YourHealth13QuestionItem9 = await QuestionItems.findOne({ name: '8' });
  if (!YourHealth13QuestionItem9) {
    YourHealth13QuestionItem9 = await QuestionItems.create({ name: '8', order: 8 }).save();
  }
  let YourHealth13QuestionItem10 = await QuestionItems.findOne({ name: '9' });
  if (!YourHealth13QuestionItem10) {
    YourHealth13QuestionItem10 = await QuestionItems.create({ name: '9', order: 9 }).save();
  }
  let YourHealth13QuestionItem11 = await QuestionItems.findOne({ name: '10' });
  if (!YourHealth13QuestionItem11) {
    YourHealth13QuestionItem11 = await QuestionItems.create({ name: '10', order: 10 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(YourHealth13Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(YourHealth13Question)
    .set(YourHealthSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth13Question)
    .add(YourHealth13QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth13Question)
    .add(YourHealth13QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth13Question)
    .add(YourHealth13QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth13Question)
    .add(YourHealth13QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth13Question)
    .add(YourHealth13QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth13Question)
    .add(YourHealth13QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth13Question)
    .add(YourHealth13QuestionItem7);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth13Question)
    .add(YourHealth13QuestionItem8);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth13Question)
    .add(YourHealth13QuestionItem9);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth13Question)
    .add(YourHealth13QuestionItem10);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(YourHealth13Question)
    .add(YourHealth13QuestionItem11);

  let YourHealth14Question = await Question.findOne({
    question:
      'About how many days out of 30 in the past month were you totally unable to work or carry out your other usual activities because of problems with your health?',
  });
  if (!YourHealth14Question) {
    YourHealth14Question = await Question.create({
      question:
        'About how many days out of 30 in the past month were you totally unable to work or carry out your other usual activities because of problems with your health?',
      stack: 7,
      stackPhrase: '',
      placeHolder: '20',
      order: 0,
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

  let YourHealth15Question = await Question.findOne({
    question:
      'About how many days out of 30 in the past month were you able to work but you had to cut back on how long you worked, your amount of work, or how carefully you worked because of problems with your health?',
  });
  if (!YourHealth15Question) {
    YourHealth15Question = await Question.create({
      question:
        'About how many days out of 30 in the past month were you able to work but you had to cut back on how long you worked, your amount of work, or how carefully you worked because of problems with your health?',
      stack: 7,
      stackPhrase: '',
      placeHolder: '0',
      order: 1,
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

  let Screenings1aQuestion = await Question.findOne({ question: 'Human Papilloma (HPV) Vaccine' });
  if (!Screenings1aQuestion) {
    Screenings1aQuestion = await Question.create({
      question: 'Human Papilloma (HPV) Vaccine',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }

  let Screenings1aQuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Screenings1aQuestionItem1) {
    Screenings1aQuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Screenings1aQuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings1aQuestionItem2) {
    Screenings1aQuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  let Screenings1aQuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings1aQuestionItem3) {
    Screenings1aQuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  let Screenings1aQuestionItem4 = await QuestionItems.findOne({ name: 'Not applicable' });
  if (!Screenings1aQuestionItem4) {
    Screenings1aQuestionItem4 = await QuestionItems.create({ name: 'Not applicable', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings1aQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings1aQuestion)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1aQuestion)
    .add(Screenings1aQuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1aQuestion)
    .add(Screenings1aQuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1aQuestion)
    .add(Screenings1aQuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1aQuestion)
    .add(Screenings1aQuestionItem4);

  let Screenings1bQuestion = await Question.findOne({
    question:
      'Pneumococcal Vaccine (participants 65 and older and/or diabetes, cancer, heart, lung, or immune disease)',
  });
  if (!Screenings1bQuestion) {
    Screenings1bQuestion = await Question.create({
      question:
        'Pneumococcal Vaccine (participants 65 and older and/or diabetes, cancer, heart, lung, or immune disease)',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }

  let Screenings1bQuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Screenings1bQuestionItem1) {
    Screenings1bQuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Screenings1bQuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings1bQuestionItem2) {
    Screenings1bQuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  let Screenings1bQuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings1bQuestionItem3) {
    Screenings1bQuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  let Screenings1bQuestionItem4 = await QuestionItems.findOne({ name: 'Not applicable' });
  if (!Screenings1bQuestionItem4) {
    Screenings1bQuestionItem4 = await QuestionItems.create({ name: 'Not applicable', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings1bQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings1bQuestion)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1bQuestion)
    .add(Screenings1bQuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1bQuestion)
    .add(Screenings1bQuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1bQuestion)
    .add(Screenings1bQuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1bQuestion)
    .add(Screenings1bQuestionItem4);

  let Screenings1cQuestion = await Question.findOne({
    question: 'Tetanus /Diphtheria/Pertussis Vaccine (Tdap or Tp)',
  });
  if (!Screenings1cQuestion) {
    Screenings1cQuestion = await Question.create({
      question: 'Tetanus /Diphtheria/Pertussis Vaccine (Tdap or Tp)',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }

  let Screenings1cQuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Screenings1cQuestionItem1) {
    Screenings1cQuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Screenings1cQuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings1cQuestionItem2) {
    Screenings1cQuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  let Screenings1cQuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings1cQuestionItem3) {
    Screenings1cQuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  let Screenings1cQuestionItem4 = await QuestionItems.findOne({ name: 'Not applicable' });
  if (!Screenings1cQuestionItem4) {
    Screenings1cQuestionItem4 = await QuestionItems.create({ name: 'Not applicable', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings1cQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings1cQuestion)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1cQuestion)
    .add(Screenings1cQuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1cQuestion)
    .add(Screenings1cQuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1cQuestion)
    .add(Screenings1cQuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1cQuestion)
    .add(Screenings1cQuestionItem4);

  let Screenings1dQuestion = await Question.findOne({
    question: 'Varicella Zoster Vaccine (for Shingles) (Participants 50 and older)',
  });
  if (!Screenings1dQuestion) {
    Screenings1dQuestion = await Question.create({
      question: 'Varicella Zoster Vaccine (for Shingles) (Participants 50 and older)',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 3,
      inputConfirmation: 'Alpha',
    }).save();
  }

  let Screenings1dQuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Screenings1dQuestionItem1) {
    Screenings1dQuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Screenings1dQuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings1dQuestionItem2) {
    Screenings1dQuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  let Screenings1dQuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings1dQuestionItem3) {
    Screenings1dQuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  let Screenings1dQuestionItem4 = await QuestionItems.findOne({ name: 'Not applicable' });
  if (!Screenings1dQuestionItem4) {
    Screenings1dQuestionItem4 = await QuestionItems.create({ name: 'Not applicable', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings1dQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings1dQuestion)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1dQuestion)
    .add(Screenings1dQuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1dQuestion)
    .add(Screenings1dQuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1dQuestion)
    .add(Screenings1dQuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1dQuestion)
    .add(Screenings1dQuestionItem4);

  let Screenings1eQuestion = await Question.findOne({ question: 'Hepatitis A' });
  if (!Screenings1eQuestion) {
    Screenings1eQuestion = await Question.create({
      question: 'Hepatitis A',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }

  let Screenings1eQuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Screenings1eQuestionItem1) {
    Screenings1eQuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Screenings1eQuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings1eQuestionItem2) {
    Screenings1eQuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  let Screenings1eQuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings1eQuestionItem3) {
    Screenings1eQuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  let Screenings1eQuestionItem4 = await QuestionItems.findOne({ name: 'Not applicable' });
  if (!Screenings1eQuestionItem4) {
    Screenings1eQuestionItem4 = await QuestionItems.create({ name: 'Not applicable', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings1eQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings1eQuestion)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1eQuestion)
    .add(Screenings1eQuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1eQuestion)
    .add(Screenings1eQuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1eQuestion)
    .add(Screenings1eQuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1eQuestion)
    .add(Screenings1eQuestionItem4);

  let Screenings1fQuestion = await Question.findOne({ question: 'Hepatitis B' });
  if (!Screenings1fQuestion) {
    Screenings1fQuestion = await Question.create({
      question: 'Hepatitis B',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }

  let Screenings1fQuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Screenings1fQuestionItem1) {
    Screenings1fQuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Screenings1fQuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings1fQuestionItem2) {
    Screenings1fQuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  let Screenings1fQuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings1fQuestionItem3) {
    Screenings1fQuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  let Screenings1fQuestionItem4 = await QuestionItems.findOne({ name: 'Not applicable' });
  if (!Screenings1fQuestionItem4) {
    Screenings1fQuestionItem4 = await QuestionItems.create({ name: 'Not applicable', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings1fQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings1fQuestion)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1fQuestion)
    .add(Screenings1fQuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1fQuestion)
    .add(Screenings1fQuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1fQuestion)
    .add(Screenings1fQuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1fQuestion)
    .add(Screenings1fQuestionItem4);

  let Screenings1gQuestion = await Question.findOne({ question: 'Meningococcal (Meningitis)' });
  if (!Screenings1gQuestion) {
    Screenings1gQuestion = await Question.create({
      question: 'Meningococcal (Meningitis)',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }

  let Screenings1gQuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Screenings1gQuestionItem1) {
    Screenings1gQuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Screenings1gQuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings1gQuestionItem2) {
    Screenings1gQuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  let Screenings1gQuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings1gQuestionItem3) {
    Screenings1gQuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  let Screenings1gQuestionItem4 = await QuestionItems.findOne({ name: 'Not applicable' });
  if (!Screenings1gQuestionItem4) {
    Screenings1gQuestionItem4 = await QuestionItems.create({ name: 'Not applicable', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings1gQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings1gQuestion)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1gQuestion)
    .add(Screenings1gQuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1gQuestion)
    .add(Screenings1gQuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1gQuestion)
    .add(Screenings1gQuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings1gQuestion)
    .add(Screenings1gQuestionItem4);

  let Screenings2Question = await Question.findOne({ question: 'Do you get the Influenza (Flu) Vaccine annually?' });
  if (!Screenings2Question) {
    Screenings2Question = await Question.create({
      question: 'Do you get the Influenza (Flu) Vaccine annually?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 5,
      inputConfirmation: 'Alpha',
    }).save();
  }

  let Screenings2QuestionItem1 = await QuestionItems.findOne({ name: 'Yes - every year' });
  if (!Screenings2QuestionItem1) {
    Screenings2QuestionItem1 = await QuestionItems.create({ name: 'Yes - every year', order: 0 }).save();
  }
  let Screenings2QuestionItem2 = await QuestionItems.findOne({ name: 'Yes - some years' });
  if (!Screenings2QuestionItem2) {
    Screenings2QuestionItem2 = await QuestionItems.create({ name: 'Yes - some years', order: 1 }).save();
  }
  let Screenings2QuestionItem3 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings2QuestionItem3) {
    Screenings2QuestionItem3 = await QuestionItems.create({ name: 'No', order: 2 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings2Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings2Question)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings2Question)
    .add(Screenings2QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings2Question)
    .add(Screenings2QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings2Question)
    .add(Screenings2QuestionItem3);

  let Screenings3Question = await Question.findOne({ question: 'Have you received a COVID-19 vaccine?' });
  if (!Screenings3Question) {
    Screenings3Question = await Question.create({
      question: 'Have you received a COVID-19 vaccine?',
      stack: 2,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings3Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings3Question)
    .set(ScreeningsSubSection);

  let Screenings4Question = await Question.findOne({
    question: 'How likely are you to get the COVID-19 vaccine when it becomes available to you?',
  });
  if (!Screenings4Question) {
    Screenings4Question = await Question.create({
      question: 'How likely are you to get the COVID-19 vaccine when it becomes available to you?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }

  let Screenings4QuestionItem1 = await QuestionItems.findOne({ name: 'Very Likely' });
  if (!Screenings4QuestionItem1) {
    Screenings4QuestionItem1 = await QuestionItems.create({ name: 'Very Likely', order: 0 }).save();
  }
  let Screenings4QuestionItem2 = await QuestionItems.findOne({ name: 'Likely' });
  if (!Screenings4QuestionItem2) {
    Screenings4QuestionItem2 = await QuestionItems.create({ name: 'Likely', order: 1 }).save();
  }
  let Screenings4QuestionItem3 = await QuestionItems.findOne({ name: 'Neutral' });
  if (!Screenings4QuestionItem3) {
    Screenings4QuestionItem3 = await QuestionItems.create({ name: 'Neutral', order: 2 }).save();
  }
  let Screenings4QuestionItem4 = await QuestionItems.findOne({ name: 'Not Likely' });
  if (!Screenings4QuestionItem4) {
    Screenings4QuestionItem4 = await QuestionItems.create({ name: 'Not Likely', order: 3 }).save();
  }
  let Screenings4QuestionItem5 = await QuestionItems.findOne({ name: 'Very Unlikely' });
  if (!Screenings4QuestionItem5) {
    Screenings4QuestionItem5 = await QuestionItems.create({ name: 'Very Unlikely', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings4Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings4Question)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings4Question)
    .add(Screenings4QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings4Question)
    .add(Screenings4QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings4Question)
    .add(Screenings4QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings4Question)
    .add(Screenings4QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings4Question)
    .add(Screenings4QuestionItem5);

  let Screenings5Question = await Question.findOne({
    question: 'Have you ever delayed having your child get a vaccine for reasons other than illness or allergy?',
  });
  if (!Screenings5Question) {
    Screenings5Question = await Question.create({
      question: 'Have you ever delayed having your child get a vaccine for reasons other than illness or allergy?',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings5QuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Screenings5QuestionItem1) {
    Screenings5QuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Screenings5QuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings5QuestionItem2) {
    Screenings5QuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  let Screenings5QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings5QuestionItem3) {
    Screenings5QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings5Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings5Question)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings5Question)
    .add(Screenings5QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings5Question)
    .add(Screenings5QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings5Question)
    .add(Screenings5QuestionItem3);

  let Screenings6Question = await Question.findOne({
    question: 'Have you ever decided not to have your child get a vaccine for reasons other than illness or allergy? ',
  });
  if (!Screenings6Question) {
    Screenings6Question = await Question.create({
      question:
        'Have you ever decided not to have your child get a vaccine for reasons other than illness or allergy? ',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings6QuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Screenings6QuestionItem1) {
    Screenings6QuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Screenings6QuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings6QuestionItem2) {
    Screenings6QuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  let Screenings6QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings6QuestionItem3) {
    Screenings6QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings6Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings6Question)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings6Question)
    .add(Screenings6QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings6Question)
    .add(Screenings6QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings6Question)
    .add(Screenings6QuestionItem3);

  let Screenings7Question = await Question.findOne({
    question:
      'Including yourself, please select all the people age 45 or below in your immediate family that have been vaccinated against HPV. Mark all that apply.',
  });
  if (!Screenings7Question) {
    Screenings7Question = await Question.create({
      question:
        'Including yourself, please select all the people age 45 or below in your immediate family that have been vaccinated against HPV. Mark all that apply.',
      stack: 4,
      stackPhrase: '',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings7QuestionItem1 = await QuestionItems.findOne({ name: 'Me' });
  if (!Screenings7QuestionItem1) {
    Screenings7QuestionItem1 = await QuestionItems.create({ name: 'Me', order: 0 }).save();
  }
  let Screenings7QuestionItem2 = await QuestionItems.findOne({ name: 'My spouse/partner' });
  if (!Screenings7QuestionItem2) {
    Screenings7QuestionItem2 = await QuestionItems.create({ name: 'My spouse/partner', order: 1 }).save();
  }
  let Screenings7QuestionItem3 = await QuestionItems.findOne({ name: 'My male children' });
  if (!Screenings7QuestionItem3) {
    Screenings7QuestionItem3 = await QuestionItems.create({ name: 'My male children', order: 2 }).save();
  }
  let Screenings7QuestionItem4 = await QuestionItems.findOne({ name: 'My female children' });
  if (!Screenings7QuestionItem4) {
    Screenings7QuestionItem4 = await QuestionItems.create({ name: 'My female children', order: 3 }).save();
  }
  let Screenings7QuestionItem5 = await QuestionItems.findOne({ name: 'No one has been vaccinated for HPV' });
  if (!Screenings7QuestionItem5) {
    Screenings7QuestionItem5 = await QuestionItems.create({
      name: 'No one has been vaccinated for HPV',
      order: 4,
    }).save();
  }
  let Screenings7QuestionItem6 = await QuestionItems.findOne({ name: 'Do not Know' });
  if (!Screenings7QuestionItem6) {
    Screenings7QuestionItem6 = await QuestionItems.create({ name: 'Do not Know', order: 5 }).save();
  }
  let Screenings7QuestionItem7 = await QuestionItems.findOne({ name: 'Prefer not to answer' });
  if (!Screenings7QuestionItem7) {
    Screenings7QuestionItem7 = await QuestionItems.create({ name: 'Prefer not to answer', order: 6 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings7Question)
    .set(multiselectionQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings7Question)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings7Question)
    .add(Screenings7QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings7Question)
    .add(Screenings7QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings7Question)
    .add(Screenings7QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings7Question)
    .add(Screenings7QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings7Question)
    .add(Screenings7QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings7Question)
    .add(Screenings7QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings7Question)
    .add(Screenings7QuestionItem7);

  let Screenings8Question = await Question.findOne({
    question:
      'A blood stool test is a test that may use a special kit at home to determine whether the stool contains blood. Have you ever had this test using a home kit?',
  });
  if (!Screenings8Question) {
    Screenings8Question = await Question.create({
      question:
        'A blood stool test is a test that may use a special kit at home to determine whether the stool contains blood. Have you ever had this test using a home kit?',
      stack: 5,
      stackPhrase: '',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings8QuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Screenings8QuestionItem1) {
    Screenings8QuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Screenings8QuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings8QuestionItem2) {
    Screenings8QuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  let Screenings8QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings8QuestionItem3) {
    Screenings8QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings8Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings8Question)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings8Question)
    .add(Screenings8QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings8Question)
    .add(Screenings8QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings8Question)
    .add(Screenings8QuestionItem3);

  let Screenings9Question = await Question.findOne({
    question: 'How long has it been since you had your last blood stool test using a home kit?',
  });
  if (!Screenings9Question) {
    Screenings9Question = await Question.create({
      question: 'How long has it been since you had your last blood stool test using a home kit?',
      stack: 5,
      stackPhrase: '',
      placeHolder: '',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings9QuestionItem1 = await QuestionItems.findOne({
    name: 'Within the past year (anytime less than 12 months ago)',
  });
  if (!Screenings9QuestionItem1) {
    Screenings9QuestionItem1 = await QuestionItems.create({
      name: 'Within the past year (anytime less than 12 months ago)',
      order: 0,
    }).save();
  }
  let Screenings9QuestionItem2 = await QuestionItems.findOne({
    name: 'Within the past 2 years (at least 1 year but less than 2 years ago)',
  });
  if (!Screenings9QuestionItem2) {
    Screenings9QuestionItem2 = await QuestionItems.create({
      name: 'Within the past 2 years (at least 1 year but less than 2 years ago)',
      order: 1,
    }).save();
  }
  let Screenings9QuestionItem3 = await QuestionItems.findOne({
    name: 'Within the past 3 years (at least 2 years but less than 3 years ago)',
  });
  if (!Screenings9QuestionItem3) {
    Screenings9QuestionItem3 = await QuestionItems.create({
      name: 'Within the past 3 years (at least 2 years but less than 3 years ago)',
      order: 2,
    }).save();
  }
  let Screenings9QuestionItem4 = await QuestionItems.findOne({
    name: 'Within the past 5 years (at least 3 years but less than 5 years ago)',
  });
  if (!Screenings9QuestionItem4) {
    Screenings9QuestionItem4 = await QuestionItems.create({
      name: 'Within the past 5 years (at least 3 years but less than 5 years ago)',
      order: 3,
    }).save();
  }
  let Screenings9QuestionItem5 = await QuestionItems.findOne({ name: '5 or more years ago' });
  if (!Screenings9QuestionItem5) {
    Screenings9QuestionItem5 = await QuestionItems.create({ name: '5 or more years ago', order: 4 }).save();
  }
  let Screenings9QuestionItem6 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings9QuestionItem6) {
    Screenings9QuestionItem6 = await QuestionItems.create({ name: 'Do not know', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings9Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings9Question)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9Question)
    .add(Screenings9QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9Question)
    .add(Screenings9QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9Question)
    .add(Screenings9QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9Question)
    .add(Screenings9QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9Question)
    .add(Screenings9QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9Question)
    .add(Screenings9QuestionItem6);

  let Screenings10Question = await Question.findOne({
    question:
      'Sigmoidoscopy and colonoscopy are exams in which a tube is inserted in the rectum to view the colon for signs of cancer or other health problems. Have you ever had either of these exams?',
  });
  if (!Screenings10Question) {
    Screenings10Question = await Question.create({
      question:
        'Sigmoidoscopy and colonoscopy are exams in which a tube is inserted in the rectum to view the colon for signs of cancer or other health problems. Have you ever had either of these exams?',
      stack: 6,
      stackPhrase: '',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings10QuestionItem1 = await QuestionItems.findOne({ name: 'Yes, sigmoidoscopy' });
  if (!Screenings10QuestionItem1) {
    Screenings10QuestionItem1 = await QuestionItems.create({ name: 'Yes, sigmoidoscopy', order: 0 }).save();
  }
  let Screenings10QuestionItem2 = await QuestionItems.findOne({
    name: 'Yes, colonoscopy (usually includes medication through a needle in your arm to make you sleepy)',
  });
  if (!Screenings10QuestionItem2) {
    Screenings10QuestionItem2 = await QuestionItems.create({
      name: 'Yes, colonoscopy (usually includes medication through a needle in your arm to make you sleepy)',
      order: 1,
    }).save();
  }
  let Screenings10QuestionItem3 = await QuestionItems.findOne({ name: 'Yes, both' });
  if (!Screenings10QuestionItem3) {
    Screenings10QuestionItem3 = await QuestionItems.create({ name: 'Yes, both', order: 2 }).save();
  }
  let Screenings10QuestionItem4 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings10QuestionItem4) {
    Screenings10QuestionItem4 = await QuestionItems.create({ name: 'No', order: 3 }).save();
  }
  let Screenings10QuestionItem5 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings10QuestionItem5) {
    Screenings10QuestionItem5 = await QuestionItems.create({ name: 'Do not know', order: 4 }).save();
  }
  let Screenings10QuestionItem6 = await QuestionItems.findOne({ name: 'Prefer not to answer' });
  if (!Screenings10QuestionItem6) {
    Screenings10QuestionItem6 = await QuestionItems.create({ name: 'Prefer not to answer', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings10Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings10Question)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings10Question)
    .add(Screenings10QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings10Question)
    .add(Screenings10QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings10Question)
    .add(Screenings10QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings10Question)
    .add(Screenings10QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings10Question)
    .add(Screenings10QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings10Question)
    .add(Screenings10QuestionItem6);

  let Screenings9aQuestion = await Question.findOne({ question: 'When was your MOST RECENT sigmoidoscopy?' });
  if (!Screenings9aQuestion) {
    Screenings9aQuestion = await Question.create({
      question: 'When was your MOST RECENT sigmoidoscopy?',
      stack: 6,
      stackPhrase: '',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings9aQuestionItem1 = await QuestionItems.findOne({
    name: 'Within the past year (anytime less than 12 months ago)',
  });
  if (!Screenings9aQuestionItem1) {
    Screenings9aQuestionItem1 = await QuestionItems.create({
      name: 'Within the past year (anytime less than 12 months ago)',
      order: 0,
    }).save();
  }
  let Screenings9aQuestionItem2 = await QuestionItems.findOne({
    name: 'Within the past 2 years (at least 1 year but less than 2 years ago)',
  });
  if (!Screenings9aQuestionItem2) {
    Screenings9aQuestionItem2 = await QuestionItems.create({
      name: 'Within the past 2 years (at least 1 year but less than 2 years ago)',
      order: 1,
    }).save();
  }
  let Screenings9aQuestionItem3 = await QuestionItems.findOne({
    name: 'Within the past 3 years (at least 2 years but less than 3 years ago)',
  });
  if (!Screenings9aQuestionItem3) {
    Screenings9aQuestionItem3 = await QuestionItems.create({
      name: 'Within the past 3 years (at least 2 years but less than 3 years ago)',
      order: 2,
    }).save();
  }
  let Screenings9aQuestionItem4 = await QuestionItems.findOne({
    name: 'Within the past 5 years (at least 3 years but less than 5 years ago)',
  });
  if (!Screenings9aQuestionItem4) {
    Screenings9aQuestionItem4 = await QuestionItems.create({
      name: 'Within the past 5 years (at least 3 years but less than 5 years ago)',
      order: 3,
    }).save();
  }
  let Screenings9aQuestionItem5 = await QuestionItems.findOne({
    name: 'Within the past 10 years (at least 5 years but less than 10 years ago)',
  });
  if (!Screenings9aQuestionItem5) {
    Screenings9aQuestionItem5 = await QuestionItems.create({
      name: 'Within the past 10 years (at least 5 years but less than 10 years ago)',
      order: 4,
    }).save();
  }
  let Screenings9aQuestionItem6 = await QuestionItems.findOne({ name: '10 or more years ago' });
  if (!Screenings9aQuestionItem6) {
    Screenings9aQuestionItem6 = await QuestionItems.create({ name: '10 or more years ago', order: 5 }).save();
  }
  let Screenings9aQuestionItem7 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings9aQuestionItem7) {
    Screenings9aQuestionItem7 = await QuestionItems.create({ name: 'Do not know', order: 6 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings9aQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings9aQuestion)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9aQuestion)
    .add(Screenings9aQuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9aQuestion)
    .add(Screenings9aQuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9aQuestion)
    .add(Screenings9aQuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9aQuestion)
    .add(Screenings9aQuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9aQuestion)
    .add(Screenings9aQuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9aQuestion)
    .add(Screenings9aQuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9aQuestion)
    .add(Screenings9aQuestionItem7);

  let Screenings9bQuestion = await Question.findOne({ question: 'When was your MOST RECENT colonoscopy' });
  if (!Screenings9bQuestion) {
    Screenings9bQuestion = await Question.create({
      question: 'When was your MOST RECENT colonoscopy',
      stack: 6,
      stackPhrase: '',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings9bQuestionItem1 = await QuestionItems.findOne({
    name: 'Within the past year (anytime less than 12 months ago)',
  });
  if (!Screenings9bQuestionItem1) {
    Screenings9bQuestionItem1 = await QuestionItems.create({
      name: 'Within the past year (anytime less than 12 months ago)',
      order: 0,
    }).save();
  }
  let Screenings9bQuestionItem2 = await QuestionItems.findOne({
    name: 'Within the past 2 years (at least 1 year but less than 2 years ago)',
  });
  if (!Screenings9bQuestionItem2) {
    Screenings9bQuestionItem2 = await QuestionItems.create({
      name: 'Within the past 2 years (at least 1 year but less than 2 years ago)',
      order: 1,
    }).save();
  }
  let Screenings9bQuestionItem3 = await QuestionItems.findOne({
    name: 'Within the past 3 years (at least 2 years but less than 3 years ago)',
  });
  if (!Screenings9bQuestionItem3) {
    Screenings9bQuestionItem3 = await QuestionItems.create({
      name: 'Within the past 3 years (at least 2 years but less than 3 years ago)',
      order: 2,
    }).save();
  }
  let Screenings9bQuestionItem4 = await QuestionItems.findOne({
    name: 'Within the past 5 years (at least 3 years but less than 5 years ago)',
  });
  if (!Screenings9bQuestionItem4) {
    Screenings9bQuestionItem4 = await QuestionItems.create({
      name: 'Within the past 5 years (at least 3 years but less than 5 years ago)',
      order: 3,
    }).save();
  }
  let Screenings9bQuestionItem5 = await QuestionItems.findOne({
    name: 'Within the past 10 years (at least 5 years but less than 10 years ago)',
  });
  if (!Screenings9bQuestionItem5) {
    Screenings9bQuestionItem5 = await QuestionItems.create({
      name: 'Within the past 10 years (at least 5 years but less than 10 years ago)',
      order: 4,
    }).save();
  }
  let Screenings9bQuestionItem6 = await QuestionItems.findOne({ name: '10 or more years ago' });
  if (!Screenings9bQuestionItem6) {
    Screenings9bQuestionItem6 = await QuestionItems.create({ name: '10 or more years ago', order: 5 }).save();
  }
  let Screenings9bQuestionItem7 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings9bQuestionItem7) {
    Screenings9bQuestionItem7 = await QuestionItems.create({ name: 'Do not know', order: 6 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings9bQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings9bQuestion)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9bQuestion)
    .add(Screenings9bQuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9bQuestion)
    .add(Screenings9bQuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9bQuestion)
    .add(Screenings9bQuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9bQuestion)
    .add(Screenings9bQuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9bQuestion)
    .add(Screenings9bQuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9bQuestion)
    .add(Screenings9bQuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings9bQuestion)
    .add(Screenings9bQuestionItem7);

  let Screenings11Question = await Question.findOne({
    question: 'Annually, do you have a digital rectal exam (DRE) and/or prostate specific antigen (PSA) test?',
  });
  if (!Screenings11Question) {
    Screenings11Question = await Question.create({
      question: 'Annually, do you have a digital rectal exam (DRE) and/or prostate specific antigen (PSA) test?',
      stack: 7,
      stackPhrase: '',
      placeHolder: '',
      order: 18,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings11QuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Screenings11QuestionItem1) {
    Screenings11QuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Screenings11QuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings11QuestionItem2) {
    Screenings11QuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  let Screenings11QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings11QuestionItem3) {
    Screenings11QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings11Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings11Question)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings11Question)
    .add(Screenings11QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings11Question)
    .add(Screenings11QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings11Question)
    .add(Screenings11QuestionItem3);

  let Screenings12Question = await Question.findOne({
    question:
      'A mammogram is an x-ray of each breast to look for breast cancer. Have you ever had a mammogram? [Female over the age of 40]',
  });
  if (!Screenings12Question) {
    Screenings12Question = await Question.create({
      question:
        'A mammogram is an x-ray of each breast to look for breast cancer. Have you ever had a mammogram? [Female over the age of 40]',
      stack: 7,
      stackPhrase: '',
      placeHolder: '',
      order: 19,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings12QuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Screenings12QuestionItem1) {
    Screenings12QuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Screenings12QuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings12QuestionItem2) {
    Screenings12QuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  let Screenings12QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings12QuestionItem3) {
    Screenings12QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  let Screenings12QuestionItem4 = await QuestionItems.findOne({ name: 'Prefer not to answer' });
  if (!Screenings12QuestionItem4) {
    Screenings12QuestionItem4 = await QuestionItems.create({ name: 'Prefer not to answer', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings12Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings12Question)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings12Question)
    .add(Screenings12QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings12Question)
    .add(Screenings12QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings12Question)
    .add(Screenings12QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings12Question)
    .add(Screenings12QuestionItem4);

  let Screenings13Question = await Question.findOne({
    question:
      'A pap smear test (pap smear) is a test that is done by your doctor to check your cervix for cells that are not normal and could eventually cause cervical cancer. Have you ever had a Pap test? ',
  });
  if (!Screenings13Question) {
    Screenings13Question = await Question.create({
      question:
        'A pap smear test (pap smear) is a test that is done by your doctor to check your cervix for cells that are not normal and could eventually cause cervical cancer. Have you ever had a Pap test? ',
      stack: 7,
      stackPhrase: '',
      placeHolder: '',
      order: 20,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings13QuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Screenings13QuestionItem1) {
    Screenings13QuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Screenings13QuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings13QuestionItem2) {
    Screenings13QuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  let Screenings13QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Screenings13QuestionItem3) {
    Screenings13QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  let Screenings13QuestionItem4 = await QuestionItems.findOne({ name: 'Prefer not to answer' });
  if (!Screenings13QuestionItem4) {
    Screenings13QuestionItem4 = await QuestionItems.create({ name: 'Prefer not to answer', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings13Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings13Question)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings13Question)
    .add(Screenings13QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings13Question)
    .add(Screenings13QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings13Question)
    .add(Screenings13QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings13Question)
    .add(Screenings13QuestionItem4);

  let Screenings13aQuestion = await Question.findOne({ question: 'Do you have the pap test annually? ' });
  if (!Screenings13aQuestion) {
    Screenings13aQuestion = await Question.create({
      question: 'Do you have the pap test annually? ',
      stack: 8,
      stackPhrase: '',
      placeHolder: '',
      order: 21,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings13aQuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Screenings13aQuestionItem1) {
    Screenings13aQuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Screenings13aQuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Screenings13aQuestionItem2) {
    Screenings13aQuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Screenings13aQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Screenings13aQuestion)
    .set(ScreeningsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings13aQuestion)
    .add(Screenings13aQuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Screenings13aQuestion)
    .add(Screenings13aQuestionItem2);

  let Healthcare1Question = await Question.findOne({
    question:
      'Overall, how confident are you that you could get advice or information about health or medical topics if you needed it? ',
  });
  if (!Healthcare1Question) {
    Healthcare1Question = await Question.create({
      question:
        'Overall, how confident are you that you could get advice or information about health or medical topics if you needed it? ',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Healthcare1QuestionItem1 = await QuestionItems.findOne({ name: 'Completely confident' });
  if (!Healthcare1QuestionItem1) {
    Healthcare1QuestionItem1 = await QuestionItems.create({ name: 'Completely confident', order: 0 }).save();
  }
  let Healthcare1QuestionItem2 = await QuestionItems.findOne({ name: 'Very confident' });
  if (!Healthcare1QuestionItem2) {
    Healthcare1QuestionItem2 = await QuestionItems.create({ name: 'Very confident', order: 1 }).save();
  }
  let Healthcare1QuestionItem3 = await QuestionItems.findOne({ name: 'Somewhat confident' });
  if (!Healthcare1QuestionItem3) {
    Healthcare1QuestionItem3 = await QuestionItems.create({ name: 'Somewhat confident', order: 2 }).save();
  }
  let Healthcare1QuestionItem4 = await QuestionItems.findOne({ name: 'A little confident' });
  if (!Healthcare1QuestionItem4) {
    Healthcare1QuestionItem4 = await QuestionItems.create({ name: 'A little confident', order: 3 }).save();
  }
  let Healthcare1QuestionItem5 = await QuestionItems.findOne({ name: 'Not confident at all' });
  if (!Healthcare1QuestionItem5) {
    Healthcare1QuestionItem5 = await QuestionItems.create({ name: 'Not confident at all', order: 4 }).save();
  }
  let Healthcare1QuestionItem6 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Healthcare1QuestionItem6) {
    Healthcare1QuestionItem6 = await QuestionItems.create({ name: 'Do not know', order: 5 }).save();
  }
  let Healthcare1QuestionItem7 = await QuestionItems.findOne({ name: 'Prefer not to answer' });
  if (!Healthcare1QuestionItem7) {
    Healthcare1QuestionItem7 = await QuestionItems.create({ name: 'Prefer not to answer', order: 6 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Healthcare1Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Healthcare1Question)
    .set(HealthcareSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare1Question)
    .add(Healthcare1QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare1Question)
    .add(Healthcare1QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare1Question)
    .add(Healthcare1QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare1Question)
    .add(Healthcare1QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare1Question)
    .add(Healthcare1QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare1Question)
    .add(Healthcare1QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare1Question)
    .add(Healthcare1QuestionItem7);

  let Healthcare2Question = await Question.findOne({
    question:
      'Which place do you go most often when you are sick or need professional advice about your health? Mark only one',
  });
  if (!Healthcare2Question) {
    Healthcare2Question = await Question.create({
      question:
        'Which place do you go most often when you are sick or need professional advice about your health? Mark only one',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Healthcare2QuestionItem1 = await QuestionItems.findOne({ name: 'Clinic or health center' });
  if (!Healthcare2QuestionItem1) {
    Healthcare2QuestionItem1 = await QuestionItems.create({ name: 'Clinic or health center', order: 0 }).save();
  }
  let Healthcare2QuestionItem2 = await QuestionItems.findOne({ name: 'Doctor office or HMO' });
  if (!Healthcare2QuestionItem2) {
    Healthcare2QuestionItem2 = await QuestionItems.create({ name: 'Doctor office or HMO', order: 1 }).save();
  }
  let Healthcare2QuestionItem3 = await QuestionItems.findOne({ name: 'Urgent care' });
  if (!Healthcare2QuestionItem3) {
    Healthcare2QuestionItem3 = await QuestionItems.create({ name: 'Urgent care', order: 2 }).save();
  }
  let Healthcare2QuestionItem4 = await QuestionItems.findOne({ name: 'Hospital emergency room' });
  if (!Healthcare2QuestionItem4) {
    Healthcare2QuestionItem4 = await QuestionItems.create({ name: 'Hospital emergency room', order: 3 }).save();
  }
  let Healthcare2QuestionItem5 = await QuestionItems.findOne({ name: 'Hospital outpatient department' });
  if (!Healthcare2QuestionItem5) {
    Healthcare2QuestionItem5 = await QuestionItems.create({ name: 'Hospital outpatient department', order: 4 }).save();
  }
  let Healthcare2QuestionItem6 = await QuestionItems.findOne({ name: 'Some other place' });
  if (!Healthcare2QuestionItem6) {
    Healthcare2QuestionItem6 = await QuestionItems.create({ name: 'Some other place', order: 5 }).save();
  }
  let Healthcare2QuestionItem7 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Healthcare2QuestionItem7) {
    Healthcare2QuestionItem7 = await QuestionItems.create({ name: 'Do not know', order: 6 }).save();
  }
  let Healthcare2QuestionItem8 = await QuestionItems.findOne({ name: 'Prefer not to answer' });
  if (!Healthcare2QuestionItem8) {
    Healthcare2QuestionItem8 = await QuestionItems.create({ name: 'Prefer not to answer', order: 7 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Healthcare2Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Healthcare2Question)
    .set(HealthcareSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare2Question)
    .add(Healthcare2QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare2Question)
    .add(Healthcare2QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare2Question)
    .add(Healthcare2QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare2Question)
    .add(Healthcare2QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare2Question)
    .add(Healthcare2QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare2Question)
    .add(Healthcare2QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare2Question)
    .add(Healthcare2QuestionItem7);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare2Question)
    .add(Healthcare2QuestionItem8);

  let Healthcare3Question = await Question.findOne({
    question:
      'Was there a time in the past 12 months when you needed medical care but did not get the care you needed?',
  });
  if (!Healthcare3Question) {
    Healthcare3Question = await Question.create({
      question:
        'Was there a time in the past 12 months when you needed medical care but did not get the care you needed?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Healthcare3QuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Healthcare3QuestionItem1) {
    Healthcare3QuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Healthcare3QuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Healthcare3QuestionItem2) {
    Healthcare3QuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  let Healthcare3QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Healthcare3QuestionItem3) {
    Healthcare3QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  let Healthcare3QuestionItem4 = await QuestionItems.findOne({ name: 'Prefer not to answer' });
  if (!Healthcare3QuestionItem4) {
    Healthcare3QuestionItem4 = await QuestionItems.create({ name: 'Prefer not to answer', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Healthcare3Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Healthcare3Question)
    .set(HealthcareSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare3Question)
    .add(Healthcare3QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare3Question)
    .add(Healthcare3QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare3Question)
    .add(Healthcare3QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare3Question)
    .add(Healthcare3QuestionItem4);

  let Healthcare4Question = await Question.findOne({
    question: 'What is the main reason you didn’t get the medical care you needed? Mark only one',
  });
  if (!Healthcare4Question) {
    Healthcare4Question = await Question.create({
      question: 'What is the main reason you didn’t get the medical care you needed? Mark only one',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 3,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Healthcare4QuestionItem1 = await QuestionItems.findOne({ name: 'Can not afford it / costs too much' });
  if (!Healthcare4QuestionItem1) {
    Healthcare4QuestionItem1 = await QuestionItems.create({
      name: 'Can not afford it / costs too much',
      order: 0,
    }).save();
  }
  let Healthcare4QuestionItem2 = await QuestionItems.findOne({ name: 'Do not have insurance' });
  if (!Healthcare4QuestionItem2) {
    Healthcare4QuestionItem2 = await QuestionItems.create({ name: 'Do not have insurance', order: 1 }).save();
  }
  let Healthcare4QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know where to go' });
  if (!Healthcare4QuestionItem3) {
    Healthcare4QuestionItem3 = await QuestionItems.create({ name: 'Do not know where to go', order: 2 }).save();
  }
  let Healthcare4QuestionItem4 = await QuestionItems.findOne({ name: 'Trouble getting appointment' });
  if (!Healthcare4QuestionItem4) {
    Healthcare4QuestionItem4 = await QuestionItems.create({ name: 'Trouble getting appointment', order: 3 }).save();
  }
  let Healthcare4QuestionItem5 = await QuestionItems.findOne({
    name: 'Unable to take time off work to go to appointment',
  });
  if (!Healthcare4QuestionItem5) {
    Healthcare4QuestionItem5 = await QuestionItems.create({
      name: 'Unable to take time off work to go to appointment',
      order: 4,
    }).save();
  }
  let Healthcare4QuestionItem6 = await QuestionItems.findOne({ name: 'Other' });
  if (!Healthcare4QuestionItem6) {
    Healthcare4QuestionItem6 = await QuestionItems.create({ name: 'Other', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Healthcare4Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Healthcare4Question)
    .set(HealthcareSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare4Question)
    .add(Healthcare4QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare4Question)
    .add(Healthcare4QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare4Question)
    .add(Healthcare4QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare4Question)
    .add(Healthcare4QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare4Question)
    .add(Healthcare4QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare4Question)
    .add(Healthcare4QuestionItem6);

  let Healthcare5Question = await Question.findOne({
    question:
      'Do you have any kind of health care coverage, including health insurance, prepaid plans such as HMOs, and/or government plans such as Medicare, Medicaid, or Indian Health Service?',
  });
  if (!Healthcare5Question) {
    Healthcare5Question = await Question.create({
      question:
        'Do you have any kind of health care coverage, including health insurance, prepaid plans such as HMOs, and/or government plans such as Medicare, Medicaid, or Indian Health Service?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Healthcare5QuestionItem1 = await QuestionItems.findOne({ name: 'Yes' });
  if (!Healthcare5QuestionItem1) {
    Healthcare5QuestionItem1 = await QuestionItems.create({ name: 'Yes', order: 0 }).save();
  }
  let Healthcare5QuestionItem2 = await QuestionItems.findOne({ name: 'No' });
  if (!Healthcare5QuestionItem2) {
    Healthcare5QuestionItem2 = await QuestionItems.create({ name: 'No', order: 1 }).save();
  }
  let Healthcare5QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Healthcare5QuestionItem3) {
    Healthcare5QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Healthcare5Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Healthcare5Question)
    .set(HealthcareSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare5Question)
    .add(Healthcare5QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare5Question)
    .add(Healthcare5QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare5Question)
    .add(Healthcare5QuestionItem3);

  let Healthcare6Question = await Question.findOne({
    question: 'What is the primary source of your health care coverage?',
  });
  if (!Healthcare6Question) {
    Healthcare6Question = await Question.create({
      question: 'What is the primary source of your health care coverage?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 5,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Healthcare6QuestionItem1 = await QuestionItems.findOne({
    name: 'A plan purchased through an employer or union (including plans purchased through another persons employer)',
  });
  if (!Healthcare6QuestionItem1) {
    Healthcare6QuestionItem1 = await QuestionItems.create({
      name:
        'A plan purchased through an employer or union (including plans purchased through another persons employer)',
      order: 0,
    }).save();
  }
  let Healthcare6QuestionItem2 = await QuestionItems.findOne({
    name: 'A plan that you or another family member buys on your own',
  });
  if (!Healthcare6QuestionItem2) {
    Healthcare6QuestionItem2 = await QuestionItems.create({
      name: 'A plan that you or another family member buys on your own',
      order: 1,
    }).save();
  }
  let Healthcare6QuestionItem3 = await QuestionItems.findOne({ name: 'Medicare' });
  if (!Healthcare6QuestionItem3) {
    Healthcare6QuestionItem3 = await QuestionItems.create({ name: 'Medicare', order: 2 }).save();
  }
  let Healthcare6QuestionItem4 = await QuestionItems.findOne({ name: 'Medicaid or other state program' });
  if (!Healthcare6QuestionItem4) {
    Healthcare6QuestionItem4 = await QuestionItems.create({ name: 'Medicaid or other state program', order: 3 }).save();
  }
  let Healthcare6QuestionItem5 = await QuestionItems.findOne({ name: 'TRICARE (formerly CHAMPUS), VA, or Military' });
  if (!Healthcare6QuestionItem5) {
    Healthcare6QuestionItem5 = await QuestionItems.create({
      name: 'TRICARE (formerly CHAMPUS), VA, or Military',
      order: 4,
    }).save();
  }
  let Healthcare6QuestionItem6 = await QuestionItems.findOne({
    name: 'Alaska Native, Indian Health Service, Tribal Health Services',
  });
  if (!Healthcare6QuestionItem6) {
    Healthcare6QuestionItem6 = await QuestionItems.create({
      name: 'Alaska Native, Indian Health Service, Tribal Health Services',
      order: 5,
    }).save();
  }
  let Healthcare6QuestionItem7 = await QuestionItems.findOne({
    name: 'Other source (please specify) [OPEN END TEXT BOX; ALLOW MAX 50 CHARACTERS]',
  });
  if (!Healthcare6QuestionItem7) {
    Healthcare6QuestionItem7 = await QuestionItems.create({
      name: 'Other source (please specify) [OPEN END TEXT BOX; ALLOW MAX 50 CHARACTERS]',
      order: 6,
    }).save();
  }
  let Healthcare6QuestionItem8 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!Healthcare6QuestionItem8) {
    Healthcare6QuestionItem8 = await QuestionItems.create({ name: 'Do not know', order: 7 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Healthcare6Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Healthcare6Question)
    .set(HealthcareSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare6Question)
    .add(Healthcare6QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare6Question)
    .add(Healthcare6QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare6Question)
    .add(Healthcare6QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare6Question)
    .add(Healthcare6QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare6Question)
    .add(Healthcare6QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare6Question)
    .add(Healthcare6QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare6Question)
    .add(Healthcare6QuestionItem7);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Healthcare6Question)
    .add(Healthcare6QuestionItem8);

  let Utilization1Question = await Question.findOne({
    question: 'Do you have a regular doctor or regular practice you usually go to for health care?',
  });
  if (!Utilization1Question) {
    Utilization1Question = await Question.create({
      question: 'Do you have a regular doctor or regular practice you usually go to for health care?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Utilization1QuestionItem1 = await QuestionItems.findOne({ name: 'Yes, a regular doctor' });
  if (!Utilization1QuestionItem1) {
    Utilization1QuestionItem1 = await QuestionItems.create({ name: 'Yes, a regular doctor', order: 0 }).save();
  }
  let Utilization1QuestionItem2 = await QuestionItems.findOne({ name: 'A regular practice, but not a regular doctor' });
  if (!Utilization1QuestionItem2) {
    Utilization1QuestionItem2 = await QuestionItems.create({
      name: 'A regular practice, but not a regular doctor',
      order: 1,
    }).save();
  }
  let Utilization1QuestionItem3 = await QuestionItems.findOne({ name: 'No regular doctor or regular practice' });
  if (!Utilization1QuestionItem3) {
    Utilization1QuestionItem3 = await QuestionItems.create({
      name: 'No regular doctor or regular practice',
      order: 2,
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Utilization1Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Utilization1Question)
    .set(UtilizationSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization1Question)
    .add(Utilization1QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization1Question)
    .add(Utilization1QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization1Question)
    .add(Utilization1QuestionItem3);

  let Utilization2Question = await Question.findOne({
    question:
      'About how many times have you seen a medical doctor or other health care professional in the past 24 months (2 years) either for a periodic health examination or for treatment of a health problem?',
  });
  if (!Utilization2Question) {
    Utilization2Question = await Question.create({
      question:
        'About how many times have you seen a medical doctor or other health care professional in the past 24 months (2 years) either for a periodic health examination or for treatment of a health problem?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '1',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Utilization2Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Utilization2Question)
    .set(UtilizationSubSection);

  let Utilization3Question = await Question.findOne({
    question: 'How many different prescription medications do you take in a typical day for chronic health problems?',
  });
  if (!Utilization3Question) {
    Utilization3Question = await Question.create({
      question: 'How many different prescription medications do you take in a typical day for chronic health problems?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '4',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Utilization3Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Utilization3Question)
    .set(UtilizationSubSection);

  let Utilization4Question = await Question.findOne({ question: 'Do you take birth control?' });
  if (!Utilization4Question) {
    Utilization4Question = await Question.create({
      question: 'Do you take birth control?',
      stack: 2,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Utilization4Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Utilization4Question)
    .set(UtilizationSubSection);

  let Utilization5Question = await Question.findOne({
    question:
      'Have you been prescribed opioid medication or placed on opioid therapy for a temporary (short term) condition in the past 24 months? Note: Opioid medications include OxyContin, hydrocodone, methadone, Demerol, Percocet, Hydromorphone',
  });
  if (!Utilization5Question) {
    Utilization5Question = await Question.create({
      question:
        'Have you been prescribed opioid medication or placed on opioid therapy for a temporary (short term) condition in the past 24 months? Note: Opioid medications include OxyContin, hydrocodone, methadone, Demerol, Percocet, Hydromorphone',
      stack: 2,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Utilization5Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Utilization5Question)
    .set(UtilizationSubSection);

  let Utilization6Question = await Question.findOne({
    question:
      'Have you been prescribed benzodiazepines or placed on benzodiazepine therapy for a temporary (short term) condition in the past 24 months? Note: Benzodiazepine medications include midazolam, alprazolam, diazepam',
  });
  if (!Utilization6Question) {
    Utilization6Question = await Question.create({
      question:
        'Have you been prescribed benzodiazepines or placed on benzodiazepine therapy for a temporary (short term) condition in the past 24 months? Note: Benzodiazepine medications include midazolam, alprazolam, diazepam',
      stack: 3,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Utilization6Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Utilization6Question)
    .set(UtilizationSubSection);

  let Utilization7Question = await Question.findOne({
    question: 'Do you take vitamins or dietary supplements on a daily basis? ',
  });
  if (!Utilization7Question) {
    Utilization7Question = await Question.create({
      question: 'Do you take vitamins or dietary supplements on a daily basis? ',
      stack: 3,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Utilization7Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Utilization7Question)
    .set(UtilizationSubSection);

  let Utilization8Question = await Question.findOne({
    question: 'Take the medication at the exact time of day you’re told?',
  });
  if (!Utilization8Question) {
    Utilization8Question = await Question.create({
      question: 'Take the medication at the exact time of day you’re told?',
      stack: 4,
      stackPhrase:
        'When you get a prescription from a health care provider, how often do you do each of the following things?',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Utilization8QuestionItem1 = await QuestionItems.findOne({ name: 'None of the time' });
  if (!Utilization8QuestionItem1) {
    Utilization8QuestionItem1 = await QuestionItems.create({ name: 'None of the time', order: 0 }).save();
  }
  let Utilization8QuestionItem2 = await QuestionItems.findOne({ name: 'A little of the time' });
  if (!Utilization8QuestionItem2) {
    Utilization8QuestionItem2 = await QuestionItems.create({ name: 'A little of the time', order: 1 }).save();
  }
  let Utilization8QuestionItem3 = await QuestionItems.findOne({ name: 'Some of the time' });
  if (!Utilization8QuestionItem3) {
    Utilization8QuestionItem3 = await QuestionItems.create({ name: 'Some of the time', order: 2 }).save();
  }
  let Utilization8QuestionItem4 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!Utilization8QuestionItem4) {
    Utilization8QuestionItem4 = await QuestionItems.create({ name: 'Most of the time', order: 3 }).save();
  }
  let Utilization8QuestionItem5 = await QuestionItems.findOne({ name: 'All or almost all of the time' });
  if (!Utilization8QuestionItem5) {
    Utilization8QuestionItem5 = await QuestionItems.create({ name: 'All or almost all of the time', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Utilization8Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Utilization8Question)
    .set(UtilizationSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization8Question)
    .add(Utilization8QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization8Question)
    .add(Utilization8QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization8Question)
    .add(Utilization8QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization8Question)
    .add(Utilization8QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization8Question)
    .add(Utilization8QuestionItem5);

  let Utilization9Question = await Question.findOne({
    question: 'Take the medication for exactly the number of days you’re told',
  });
  if (!Utilization9Question) {
    Utilization9Question = await Question.create({
      question: 'Take the medication for exactly the number of days you’re told',
      stack: 4,
      stackPhrase: '',
      placeHolder: '',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Utilization9QuestionItem1 = await QuestionItems.findOne({ name: 'None of the time' });
  if (!Utilization9QuestionItem1) {
    Utilization9QuestionItem1 = await QuestionItems.create({ name: 'None of the time', order: 0 }).save();
  }
  let Utilization9QuestionItem2 = await QuestionItems.findOne({ name: 'A little of the time' });
  if (!Utilization9QuestionItem2) {
    Utilization9QuestionItem2 = await QuestionItems.create({ name: 'A little of the time', order: 1 }).save();
  }
  let Utilization9QuestionItem3 = await QuestionItems.findOne({ name: 'Some of the time' });
  if (!Utilization9QuestionItem3) {
    Utilization9QuestionItem3 = await QuestionItems.create({ name: 'Some of the time', order: 2 }).save();
  }
  let Utilization9QuestionItem4 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!Utilization9QuestionItem4) {
    Utilization9QuestionItem4 = await QuestionItems.create({ name: 'Most of the time', order: 3 }).save();
  }
  let Utilization9QuestionItem5 = await QuestionItems.findOne({ name: 'All or almost all of the time' });
  if (!Utilization9QuestionItem5) {
    Utilization9QuestionItem5 = await QuestionItems.create({ name: 'All or almost all of the time', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Utilization9Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Utilization9Question)
    .set(UtilizationSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization9Question)
    .add(Utilization9QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization9Question)
    .add(Utilization9QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization9Question)
    .add(Utilization9QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization9Question)
    .add(Utilization9QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization9Question)
    .add(Utilization9QuestionItem5);

  let Utilization10Question = await Question.findOne({ question: 'Forget to take a dose?' });
  if (!Utilization10Question) {
    Utilization10Question = await Question.create({
      question: 'Forget to take a dose?',
      stack: 4,
      stackPhrase: '',
      placeHolder: '',
      order: 3,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Utilization10QuestionItem1 = await QuestionItems.findOne({ name: 'None of the time' });
  if (!Utilization10QuestionItem1) {
    Utilization10QuestionItem1 = await QuestionItems.create({ name: 'None of the time', order: 0 }).save();
  }
  let Utilization10QuestionItem2 = await QuestionItems.findOne({ name: 'A little of the time' });
  if (!Utilization10QuestionItem2) {
    Utilization10QuestionItem2 = await QuestionItems.create({ name: 'A little of the time', order: 1 }).save();
  }
  let Utilization10QuestionItem3 = await QuestionItems.findOne({ name: 'Some of the time' });
  if (!Utilization10QuestionItem3) {
    Utilization10QuestionItem3 = await QuestionItems.create({ name: 'Some of the time', order: 2 }).save();
  }
  let Utilization10QuestionItem4 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!Utilization10QuestionItem4) {
    Utilization10QuestionItem4 = await QuestionItems.create({ name: 'Most of the time', order: 3 }).save();
  }
  let Utilization10QuestionItem5 = await QuestionItems.findOne({ name: 'All or almost all of the time' });
  if (!Utilization10QuestionItem5) {
    Utilization10QuestionItem5 = await QuestionItems.create({ name: 'All or almost all of the time', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Utilization10Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Utilization10Question)
    .set(UtilizationSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization10Question)
    .add(Utilization10QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization10Question)
    .add(Utilization10QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization10Question)
    .add(Utilization10QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization10Question)
    .add(Utilization10QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization10Question)
    .add(Utilization10QuestionItem5);

  let Utilization11Question = await Question.findOne({
    question:
      'Stop taking it when you feel better even if the doctor told you to continue until the medication ran out?',
  });
  if (!Utilization11Question) {
    Utilization11Question = await Question.create({
      question:
        'Stop taking it when you feel better even if the doctor told you to continue until the medication ran out?',
      stack: 4,
      stackPhrase: '',
      placeHolder: '',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Utilization11QuestionItem1 = await QuestionItems.findOne({ name: 'None of the time' });
  if (!Utilization11QuestionItem1) {
    Utilization11QuestionItem1 = await QuestionItems.create({ name: 'None of the time', order: 0 }).save();
  }
  let Utilization11QuestionItem2 = await QuestionItems.findOne({ name: 'A little of the time' });
  if (!Utilization11QuestionItem2) {
    Utilization11QuestionItem2 = await QuestionItems.create({ name: 'A little of the time', order: 1 }).save();
  }
  let Utilization11QuestionItem3 = await QuestionItems.findOne({ name: 'Some of the time' });
  if (!Utilization11QuestionItem3) {
    Utilization11QuestionItem3 = await QuestionItems.create({ name: 'Some of the time', order: 2 }).save();
  }
  let Utilization11QuestionItem4 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!Utilization11QuestionItem4) {
    Utilization11QuestionItem4 = await QuestionItems.create({ name: 'Most of the time', order: 3 }).save();
  }
  let Utilization11QuestionItem5 = await QuestionItems.findOne({ name: 'All or almost all of the time' });
  if (!Utilization11QuestionItem5) {
    Utilization11QuestionItem5 = await QuestionItems.create({ name: 'All or almost all of the time', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Utilization11Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Utilization11Question)
    .set(UtilizationSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization11Question)
    .add(Utilization11QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization11Question)
    .add(Utilization11QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization11Question)
    .add(Utilization11QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization11Question)
    .add(Utilization11QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Utilization11Question)
    .add(Utilization11QuestionItem5);

  let OralHealth1Question = await Question.findOne({ question: 'Brush your teeth? ' });
  if (!OralHealth1Question) {
    OralHealth1Question = await Question.create({
      question: 'Brush your teeth? ',
      stack: 0,
      stackPhrase: 'How many days in a typical week do you do each of the following?',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let OralHealth1QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!OralHealth1QuestionItem1) {
    OralHealth1QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let OralHealth1QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!OralHealth1QuestionItem2) {
    OralHealth1QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let OralHealth1QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!OralHealth1QuestionItem3) {
    OralHealth1QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let OralHealth1QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!OralHealth1QuestionItem4) {
    OralHealth1QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let OralHealth1QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!OralHealth1QuestionItem5) {
    OralHealth1QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let OralHealth1QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!OralHealth1QuestionItem6) {
    OralHealth1QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  let OralHealth1QuestionItem7 = await QuestionItems.findOne({ name: '6' });
  if (!OralHealth1QuestionItem7) {
    OralHealth1QuestionItem7 = await QuestionItems.create({ name: '6', order: 6 }).save();
  }
  let OralHealth1QuestionItem8 = await QuestionItems.findOne({ name: '7' });
  if (!OralHealth1QuestionItem8) {
    OralHealth1QuestionItem8 = await QuestionItems.create({ name: '7', order: 7 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(OralHealth1Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(OralHealth1Question)
    .set(OralHealthSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth1Question)
    .add(OralHealth1QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth1Question)
    .add(OralHealth1QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth1Question)
    .add(OralHealth1QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth1Question)
    .add(OralHealth1QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth1Question)
    .add(OralHealth1QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth1Question)
    .add(OralHealth1QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth1Question)
    .add(OralHealth1QuestionItem7);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth1Question)
    .add(OralHealth1QuestionItem8);

  let OralHealth2Question = await Question.findOne({
    question:
      'Use dental floss or some other device (e.g., special brushes, picks, sticks, or a water pick) to clean between your teeth?',
  });
  if (!OralHealth2Question) {
    OralHealth2Question = await Question.create({
      question:
        'Use dental floss or some other device (e.g., special brushes, picks, sticks, or a water pick) to clean between your teeth?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let OralHealth2QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!OralHealth2QuestionItem1) {
    OralHealth2QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let OralHealth2QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!OralHealth2QuestionItem2) {
    OralHealth2QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let OralHealth2QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!OralHealth2QuestionItem3) {
    OralHealth2QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let OralHealth2QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!OralHealth2QuestionItem4) {
    OralHealth2QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let OralHealth2QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!OralHealth2QuestionItem5) {
    OralHealth2QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let OralHealth2QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!OralHealth2QuestionItem6) {
    OralHealth2QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  let OralHealth2QuestionItem7 = await QuestionItems.findOne({ name: '6' });
  if (!OralHealth2QuestionItem7) {
    OralHealth2QuestionItem7 = await QuestionItems.create({ name: '6', order: 6 }).save();
  }
  let OralHealth2QuestionItem8 = await QuestionItems.findOne({ name: '7' });
  if (!OralHealth2QuestionItem8) {
    OralHealth2QuestionItem8 = await QuestionItems.create({ name: '7', order: 7 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(OralHealth2Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(OralHealth2Question)
    .set(OralHealthSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth2Question)
    .add(OralHealth2QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth2Question)
    .add(OralHealth2QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth2Question)
    .add(OralHealth2QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth2Question)
    .add(OralHealth2QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth2Question)
    .add(OralHealth2QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth2Question)
    .add(OralHealth2QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth2Question)
    .add(OralHealth2QuestionItem7);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth2Question)
    .add(OralHealth2QuestionItem8);

  let OralHealth3Question = await Question.findOne({ question: 'Use mouthwash or mouth rinse?' });
  if (!OralHealth3Question) {
    OralHealth3Question = await Question.create({
      question: 'Use mouthwash or mouth rinse?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let OralHealth3QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!OralHealth3QuestionItem1) {
    OralHealth3QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let OralHealth3QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!OralHealth3QuestionItem2) {
    OralHealth3QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let OralHealth3QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!OralHealth3QuestionItem3) {
    OralHealth3QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let OralHealth3QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!OralHealth3QuestionItem4) {
    OralHealth3QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let OralHealth3QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!OralHealth3QuestionItem5) {
    OralHealth3QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let OralHealth3QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!OralHealth3QuestionItem6) {
    OralHealth3QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  let OralHealth3QuestionItem7 = await QuestionItems.findOne({ name: '6' });
  if (!OralHealth3QuestionItem7) {
    OralHealth3QuestionItem7 = await QuestionItems.create({ name: '6', order: 6 }).save();
  }
  let OralHealth3QuestionItem8 = await QuestionItems.findOne({ name: '7' });
  if (!OralHealth3QuestionItem8) {
    OralHealth3QuestionItem8 = await QuestionItems.create({ name: '7', order: 7 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(OralHealth3Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(OralHealth3Question)
    .set(OralHealthSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth3Question)
    .add(OralHealth3QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth3Question)
    .add(OralHealth3QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth3Question)
    .add(OralHealth3QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth3Question)
    .add(OralHealth3QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth3Question)
    .add(OralHealth3QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth3Question)
    .add(OralHealth3QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth3Question)
    .add(OralHealth3QuestionItem7);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth3Question)
    .add(OralHealth3QuestionItem8);

  let OralHealth4Question = await Question.findOne({
    question: 'How many times per day do you usually brush your teeth?',
  });
  if (!OralHealth4Question) {
    OralHealth4Question = await Question.create({
      question: 'How many times per day do you usually brush your teeth?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '3',
      order: 3,
      inputConfirmation: 'Numerical',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(OralHealth4Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(OralHealth4Question)
    .set(OralHealthSubSection);

  let OralHealth5Question = await Question.findOne({
    question:
      'About how many times have you seen a medical doctor or other health care professional in the past 24 months (2 years) either for a periodic health examination or for treatment of a health problem? ',
  });
  if (!OralHealth5Question) {
    OralHealth5Question = await Question.create({
      question:
        'About how many times have you seen a medical doctor or other health care professional in the past 24 months (2 years) either for a periodic health examination or for treatment of a health problem? ',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let OralHealth5QuestionItem1 = await QuestionItems.findOne({ name: 'Always use a tooth cleaning agent' });
  if (!OralHealth5QuestionItem1) {
    OralHealth5QuestionItem1 = await QuestionItems.create({
      name: 'Always use a tooth cleaning agent',
      order: 0,
    }).save();
  }
  let OralHealth5QuestionItem2 = await QuestionItems.findOne({ name: 'Most of the time use a tooth cleaning agent' });
  if (!OralHealth5QuestionItem2) {
    OralHealth5QuestionItem2 = await QuestionItems.create({
      name: 'Most of the time use a tooth cleaning agent',
      order: 1,
    }).save();
  }
  let OralHealth5QuestionItem3 = await QuestionItems.findOne({
    name: 'About half the time use a tooth cleaning agent',
  });
  if (!OralHealth5QuestionItem3) {
    OralHealth5QuestionItem3 = await QuestionItems.create({
      name: 'About half the time use a tooth cleaning agent',
      order: 2,
    }).save();
  }
  let OralHealth5QuestionItem4 = await QuestionItems.findOne({ name: 'Sometimes use a tooth cleaning agent' });
  if (!OralHealth5QuestionItem4) {
    OralHealth5QuestionItem4 = await QuestionItems.create({
      name: 'Sometimes use a tooth cleaning agent',
      order: 3,
    }).save();
  }
  let OralHealth5QuestionItem5 = await QuestionItems.findOne({
    name: 'Never use a tooth cleaning agent (i.e., always use only water)',
  });
  if (!OralHealth5QuestionItem5) {
    OralHealth5QuestionItem5 = await QuestionItems.create({
      name: 'Never use a tooth cleaning agent (i.e., always use only water)',
      order: 4,
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(OralHealth5Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(OralHealth5Question)
    .set(OralHealthSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth5Question)
    .add(OralHealth5QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth5Question)
    .add(OralHealth5QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth5Question)
    .add(OralHealth5QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth5Question)
    .add(OralHealth5QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth5Question)
    .add(OralHealth5QuestionItem5);

  let OralHealth6Question = await Question.findOne({
    question:
      'How many times a day do you usually use dental floss or some other device (e.g., special brushes, picks, sticks, or a water pick) to clean between your teeth?',
  });
  if (!OralHealth6Question) {
    OralHealth6Question = await Question.create({
      question:
        'How many times a day do you usually use dental floss or some other device (e.g., special brushes, picks, sticks, or a water pick) to clean between your teeth?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '3',
      order: 5,
      inputConfirmation: 'Numerical',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(OralHealth6Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(OralHealth6Question)
    .set(OralHealthSubSection);

  let OralHealth7Question = await Question.findOne({
    question:
      'On the days you use it, how; ALL OTHERS: How many times a day do you usually use mouthwash or mouth rinse?',
  });
  if (!OralHealth7Question) {
    OralHealth7Question = await Question.create({
      question:
        'On the days you use it, how; ALL OTHERS: How many times a day do you usually use mouthwash or mouth rinse?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '2',
      order: 6,
      inputConfirmation: 'Numerical',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(OralHealth7Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(OralHealth7Question)
    .set(OralHealthSubSection);

  let OralHealth8Question = await Question.findOne({
    question: 'Do you have a regular dentist or regular practice you usually go to for oral health?',
  });
  if (!OralHealth8Question) {
    OralHealth8Question = await Question.create({
      question: 'Do you have a regular dentist or regular practice you usually go to for oral health?',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 7,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let OralHealth8QuestionItem1 = await QuestionItems.findOne({ name: 'Yes, a regular dentist' });
  if (!OralHealth8QuestionItem1) {
    OralHealth8QuestionItem1 = await QuestionItems.create({ name: 'Yes, a regular dentist', order: 0 }).save();
  }
  let OralHealth8QuestionItem2 = await QuestionItems.findOne({ name: 'A regular practice, but not a regular dentist' });
  if (!OralHealth8QuestionItem2) {
    OralHealth8QuestionItem2 = await QuestionItems.create({
      name: 'A regular practice, but not a regular dentist',
      order: 1,
    }).save();
  }
  let OralHealth8QuestionItem3 = await QuestionItems.findOne({ name: 'No regular doctor or regular practice' });
  if (!OralHealth8QuestionItem3) {
    OralHealth8QuestionItem3 = await QuestionItems.create({
      name: 'No regular doctor or regular practice',
      order: 2,
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(OralHealth8Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(OralHealth8Question)
    .set(OralHealthSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth8Question)
    .add(OralHealth8QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth8Question)
    .add(OralHealth8QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth8Question)
    .add(OralHealth8QuestionItem3);

  let OralHealth9Question = await Question.findOne({ question: 'How often do you get a cleaning?' });
  if (!OralHealth9Question) {
    OralHealth9Question = await Question.create({
      question: 'How often do you get a cleaning?',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 8,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let OralHealth9QuestionItem1 = await QuestionItems.findOne({ name: 'Twice a year' });
  if (!OralHealth9QuestionItem1) {
    OralHealth9QuestionItem1 = await QuestionItems.create({ name: 'Twice a year', order: 0 }).save();
  }
  let OralHealth9QuestionItem2 = await QuestionItems.findOne({ name: 'Once a year' });
  if (!OralHealth9QuestionItem2) {
    OralHealth9QuestionItem2 = await QuestionItems.create({ name: 'Once a year', order: 1 }).save();
  }
  let OralHealth9QuestionItem3 = await QuestionItems.findOne({ name: 'Every other year' });
  if (!OralHealth9QuestionItem3) {
    OralHealth9QuestionItem3 = await QuestionItems.create({ name: 'Every other year', order: 2 }).save();
  }
  let OralHealth9QuestionItem4 = await QuestionItems.findOne({ name: 'Rarely' });
  if (!OralHealth9QuestionItem4) {
    OralHealth9QuestionItem4 = await QuestionItems.create({ name: 'Rarely', order: 3 }).save();
  }
  let OralHealth9QuestionItem5 = await QuestionItems.findOne({ name: 'Never' });
  if (!OralHealth9QuestionItem5) {
    OralHealth9QuestionItem5 = await QuestionItems.create({ name: 'Never', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(OralHealth9Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(OralHealth9Question)
    .set(OralHealthSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth9Question)
    .add(OralHealth9QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth9Question)
    .add(OralHealth9QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth9Question)
    .add(OralHealth9QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth9Question)
    .add(OralHealth9QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(OralHealth9Question)
    .add(OralHealth9QuestionItem5);

  let HealthBehaviors1Question = await Question.findOne({
    question:
      ' Have you ever used any tobacco products (such as cigarettes, e-cigarettes, cigars, pipes, smokeless tobacco, or hookah?)',
  });
  if (!HealthBehaviors1Question) {
    HealthBehaviors1Question = await Question.create({
      question:
        ' Have you ever used any tobacco products (such as cigarettes, e-cigarettes, cigars, pipes, smokeless tobacco, or hookah?)',
      stack: 0,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors1Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors1Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors2Question = await Question.findOne({
    question: 'Have you smoked at least 100 cigarettes in your entire life?',
  });
  if (!HealthBehaviors2Question) {
    HealthBehaviors2Question = await Question.create({
      question: 'Have you smoked at least 100 cigarettes in your entire life?',
      stack: 0,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors2Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors2Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors3Question = await Question.findOne({
    question: 'Do you now smoke cigarettes every day, some days, or not at all?',
  });
  if (!HealthBehaviors3Question) {
    HealthBehaviors3Question = await Question.create({
      question: 'Do you now smoke cigarettes every day, some days, or not at all?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors3QuestionItem1 = await QuestionItems.findOne({ name: 'Every day' });
  if (!HealthBehaviors3QuestionItem1) {
    HealthBehaviors3QuestionItem1 = await QuestionItems.create({ name: 'Every day', order: 0 }).save();
  }
  let HealthBehaviors3QuestionItem2 = await QuestionItems.findOne({ name: 'Some days' });
  if (!HealthBehaviors3QuestionItem2) {
    HealthBehaviors3QuestionItem2 = await QuestionItems.create({ name: 'Some days', order: 1 }).save();
  }
  let HealthBehaviors3QuestionItem3 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!HealthBehaviors3QuestionItem3) {
    HealthBehaviors3QuestionItem3 = await QuestionItems.create({ name: 'Not at all', order: 2 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors3Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors3Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors3Question)
    .add(HealthBehaviors3QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors3Question)
    .add(HealthBehaviors3QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors3Question)
    .add(HealthBehaviors3QuestionItem3);

  let HealthBehaviors4Question = await Question.findOne({ question: 'How long have you smoked cigarettes?' });
  if (!HealthBehaviors4Question) {
    HealthBehaviors4Question = await Question.create({
      question: 'How long have you smoked cigarettes?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 3,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors4QuestionItem1 = await QuestionItems.findOne({ name: 'Years' });
  if (!HealthBehaviors4QuestionItem1) {
    HealthBehaviors4QuestionItem1 = await QuestionItems.create({ name: 'Years', order: 0 }).save();
  }
  let HealthBehaviors4QuestionItem2 = await QuestionItems.findOne({ name: 'Months' });
  if (!HealthBehaviors4QuestionItem2) {
    HealthBehaviors4QuestionItem2 = await QuestionItems.create({ name: 'Months', order: 1 }).save();
  }
  let HealthBehaviors4QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!HealthBehaviors4QuestionItem3) {
    HealthBehaviors4QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order: 2 }).save();
  }
  let HealthBehaviors4QuestionItem4 = await QuestionItems.findOne({ name: 'Prefer not to answer' });
  if (!HealthBehaviors4QuestionItem4) {
    HealthBehaviors4QuestionItem4 = await QuestionItems.create({ name: 'Prefer not to answer', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors4Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors4Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors4Question)
    .add(HealthBehaviors4QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors4Question)
    .add(HealthBehaviors4QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors4Question)
    .add(HealthBehaviors4QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors4Question)
    .add(HealthBehaviors4QuestionItem4);

  let HealthBehaviors5Question = await Question.findOne({
    question:
      'Have you EVER used any tobacco product other than regular cigarettes and E-cigarettes (such as a regular cigar or cigarillo, a regular pipe filled with tobacco, a water pipe or hookah pipe filled with tobacco, smokeless or dissolvable tobacco) EVEN ONE TIME?',
  });
  if (!HealthBehaviors5Question) {
    HealthBehaviors5Question = await Question.create({
      question:
        'Have you EVER used any tobacco product other than regular cigarettes and E-cigarettes (such as a regular cigar or cigarillo, a regular pipe filled with tobacco, a water pipe or hookah pipe filled with tobacco, smokeless or dissolvable tobacco) EVEN ONE TIME?',
      stack: 1,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors5Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors5Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors6Question = await Question.findOne({
    question:
      'Do you now use any tobacco product other than regular cigarettes and E-cigarettes every day, some days, or not at all?',
  });
  if (!HealthBehaviors6Question) {
    HealthBehaviors6Question = await Question.create({
      question:
        'Do you now use any tobacco product other than regular cigarettes and E-cigarettes every day, some days, or not at all?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 5,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors6QuestionItem1 = await QuestionItems.findOne({ name: 'Every day' });
  if (!HealthBehaviors6QuestionItem1) {
    HealthBehaviors6QuestionItem1 = await QuestionItems.create({ name: 'Every day', order: 0 }).save();
  }
  let HealthBehaviors6QuestionItem2 = await QuestionItems.findOne({ name: 'Some days' });
  if (!HealthBehaviors6QuestionItem2) {
    HealthBehaviors6QuestionItem2 = await QuestionItems.create({ name: 'Some days', order: 1 }).save();
  }
  let HealthBehaviors6QuestionItem3 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!HealthBehaviors6QuestionItem3) {
    HealthBehaviors6QuestionItem3 = await QuestionItems.create({ name: 'Not at all', order: 2 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors6Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors6Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors6Question)
    .add(HealthBehaviors6QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors6Question)
    .add(HealthBehaviors6QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors6Question)
    .add(HealthBehaviors6QuestionItem3);

  let HealthBehaviors7Question = await Question.findOne({ question: 'Have you EVER used E-cigarettes EVEN ONE TIME?' });
  if (!HealthBehaviors7Question) {
    HealthBehaviors7Question = await Question.create({
      question: 'Have you EVER used E-cigarettes EVEN ONE TIME?',
      stack: 2,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 6,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors7Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors7Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors8Question = await Question.findOne({
    question: 'Do you now use E-cigarettes every day, some days, or not at all?',
  });
  if (!HealthBehaviors8Question) {
    HealthBehaviors8Question = await Question.create({
      question: 'Do you now use E-cigarettes every day, some days, or not at all?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 7,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors8QuestionItem1 = await QuestionItems.findOne({ name: 'Every day' });
  if (!HealthBehaviors8QuestionItem1) {
    HealthBehaviors8QuestionItem1 = await QuestionItems.create({ name: 'Every day', order: 0 }).save();
  }
  let HealthBehaviors8QuestionItem2 = await QuestionItems.findOne({ name: 'Some days' });
  if (!HealthBehaviors8QuestionItem2) {
    HealthBehaviors8QuestionItem2 = await QuestionItems.create({ name: 'Some days', order: 1 }).save();
  }
  let HealthBehaviors8QuestionItem3 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!HealthBehaviors8QuestionItem3) {
    HealthBehaviors8QuestionItem3 = await QuestionItems.create({ name: 'Not at all', order: 2 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors8Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors8Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors8Question)
    .add(HealthBehaviors8QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors8Question)
    .add(HealthBehaviors8QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors8Question)
    .add(HealthBehaviors8QuestionItem3);

  let HealthBehaviors9Question = await Question.findOne({
    question:
      'How many days a week do you usually have a drink containing alcohol (beer, wine, liquor, or mixed drink)?',
  });
  if (!HealthBehaviors9Question) {
    HealthBehaviors9Question = await Question.create({
      question:
        'How many days a week do you usually have a drink containing alcohol (beer, wine, liquor, or mixed drink)?',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 8,
      inputConfirmation: 'Alpha',
    }).save();
  }

    let HealthBehaviors9QuestionItem1 = await QuestionItems.create({ name: 'Never', order: 0 }).save();
    let HealthBehaviors9QuestionItem2 = await QuestionItems.create({ name: 'Less than one day a week', order: 1 }).save();
    let HealthBehaviors9QuestionItem3 = await QuestionItems.create({ name: '1-2 days a week', order: 2 }).save();
    let HealthBehaviors9QuestionItem4 = await QuestionItems.create({ name: '3-4 days a week', order: 3 }).save();
    let HealthBehaviors9QuestionItem5 = await QuestionItems.create({ name: '5-6 days a week', order: 4 }).save();
    let HealthBehaviors9QuestionItem6 = await QuestionItems.create({ name: 'Every day', order: 5 }).save();

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors9Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors9Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors9Question)
    .add(HealthBehaviors9QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors9Question)
    .add(HealthBehaviors9QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors9Question)
    .add(HealthBehaviors9QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors9Question)
    .add(HealthBehaviors9QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors9Question)
    .add(HealthBehaviors9QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors9Question)
    .add(HealthBehaviors9QuestionItem6);

  let HealthBehaviors10Question = await Question.findOne({
    question:
      'On the days you drink, about how many drinks do you usually have? One drink is equivalent to a 12-ounce beer, a 5-ounce glass of wine, or a drink with one shot (1.5 ounces) of liquor.',
  });
  if (!HealthBehaviors10Question) {
    HealthBehaviors10Question = await Question.create({
      question:
        'On the days you drink, about how many drinks do you usually have? One drink is equivalent to a 12-ounce beer, a 5-ounce glass of wine, or a drink with one shot (1.5 ounces) of liquor.',
      stack: 3,
      stackPhrase: '',
      placeHolder: '1',
      order: 9,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors10Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors10Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors11Question = await Question.findOne({
    question:
      'Considering all types of alcoholic beverages, how many times during the past 30 days did you have 5 or more drinks (men) or 4 or more drinks (women) on a single occasion?',
  });
  if (!HealthBehaviors11Question) {
    HealthBehaviors11Question = await Question.create({
      question:
        'Considering all types of alcoholic beverages, how many times during the past 30 days did you have 5 or more drinks (men) or 4 or more drinks (women) on a single occasion?',
      stack: 4,
      stackPhrase: '',
      placeHolder: '2',
      order: 10,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors11Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors11Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors12Question = await Question.findOne({
    question:
      'What happens to your skin when you’re out in the sun repeatedly for a long time without sunscreen, lotions, or protective foundations?',
  });
  if (!HealthBehaviors12Question) {
    HealthBehaviors12Question = await Question.create({
      question:
        'What happens to your skin when you’re out in the sun repeatedly for a long time without sunscreen, lotions, or protective foundations?',
      stack: 4,
      stackPhrase: '',
      placeHolder: '',
      order: 11,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors12QuestionItem1 = await QuestionItems.findOne({ name: 'Repeated sunburns' });
  if (!HealthBehaviors12QuestionItem1) {
    HealthBehaviors12QuestionItem1 = await QuestionItems.create({ name: 'Repeated sunburns', order: 0 }).save();
  }
  let HealthBehaviors12QuestionItem2 = await QuestionItems.findOne({ name: 'No change in your skin' });
  if (!HealthBehaviors12QuestionItem2) {
    HealthBehaviors12QuestionItem2 = await QuestionItems.create({ name: 'No change in your skin', order: 1 }).save();
  }
  let HealthBehaviors12QuestionItem3 = await QuestionItems.findOne({ name: 'Only freckles' });
  if (!HealthBehaviors12QuestionItem3) {
    HealthBehaviors12QuestionItem3 = await QuestionItems.create({ name: 'Only freckles', order: 2 }).save();
  }
  let HealthBehaviors12QuestionItem4 = await QuestionItems.findOne({ name: 'Mild tan' });
  if (!HealthBehaviors12QuestionItem4) {
    HealthBehaviors12QuestionItem4 = await QuestionItems.create({ name: 'Mild tan', order: 3 }).save();
  }
  let HealthBehaviors12QuestionItem5 = await QuestionItems.findOne({ name: 'Moderate tan' });
  if (!HealthBehaviors12QuestionItem5) {
    HealthBehaviors12QuestionItem5 = await QuestionItems.create({ name: 'Moderate tan', order: 4 }).save();
  }
  let HealthBehaviors12QuestionItem6 = await QuestionItems.findOne({ name: 'Very dark and deep tan' });
  if (!HealthBehaviors12QuestionItem6) {
    HealthBehaviors12QuestionItem6 = await QuestionItems.create({ name: 'Very dark and deep tan', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors12Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors12Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors12Question)
    .add(HealthBehaviors12QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors12Question)
    .add(HealthBehaviors12QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors12Question)
    .add(HealthBehaviors12QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors12Question)
    .add(HealthBehaviors12QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors12Question)
    .add(HealthBehaviors12QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors12Question)
    .add(HealthBehaviors12QuestionItem6);

  let HealthBehaviors13Question = await Question.findOne({ question: 'Avoid the sun by staying in the shade?' });
  if (!HealthBehaviors13Question) {
    HealthBehaviors13Question = await Question.create({
      question: 'Avoid the sun by staying in the shade?',
      stack: 5,
      stackPhrase: 'How often do you do each of the following things to protect your skin from the sun?',
      placeHolder: '',
      order: 12,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors13QuestionItem1 = await QuestionItems.findOne({ name: 'Never' });
  if (!HealthBehaviors13QuestionItem1) {
    HealthBehaviors13QuestionItem1 = await QuestionItems.create({ name: 'Never', order: 0 }).save();
  }
  let HealthBehaviors13QuestionItem2 = await QuestionItems.findOne({ name: 'Rarely' });
  if (!HealthBehaviors13QuestionItem2) {
    HealthBehaviors13QuestionItem2 = await QuestionItems.create({ name: 'Rarely', order: 1 }).save();
  }
  let HealthBehaviors13QuestionItem3 = await QuestionItems.findOne({ name: 'Sometimes' });
  if (!HealthBehaviors13QuestionItem3) {
    HealthBehaviors13QuestionItem3 = await QuestionItems.create({ name: 'Sometimes', order: 2 }).save();
  }
  let HealthBehaviors13QuestionItem4 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!HealthBehaviors13QuestionItem4) {
    HealthBehaviors13QuestionItem4 = await QuestionItems.create({ name: 'Most of the time', order: 3 }).save();
  }
  let HealthBehaviors13QuestionItem5 = await QuestionItems.findOne({ name: 'Always' });
  if (!HealthBehaviors13QuestionItem5) {
    HealthBehaviors13QuestionItem5 = await QuestionItems.create({ name: 'Always', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors13Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors13Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors13Question)
    .add(HealthBehaviors13QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors13Question)
    .add(HealthBehaviors13QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors13Question)
    .add(HealthBehaviors13QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors13Question)
    .add(HealthBehaviors13QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors13Question)
    .add(HealthBehaviors13QuestionItem5);

  let HealthBehaviors14Question = await Question.findOne({
    question: 'Wear protective clothing (e.g., wide-brimmed hat, long-sleeved shirt)?',
  });
  if (!HealthBehaviors14Question) {
    HealthBehaviors14Question = await Question.create({
      question: 'Wear protective clothing (e.g., wide-brimmed hat, long-sleeved shirt)?',
      stack: 5,
      stackPhrase: '',
      placeHolder: '',
      order: 13,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors14QuestionItem1 = await QuestionItems.findOne({ name: 'Never' });
  if (!HealthBehaviors14QuestionItem1) {
    HealthBehaviors14QuestionItem1 = await QuestionItems.create({ name: 'Never', order: 0 }).save();
  }
  let HealthBehaviors14QuestionItem2 = await QuestionItems.findOne({ name: 'Rarely' });
  if (!HealthBehaviors14QuestionItem2) {
    HealthBehaviors14QuestionItem2 = await QuestionItems.create({ name: 'Rarely', order: 1 }).save();
  }
  let HealthBehaviors14QuestionItem3 = await QuestionItems.findOne({ name: 'Sometimes' });
  if (!HealthBehaviors14QuestionItem3) {
    HealthBehaviors14QuestionItem3 = await QuestionItems.create({ name: 'Sometimes', order: 2 }).save();
  }
  let HealthBehaviors14QuestionItem4 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!HealthBehaviors14QuestionItem4) {
    HealthBehaviors14QuestionItem4 = await QuestionItems.create({ name: 'Most of the time', order: 3 }).save();
  }
  let HealthBehaviors14QuestionItem5 = await QuestionItems.findOne({ name: 'Always' });
  if (!HealthBehaviors14QuestionItem5) {
    HealthBehaviors14QuestionItem5 = await QuestionItems.create({ name: 'Always', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors14Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors14Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors14Question)
    .add(HealthBehaviors14QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors14Question)
    .add(HealthBehaviors14QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors14Question)
    .add(HealthBehaviors14QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors14Question)
    .add(HealthBehaviors14QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors14Question)
    .add(HealthBehaviors14QuestionItem5);

  let HealthBehaviors15Question = await Question.findOne({
    question: 'Use sunscreen, lotions, or foundations SPF 15 or higher?',
  });
  if (!HealthBehaviors15Question) {
    HealthBehaviors15Question = await Question.create({
      question: 'Use sunscreen, lotions, or foundations SPF 15 or higher?',
      stack: 5,
      stackPhrase: '',
      placeHolder: '',
      order: 14,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors15QuestionItem1 = await QuestionItems.findOne({ name: 'Never' });
  if (!HealthBehaviors15QuestionItem1) {
    HealthBehaviors15QuestionItem1 = await QuestionItems.create({ name: 'Never', order: 0 }).save();
  }
  let HealthBehaviors15QuestionItem2 = await QuestionItems.findOne({ name: 'Rarely' });
  if (!HealthBehaviors15QuestionItem2) {
    HealthBehaviors15QuestionItem2 = await QuestionItems.create({ name: 'Rarely', order: 1 }).save();
  }
  let HealthBehaviors15QuestionItem3 = await QuestionItems.findOne({ name: 'Sometimes' });
  if (!HealthBehaviors15QuestionItem3) {
    HealthBehaviors15QuestionItem3 = await QuestionItems.create({ name: 'Sometimes', order: 2 }).save();
  }
  let HealthBehaviors15QuestionItem4 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!HealthBehaviors15QuestionItem4) {
    HealthBehaviors15QuestionItem4 = await QuestionItems.create({ name: 'Most of the time', order: 3 }).save();
  }
  let HealthBehaviors15QuestionItem5 = await QuestionItems.findOne({ name: 'Always' });
  if (!HealthBehaviors15QuestionItem5) {
    HealthBehaviors15QuestionItem5 = await QuestionItems.create({ name: 'Always', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors15Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors15Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors15Question)
    .add(HealthBehaviors15QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors15Question)
    .add(HealthBehaviors15QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors15Question)
    .add(HealthBehaviors15QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors15Question)
    .add(HealthBehaviors15QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors15Question)
    .add(HealthBehaviors15QuestionItem5);

  let HealthBehaviors16Question = await Question.findOne({
    question: 'How many times in the past 12 months have you used a tanning bed or booth?',
  });
  if (!HealthBehaviors16Question) {
    HealthBehaviors16Question = await Question.create({
      question: 'How many times in the past 12 months have you used a tanning bed or booth?',
      stack: 6,
      stackPhrase: '',
      placeHolder: '5',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors16Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors16Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors17Question = await Question.findOne({
    question:
      'Have you ever seen a dermatologist or other healthcare provider for a skin exam to look for skin cancer or other abnormalities?',
  });
  if (!HealthBehaviors17Question) {
    HealthBehaviors17Question = await Question.create({
      question:
        'Have you ever seen a dermatologist or other healthcare provider for a skin exam to look for skin cancer or other abnormalities?',
      stack: 6,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors17Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors17Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors18Question = await Question.findOne({ question: 'When was your MOST RECENT skin exam?' });
  if (!HealthBehaviors18Question) {
    HealthBehaviors18Question = await Question.create({
      question: 'When was your MOST RECENT skin exam?',
      stack: 7,
      stackPhrase: '',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors18QuestionItem1 = await QuestionItems.findOne({
    name: 'Within the past year (anytime less than 12 months ago)',
  });
  if (!HealthBehaviors18QuestionItem1) {
    HealthBehaviors18QuestionItem1 = await QuestionItems.create({
      name: 'Within the past year (anytime less than 12 months ago)',
      order: 0,
    }).save();
  }
  let HealthBehaviors18QuestionItem2 = await QuestionItems.findOne({
    name: 'Within the past 2 years (at least 1 year but less than 2 years ago)',
  });
  if (!HealthBehaviors18QuestionItem2) {
    HealthBehaviors18QuestionItem2 = await QuestionItems.create({
      name: 'Within the past 2 years (at least 1 year but less than 2 years ago)',
      order: 1,
    }).save();
  }
  let HealthBehaviors18QuestionItem3 = await QuestionItems.findOne({
    name: 'Within the past 3 years (at least 2 years but less than 3 years ago)',
  });
  if (!HealthBehaviors18QuestionItem3) {
    HealthBehaviors18QuestionItem3 = await QuestionItems.create({
      name: 'Within the past 3 years (at least 2 years but less than 3 years ago)',
      order: 2,
    }).save();
  }
  let HealthBehaviors18QuestionItem4 = await QuestionItems.findOne({
    name: 'Within the past 5 years (at least 3 years but less than 5 years ago',
  });
  if (!HealthBehaviors18QuestionItem4) {
    HealthBehaviors18QuestionItem4 = await QuestionItems.create({
      name: 'Within the past 5 years (at least 3 years but less than 5 years ago',
      order: 3,
    }).save();
  }
  let HealthBehaviors18QuestionItem5 = await QuestionItems.findOne({
    name: 'Within the past 10 years (5 years but less than 10 years ago)',
  });
  if (!HealthBehaviors18QuestionItem5) {
    HealthBehaviors18QuestionItem5 = await QuestionItems.create({
      name: 'Within the past 10 years (5 years but less than 10 years ago)',
      order: 4,
    }).save();
  }
  let HealthBehaviors18QuestionItem6 = await QuestionItems.findOne({ name: '10 years ago or more' });
  if (!HealthBehaviors18QuestionItem6) {
    HealthBehaviors18QuestionItem6 = await QuestionItems.create({ name: '10 years ago or more', order: 5 }).save();
  }
  let HealthBehaviors18QuestionItem7 = await QuestionItems.findOne({ name: 'Do not know' });
  if (!HealthBehaviors18QuestionItem7) {
    HealthBehaviors18QuestionItem7 = await QuestionItems.create({ name: 'Do not know', order: 6 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors18Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors18Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors18Question)
    .add(HealthBehaviors18QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors18Question)
    .add(HealthBehaviors18QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors18Question)
    .add(HealthBehaviors18QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors18Question)
    .add(HealthBehaviors18QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors18Question)
    .add(HealthBehaviors18QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors18Question)
    .add(HealthBehaviors18QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors18Question)
    .add(HealthBehaviors18QuestionItem7);

  let HealthBehaviors19Question = await Question.findOne({
    question: 'How many times in the past 12 months have you used a tanning bed or booth?',
  });
  if (!HealthBehaviors19Question) {
    HealthBehaviors19Question = await Question.create({
      question: 'How many times in the past 12 months have you used a tanning bed or booth?',
      stack: 7,
      stackPhrase: '',
      placeHolder: '',
      order: 18,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors19Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors19Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors20Question = await Question.findOne({
    question: 'How much time did you usually spend doing vigorous physical activities on one of those days?',
  });
  if (!HealthBehaviors20Question) {
    HealthBehaviors20Question = await Question.create({
      question: 'How much time did you usually spend doing vigorous physical activities on one of those days?',
      stack: 8,
      stackPhrase: '',
      placeHolder: '10',
      order: 19,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors20Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors20Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors21Question = await Question.findOne({
    question:
      'During the last 7 days, on how many days did you do moderate physical activities like carrying light loads, bicycling at a regular pace, or doubles tennis? Do not include walking.',
  });
  if (!HealthBehaviors21Question) {
    HealthBehaviors21Question = await Question.create({
      question:
        'During the last 7 days, on how many days did you do moderate physical activities like carrying light loads, bicycling at a regular pace, or doubles tennis? Do not include walking.',
      stack: 8,
      stackPhrase: '',
      placeHolder: '3',
      order: 20,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors21Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors21Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors22Question = await Question.findOne({
    question: 'How much time did you usually spend doing moderate physical activities on one of those days?',
  });
  if (!HealthBehaviors22Question) {
    HealthBehaviors22Question = await Question.create({
      question: 'How much time did you usually spend doing moderate physical activities on one of those days?',
      stack: 8,
      stackPhrase: '',
      placeHolder: '4',
      order: 21,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors22Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors22Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors23Question = await Question.findOne({
    question: 'During the last 7 days, on how many days did you walk for at least 10 minutes at a time?',
  });
  if (!HealthBehaviors23Question) {
    HealthBehaviors23Question = await Question.create({
      question: 'During the last 7 days, on how many days did you walk for at least 10 minutes at a time?',
      stack: 9,
      stackPhrase: '',
      placeHolder: '3',
      order: 22,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors23Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors23Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors24Question = await Question.findOne({
    question: 'How much time did you usually spend walking on one of those days?',
  });
  if (!HealthBehaviors24Question) {
    HealthBehaviors24Question = await Question.create({
      question: 'How much time did you usually spend walking on one of those days?',
      stack: 7,
      stackPhrase: '',
      placeHolder: '2',
      order: 23,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors24Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors24Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors25Question = await Question.findOne({
    question: 'During the last 7 days, how much time did you spend sitting on a week day?',
  });
  if (!HealthBehaviors25Question) {
    HealthBehaviors25Question = await Question.create({
      question: 'During the last 7 days, how much time did you spend sitting on a week day?',
      stack: 7,
      stackPhrase: '',
      placeHolder: '3',
      order: 24,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors25Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors25Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors26Question = await Question.findOne({
    question: 'Which of the following describes how you do your exercise?',
  });
  if (!HealthBehaviors26Question) {
    HealthBehaviors26Question = await Question.create({
      question: 'Which of the following describes how you do your exercise?',
      stack: 9,
      stackPhrase: '',
      placeHolder: '',
      order: 25,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors26QuestionItem1 = await QuestionItems.findOne({
    name: 'You exercise at home with interactive gaming video (e.g., Wii, Xbox, Online Gaming)',
  });
  if (!HealthBehaviors26QuestionItem1) {
    HealthBehaviors26QuestionItem1 = await QuestionItems.create({
      name: 'You exercise at home with interactive gaming video (e.g., Wii, Xbox, Online Gaming)',
      order: 0,
    }).save();
  }
  let HealthBehaviors26QuestionItem2 = await QuestionItems.findOne({
    name: 'You exercise outdoors, including walk, jog, cycle, etc.',
  });
  if (!HealthBehaviors26QuestionItem2) {
    HealthBehaviors26QuestionItem2 = await QuestionItems.create({
      name: 'You exercise outdoors, including walk, jog, cycle, etc.',
      order: 1,
    }).save();
  }
  let HealthBehaviors26QuestionItem3 = await QuestionItems.findOne({ name: 'You exercise at the gym or health club' });
  if (!HealthBehaviors26QuestionItem3) {
    HealthBehaviors26QuestionItem3 = await QuestionItems.create({
      name: 'You exercise at the gym or health club',
      order: 2,
    }).save();
  }
  let HealthBehaviors26QuestionItem4 = await QuestionItems.findOne({
    name: 'You exercise with one or more friends or in a group (e.g., exercise classes, yoga classes)',
  });
  if (!HealthBehaviors26QuestionItem4) {
    HealthBehaviors26QuestionItem4 = await QuestionItems.create({
      name: 'You exercise with one or more friends or in a group (e.g., exercise classes, yoga classes)',
      order: 3,
    }).save();
  }
  let HealthBehaviors26QuestionItem5 = await QuestionItems.findOne({
    name: 'You exercise at home with a live or recorded group over the internet (e.g., Aerobics, Yoga, Peloton)',
  });
  if (!HealthBehaviors26QuestionItem5) {
    HealthBehaviors26QuestionItem5 = await QuestionItems.create({
      name: 'You exercise at home with a live or recorded group over the internet (e.g., Aerobics, Yoga, Peloton)',
      order: 4,
    }).save();
  }
  let HealthBehaviors26QuestionItem6 = await QuestionItems.findOne({
    name: 'You exercise some OTHER way NOT mentioned in this list',
  });
  if (!HealthBehaviors26QuestionItem6) {
    HealthBehaviors26QuestionItem6 = await QuestionItems.create({
      name: 'You exercise some OTHER way NOT mentioned in this list',
      order: 5,
    }).save();
  }
  let HealthBehaviors26QuestionItem7 = await QuestionItems.findOne({ name: 'You do not exercise' });
  if (!HealthBehaviors26QuestionItem7) {
    HealthBehaviors26QuestionItem7 = await QuestionItems.create({ name: 'You do not exercise', order: 6 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors26Question)
    .set(multiselectionQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors26Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors26Question)
    .add(HealthBehaviors26QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors26Question)
    .add(HealthBehaviors26QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors26Question)
    .add(HealthBehaviors26QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors26Question)
    .add(HealthBehaviors26QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors26Question)
    .add(HealthBehaviors26QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors26Question)
    .add(HealthBehaviors26QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors26Question)
    .add(HealthBehaviors26QuestionItem7);

  let HealthBehaviors27Question = await Question.findOne({
    question:
      'How many days per week do you perform muscle strengthening exercises, such as body weight exercises or resistance training?',
  });
  if (!HealthBehaviors27Question) {
    HealthBehaviors27Question = await Question.create({
      question:
        'How many days per week do you perform muscle strengthening exercises, such as body weight exercises or resistance training?',
      stack: 10,
      stackPhrase: '',
      placeHolder: '2',
      order: 26,
      inputConfirmation: 'Numerical',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors27Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors27Question)
    .set(HealthBehaviorsSubSection);

  let HealthBehaviors28Question = await Question.findOne({
    question:
      'On average, about how many cups of bottled or tap water do you drink each day? (8 oz. of water is equal to one cup. One standard 16 oz. bottle of water equals 2 cups.)',
  });
  if (!HealthBehaviors28Question) {
    HealthBehaviors28Question = await Question.create({
      question:
        'On average, about how many cups of bottled or tap water do you drink each day? (8 oz. of water is equal to one cup. One standard 16 oz. bottle of water equals 2 cups.)',
      stack: 10,
      stackPhrase: '',
      placeHolder: '',
      order: 27,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors28QuestionItem1 = await QuestionItems.findOne({ name: 'None' });
  if (!HealthBehaviors28QuestionItem1) {
    HealthBehaviors28QuestionItem1 = await QuestionItems.create({ name: 'None', order: 0 }).save();
  }
  let HealthBehaviors28QuestionItem2 = await QuestionItems.findOne({ name: '1-3 cups' });
  if (!HealthBehaviors28QuestionItem2) {
    HealthBehaviors28QuestionItem2 = await QuestionItems.create({ name: '1-3 cups', order: 1 }).save();
  }
  let HealthBehaviors28QuestionItem3 = await QuestionItems.findOne({ name: '4-7 cups' });
  if (!HealthBehaviors28QuestionItem3) {
    HealthBehaviors28QuestionItem3 = await QuestionItems.create({ name: '4-7 cups', order: 2 }).save();
  }
  let HealthBehaviors28QuestionItem4 = await QuestionItems.findOne({ name: '8 or more cups' });
  if (!HealthBehaviors28QuestionItem4) {
    HealthBehaviors28QuestionItem4 = await QuestionItems.create({ name: '8 or more cups', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors28Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors28Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors28Question)
    .add(HealthBehaviors28QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors28Question)
    .add(HealthBehaviors28QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors28Question)
    .add(HealthBehaviors28QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors28Question)
    .add(HealthBehaviors28QuestionItem4);

  let HealthBehaviors29Question = await Question.findOne({
    question:
      'During the past 7 days, how many times did you drink 100% fruit juices such as orange juice, apple juice, or grape juice? (Do not count punch, Kool-Aid, sports drinks, or other fruit-flavored drinks.)',
  });
  if (!HealthBehaviors29Question) {
    HealthBehaviors29Question = await Question.create({
      question:
        'During the past 7 days, how many times did you drink 100% fruit juices such as orange juice, apple juice, or grape juice? (Do not count punch, Kool-Aid, sports drinks, or other fruit-flavored drinks.)',
      stack: 10,
      stackPhrase: '',
      placeHolder: '',
      order: 28,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors29QuestionItem1 = await QuestionItems.findOne({
    name: 'I did not drink 100% fruit juice during the past 7 days',
  });
  if (!HealthBehaviors29QuestionItem1) {
    HealthBehaviors29QuestionItem1 = await QuestionItems.create({
      name: 'I did not drink 100% fruit juice during the past 7 days',
      order: 0,
    }).save();
  }
  let HealthBehaviors29QuestionItem2 = await QuestionItems.findOne({ name: '1 to 3 times during the past 7 days' });
  if (!HealthBehaviors29QuestionItem2) {
    HealthBehaviors29QuestionItem2 = await QuestionItems.create({
      name: '1 to 3 times during the past 7 days',
      order: 1,
    }).save();
  }
  let HealthBehaviors29QuestionItem3 = await QuestionItems.findOne({ name: '4 to 6 times during the past 7 days' });
  if (!HealthBehaviors29QuestionItem3) {
    HealthBehaviors29QuestionItem3 = await QuestionItems.create({
      name: '4 to 6 times during the past 7 days',
      order: 2,
    }).save();
  }
  let HealthBehaviors29QuestionItem4 = await QuestionItems.findOne({ name: '1 time per day' });
  if (!HealthBehaviors29QuestionItem4) {
    HealthBehaviors29QuestionItem4 = await QuestionItems.create({ name: '1 time per day', order: 3 }).save();
  }
  let HealthBehaviors29QuestionItem5 = await QuestionItems.findOne({ name: '2 times per day' });
  if (!HealthBehaviors29QuestionItem5) {
    HealthBehaviors29QuestionItem5 = await QuestionItems.create({ name: '2 times per day', order: 4 }).save();
  }
  let HealthBehaviors29QuestionItem6 = await QuestionItems.findOne({ name: '3 times per day' });
  if (!HealthBehaviors29QuestionItem6) {
    HealthBehaviors29QuestionItem6 = await QuestionItems.create({ name: '3 times per day', order: 5 }).save();
  }
  let HealthBehaviors29QuestionItem7 = await QuestionItems.findOne({ name: '4 or more times per day' });
  if (!HealthBehaviors29QuestionItem7) {
    HealthBehaviors29QuestionItem7 = await QuestionItems.create({ name: '4 or more times per day', order: 6 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors29Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors29Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors29Question)
    .add(HealthBehaviors29QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors29Question)
    .add(HealthBehaviors29QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors29Question)
    .add(HealthBehaviors29QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors29Question)
    .add(HealthBehaviors29QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors29Question)
    .add(HealthBehaviors29QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors29Question)
    .add(HealthBehaviors29QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors29Question)
    .add(HealthBehaviors29QuestionItem7);

  let HealthBehaviors30Question = await Question.findOne({
    question: 'During the past 7 days, how many times did you eat fruit? (Do not count fruit juice.)',
  });
  if (!HealthBehaviors30Question) {
    HealthBehaviors30Question = await Question.create({
      question: 'During the past 7 days, how many times did you eat fruit? (Do not count fruit juice.)',
      stack: 11,
      stackPhrase: '',
      placeHolder: '',
      order: 29,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors30QuestionItem1 = await QuestionItems.findOne({
    name: 'I did not eat fruit during the past 7 days ',
  });
  if (!HealthBehaviors30QuestionItem1) {
    HealthBehaviors30QuestionItem1 = await QuestionItems.create({
      name: 'I did not eat fruit during the past 7 days ',
      order: 0,
    }).save();
  }
  let HealthBehaviors30QuestionItem2 = await QuestionItems.findOne({ name: '1 to 3 times during the past 7 days' });
  if (!HealthBehaviors30QuestionItem2) {
    HealthBehaviors30QuestionItem2 = await QuestionItems.create({
      name: '1 to 3 times during the past 7 days',
      order: 1,
    }).save();
  }
  let HealthBehaviors30QuestionItem3 = await QuestionItems.findOne({ name: '4 to 6 times during the past 7 days' });
  if (!HealthBehaviors30QuestionItem3) {
    HealthBehaviors30QuestionItem3 = await QuestionItems.create({
      name: '4 to 6 times during the past 7 days',
      order: 2,
    }).save();
  }
  let HealthBehaviors30QuestionItem4 = await QuestionItems.findOne({ name: '1 time per day' });
  if (!HealthBehaviors30QuestionItem4) {
    HealthBehaviors30QuestionItem4 = await QuestionItems.create({ name: '1 time per day', order: 3 }).save();
  }
  let HealthBehaviors30QuestionItem5 = await QuestionItems.findOne({ name: '2 times per day' });
  if (!HealthBehaviors30QuestionItem5) {
    HealthBehaviors30QuestionItem5 = await QuestionItems.create({ name: '2 times per day', order: 4 }).save();
  }
  let HealthBehaviors30QuestionItem6 = await QuestionItems.findOne({ name: '3 times per day' });
  if (!HealthBehaviors30QuestionItem6) {
    HealthBehaviors30QuestionItem6 = await QuestionItems.create({ name: '3 times per day', order: 5 }).save();
  }
  let HealthBehaviors30QuestionItem7 = await QuestionItems.findOne({ name: '4 or more times per day' });
  if (!HealthBehaviors30QuestionItem7) {
    HealthBehaviors30QuestionItem7 = await QuestionItems.create({ name: '4 or more times per day', order: 6 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors30Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors30Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors30Question)
    .add(HealthBehaviors30QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors30Question)
    .add(HealthBehaviors30QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors30Question)
    .add(HealthBehaviors30QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors30Question)
    .add(HealthBehaviors30QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors30Question)
    .add(HealthBehaviors30QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors30Question)
    .add(HealthBehaviors30QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors30Question)
    .add(HealthBehaviors30QuestionItem7);

  let HealthBehaviors31Question = await Question.findOne({
    question:
      'During the past 7 days, how many times did you eat green salad, potatoes, carrots, or other vegetables? (Do not count french fries, fried potatoes, or potato chips.)',
  });
  if (!HealthBehaviors31Question) {
    HealthBehaviors31Question = await Question.create({
      question:
        'During the past 7 days, how many times did you eat green salad, potatoes, carrots, or other vegetables? (Do not count french fries, fried potatoes, or potato chips.)',
      stack: 11,
      stackPhrase: '',
      placeHolder: '',
      order: 30,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors31QuestionItem1 = await QuestionItems.findOne({
    name: 'I did not eat vegetables during the past 7 days ',
  });
  if (!HealthBehaviors31QuestionItem1) {
    HealthBehaviors31QuestionItem1 = await QuestionItems.create({
      name: 'I did not eat vegetables during the past 7 days ',
      order: 0,
    }).save();
  }
  let HealthBehaviors31QuestionItem2 = await QuestionItems.findOne({ name: '1 to 3 times during the past 7 days' });
  if (!HealthBehaviors31QuestionItem2) {
    HealthBehaviors31QuestionItem2 = await QuestionItems.create({
      name: '1 to 3 times during the past 7 days',
      order: 1,
    }).save();
  }
  let HealthBehaviors31QuestionItem3 = await QuestionItems.findOne({ name: '4 to 6 times during the past 7 days' });
  if (!HealthBehaviors31QuestionItem3) {
    HealthBehaviors31QuestionItem3 = await QuestionItems.create({
      name: '4 to 6 times during the past 7 days',
      order: 2,
    }).save();
  }
  let HealthBehaviors31QuestionItem4 = await QuestionItems.findOne({ name: '1 time per day' });
  if (!HealthBehaviors31QuestionItem4) {
    HealthBehaviors31QuestionItem4 = await QuestionItems.create({ name: '1 time per day', order: 3 }).save();
  }
  let HealthBehaviors31QuestionItem5 = await QuestionItems.findOne({ name: '2 times per day' });
  if (!HealthBehaviors31QuestionItem5) {
    HealthBehaviors31QuestionItem5 = await QuestionItems.create({ name: '2 times per day', order: 4 }).save();
  }
  let HealthBehaviors31QuestionItem6 = await QuestionItems.findOne({ name: '3 times per day' });
  if (!HealthBehaviors31QuestionItem6) {
    HealthBehaviors31QuestionItem6 = await QuestionItems.create({ name: '3 times per day', order: 5 }).save();
  }
  let HealthBehaviors31QuestionItem7 = await QuestionItems.findOne({ name: '4 or more times per day' });
  if (!HealthBehaviors31QuestionItem7) {
    HealthBehaviors31QuestionItem7 = await QuestionItems.create({ name: '4 or more times per day', order: 6 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors31Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors31Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors31Question)
    .add(HealthBehaviors31QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors31Question)
    .add(HealthBehaviors31QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors31Question)
    .add(HealthBehaviors31QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors31Question)
    .add(HealthBehaviors31QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors31Question)
    .add(HealthBehaviors31QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors31Question)
    .add(HealthBehaviors31QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors31Question)
    .add(HealthBehaviors31QuestionItem7);

  let HealthBehaviors32Question = await Question.findOne({
    question: 'During the past 7 days, on how many days did you eat breakfast?',
  });
  if (!HealthBehaviors32Question) {
    HealthBehaviors32Question = await Question.create({
      question: 'During the past 7 days, on how many days did you eat breakfast?',
      stack: 11,
      stackPhrase: '',
      placeHolder: '',
      order: 31,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors32QuestionItem1 = await QuestionItems.findOne({ name: '0 days' });
  if (!HealthBehaviors32QuestionItem1) {
    HealthBehaviors32QuestionItem1 = await QuestionItems.create({ name: '0 days', order: 0 }).save();
  }
  let HealthBehaviors32QuestionItem2 = await QuestionItems.findOne({ name: '1 day' });
  if (!HealthBehaviors32QuestionItem2) {
    HealthBehaviors32QuestionItem2 = await QuestionItems.create({ name: '1 day', order: 1 }).save();
  }
  let HealthBehaviors32QuestionItem3 = await QuestionItems.findOne({ name: '2 days' });
  if (!HealthBehaviors32QuestionItem3) {
    HealthBehaviors32QuestionItem3 = await QuestionItems.create({ name: '2 days', order: 2 }).save();
  }
  let HealthBehaviors32QuestionItem4 = await QuestionItems.findOne({ name: '3 days' });
  if (!HealthBehaviors32QuestionItem4) {
    HealthBehaviors32QuestionItem4 = await QuestionItems.create({ name: '3 days', order: 3 }).save();
  }
  let HealthBehaviors32QuestionItem5 = await QuestionItems.findOne({ name: '4 days' });
  if (!HealthBehaviors32QuestionItem5) {
    HealthBehaviors32QuestionItem5 = await QuestionItems.create({ name: '4 days', order: 4 }).save();
  }
  let HealthBehaviors32QuestionItem6 = await QuestionItems.findOne({ name: '5 days' });
  if (!HealthBehaviors32QuestionItem6) {
    HealthBehaviors32QuestionItem6 = await QuestionItems.create({ name: '5 days', order: 5 }).save();
  }
  let HealthBehaviors32QuestionItem7 = await QuestionItems.findOne({ name: '6 days' });
  if (!HealthBehaviors32QuestionItem7) {
    HealthBehaviors32QuestionItem7 = await QuestionItems.create({ name: '6 days', order: 6 }).save();
  }
  let HealthBehaviors32QuestionItem8 = await QuestionItems.findOne({ name: '7 days' });
  if (!HealthBehaviors32QuestionItem8) {
    HealthBehaviors32QuestionItem8 = await QuestionItems.create({ name: '7 days', order: 7 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors32Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors32Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors32Question)
    .add(HealthBehaviors32QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors32Question)
    .add(HealthBehaviors32QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors32Question)
    .add(HealthBehaviors32QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors32Question)
    .add(HealthBehaviors32QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors32Question)
    .add(HealthBehaviors32QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors32Question)
    .add(HealthBehaviors32QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors32Question)
    .add(HealthBehaviors32QuestionItem7);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors32Question)
    .add(HealthBehaviors32QuestionItem8);

  let HealthBehaviors33Question = await Question.findOne({
    question:
      'During the past 7 days, how many times did you eat from a fast food restaurant, including carry out or delivery?',
  });
  if (!HealthBehaviors33Question) {
    HealthBehaviors33Question = await Question.create({
      question:
        'During the past 7 days, how many times did you eat from a fast food restaurant, including carry out or delivery?',
      stack: 12,
      stackPhrase: '',
      placeHolder: '',
      order: 32,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors33QuestionItem1 = await QuestionItems.findOne({
    name: 'I did not eat fast food during the past 7 days ',
  });
  if (!HealthBehaviors33QuestionItem1) {
    HealthBehaviors33QuestionItem1 = await QuestionItems.create({
      name: 'I did not eat fast food during the past 7 days ',
      order: 0,
    }).save();
  }
  let HealthBehaviors33QuestionItem2 = await QuestionItems.findOne({ name: '1 to 3 times during the past 7 days' });
  if (!HealthBehaviors33QuestionItem2) {
    HealthBehaviors33QuestionItem2 = await QuestionItems.create({
      name: '1 to 3 times during the past 7 days',
      order: 1,
    }).save();
  }
  let HealthBehaviors33QuestionItem3 = await QuestionItems.findOne({ name: '4 to 6 times during the past 7 days' });
  if (!HealthBehaviors33QuestionItem3) {
    HealthBehaviors33QuestionItem3 = await QuestionItems.create({
      name: '4 to 6 times during the past 7 days',
      order: 2,
    }).save();
  }
  let HealthBehaviors33QuestionItem4 = await QuestionItems.findOne({ name: '1 time per day' });
  if (!HealthBehaviors33QuestionItem4) {
    HealthBehaviors33QuestionItem4 = await QuestionItems.create({ name: '1 time per day', order: 3 }).save();
  }
  let HealthBehaviors33QuestionItem5 = await QuestionItems.findOne({ name: '2 times per day' });
  if (!HealthBehaviors33QuestionItem5) {
    HealthBehaviors33QuestionItem5 = await QuestionItems.create({ name: '2 times per day', order: 4 }).save();
  }
  let HealthBehaviors33QuestionItem6 = await QuestionItems.findOne({ name: '3 times per day' });
  if (!HealthBehaviors33QuestionItem6) {
    HealthBehaviors33QuestionItem6 = await QuestionItems.create({ name: '3 times per day', order: 5 }).save();
  }
  let HealthBehaviors33QuestionItem7 = await QuestionItems.findOne({ name: '4 or more times per day' });
  if (!HealthBehaviors33QuestionItem7) {
    HealthBehaviors33QuestionItem7 = await QuestionItems.create({ name: '4 or more times per day', order: 6 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors33Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors33Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors33Question)
    .add(HealthBehaviors33QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors33Question)
    .add(HealthBehaviors33QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors33Question)
    .add(HealthBehaviors33QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors33Question)
    .add(HealthBehaviors33QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors33Question)
    .add(HealthBehaviors33QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors33Question)
    .add(HealthBehaviors33QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors33Question)
    .add(HealthBehaviors33QuestionItem7);

  let HealthBehaviors34Question = await Question.findOne({
    question:
      'During the past 7 days, how many times did you drink a can, bottle, or glass of soda or pop, such as Coke, Pepsi, or Sprite? (Do not count diet soda or diet pop.) ',
  });
  if (!HealthBehaviors34Question) {
    HealthBehaviors34Question = await Question.create({
      question:
        'During the past 7 days, how many times did you drink a can, bottle, or glass of soda or pop, such as Coke, Pepsi, or Sprite? (Do not count diet soda or diet pop.) ',
      stack: 12,
      stackPhrase: '',
      placeHolder: '',
      order: 33,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors34QuestionItem1 = await QuestionItems.findOne({
    name: 'I did not drink soda or pop during the past 7 days',
  });
  if (!HealthBehaviors34QuestionItem1) {
    HealthBehaviors34QuestionItem1 = await QuestionItems.create({
      name: 'I did not drink soda or pop during the past 7 days',
      order: 0,
    }).save();
  }
  let HealthBehaviors34QuestionItem2 = await QuestionItems.findOne({ name: '1 to 3 times during the past 7 days' });
  if (!HealthBehaviors34QuestionItem2) {
    HealthBehaviors34QuestionItem2 = await QuestionItems.create({
      name: '1 to 3 times during the past 7 days',
      order: 1,
    }).save();
  }
  let HealthBehaviors34QuestionItem3 = await QuestionItems.findOne({ name: '4 to 6 times during the past 7 days' });
  if (!HealthBehaviors34QuestionItem3) {
    HealthBehaviors34QuestionItem3 = await QuestionItems.create({
      name: '4 to 6 times during the past 7 days',
      order: 2,
    }).save();
  }
  let HealthBehaviors34QuestionItem4 = await QuestionItems.findOne({ name: '1 time per day' });
  if (!HealthBehaviors34QuestionItem4) {
    HealthBehaviors34QuestionItem4 = await QuestionItems.create({ name: '1 time per day', order: 3 }).save();
  }
  let HealthBehaviors34QuestionItem5 = await QuestionItems.findOne({ name: '2 times per day' });
  if (!HealthBehaviors34QuestionItem5) {
    HealthBehaviors34QuestionItem5 = await QuestionItems.create({ name: '2 times per day', order: 4 }).save();
  }
  let HealthBehaviors34QuestionItem6 = await QuestionItems.findOne({ name: '3 times per day' });
  if (!HealthBehaviors34QuestionItem6) {
    HealthBehaviors34QuestionItem6 = await QuestionItems.create({ name: '3 times per day', order: 5 }).save();
  }
  let HealthBehaviors34QuestionItem7 = await QuestionItems.findOne({ name: '4 or more times per day' });
  if (!HealthBehaviors34QuestionItem7) {
    HealthBehaviors34QuestionItem7 = await QuestionItems.create({ name: '4 or more times per day', order: 6 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors34Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors34Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors34Question)
    .add(HealthBehaviors34QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors34Question)
    .add(HealthBehaviors34QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors34Question)
    .add(HealthBehaviors34QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors34Question)
    .add(HealthBehaviors34QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors34Question)
    .add(HealthBehaviors34QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors34Question)
    .add(HealthBehaviors34QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors34Question)
    .add(HealthBehaviors34QuestionItem7);

  let HealthBehaviors35Question = await Question.findOne({
    question:
      'During the past 7 days, how many times did you drink a can, bottle, or glass of a sports drink such as Gatorade or Powerade? (Do not count low-calorie sports drinks such as Propel or G2.)',
  });
  if (!HealthBehaviors35Question) {
    HealthBehaviors35Question = await Question.create({
      question:
        'During the past 7 days, how many times did you drink a can, bottle, or glass of a sports drink such as Gatorade or Powerade? (Do not count low-calorie sports drinks such as Propel or G2.)',
      stack: 12,
      stackPhrase: '',
      placeHolder: '',
      order: 34,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let HealthBehaviors35QuestionItem1 = await QuestionItems.findOne({
    name: 'I did not drink sports drinks during the past 7 days',
  });
  if (!HealthBehaviors35QuestionItem1) {
    HealthBehaviors35QuestionItem1 = await QuestionItems.create({
      name: 'I did not drink sports drinks during the past 7 days',
      order: 0,
    }).save();
  }
  let HealthBehaviors35QuestionItem2 = await QuestionItems.findOne({ name: '1 to 3 times during the past 7 days' });
  if (!HealthBehaviors35QuestionItem2) {
    HealthBehaviors35QuestionItem2 = await QuestionItems.create({
      name: '1 to 3 times during the past 7 days',
      order: 1,
    }).save();
  }
  let HealthBehaviors35QuestionItem3 = await QuestionItems.findOne({ name: '4 to 6 times during the past 7 days' });
  if (!HealthBehaviors35QuestionItem3) {
    HealthBehaviors35QuestionItem3 = await QuestionItems.create({
      name: '4 to 6 times during the past 7 days',
      order: 2,
    }).save();
  }
  let HealthBehaviors35QuestionItem4 = await QuestionItems.findOne({ name: '1 time per day' });
  if (!HealthBehaviors35QuestionItem4) {
    HealthBehaviors35QuestionItem4 = await QuestionItems.create({ name: '1 time per day', order: 3 }).save();
  }
  let HealthBehaviors35QuestionItem5 = await QuestionItems.findOne({ name: '2 times per day' });
  if (!HealthBehaviors35QuestionItem5) {
    HealthBehaviors35QuestionItem5 = await QuestionItems.create({ name: '2 times per day', order: 4 }).save();
  }
  let HealthBehaviors35QuestionItem6 = await QuestionItems.findOne({ name: '3 times per day' });
  if (!HealthBehaviors35QuestionItem6) {
    HealthBehaviors35QuestionItem6 = await QuestionItems.create({ name: '3 times per day', order: 5 }).save();
  }
  let HealthBehaviors35QuestionItem7 = await QuestionItems.findOne({ name: '4 or more times per day' });
  if (!HealthBehaviors35QuestionItem7) {
    HealthBehaviors35QuestionItem7 = await QuestionItems.create({ name: '4 or more times per day', order: 6 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(HealthBehaviors35Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(HealthBehaviors35Question)
    .set(HealthBehaviorsSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors35Question)
    .add(HealthBehaviors35QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors35Question)
    .add(HealthBehaviors35QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors35Question)
    .add(HealthBehaviors35QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors35Question)
    .add(HealthBehaviors35QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors35Question)
    .add(HealthBehaviors35QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors35Question)
    .add(HealthBehaviors35QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(HealthBehaviors35Question)
    .add(HealthBehaviors35QuestionItem7);

  let TimeUse1Question = await Question.findOne({ question: 'Work, school, housework, or childcare?' });
  if (!TimeUse1Question) {
    TimeUse1Question = await Question.create({
      question: 'Work, school, housework, or childcare?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '1',
      order: 0,
      inputConfirmation: 'Numerical',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(TimeUse1Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(TimeUse1Question)
    .set(TimeUseSubSection);

  let TimeUse2Question = await Question.findOne({
    question: 'Volunteer work or meetings of voluntary groups (e.g., religious, political, civic, social, etc.)?',
  });
  if (!TimeUse2Question) {
    TimeUse2Question = await Question.create({
      question: 'Volunteer work or meetings of voluntary groups (e.g., religious, political, civic, social, etc.)?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '1',
      order: 1,
      inputConfirmation: 'Numerical',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(TimeUse2Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(TimeUse2Question)
    .set(TimeUseSubSection);

  let TimeUse3Question = await Question.findOne({ question: 'Time available for relaxation, exercise, or leisure?' });
  if (!TimeUse3Question) {
    TimeUse3Question = await Question.create({
      question: 'Time available for relaxation, exercise, or leisure?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '2',
      order: 2,
      inputConfirmation: 'Numerical',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(TimeUse3Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(TimeUse3Question)
    .set(TimeUseSubSection);

  let TimeUse4Question = await Question.findOne({ question: 'Face to face time with your close loved ones?' });
  if (!TimeUse4Question) {
    TimeUse4Question = await Question.create({
      question: 'Face to face time with your close loved ones?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '4',
      order: 3,
      inputConfirmation: 'Numerical',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(TimeUse4Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(TimeUse4Question)
    .set(TimeUseSubSection);

  let TimeUse5Question = await Question.findOne({ question: 'Face to face time with friends or neighbors?' });
  if (!TimeUse5Question) {
    TimeUse5Question = await Question.create({
      question: 'Face to face time with friends or neighbors?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '2',
      order: 4,
      inputConfirmation: 'Numerical',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(TimeUse5Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(TimeUse5Question)
    .set(TimeUseSubSection);

  let TimeUse6Question = await Question.findOne({
    question: 'Time using technology (e.g., on social media, texting, email, watching TV, on the phone)?',
  });
  if (!TimeUse6Question) {
    TimeUse6Question = await Question.create({
      question: 'Time using technology (e.g., on social media, texting, email, watching TV, on the phone)?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '2',
      order: 5,
      inputConfirmation: 'Numeric',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(TimeUse6Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(TimeUse6Question)
    .set(TimeUseSubSection);

  let TimeUse7Question = await Question.findOne({
    question: 'Time spent not using technology (e.g., reading, exercising, relaxing)?',
  });
  if (!TimeUse7Question) {
    TimeUse7Question = await Question.create({
      question: 'Time spent not using technology (e.g., reading, exercising, relaxing)?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '4',
      order: 6,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(TimeUse7Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(TimeUse7Question)
    .set(TimeUseSubSection);

  let LowMood1Question = await Question.findOne({ question: 'Little interest or pleasure in doing things' });
  if (!LowMood1Question) {
    LowMood1Question = await Question.create({
      question: 'Little interest or pleasure in doing things',
      stack: 0,
      stackPhrase: 'Over the last 2 weeks, how often have you been bothered by any of the following problems?',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let LowMood1QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!LowMood1QuestionItem1) {
    LowMood1QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let LowMood1QuestionItem2 = await QuestionItems.findOne({ name: 'Several days' });
  if (!LowMood1QuestionItem2) {
    LowMood1QuestionItem2 = await QuestionItems.create({ name: 'Several days', order: 1 }).save();
  }
  let LowMood1QuestionItem3 = await QuestionItems.findOne({ name: 'More than half the days' });
  if (!LowMood1QuestionItem3) {
    LowMood1QuestionItem3 = await QuestionItems.create({ name: 'More than half the days', order: 2 }).save();
  }
  let LowMood1QuestionItem4 = await QuestionItems.findOne({ name: 'Nearly every day' });
  if (!LowMood1QuestionItem4) {
    LowMood1QuestionItem4 = await QuestionItems.create({ name: 'Nearly every day', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LowMood1Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LowMood1Question)
    .set(LowMoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood1Question)
    .add(LowMood1QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood1Question)
    .add(LowMood1QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood1Question)
    .add(LowMood1QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood1Question)
    .add(LowMood1QuestionItem4);

  let LowMood2Question = await Question.findOne({ question: 'Feeling down, depressed, or hopeless' });
  if (!LowMood2Question) {
    LowMood2Question = await Question.create({
      question: 'Feeling down, depressed, or hopeless',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let LowMood2QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!LowMood2QuestionItem1) {
    LowMood2QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let LowMood2QuestionItem2 = await QuestionItems.findOne({ name: 'Several days' });
  if (!LowMood2QuestionItem2) {
    LowMood2QuestionItem2 = await QuestionItems.create({ name: 'Several days', order: 1 }).save();
  }
  let LowMood2QuestionItem3 = await QuestionItems.findOne({ name: 'More than half the days' });
  if (!LowMood2QuestionItem3) {
    LowMood2QuestionItem3 = await QuestionItems.create({ name: 'More than half the days', order: 2 }).save();
  }
  let LowMood2QuestionItem4 = await QuestionItems.findOne({ name: 'Nearly every day' });
  if (!LowMood2QuestionItem4) {
    LowMood2QuestionItem4 = await QuestionItems.create({ name: 'Nearly every day', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LowMood2Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LowMood2Question)
    .set(LowMoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood2Question)
    .add(LowMood2QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood2Question)
    .add(LowMood2QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood2Question)
    .add(LowMood2QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood2Question)
    .add(LowMood2QuestionItem4);

  let LowMood3Question = await Question.findOne({ question: 'Feeling nervous, anxious, or on edge' });
  if (!LowMood3Question) {
    LowMood3Question = await Question.create({
      question: 'Feeling nervous, anxious, or on edge',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let LowMood3QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!LowMood3QuestionItem1) {
    LowMood3QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let LowMood3QuestionItem2 = await QuestionItems.findOne({ name: 'Several days' });
  if (!LowMood3QuestionItem2) {
    LowMood3QuestionItem2 = await QuestionItems.create({ name: 'Several days', order: 1 }).save();
  }
  let LowMood3QuestionItem3 = await QuestionItems.findOne({ name: 'More than half the days' });
  if (!LowMood3QuestionItem3) {
    LowMood3QuestionItem3 = await QuestionItems.create({ name: 'More than half the days', order: 2 }).save();
  }
  let LowMood3QuestionItem4 = await QuestionItems.findOne({ name: 'Nearly every day' });
  if (!LowMood3QuestionItem4) {
    LowMood3QuestionItem4 = await QuestionItems.create({ name: 'Nearly every day', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LowMood3Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LowMood3Question)
    .set(LowMoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood3Question)
    .add(LowMood3QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood3Question)
    .add(LowMood3QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood3Question)
    .add(LowMood3QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood3Question)
    .add(LowMood3QuestionItem4);

  let LowMood4Question = await Question.findOne({ question: 'Not being able to stop or control worrying' });
  if (!LowMood4Question) {
    LowMood4Question = await Question.create({
      question: 'Not being able to stop or control worrying',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 3,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let LowMood4QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!LowMood4QuestionItem1) {
    LowMood4QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let LowMood4QuestionItem2 = await QuestionItems.findOne({ name: 'Several days' });
  if (!LowMood4QuestionItem2) {
    LowMood4QuestionItem2 = await QuestionItems.create({ name: 'Several days', order: 1 }).save();
  }
  let LowMood4QuestionItem3 = await QuestionItems.findOne({ name: 'More than half the days' });
  if (!LowMood4QuestionItem3) {
    LowMood4QuestionItem3 = await QuestionItems.create({ name: 'More than half the days', order: 2 }).save();
  }
  let LowMood4QuestionItem4 = await QuestionItems.findOne({ name: 'Nearly every day' });
  if (!LowMood4QuestionItem4) {
    LowMood4QuestionItem4 = await QuestionItems.create({ name: 'Nearly every day', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LowMood4Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LowMood4Question)
    .set(LowMoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood4Question)
    .add(LowMood4QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood4Question)
    .add(LowMood4QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood4Question)
    .add(LowMood4QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood4Question)
    .add(LowMood4QuestionItem4);

  let LowMood5Question = await Question.findOne({
    question:
      ' Earlier in the interview you mentioned that a health professional once diagnosed you with depression. About how old were you the very first time you had problems with depression for at least one month? (Your best estimate is fine if you cannot remember your exact age.)',
  });
  if (!LowMood5Question) {
    LowMood5Question = await Question.create({
      question:
        ' Earlier in the interview you mentioned that a health professional once diagnosed you with depression. About how old were you the very first time you had problems with depression for at least one month? (Your best estimate is fine if you cannot remember your exact age.)',
      stack: 1,
      stackPhrase: '',
      placeHolder: '3',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LowMood5Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LowMood5Question)
    .set(LowMoodSubSection);

  let LowMood6Question = await Question.findOne({
    question:
      'About how many years in your life did you have problems with depression or low mood for at least one month?  (Your best estimate is fine if you cannot remember the exact number.)',
  });
  if (!LowMood6Question) {
    LowMood6Question = await Question.create({
      question:
        'About how many years in your life did you have problems with depression or low mood for at least one month?  (Your best estimate is fine if you cannot remember the exact number.)',
      stack: 1,
      stackPhrase: '',
      placeHolder: '4',
      order: 5,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LowMood6Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LowMood6Question)
    .set(LowMoodSubSection);

  await boilerplateData2();
};

export const boilerplateData2 = async () => {
  let comboQuestionCategory = await Category.findOne({ name: 'Combo' });
  if (!comboQuestionCategory) {
    comboQuestionCategory = await Category.create({ name: 'Combo' }).save();
  }

  let openQuestionCategory = await Category.findOne({ name: 'Open' });
  if (!openQuestionCategory) {
    openQuestionCategory = await Category.create({ name: 'Open' }).save();
  }
  let multiLadderQuestionCategory = await Category.findOne({ name: 'MultiLadder' });
  if (!multiLadderQuestionCategory) {
    multiLadderQuestionCategory = await Category.create({ name: 'MultiLadder' }).save();
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

  let MoodSection = await Section.findOne({ name: 'Mood' });
  if (!MoodSection) {
    MoodSection = await Section.create({ name: 'Mood', order: 2 }).save();
  }
  let SocialSection = await Section.findOne({ name: 'Social' });
  if (!SocialSection) {
    SocialSection = await Section.create({ name: 'Social', order: 3 }).save();
  }
  let LowMoodSubSection = await SubSection.findOne({ name: 'Low Mood and Anxiety' });
  if (!LowMoodSubSection) {
    LowMoodSubSection = await SubSection.create({ name: 'Low Mood and Anxiety', order: 3 }).save();
  }
  await getConnection().createQueryBuilder().relation(SubSection, 'section').of(LowMoodSubSection).set(MoodSection);

  let SelfCompassionSubSection = await SubSection.findOne({ name: 'Self-Compassion' });
  if (!SelfCompassionSubSection) {
    SelfCompassionSubSection = await SubSection.create({ name: 'Self-Compassion', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(SelfCompassionSubSection)
    .set(MoodSection);

  let PetsSubSection = await SubSection.findOne({ name: 'Pets' });
  if (!PetsSubSection) {
    PetsSubSection = await SubSection.create({ name: 'Pets', order: 5 }).save();
  }
  await getConnection().createQueryBuilder().relation(SubSection, 'section').of(PetsSubSection).set(MoodSection);

  let StressfulSubSection = await SubSection.findOne({ name: 'Stressful Life Experiences' });
  if (!StressfulSubSection) {
    StressfulSubSection = await SubSection.create({ name: 'Stressful Life Experiences', order: 6 }).save();
  }
  await getConnection().createQueryBuilder().relation(SubSection, 'section').of(StressfulSubSection).set(MoodSection);

  let DiscriminationSubSection = await SubSection.findOne({ name: 'Everyday Discrimination' });
  if (!DiscriminationSubSection) {
    DiscriminationSubSection = await SubSection.create({ name: 'Everyday Discrimination', order: 0 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(DiscriminationSubSection)
    .set(SocialSection);

  let EmploymentSubSection = await SubSection.findOne({ name: 'Employment' });
  if (!EmploymentSubSection) {
    EmploymentSubSection = await SubSection.create({ name: 'Employment', order: 1 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(EmploymentSubSection)
    .set(SocialSection);

  let SocialNetSubSection = await SubSection.findOne({ name: 'Social Networks' });
  if (!SocialNetSubSection) {
    SocialNetSubSection = await SubSection.create({ name: 'Social Networks', order: 2 }).save();
  }
  await getConnection().createQueryBuilder().relation(SubSection, 'section').of(SocialNetSubSection).set(SocialSection);

  let NeighborhoodSubSection = await SubSection.findOne({ name: 'Your Neighborhood' });
  if (!NeighborhoodSubSection) {
    NeighborhoodSubSection = await SubSection.create({ name: 'Your Neighborhood', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(NeighborhoodSubSection)
    .set(SocialSection);

  let ReligiousnessSubSection = await SubSection.findOne({ name: 'Religiousness and Spirituality' });
  if (!ReligiousnessSubSection) {
    ReligiousnessSubSection = await SubSection.create({ name: 'Religiousness and Spirituality', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(ReligiousnessSubSection)
    .set(SocialSection);

  let SleepSubSection = await SubSection.findOne({ name: 'Sleep Quality Index' });
  if (!SleepSubSection) {
    SleepSubSection = await SubSection.create({ name: 'Sleep Quality Index', order: 5 }).save();
  }
  await getConnection().createQueryBuilder().relation(SubSection, 'section').of(SleepSubSection).set(SocialSection);

  let LowMood7Question = await Question.findOne({
    question:
      'About how many months out of the past 24 months (in the past 2 years) did you have problems with depression or low mood?',
  });
  if (!LowMood7Question) {
    LowMood7Question = await Question.create({
      question:
        'About how many months out of the past 24 months (in the past 2 years) did you have problems with depression or low mood?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '4',
      order: 6,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LowMood7Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LowMood7Question)
    .set(LowMoodSubSection);

  let LowMood8Question = await Question.findOne({
    question:
      'Have you ever done something to purposely hurt or injure yourself without wanting to die such as cutting, burning, or bruising yourself on purpose?',
  });
  if (!LowMood8Question) {
    LowMood8Question = await Question.create({
      question:
        'Have you ever done something to purposely hurt or injure yourself without wanting to die such as cutting, burning, or bruising yourself on purpose?',
      stack: 2,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 7,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LowMood8Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LowMood8Question)
    .set(LowMoodSubSection);

  let LowMood9Question = await Question.findOne({
    question:
      'During the last 12 months, how many times did you do something to purposely hurt or injure yourself without wanting to die such as cutting, burning, or bruising yourself on purpose?',
  });
  if (!LowMood9Question) {
    LowMood9Question = await Question.create({
      question:
        'During the last 12 months, how many times did you do something to purposely hurt or injure yourself without wanting to die such as cutting, burning, or bruising yourself on purpose?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 8,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let LowMood9QuestionItem1 = await QuestionItems.findOne({ name: '0 times' });
  if (!LowMood9QuestionItem1) {
    LowMood9QuestionItem1 = await QuestionItems.create({ name: '0 times', order: 0 }).save();
  }
  let LowMood9QuestionItem2 = await QuestionItems.findOne({ name: '1 to 2 times' });
  if (!LowMood9QuestionItem2) {
    LowMood9QuestionItem2 = await QuestionItems.create({ name: '1 to 2 times', order: 1 }).save();
  }
  let LowMood9QuestionItem3 = await QuestionItems.findOne({ name: '3 to 5 times' });
  if (!LowMood9QuestionItem3) {
    LowMood9QuestionItem3 = await QuestionItems.create({ name: '3 to 5 times', order: 2 }).save();
  }
  let LowMood9QuestionItem4 = await QuestionItems.findOne({ name: '6 to 9 times' });
  if (!LowMood9QuestionItem4) {
    LowMood9QuestionItem4 = await QuestionItems.create({ name: '6 to 9 times', order: 3 }).save();
  }
  let LowMood9QuestionItem5 = await QuestionItems.findOne({ name: '10 to 19 times' });
  if (!LowMood9QuestionItem5) {
    LowMood9QuestionItem5 = await QuestionItems.create({ name: '10 to 19 times', order: 4 }).save();
  }
  let LowMood9QuestionItem6 = await QuestionItems.findOne({ name: '20 or more times' });
  if (!LowMood9QuestionItem6) {
    LowMood9QuestionItem6 = await QuestionItems.create({ name: '20 or more times', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LowMood9Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LowMood9Question)
    .set(LowMoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood9Question)
    .add(LowMood9QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood9Question)
    .add(LowMood9QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood9Question)
    .add(LowMood9QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood9Question)
    .add(LowMood9QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood9Question)
    .add(LowMood9QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood9Question)
    .add(LowMood9QuestionItem6);

  let LowMood10Question = await Question.findOne({
    question: 'How many separate times in the past 12 months have you had thoughts of killing yourself?',
  });
  if (!LowMood10Question) {
    LowMood10Question = await Question.create({
      question: 'How many separate times in the past 12 months have you had thoughts of killing yourself?',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 9,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let LowMood10QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!LowMood10QuestionItem1) {
    LowMood10QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let LowMood10QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!LowMood10QuestionItem2) {
    LowMood10QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let LowMood10QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!LowMood10QuestionItem3) {
    LowMood10QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let LowMood10QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!LowMood10QuestionItem4) {
    LowMood10QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let LowMood10QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!LowMood10QuestionItem5) {
    LowMood10QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let LowMood10QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!LowMood10QuestionItem6) {
    LowMood10QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  let LowMood10QuestionItem7 = await QuestionItems.findOne({ name: '6' });
  if (!LowMood10QuestionItem7) {
    LowMood10QuestionItem7 = await QuestionItems.create({ name: '6', order: 6 }).save();
  }
  let LowMood10QuestionItem8 = await QuestionItems.findOne({ name: '7' });
  if (!LowMood10QuestionItem8) {
    LowMood10QuestionItem8 = await QuestionItems.create({ name: '7', order: 7 }).save();
  }
  let LowMood10QuestionItem9 = await QuestionItems.findOne({ name: '8' });
  if (!LowMood10QuestionItem9) {
    LowMood10QuestionItem9 = await QuestionItems.create({ name: '8', order: 8 }).save();
  }
  let LowMood10QuestionItem10 = await QuestionItems.findOne({ name: '9' });
  if (!LowMood10QuestionItem10) {
    LowMood10QuestionItem10 = await QuestionItems.create({ name: '9', order: 9 }).save();
  }
  let LowMood10QuestionItem11 = await QuestionItems.findOne({ name: '10 or more' });
  if (!LowMood10QuestionItem11) {
    LowMood10QuestionItem11 = await QuestionItems.create({ name: '10 or more', order: 10 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(LowMood10Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(LowMood10Question)
    .set(LowMoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood10Question)
    .add(LowMood10QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood10Question)
    .add(LowMood10QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood10Question)
    .add(LowMood10QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood10Question)
    .add(LowMood10QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood10Question)
    .add(LowMood10QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood10Question)
    .add(LowMood10QuestionItem6);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood10Question)
    .add(LowMood10QuestionItem7);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood10Question)
    .add(LowMood10QuestionItem8);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood10Question)
    .add(LowMood10QuestionItem9);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood10Question)
    .add(LowMood10QuestionItem10);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(LowMood10Question)
    .add(LowMood10QuestionItem11);

  let SelfCompassion1Question = await Question.findOne({
    question: 'When I fail at something important to me I become consumed by feelings of inadequacy.',
  });
  if (!SelfCompassion1Question) {
    SelfCompassion1Question = await Question.create({
      question: 'When I fail at something important to me I become consumed by feelings of inadequacy.',
      stack: 0,
      stackPhrase: 'Almost Never = 1, 2, 3, 4, 5=Almost Always',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SelfCompassion1QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!SelfCompassion1QuestionItem1) {
    SelfCompassion1QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let SelfCompassion1QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!SelfCompassion1QuestionItem2) {
    SelfCompassion1QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let SelfCompassion1QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!SelfCompassion1QuestionItem3) {
    SelfCompassion1QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let SelfCompassion1QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!SelfCompassion1QuestionItem4) {
    SelfCompassion1QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let SelfCompassion1QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!SelfCompassion1QuestionItem5) {
    SelfCompassion1QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let SelfCompassion1QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!SelfCompassion1QuestionItem6) {
    SelfCompassion1QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SelfCompassion1Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SelfCompassion1Question)
    .set(SelfCompassionSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion1Question)
    .add(SelfCompassion1QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion1Question)
    .add(SelfCompassion1QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion1Question)
    .add(SelfCompassion1QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion1Question)
    .add(SelfCompassion1QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion1Question)
    .add(SelfCompassion1QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion1Question)
    .add(SelfCompassion1QuestionItem6);

  let SelfCompassion2Question = await Question.findOne({
    question: 'I try to be understanding and patient towards those aspects of my personality I don’t like.',
  });
  if (!SelfCompassion2Question) {
    SelfCompassion2Question = await Question.create({
      question: 'I try to be understanding and patient towards those aspects of my personality I don’t like.',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SelfCompassion2QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!SelfCompassion2QuestionItem1) {
    SelfCompassion2QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let SelfCompassion2QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!SelfCompassion2QuestionItem2) {
    SelfCompassion2QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let SelfCompassion2QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!SelfCompassion2QuestionItem3) {
    SelfCompassion2QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let SelfCompassion2QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!SelfCompassion2QuestionItem4) {
    SelfCompassion2QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let SelfCompassion2QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!SelfCompassion2QuestionItem5) {
    SelfCompassion2QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let SelfCompassion2QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!SelfCompassion2QuestionItem6) {
    SelfCompassion2QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SelfCompassion2Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SelfCompassion2Question)
    .set(SelfCompassionSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion2Question)
    .add(SelfCompassion2QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion2Question)
    .add(SelfCompassion2QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion2Question)
    .add(SelfCompassion2QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion2Question)
    .add(SelfCompassion2QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion2Question)
    .add(SelfCompassion2QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion2Question)
    .add(SelfCompassion2QuestionItem6);

  let SelfCompassion3Question = await Question.findOne({
    question: 'When something painful happens I try to take a balanced view of the situation.',
  });
  if (!SelfCompassion3Question) {
    SelfCompassion3Question = await Question.create({
      question: 'When something painful happens I try to take a balanced view of the situation.',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SelfCompassion3QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!SelfCompassion3QuestionItem1) {
    SelfCompassion3QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let SelfCompassion3QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!SelfCompassion3QuestionItem2) {
    SelfCompassion3QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let SelfCompassion3QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!SelfCompassion3QuestionItem3) {
    SelfCompassion3QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let SelfCompassion3QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!SelfCompassion3QuestionItem4) {
    SelfCompassion3QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let SelfCompassion3QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!SelfCompassion3QuestionItem5) {
    SelfCompassion3QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let SelfCompassion3QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!SelfCompassion3QuestionItem6) {
    SelfCompassion3QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SelfCompassion3Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SelfCompassion3Question)
    .set(SelfCompassionSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion3Question)
    .add(SelfCompassion3QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion3Question)
    .add(SelfCompassion3QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion3Question)
    .add(SelfCompassion3QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion3Question)
    .add(SelfCompassion3QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion3Question)
    .add(SelfCompassion3QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion3Question)
    .add(SelfCompassion3QuestionItem6);

  let SelfCompassion4Question = await Question.findOne({
    question: 'When I’m feeling down, I tend to feel like most other people are probably happier than I am.',
  });
  if (!SelfCompassion4Question) {
    SelfCompassion4Question = await Question.create({
      question: 'When I’m feeling down, I tend to feel like most other people are probably happier than I am.',
      stack: 1,
      stackPhrase: 'Almost Never = 1, 2, 3, 4, 5=Almost Always',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SelfCompassion4QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!SelfCompassion4QuestionItem1) {
    SelfCompassion4QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let SelfCompassion4QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!SelfCompassion4QuestionItem2) {
    SelfCompassion4QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let SelfCompassion4QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!SelfCompassion4QuestionItem3) {
    SelfCompassion4QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let SelfCompassion4QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!SelfCompassion4QuestionItem4) {
    SelfCompassion4QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let SelfCompassion4QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!SelfCompassion4QuestionItem5) {
    SelfCompassion4QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let SelfCompassion4QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!SelfCompassion4QuestionItem6) {
    SelfCompassion4QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SelfCompassion4Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SelfCompassion4Question)
    .set(SelfCompassionSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion4Question)
    .add(SelfCompassion4QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion4Question)
    .add(SelfCompassion4QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion4Question)
    .add(SelfCompassion4QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion4Question)
    .add(SelfCompassion4QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion4Question)
    .add(SelfCompassion4QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion4Question)
    .add(SelfCompassion4QuestionItem6);

  let SelfCompassion5Question = await Question.findOne({
    question: 'I try to see my failings as part of the human condition.',
  });
  if (!SelfCompassion5Question) {
    SelfCompassion5Question = await Question.create({
      question: 'I try to see my failings as part of the human condition.',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SelfCompassion5QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!SelfCompassion5QuestionItem1) {
    SelfCompassion5QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let SelfCompassion5QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!SelfCompassion5QuestionItem2) {
    SelfCompassion5QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let SelfCompassion5QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!SelfCompassion5QuestionItem3) {
    SelfCompassion5QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let SelfCompassion5QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!SelfCompassion5QuestionItem4) {
    SelfCompassion5QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let SelfCompassion5QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!SelfCompassion5QuestionItem5) {
    SelfCompassion5QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let SelfCompassion5QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!SelfCompassion5QuestionItem6) {
    SelfCompassion5QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SelfCompassion5Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SelfCompassion5Question)
    .set(SelfCompassionSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion5Question)
    .add(SelfCompassion5QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion5Question)
    .add(SelfCompassion5QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion5Question)
    .add(SelfCompassion5QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion5Question)
    .add(SelfCompassion5QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion5Question)
    .add(SelfCompassion5QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion5Question)
    .add(SelfCompassion5QuestionItem6);

  let SelfCompassion6Question = await Question.findOne({
    question: 'When I’m going through a very hard time, I give myself the caring and tenderness I need.',
  });
  if (!SelfCompassion6Question) {
    SelfCompassion6Question = await Question.create({
      question: 'When I’m going through a very hard time, I give myself the caring and tenderness I need.',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 5,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SelfCompassion6QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!SelfCompassion6QuestionItem1) {
    SelfCompassion6QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let SelfCompassion6QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!SelfCompassion6QuestionItem2) {
    SelfCompassion6QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let SelfCompassion6QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!SelfCompassion6QuestionItem3) {
    SelfCompassion6QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let SelfCompassion6QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!SelfCompassion6QuestionItem4) {
    SelfCompassion6QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let SelfCompassion6QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!SelfCompassion6QuestionItem5) {
    SelfCompassion6QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let SelfCompassion6QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!SelfCompassion6QuestionItem6) {
    SelfCompassion6QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SelfCompassion6Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SelfCompassion6Question)
    .set(SelfCompassionSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion6Question)
    .add(SelfCompassion6QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion6Question)
    .add(SelfCompassion6QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion6Question)
    .add(SelfCompassion6QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion6Question)
    .add(SelfCompassion6QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion6Question)
    .add(SelfCompassion6QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion6Question)
    .add(SelfCompassion6QuestionItem6);

  let SelfCompassion7Question = await Question.findOne({
    question: 'When something upsets me I try to keep my emotions in balance.',
  });
  if (!SelfCompassion7Question) {
    SelfCompassion7Question = await Question.create({
      question: 'When something upsets me I try to keep my emotions in balance.',
      stack: 2,
      stackPhrase: 'Almost Never = 1, 2, 3, 4, 5=Almost Always',
      placeHolder: '',
      order: 6,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SelfCompassion7QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!SelfCompassion7QuestionItem1) {
    SelfCompassion7QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let SelfCompassion7QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!SelfCompassion7QuestionItem2) {
    SelfCompassion7QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let SelfCompassion7QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!SelfCompassion7QuestionItem3) {
    SelfCompassion7QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let SelfCompassion7QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!SelfCompassion7QuestionItem4) {
    SelfCompassion7QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let SelfCompassion7QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!SelfCompassion7QuestionItem5) {
    SelfCompassion7QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let SelfCompassion7QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!SelfCompassion7QuestionItem6) {
    SelfCompassion7QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SelfCompassion7Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SelfCompassion7Question)
    .set(SelfCompassionSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion7Question)
    .add(SelfCompassion7QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion7Question)
    .add(SelfCompassion7QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion7Question)
    .add(SelfCompassion7QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion7Question)
    .add(SelfCompassion7QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion7Question)
    .add(SelfCompassion7QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion7Question)
    .add(SelfCompassion7QuestionItem6);

  let SelfCompassion8Question = await Question.findOne({
    question: 'When I fail at something that’s important to me, I tend to feel alone in my failure.',
  });
  if (!SelfCompassion8Question) {
    SelfCompassion8Question = await Question.create({
      question: 'When I fail at something that’s important to me, I tend to feel alone in my failure.',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 7,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SelfCompassion8QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!SelfCompassion8QuestionItem1) {
    SelfCompassion8QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let SelfCompassion8QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!SelfCompassion8QuestionItem2) {
    SelfCompassion8QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let SelfCompassion8QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!SelfCompassion8QuestionItem3) {
    SelfCompassion8QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let SelfCompassion8QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!SelfCompassion8QuestionItem4) {
    SelfCompassion8QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let SelfCompassion8QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!SelfCompassion8QuestionItem5) {
    SelfCompassion8QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let SelfCompassion8QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!SelfCompassion8QuestionItem6) {
    SelfCompassion8QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SelfCompassion8Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SelfCompassion8Question)
    .set(SelfCompassionSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion8Question)
    .add(SelfCompassion8QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion8Question)
    .add(SelfCompassion8QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion8Question)
    .add(SelfCompassion8QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion8Question)
    .add(SelfCompassion8QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion8Question)
    .add(SelfCompassion8QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion8Question)
    .add(SelfCompassion8QuestionItem6);

  let SelfCompassion9Question = await Question.findOne({
    question: 'When I’m feeling down I tend to obsess and fixate on everything that’s wrong.',
  });
  if (!SelfCompassion9Question) {
    SelfCompassion9Question = await Question.create({
      question: 'When I’m feeling down I tend to obsess and fixate on everything that’s wrong.',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 8,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SelfCompassion9QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!SelfCompassion9QuestionItem1) {
    SelfCompassion9QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let SelfCompassion9QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!SelfCompassion9QuestionItem2) {
    SelfCompassion9QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let SelfCompassion9QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!SelfCompassion9QuestionItem3) {
    SelfCompassion9QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let SelfCompassion9QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!SelfCompassion9QuestionItem4) {
    SelfCompassion9QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let SelfCompassion9QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!SelfCompassion9QuestionItem5) {
    SelfCompassion9QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let SelfCompassion9QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!SelfCompassion9QuestionItem6) {
    SelfCompassion9QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SelfCompassion9Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SelfCompassion9Question)
    .set(SelfCompassionSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion9Question)
    .add(SelfCompassion9QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion9Question)
    .add(SelfCompassion9QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion9Question)
    .add(SelfCompassion9QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion9Question)
    .add(SelfCompassion9QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion9Question)
    .add(SelfCompassion9QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion9Question)
    .add(SelfCompassion9QuestionItem6);

  let SelfCompassion10Question = await Question.findOne({
    question:
      'When I feel inadequate in some way, I try to remind myself that feelings of inadequacy are shared by most people.',
  });
  if (!SelfCompassion10Question) {
    SelfCompassion10Question = await Question.create({
      question:
        'When I feel inadequate in some way, I try to remind myself that feelings of inadequacy are shared by most people.',
      stack: 3,
      stackPhrase: 'Almost Never = 1, 2, 3, 4, 5=Almost Always',
      placeHolder: '',
      order: 8,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SelfCompassion10QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!SelfCompassion10QuestionItem1) {
    SelfCompassion10QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let SelfCompassion10QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!SelfCompassion10QuestionItem2) {
    SelfCompassion10QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let SelfCompassion10QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!SelfCompassion10QuestionItem3) {
    SelfCompassion10QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let SelfCompassion10QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!SelfCompassion10QuestionItem4) {
    SelfCompassion10QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let SelfCompassion10QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!SelfCompassion10QuestionItem5) {
    SelfCompassion10QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let SelfCompassion10QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!SelfCompassion10QuestionItem6) {
    SelfCompassion10QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SelfCompassion10Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SelfCompassion10Question)
    .set(SelfCompassionSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion10Question)
    .add(SelfCompassion10QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion10Question)
    .add(SelfCompassion10QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion10Question)
    .add(SelfCompassion10QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion10Question)
    .add(SelfCompassion10QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion10Question)
    .add(SelfCompassion10QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion10Question)
    .add(SelfCompassion10QuestionItem6);

  let SelfCompassion11Question = await Question.findOne({
    question: 'I’m disapproving and judgmental about my own flaws and inadequacies.',
  });
  if (!SelfCompassion11Question) {
    SelfCompassion11Question = await Question.create({
      question: 'I’m disapproving and judgmental about my own flaws and inadequacies.',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 9,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SelfCompassion11QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!SelfCompassion11QuestionItem1) {
    SelfCompassion11QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let SelfCompassion11QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!SelfCompassion11QuestionItem2) {
    SelfCompassion11QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let SelfCompassion11QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!SelfCompassion11QuestionItem3) {
    SelfCompassion11QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let SelfCompassion11QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!SelfCompassion11QuestionItem4) {
    SelfCompassion11QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let SelfCompassion11QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!SelfCompassion11QuestionItem5) {
    SelfCompassion11QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let SelfCompassion11QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!SelfCompassion11QuestionItem6) {
    SelfCompassion11QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SelfCompassion11Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SelfCompassion11Question)
    .set(SelfCompassionSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion11Question)
    .add(SelfCompassion11QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion11Question)
    .add(SelfCompassion11QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion11Question)
    .add(SelfCompassion11QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion11Question)
    .add(SelfCompassion11QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion11Question)
    .add(SelfCompassion11QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion11Question)
    .add(SelfCompassion11QuestionItem6);

  let SelfCompassion12Question = await Question.findOne({
    question: 'I’m intolerant and impatient towards those aspects of my personality I don’t like.',
  });
  if (!SelfCompassion12Question) {
    SelfCompassion12Question = await Question.create({
      question: 'I’m intolerant and impatient towards those aspects of my personality I don’t like.',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 11,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SelfCompassion12QuestionItem1 = await QuestionItems.findOne({ name: '0' });
  if (!SelfCompassion12QuestionItem1) {
    SelfCompassion12QuestionItem1 = await QuestionItems.create({ name: '0', order: 0 }).save();
  }
  let SelfCompassion12QuestionItem2 = await QuestionItems.findOne({ name: '1' });
  if (!SelfCompassion12QuestionItem2) {
    SelfCompassion12QuestionItem2 = await QuestionItems.create({ name: '1', order: 1 }).save();
  }
  let SelfCompassion12QuestionItem3 = await QuestionItems.findOne({ name: '2' });
  if (!SelfCompassion12QuestionItem3) {
    SelfCompassion12QuestionItem3 = await QuestionItems.create({ name: '2', order: 2 }).save();
  }
  let SelfCompassion12QuestionItem4 = await QuestionItems.findOne({ name: '3' });
  if (!SelfCompassion12QuestionItem4) {
    SelfCompassion12QuestionItem4 = await QuestionItems.create({ name: '3', order: 3 }).save();
  }
  let SelfCompassion12QuestionItem5 = await QuestionItems.findOne({ name: '4' });
  if (!SelfCompassion12QuestionItem5) {
    SelfCompassion12QuestionItem5 = await QuestionItems.create({ name: '4', order: 4 }).save();
  }
  let SelfCompassion12QuestionItem6 = await QuestionItems.findOne({ name: '5' });
  if (!SelfCompassion12QuestionItem6) {
    SelfCompassion12QuestionItem6 = await QuestionItems.create({ name: '5', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SelfCompassion12Question)
    .set(multiLadderQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SelfCompassion12Question)
    .set(SelfCompassionSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion12Question)
    .add(SelfCompassion12QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion12Question)
    .add(SelfCompassion12QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion12Question)
    .add(SelfCompassion12QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion12Question)
    .add(SelfCompassion12QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion12Question)
    .add(SelfCompassion12QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SelfCompassion12Question)
    .add(SelfCompassion12QuestionItem6);

  let Pets1Question = await Question.findOne({ question: 'Do you have a pet?' });
  if (!Pets1Question) {
    Pets1Question = await Question.create({
      question: 'Do you have a pet?',
      stack: 0,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Pets1Question)
    .set(yesnoQuestionCategory);
  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Pets1Question).set(PetsSubSection);
  let Pets2Question = await Question.findOne({ question: 'What type of pet(s) do you have? (check all that apply)' });
  if (!Pets2Question) {
    Pets2Question = await Question.create({
      question: 'What type of pet(s) do you have? (check all that apply)',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Pets2QuestionItem1 = await QuestionItems.findOne({ name: 'Dog(s)' });
  if (!Pets2QuestionItem1) {
    Pets2QuestionItem1 = await QuestionItems.create({ name: 'Dog(s)', order: 0 }).save();
  }
  let Pets2QuestionItem2 = await QuestionItems.findOne({ name: 'Cat(s)' });
  if (!Pets2QuestionItem2) {
    Pets2QuestionItem2 = await QuestionItems.create({ name: 'Cat(s)', order: 1 }).save();
  }
  let Pets2QuestionItem3 = await QuestionItems.findOne({ name: 'Bird(s)' });
  if (!Pets2QuestionItem3) {
    Pets2QuestionItem3 = await QuestionItems.create({ name: 'Bird(s)', order: 2 }).save();
  }
  let Pets2QuestionItem4 = await QuestionItems.findOne({ name: 'Fish/Reptile/Amphibians' });
  if (!Pets2QuestionItem4) {
    Pets2QuestionItem4 = await QuestionItems.create({ name: 'Fish/Reptile/Amphibians', order: 3 }).save();
  }
  let Pets2QuestionItem5 = await QuestionItems.findOne({ name: 'Small Mammals' });
  if (!Pets2QuestionItem5) {
    Pets2QuestionItem5 = await QuestionItems.create({ name: 'Small Mammals', order: 4 }).save();
  }
  let Pets2QuestionItem6 = await QuestionItems.findOne({ name: 'None of these' });
  if (!Pets2QuestionItem6) {
    Pets2QuestionItem6 = await QuestionItems.create({ name: 'None of these', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Pets2Question)
    .set(multiselectionQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Pets2Question).set(PetsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets2Question).add(Pets2QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets2Question).add(Pets2QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets2Question).add(Pets2QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets2Question).add(Pets2QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets2Question).add(Pets2QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets2Question).add(Pets2QuestionItem6);

  let Pets3Question = await Question.findOne({ question: 'I do not really like animals.' });
  if (!Pets3Question) {
    Pets3Question = await Question.create({
      question: 'I do not really like animals.',
      stack: 1,
      stackPhrase:
        'Use the following 5-point scale to indicate how much you agree or disagree with the following statements.  1 = Strongly agree, 2 = Agree, 3 = Not Sure, 4 = Disagree, 5 = Strongly disagree',
      placeHolder: '',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Pets3QuestionItem1 = await QuestionItems.findOne({ name: '1' });
  if (!Pets3QuestionItem1) {
    Pets3QuestionItem1 = await QuestionItems.create({ name: '1', order: 0 }).save();
  }
  let Pets3QuestionItem2 = await QuestionItems.findOne({ name: '2' });
  if (!Pets3QuestionItem2) {
    Pets3QuestionItem2 = await QuestionItems.create({ name: '2', order: 1 }).save();
  }
  let Pets3QuestionItem3 = await QuestionItems.findOne({ name: '3' });
  if (!Pets3QuestionItem3) {
    Pets3QuestionItem3 = await QuestionItems.create({ name: '3', order: 2 }).save();
  }
  let Pets3QuestionItem4 = await QuestionItems.findOne({ name: '4' });
  if (!Pets3QuestionItem4) {
    Pets3QuestionItem4 = await QuestionItems.create({ name: '4', order: 3 }).save();
  }
  let Pets3QuestionItem5 = await QuestionItems.findOne({ name: '5' });
  if (!Pets3QuestionItem5) {
    Pets3QuestionItem5 = await QuestionItems.create({ name: '5', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Pets3Question)
    .set(multiLadderQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Pets3Question).set(PetsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets3Question).add(Pets3QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets3Question).add(Pets3QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets3Question).add(Pets3QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets3Question).add(Pets3QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets3Question).add(Pets3QuestionItem5);

  let Pets4Question = await Question.findOne({ question: 'I spend time every day playing with my pet.' });
  if (!Pets4Question) {
    Pets4Question = await Question.create({
      question: 'I spend time every day playing with my pet.',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 3,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Pets4QuestionItem1 = await QuestionItems.findOne({ name: '1' });
  if (!Pets4QuestionItem1) {
    Pets4QuestionItem1 = await QuestionItems.create({ name: '1', order: 0 }).save();
  }
  let Pets4QuestionItem2 = await QuestionItems.findOne({ name: '2' });
  if (!Pets4QuestionItem2) {
    Pets4QuestionItem2 = await QuestionItems.create({ name: '2', order: 1 }).save();
  }
  let Pets4QuestionItem3 = await QuestionItems.findOne({ name: '3' });
  if (!Pets4QuestionItem3) {
    Pets4QuestionItem3 = await QuestionItems.create({ name: '3', order: 2 }).save();
  }
  let Pets4QuestionItem4 = await QuestionItems.findOne({ name: '4' });
  if (!Pets4QuestionItem4) {
    Pets4QuestionItem4 = await QuestionItems.create({ name: '4', order: 3 }).save();
  }
  let Pets4QuestionItem5 = await QuestionItems.findOne({ name: '5' });
  if (!Pets4QuestionItem5) {
    Pets4QuestionItem5 = await QuestionItems.create({ name: '5', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Pets4Question)
    .set(multiLadderQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Pets4Question).set(PetsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets4Question).add(Pets4QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets4Question).add(Pets4QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets4Question).add(Pets4QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets4Question).add(Pets4QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets4Question).add(Pets4QuestionItem5);

  let Pets5Question = await Question.findOne({
    question: 'I have sometimes talked to my pet and understood what he/she was trying to tell me.',
  });
  if (!Pets5Question) {
    Pets5Question = await Question.create({
      question: 'I have sometimes talked to my pet and understood what he/she was trying to tell me.',
      stack: 2,
      stackPhrase:
        'Use the following 5-point scale to indicate how much you agree or disagree with the following statements. 1 = Strongly agree, 2 = Agree, 3 = Not Sure, 4 = Disagree, 5 = Strongly disagree',
      placeHolder: '',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Pets5QuestionItem1 = await QuestionItems.findOne({ name: '1' });
  if (!Pets5QuestionItem1) {
    Pets5QuestionItem1 = await QuestionItems.create({ name: '1', order: 0 }).save();
  }
  let Pets5QuestionItem2 = await QuestionItems.findOne({ name: '2' });
  if (!Pets5QuestionItem2) {
    Pets5QuestionItem2 = await QuestionItems.create({ name: '2', order: 1 }).save();
  }
  let Pets5QuestionItem3 = await QuestionItems.findOne({ name: '3' });
  if (!Pets5QuestionItem3) {
    Pets5QuestionItem3 = await QuestionItems.create({ name: '3', order: 2 }).save();
  }
  let Pets5QuestionItem4 = await QuestionItems.findOne({ name: '4' });
  if (!Pets5QuestionItem4) {
    Pets5QuestionItem4 = await QuestionItems.create({ name: '4', order: 3 }).save();
  }
  let Pets5QuestionItem5 = await QuestionItems.findOne({ name: '5' });
  if (!Pets5QuestionItem5) {
    Pets5QuestionItem5 = await QuestionItems.create({ name: '5', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Pets5Question)
    .set(multiLadderQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Pets5Question).set(PetsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets5Question).add(Pets5QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets5Question).add(Pets5QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets5Question).add(Pets5QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets5Question).add(Pets5QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets5Question).add(Pets5QuestionItem5);

  let Pets6Question = await Question.findOne({ question: 'I love pets.' });
  if (!Pets6Question) {
    Pets6Question = await Question.create({
      question: 'I love pets.',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 5,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Pets6QuestionItem1 = await QuestionItems.findOne({ name: '1' });
  if (!Pets6QuestionItem1) {
    Pets6QuestionItem1 = await QuestionItems.create({ name: '1', order: 0 }).save();
  }
  let Pets6QuestionItem2 = await QuestionItems.findOne({ name: '2' });
  if (!Pets6QuestionItem2) {
    Pets6QuestionItem2 = await QuestionItems.create({ name: '2', order: 1 }).save();
  }
  let Pets6QuestionItem3 = await QuestionItems.findOne({ name: '3' });
  if (!Pets6QuestionItem3) {
    Pets6QuestionItem3 = await QuestionItems.create({ name: '3', order: 2 }).save();
  }
  let Pets6QuestionItem4 = await QuestionItems.findOne({ name: '4' });
  if (!Pets6QuestionItem4) {
    Pets6QuestionItem4 = await QuestionItems.create({ name: '4', order: 3 }).save();
  }
  let Pets6QuestionItem5 = await QuestionItems.findOne({ name: '5' });
  if (!Pets6QuestionItem5) {
    Pets6QuestionItem5 = await QuestionItems.create({ name: '5', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Pets6Question)
    .set(multiLadderQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Pets6Question).set(PetsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets6Question).add(Pets6QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets6Question).add(Pets6QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets6Question).add(Pets6QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets6Question).add(Pets6QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets6Question).add(Pets6QuestionItem5);

  let Pets7Question = await Question.findOne({ question: 'I talk to my pet quite a lot.' });
  if (!Pets7Question) {
    Pets7Question = await Question.create({
      question: 'I talk to my pet quite a lot.',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 6,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Pets7QuestionItem1 = await QuestionItems.findOne({ name: '1' });
  if (!Pets7QuestionItem1) {
    Pets7QuestionItem1 = await QuestionItems.create({ name: '1', order: 0 }).save();
  }
  let Pets7QuestionItem2 = await QuestionItems.findOne({ name: '2' });
  if (!Pets7QuestionItem2) {
    Pets7QuestionItem2 = await QuestionItems.create({ name: '2', order: 1 }).save();
  }
  let Pets7QuestionItem3 = await QuestionItems.findOne({ name: '3' });
  if (!Pets7QuestionItem3) {
    Pets7QuestionItem3 = await QuestionItems.create({ name: '3', order: 2 }).save();
  }
  let Pets7QuestionItem4 = await QuestionItems.findOne({ name: '4' });
  if (!Pets7QuestionItem4) {
    Pets7QuestionItem4 = await QuestionItems.create({ name: '4', order: 3 }).save();
  }
  let Pets7QuestionItem5 = await QuestionItems.findOne({ name: '5' });
  if (!Pets7QuestionItem5) {
    Pets7QuestionItem5 = await QuestionItems.create({ name: '5', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Pets7Question)
    .set(multiLadderQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Pets7Question).set(PetsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets7Question).add(Pets7QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets7Question).add(Pets7QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets7Question).add(Pets7QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets7Question).add(Pets7QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets7Question).add(Pets7QuestionItem5);

  let Pets8Question = await Question.findOne({ question: 'My pet makes me feel happy.' });
  if (!Pets8Question) {
    Pets8Question = await Question.create({
      question: 'My pet makes me feel happy.',
      stack: 3,
      stackPhrase:
        'Use the following 5-point scale to indicate how much you agree or disagree with the following statements. 1 = Strongly agree, 2 = Agree, 3 = Not Sure, 4 = Disagree, 5 = Strongly disagree',
      placeHolder: '',
      order: 7,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Pets8QuestionItem1 = await QuestionItems.findOne({ name: '1' });
  if (!Pets8QuestionItem1) {
    Pets8QuestionItem1 = await QuestionItems.create({ name: '1', order: 0 }).save();
  }
  let Pets8QuestionItem2 = await QuestionItems.findOne({ name: '2' });
  if (!Pets8QuestionItem2) {
    Pets8QuestionItem2 = await QuestionItems.create({ name: '2', order: 1 }).save();
  }
  let Pets8QuestionItem3 = await QuestionItems.findOne({ name: '3' });
  if (!Pets8QuestionItem3) {
    Pets8QuestionItem3 = await QuestionItems.create({ name: '3', order: 2 }).save();
  }
  let Pets8QuestionItem4 = await QuestionItems.findOne({ name: '4' });
  if (!Pets8QuestionItem4) {
    Pets8QuestionItem4 = await QuestionItems.create({ name: '4', order: 3 }).save();
  }
  let Pets8QuestionItem5 = await QuestionItems.findOne({ name: '5' });
  if (!Pets8QuestionItem5) {
    Pets8QuestionItem5 = await QuestionItems.create({ name: '5', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Pets8Question)
    .set(multiLadderQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Pets8Question).set(PetsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets8Question).add(Pets8QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets8Question).add(Pets8QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets8Question).add(Pets8QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets8Question).add(Pets8QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets8Question).add(Pets8QuestionItem5);

  let Pets9Question = await Question.findOne({ question: 'I consider my pet to be a friend.' });
  if (!Pets9Question) {
    Pets9Question = await Question.create({
      question: 'I consider my pet to be a friend.',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 8,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Pets9QuestionItem1 = await QuestionItems.findOne({ name: '1' });
  if (!Pets9QuestionItem1) {
    Pets9QuestionItem1 = await QuestionItems.create({ name: '1', order: 0 }).save();
  }
  let Pets9QuestionItem2 = await QuestionItems.findOne({ name: '2' });
  if (!Pets9QuestionItem2) {
    Pets9QuestionItem2 = await QuestionItems.create({ name: '2', order: 1 }).save();
  }
  let Pets9QuestionItem3 = await QuestionItems.findOne({ name: '3' });
  if (!Pets9QuestionItem3) {
    Pets9QuestionItem3 = await QuestionItems.create({ name: '3', order: 2 }).save();
  }
  let Pets9QuestionItem4 = await QuestionItems.findOne({ name: '4' });
  if (!Pets9QuestionItem4) {
    Pets9QuestionItem4 = await QuestionItems.create({ name: '4', order: 3 }).save();
  }
  let Pets9QuestionItem5 = await QuestionItems.findOne({ name: '5' });
  if (!Pets9QuestionItem5) {
    Pets9QuestionItem5 = await QuestionItems.create({ name: '5', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Pets9Question)
    .set(multiLadderQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Pets9Question).set(PetsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets9Question).add(Pets9QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets9Question).add(Pets9QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets9Question).add(Pets9QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets9Question).add(Pets9QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets9Question).add(Pets9QuestionItem5);

  let Pets10Question = await Question.findOne({ question: 'My pet knows when I’m upset and tries to comfort me.' });
  if (!Pets10Question) {
    Pets10Question = await Question.create({
      question: 'My pet knows when I’m upset and tries to comfort me.',
      stack: 4,
      stackPhrase:
        'Use the following 5-point scale to indicate how much you agree or disagree with the following statements. 1 = Strongly agree, 2 = Agree, 3 = Not Sure, 4 = Disagree, 5 = Strongly disagree',
      placeHolder: '',
      order: 9,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Pets10QuestionItem1 = await QuestionItems.findOne({ name: '1' });
  if (!Pets10QuestionItem1) {
    Pets10QuestionItem1 = await QuestionItems.create({ name: '1', order: 0 }).save();
  }
  let Pets10QuestionItem2 = await QuestionItems.findOne({ name: '2' });
  if (!Pets10QuestionItem2) {
    Pets10QuestionItem2 = await QuestionItems.create({ name: '2', order: 1 }).save();
  }
  let Pets10QuestionItem3 = await QuestionItems.findOne({ name: '3' });
  if (!Pets10QuestionItem3) {
    Pets10QuestionItem3 = await QuestionItems.create({ name: '3', order: 2 }).save();
  }
  let Pets10QuestionItem4 = await QuestionItems.findOne({ name: '4' });
  if (!Pets10QuestionItem4) {
    Pets10QuestionItem4 = await QuestionItems.create({ name: '4', order: 3 }).save();
  }
  let Pets10QuestionItem5 = await QuestionItems.findOne({ name: '5' });
  if (!Pets10QuestionItem5) {
    Pets10QuestionItem5 = await QuestionItems.create({ name: '5', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Pets10Question)
    .set(multiLadderQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Pets10Question).set(PetsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets10Question).add(Pets10QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets10Question).add(Pets10QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets10Question).add(Pets10QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets10Question).add(Pets10QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets10Question).add(Pets10QuestionItem5);

  let Pets11Question = await Question.findOne({ question: 'There are times I’d be lonely without my pet.' });
  if (!Pets11Question) {
    Pets11Question = await Question.create({
      question: 'There are times I’d be lonely without my pet.',
      stack: 4,
      stackPhrase: '',
      placeHolder: '',
      order: 10,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Pets11QuestionItem1 = await QuestionItems.findOne({ name: '1' });
  if (!Pets11QuestionItem1) {
    Pets11QuestionItem1 = await QuestionItems.create({ name: '1', order: 0 }).save();
  }
  let Pets11QuestionItem2 = await QuestionItems.findOne({ name: '2' });
  if (!Pets11QuestionItem2) {
    Pets11QuestionItem2 = await QuestionItems.create({ name: '2', order: 1 }).save();
  }
  let Pets11QuestionItem3 = await QuestionItems.findOne({ name: '3' });
  if (!Pets11QuestionItem3) {
    Pets11QuestionItem3 = await QuestionItems.create({ name: '3', order: 2 }).save();
  }
  let Pets11QuestionItem4 = await QuestionItems.findOne({ name: '4' });
  if (!Pets11QuestionItem4) {
    Pets11QuestionItem4 = await QuestionItems.create({ name: '4', order: 3 }).save();
  }
  let Pets11QuestionItem5 = await QuestionItems.findOne({ name: '5' });
  if (!Pets11QuestionItem5) {
    Pets11QuestionItem5 = await QuestionItems.create({ name: '5', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Pets11Question)
    .set(multiLadderQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Pets11Question).set(PetsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets11Question).add(Pets11QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets11Question).add(Pets11QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets11Question).add(Pets11QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets11Question).add(Pets11QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Pets11Question).add(Pets11QuestionItem5);

  let Stressful1Question = await Question.findOne({
    question: 'A life-threatening illness or injury of a very close friend or close family member',
  });
  if (!Stressful1Question) {
    Stressful1Question = await Question.create({
      question: 'A life-threatening illness or injury of a very close friend or close family member',
      stack: 0,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful1Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful1Question)
    .set(StressfulSubSection);

  let Stressful2Question = await Question.findOne({ question: 'Death of a very close friend or close family member' });
  if (!Stressful2Question) {
    Stressful2Question = await Question.create({
      question: 'Death of a very close friend or close family member',
      stack: 0,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful2Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful2Question)
    .set(StressfulSubSection);

  let Stressful3Question = await Question.findOne({ question: 'Serious betrayal by someone close to you' });
  if (!Stressful3Question) {
    Stressful3Question = await Question.create({
      question: 'Serious betrayal by someone close to you',
      stack: 0,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful3Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful3Question)
    .set(StressfulSubSection);

  let Stressful4Question = await Question.findOne({
    question: 'Serious ongoing arguments or break-up with some other close friend or family member',
  });
  if (!Stressful4Question) {
    Stressful4Question = await Question.create({
      question: 'Serious ongoing arguments or break-up with some other close friend or family member',
      stack: 0,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 3,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful4Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful4Question)
    .set(StressfulSubSection);

  let Stressful5Question = await Question.findOne({
    question:
      'You were involved in a motor vehicle accident while you were driving (regardless of who was responsible)',
  });
  if (!Stressful5Question) {
    Stressful5Question = await Question.create({
      question:
        'You were involved in a motor vehicle accident while you were driving (regardless of who was responsible)',
      stack: 1,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful5Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful5Question)
    .set(StressfulSubSection);

  let Stressful6Question = await Question.findOne({ question: 'Any serious legal problem' });
  if (!Stressful6Question) {
    Stressful6Question = await Question.create({
      question: 'Any serious legal problem',
      stack: 1,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 5,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful6Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful6Question)
    .set(StressfulSubSection);

  let Stressful7Question = await Question.findOne({ question: 'Any other very stressful event' });
  if (!Stressful7Question) {
    Stressful7Question = await Question.create({
      question: 'Any other very stressful event',
      stack: 1,
      stackPhrase: '',
      placeHolder: 'Yes/No',
      order: 6,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful7Question)
    .set(yesnoQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful7Question)
    .set(StressfulSubSection);

  let Stressful8Question = await Question.findOne({ question: 'Briefly, what happened?' });
  if (!Stressful8Question) {
    Stressful8Question = await Question.create({
      question: 'Briefly, what happened?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '3',
      order: 7,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful8Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful8Question)
    .set(PetsSubSection);

  let Stressful9Question = await Question.findOne({ question: 'Your financial situation' });
  if (!Stressful9Question) {
    Stressful9Question = await Question.create({
      question: 'Your financial situation',
      stack: 2,
      stackPhrase: 'How much stress did you have over the past 24 months in each of the following areas of your life?',
      placeHolder: '',
      order: 8,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Stressful9QuestionItem1 = await QuestionItems.findOne({ name: 'None' });
  if (!Stressful9QuestionItem1) {
    Stressful9QuestionItem1 = await QuestionItems.create({ name: 'None', order: 0 }).save();
  }
  let Stressful9QuestionItem2 = await QuestionItems.findOne({ name: 'Mild' });
  if (!Stressful9QuestionItem2) {
    Stressful9QuestionItem2 = await QuestionItems.create({ name: 'Mild', order: 1 }).save();
  }
  let Stressful9QuestionItem3 = await QuestionItems.findOne({ name: 'Moderate' });
  if (!Stressful9QuestionItem3) {
    Stressful9QuestionItem3 = await QuestionItems.create({ name: 'Moderate', order: 2 }).save();
  }
  let Stressful9QuestionItem4 = await QuestionItems.findOne({ name: 'Severe' });
  if (!Stressful9QuestionItem4) {
    Stressful9QuestionItem4 = await QuestionItems.create({ name: 'Severe', order: 3 }).save();
  }
  let Stressful9QuestionItem5 = await QuestionItems.findOne({ name: 'Very severe' });
  if (!Stressful9QuestionItem5) {
    Stressful9QuestionItem5 = await QuestionItems.create({ name: 'Very severe', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful9Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful9Question)
    .set(StressfulSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful9Question)
    .add(Stressful9QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful9Question)
    .add(Stressful9QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful9Question)
    .add(Stressful9QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful9Question)
    .add(Stressful9QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful9Question)
    .add(Stressful9QuestionItem5);

  let Stressful10Question = await Question.findOne({ question: 'Your career' });
  if (!Stressful10Question) {
    Stressful10Question = await Question.create({
      question: 'Your career',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 9,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Stressful10QuestionItem1 = await QuestionItems.findOne({ name: 'None' });
  if (!Stressful10QuestionItem1) {
    Stressful10QuestionItem1 = await QuestionItems.create({ name: 'None', order: 0 }).save();
  }
  let Stressful10QuestionItem2 = await QuestionItems.findOne({ name: 'Mild' });
  if (!Stressful10QuestionItem2) {
    Stressful10QuestionItem2 = await QuestionItems.create({ name: 'Mild', order: 1 }).save();
  }
  let Stressful10QuestionItem3 = await QuestionItems.findOne({ name: 'Moderate' });
  if (!Stressful10QuestionItem3) {
    Stressful10QuestionItem3 = await QuestionItems.create({ name: 'Moderate', order: 2 }).save();
  }
  let Stressful10QuestionItem4 = await QuestionItems.findOne({ name: 'Severe' });
  if (!Stressful10QuestionItem4) {
    Stressful10QuestionItem4 = await QuestionItems.create({ name: 'Severe', order: 3 }).save();
  }
  let Stressful10QuestionItem5 = await QuestionItems.findOne({ name: 'Very severe' });
  if (!Stressful10QuestionItem5) {
    Stressful10QuestionItem5 = await QuestionItems.create({ name: 'Very severe', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful10Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful10Question)
    .set(StressfulSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful10Question)
    .add(Stressful10QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful10Question)
    .add(Stressful10QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful10Question)
    .add(Stressful10QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful10Question)
    .add(Stressful10QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful10Question)
    .add(Stressful10QuestionItem5);

  let Stressful11Question = await Question.findOne({ question: 'Your health' });
  if (!Stressful11Question) {
    Stressful11Question = await Question.create({
      question: 'Your health',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 10,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Stressful11QuestionItem1 = await QuestionItems.findOne({ name: 'None' });
  if (!Stressful11QuestionItem1) {
    Stressful11QuestionItem1 = await QuestionItems.create({ name: 'None', order: 0 }).save();
  }
  let Stressful11QuestionItem2 = await QuestionItems.findOne({ name: 'Mild' });
  if (!Stressful11QuestionItem2) {
    Stressful11QuestionItem2 = await QuestionItems.create({ name: 'Mild', order: 1 }).save();
  }
  let Stressful11QuestionItem3 = await QuestionItems.findOne({ name: 'Moderate' });
  if (!Stressful11QuestionItem3) {
    Stressful11QuestionItem3 = await QuestionItems.create({ name: 'Moderate', order: 2 }).save();
  }
  let Stressful11QuestionItem4 = await QuestionItems.findOne({ name: 'Severe' });
  if (!Stressful11QuestionItem4) {
    Stressful11QuestionItem4 = await QuestionItems.create({ name: 'Severe', order: 3 }).save();
  }
  let Stressful11QuestionItem5 = await QuestionItems.findOne({ name: 'Very severe' });
  if (!Stressful11QuestionItem5) {
    Stressful11QuestionItem5 = await QuestionItems.create({ name: 'Very severe', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful11Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful11Question)
    .set(StressfulSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful11Question)
    .add(Stressful11QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful11Question)
    .add(Stressful11QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful11Question)
    .add(Stressful11QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful11Question)
    .add(Stressful11QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful11Question)
    .add(Stressful11QuestionItem5);

  let Stressful12Question = await Question.findOne({ question: 'Your friendships' });
  if (!Stressful12Question) {
    Stressful12Question = await Question.create({
      question: 'Your friendships',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 11,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Stressful12QuestionItem1 = await QuestionItems.findOne({ name: 'None' });
  if (!Stressful12QuestionItem1) {
    Stressful12QuestionItem1 = await QuestionItems.create({ name: 'None', order: 0 }).save();
  }
  let Stressful12QuestionItem2 = await QuestionItems.findOne({ name: 'Mild' });
  if (!Stressful12QuestionItem2) {
    Stressful12QuestionItem2 = await QuestionItems.create({ name: 'Mild', order: 1 }).save();
  }
  let Stressful12QuestionItem3 = await QuestionItems.findOne({ name: 'Moderate' });
  if (!Stressful12QuestionItem3) {
    Stressful12QuestionItem3 = await QuestionItems.create({ name: 'Moderate', order: 2 }).save();
  }
  let Stressful12QuestionItem4 = await QuestionItems.findOne({ name: 'Severe' });
  if (!Stressful12QuestionItem4) {
    Stressful12QuestionItem4 = await QuestionItems.create({ name: 'Severe', order: 3 }).save();
  }
  let Stressful12QuestionItem5 = await QuestionItems.findOne({ name: 'Very severe' });
  if (!Stressful12QuestionItem5) {
    Stressful12QuestionItem5 = await QuestionItems.create({ name: 'Very severe', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful12Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful12Question)
    .set(StressfulSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful12Question)
    .add(Stressful12QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful12Question)
    .add(Stressful12QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful12Question)
    .add(Stressful12QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful12Question)
    .add(Stressful12QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful12Question)
    .add(Stressful12QuestionItem5);

  let Stressful13Question = await Question.findOne({ question: 'Your love life' });
  if (!Stressful13Question) {
    Stressful13Question = await Question.create({
      question: 'Your love life',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 12,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Stressful13QuestionItem1 = await QuestionItems.findOne({ name: 'None' });
  if (!Stressful13QuestionItem1) {
    Stressful13QuestionItem1 = await QuestionItems.create({ name: 'None', order: 0 }).save();
  }
  let Stressful13QuestionItem2 = await QuestionItems.findOne({ name: 'Mild' });
  if (!Stressful13QuestionItem2) {
    Stressful13QuestionItem2 = await QuestionItems.create({ name: 'Mild', order: 1 }).save();
  }
  let Stressful13QuestionItem3 = await QuestionItems.findOne({ name: 'Moderate' });
  if (!Stressful13QuestionItem3) {
    Stressful13QuestionItem3 = await QuestionItems.create({ name: 'Moderate', order: 2 }).save();
  }
  let Stressful13QuestionItem4 = await QuestionItems.findOne({ name: 'Severe' });
  if (!Stressful13QuestionItem4) {
    Stressful13QuestionItem4 = await QuestionItems.create({ name: 'Severe', order: 3 }).save();
  }
  let Stressful13QuestionItem5 = await QuestionItems.findOne({ name: 'Very severe' });
  if (!Stressful13QuestionItem5) {
    Stressful13QuestionItem5 = await QuestionItems.create({ name: 'Very severe', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful13Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful13Question)
    .set(StressfulSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful13Question)
    .add(Stressful13QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful13Question)
    .add(Stressful13QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful13Question)
    .add(Stressful13QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful13Question)
    .add(Stressful13QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful13Question)
    .add(Stressful13QuestionItem5);

  let Stressful14Question = await Question.findOne({ question: 'Your relationship with your family' });
  if (!Stressful14Question) {
    Stressful14Question = await Question.create({
      question: 'Your relationship with your family',
      stack: 3,
      stackPhrase: 'How much stress did you have over the past 24 months in each of the following areas of your life?',
      placeHolder: '',
      order: 13,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Stressful14QuestionItem1 = await QuestionItems.findOne({ name: 'None' });
  if (!Stressful14QuestionItem1) {
    Stressful14QuestionItem1 = await QuestionItems.create({ name: 'None', order: 0 }).save();
  }
  let Stressful14QuestionItem2 = await QuestionItems.findOne({ name: 'Mild' });
  if (!Stressful14QuestionItem2) {
    Stressful14QuestionItem2 = await QuestionItems.create({ name: 'Mild', order: 1 }).save();
  }
  let Stressful14QuestionItem3 = await QuestionItems.findOne({ name: 'Moderate' });
  if (!Stressful14QuestionItem3) {
    Stressful14QuestionItem3 = await QuestionItems.create({ name: 'Moderate', order: 2 }).save();
  }
  let Stressful14QuestionItem4 = await QuestionItems.findOne({ name: 'Severe' });
  if (!Stressful14QuestionItem4) {
    Stressful14QuestionItem4 = await QuestionItems.create({ name: 'Severe', order: 3 }).save();
  }
  let Stressful14QuestionItem5 = await QuestionItems.findOne({ name: 'Very severe' });
  if (!Stressful14QuestionItem5) {
    Stressful14QuestionItem5 = await QuestionItems.create({ name: 'Very severe', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful14Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful14Question)
    .set(StressfulSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful14Question)
    .add(Stressful14QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful14Question)
    .add(Stressful14QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful14Question)
    .add(Stressful14QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful14Question)
    .add(Stressful14QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful14Question)
    .add(Stressful14QuestionItem5);

  let Stressful15Question = await Question.findOne({ question: 'The health of your loved ones' });
  if (!Stressful15Question) {
    Stressful15Question = await Question.create({
      question: 'The health of your loved ones',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 14,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Stressful15QuestionItem1 = await QuestionItems.findOne({ name: 'None' });
  if (!Stressful15QuestionItem1) {
    Stressful15QuestionItem1 = await QuestionItems.create({ name: 'None', order: 0 }).save();
  }
  let Stressful15QuestionItem2 = await QuestionItems.findOne({ name: 'Mild' });
  if (!Stressful15QuestionItem2) {
    Stressful15QuestionItem2 = await QuestionItems.create({ name: 'Mild', order: 1 }).save();
  }
  let Stressful15QuestionItem3 = await QuestionItems.findOne({ name: 'Moderate' });
  if (!Stressful15QuestionItem3) {
    Stressful15QuestionItem3 = await QuestionItems.create({ name: 'Moderate', order: 2 }).save();
  }
  let Stressful15QuestionItem4 = await QuestionItems.findOne({ name: 'Severe' });
  if (!Stressful15QuestionItem4) {
    Stressful15QuestionItem4 = await QuestionItems.create({ name: 'Severe', order: 3 }).save();
  }
  let Stressful15QuestionItem5 = await QuestionItems.findOne({ name: 'Very severe' });
  if (!Stressful15QuestionItem5) {
    Stressful15QuestionItem5 = await QuestionItems.create({ name: 'Very severe', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful15Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful15Question)
    .set(StressfulSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful15Question)
    .add(Stressful15QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful15Question)
    .add(Stressful15QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful15Question)
    .add(Stressful15QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful15Question)
    .add(Stressful15QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful15Question)
    .add(Stressful15QuestionItem5);

  let Stressful16Question = await Question.findOne({ question: 'Other problems of your loved ones' });
  if (!Stressful16Question) {
    Stressful16Question = await Question.create({
      question: 'Other problems of your loved ones',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 15,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Stressful16QuestionItem1 = await QuestionItems.findOne({ name: 'None' });
  if (!Stressful16QuestionItem1) {
    Stressful16QuestionItem1 = await QuestionItems.create({ name: 'None', order: 0 }).save();
  }
  let Stressful16QuestionItem2 = await QuestionItems.findOne({ name: 'Mild' });
  if (!Stressful16QuestionItem2) {
    Stressful16QuestionItem2 = await QuestionItems.create({ name: 'Mild', order: 1 }).save();
  }
  let Stressful16QuestionItem3 = await QuestionItems.findOne({ name: 'Moderate' });
  if (!Stressful16QuestionItem3) {
    Stressful16QuestionItem3 = await QuestionItems.create({ name: 'Moderate', order: 2 }).save();
  }
  let Stressful16QuestionItem4 = await QuestionItems.findOne({ name: 'Severe' });
  if (!Stressful16QuestionItem4) {
    Stressful16QuestionItem4 = await QuestionItems.create({ name: 'Severe', order: 3 }).save();
  }
  let Stressful16QuestionItem5 = await QuestionItems.findOne({ name: 'Very severe' });
  if (!Stressful16QuestionItem5) {
    Stressful16QuestionItem5 = await QuestionItems.create({ name: 'Very severe', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful16Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful16Question)
    .set(StressfulSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful16Question)
    .add(Stressful16QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful16Question)
    .add(Stressful16QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful16Question)
    .add(Stressful16QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful16Question)
    .add(Stressful16QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful16Question)
    .add(Stressful16QuestionItem5);

  let Stressful17Question = await Question.findOne({ question: 'Your life overall' });
  if (!Stressful17Question) {
    Stressful17Question = await Question.create({
      question: 'Your life overall',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 16,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Stressful17QuestionItem1 = await QuestionItems.findOne({ name: 'None' });
  if (!Stressful17QuestionItem1) {
    Stressful17QuestionItem1 = await QuestionItems.create({ name: 'None', order: 0 }).save();
  }
  let Stressful17QuestionItem2 = await QuestionItems.findOne({ name: 'Mild' });
  if (!Stressful17QuestionItem2) {
    Stressful17QuestionItem2 = await QuestionItems.create({ name: 'Mild', order: 1 }).save();
  }
  let Stressful17QuestionItem3 = await QuestionItems.findOne({ name: 'Moderate' });
  if (!Stressful17QuestionItem3) {
    Stressful17QuestionItem3 = await QuestionItems.create({ name: 'Moderate', order: 2 }).save();
  }
  let Stressful17QuestionItem4 = await QuestionItems.findOne({ name: 'Severe' });
  if (!Stressful17QuestionItem4) {
    Stressful17QuestionItem4 = await QuestionItems.create({ name: 'Severe', order: 3 }).save();
  }
  let Stressful17QuestionItem5 = await QuestionItems.findOne({ name: 'Very severe' });
  if (!Stressful17QuestionItem5) {
    Stressful17QuestionItem5 = await QuestionItems.create({ name: 'Very severe', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful17Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful17Question)
    .set(StressfulSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful17Question)
    .add(Stressful17QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful17Question)
    .add(Stressful17QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful17Question)
    .add(Stressful17QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful17Question)
    .add(Stressful17QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Stressful17Question)
    .add(Stressful17QuestionItem5);

  let Stressful18Question = await Question.findOne({ question: 'Briefly, what happened?' });
  if (!Stressful18Question) {
    Stressful18Question = await Question.create({
      question: 'Briefly, what happened?',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 17,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Stressful18Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Stressful18Question)
    .set(PetsSubSection);

  let Discrimination1Question = await Question.findOne({
    question: 'You are treated with less courtesy or respect than other people.',
  });
  if (!Discrimination1Question) {
    Discrimination1Question = await Question.create({
      question: 'You are treated with less courtesy or respect than other people.',
      stack: 0,
      stackPhrase: 'In your day to day life, how often do any of the following things happen to you:',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Discrimination1QuestionItem1 = await QuestionItems.findOne({ name: 'Never' });
  if (!Discrimination1QuestionItem1) {
    Discrimination1QuestionItem1 = await QuestionItems.create({ name: 'Never', order: 0 }).save();
  }
  let Discrimination1QuestionItem2 = await QuestionItems.findOne({ name: 'Rarely' });
  if (!Discrimination1QuestionItem2) {
    Discrimination1QuestionItem2 = await QuestionItems.create({ name: 'Rarely', order: 1 }).save();
  }
  let Discrimination1QuestionItem3 = await QuestionItems.findOne({ name: 'Sometimes' });
  if (!Discrimination1QuestionItem3) {
    Discrimination1QuestionItem3 = await QuestionItems.create({ name: 'Sometimes', order: 2 }).save();
  }
  let Discrimination1QuestionItem4 = await QuestionItems.findOne({ name: 'Often' });
  if (!Discrimination1QuestionItem4) {
    Discrimination1QuestionItem4 = await QuestionItems.create({ name: 'Often', order: 3 }).save();
  }
  let Discrimination1QuestionItem5 = await QuestionItems.findOne({ name: 'At least once a week' });
  if (!Discrimination1QuestionItem5) {
    Discrimination1QuestionItem5 = await QuestionItems.create({ name: 'At least once a week', order: 4 }).save();
  }
  let Discrimination1QuestionItem6 = await QuestionItems.findOne({ name: 'Prefer not to answer' });
  if (!Discrimination1QuestionItem6) {
    Discrimination1QuestionItem6 = await QuestionItems.create({ name: 'Prefer not to answer', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Discrimination1Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Discrimination1Question)
    .set(DiscriminationSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination1Question)
    .add(Discrimination1QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination1Question)
    .add(Discrimination1QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination1Question)
    .add(Discrimination1QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination1Question)
    .add(Discrimination1QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination1Question)
    .add(Discrimination1QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination1Question)
    .add(Discrimination1QuestionItem6);

  let Discrimination2Question = await Question.findOne({
    question: 'You receive poorer services than other people at restaurants and stores.',
  });
  if (!Discrimination2Question) {
    Discrimination2Question = await Question.create({
      question: 'You receive poorer services than other people at restaurants and stores.',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Discrimination2QuestionItem1 = await QuestionItems.findOne({ name: 'Never' });
  if (!Discrimination2QuestionItem1) {
    Discrimination2QuestionItem1 = await QuestionItems.create({ name: 'Never', order: 0 }).save();
  }
  let Discrimination2QuestionItem2 = await QuestionItems.findOne({ name: 'Rarely' });
  if (!Discrimination2QuestionItem2) {
    Discrimination2QuestionItem2 = await QuestionItems.create({ name: 'Rarely', order: 1 }).save();
  }
  let Discrimination2QuestionItem3 = await QuestionItems.findOne({ name: 'Sometimes' });
  if (!Discrimination2QuestionItem3) {
    Discrimination2QuestionItem3 = await QuestionItems.create({ name: 'Sometimes', order: 2 }).save();
  }
  let Discrimination2QuestionItem4 = await QuestionItems.findOne({ name: 'Often' });
  if (!Discrimination2QuestionItem4) {
    Discrimination2QuestionItem4 = await QuestionItems.create({ name: 'Often', order: 3 }).save();
  }
  let Discrimination2QuestionItem5 = await QuestionItems.findOne({ name: 'At least once a week' });
  if (!Discrimination2QuestionItem5) {
    Discrimination2QuestionItem5 = await QuestionItems.create({ name: 'At least once a week', order: 4 }).save();
  }
  let Discrimination2QuestionItem6 = await QuestionItems.findOne({ name: 'Prefer not to answer' });
  if (!Discrimination2QuestionItem6) {
    Discrimination2QuestionItem6 = await QuestionItems.create({ name: 'Prefer not to answer', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Discrimination2Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Discrimination2Question)
    .set(DiscriminationSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination2Question)
    .add(Discrimination2QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination2Question)
    .add(Discrimination2QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination2Question)
    .add(Discrimination2QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination2Question)
    .add(Discrimination2QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination2Question)
    .add(Discrimination2QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination2Question)
    .add(Discrimination2QuestionItem6);

  let Discrimination3Question = await Question.findOne({ question: 'People act as if they are afraid of you.' });
  if (!Discrimination3Question) {
    Discrimination3Question = await Question.create({
      question: 'People act as if they are afraid of you.',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Discrimination3QuestionItem1 = await QuestionItems.findOne({ name: 'Never' });
  if (!Discrimination3QuestionItem1) {
    Discrimination3QuestionItem1 = await QuestionItems.create({ name: 'Never', order: 0 }).save();
  }
  let Discrimination3QuestionItem2 = await QuestionItems.findOne({ name: 'Rarely' });
  if (!Discrimination3QuestionItem2) {
    Discrimination3QuestionItem2 = await QuestionItems.create({ name: 'Rarely', order: 1 }).save();
  }
  let Discrimination3QuestionItem3 = await QuestionItems.findOne({ name: 'Sometimes' });
  if (!Discrimination3QuestionItem3) {
    Discrimination3QuestionItem3 = await QuestionItems.create({ name: 'Sometimes', order: 2 }).save();
  }
  let Discrimination3QuestionItem4 = await QuestionItems.findOne({ name: 'Often' });
  if (!Discrimination3QuestionItem4) {
    Discrimination3QuestionItem4 = await QuestionItems.create({ name: 'Often', order: 3 }).save();
  }
  let Discrimination3QuestionItem5 = await QuestionItems.findOne({ name: 'At least once a week' });
  if (!Discrimination3QuestionItem5) {
    Discrimination3QuestionItem5 = await QuestionItems.create({ name: 'At least once a week', order: 4 }).save();
  }
  let Discrimination3QuestionItem6 = await QuestionItems.findOne({ name: 'Prefer not to answer' });
  if (!Discrimination3QuestionItem6) {
    Discrimination3QuestionItem6 = await QuestionItems.create({ name: 'Prefer not to answer', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Discrimination3Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Discrimination3Question)
    .set(DiscriminationSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination3Question)
    .add(Discrimination3QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination3Question)
    .add(Discrimination3QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination3Question)
    .add(Discrimination3QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination3Question)
    .add(Discrimination3QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination3Question)
    .add(Discrimination3QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination3Question)
    .add(Discrimination3QuestionItem6);

  let Discrimination4Question = await Question.findOne({ question: 'People act as if they think you are not smart.' });
  if (!Discrimination4Question) {
    Discrimination4Question = await Question.create({
      question: 'People act as if they think you are not smart.',
      stack: 1,
      stackPhrase: 'In your day to day life, how often do any of the following things happen to you:',
      placeHolder: '',
      order: 3,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Discrimination4QuestionItem1 = await QuestionItems.findOne({ name: 'Never' });
  if (!Discrimination4QuestionItem1) {
    Discrimination4QuestionItem1 = await QuestionItems.create({ name: 'Never', order: 0 }).save();
  }
  let Discrimination4QuestionItem2 = await QuestionItems.findOne({ name: 'Rarely' });
  if (!Discrimination4QuestionItem2) {
    Discrimination4QuestionItem2 = await QuestionItems.create({ name: 'Rarely', order: 1 }).save();
  }
  let Discrimination4QuestionItem3 = await QuestionItems.findOne({ name: 'Sometimes' });
  if (!Discrimination4QuestionItem3) {
    Discrimination4QuestionItem3 = await QuestionItems.create({ name: 'Sometimes', order: 2 }).save();
  }
  let Discrimination4QuestionItem4 = await QuestionItems.findOne({ name: 'Often' });
  if (!Discrimination4QuestionItem4) {
    Discrimination4QuestionItem4 = await QuestionItems.create({ name: 'Often', order: 3 }).save();
  }
  let Discrimination4QuestionItem5 = await QuestionItems.findOne({ name: 'At least once a week' });
  if (!Discrimination4QuestionItem5) {
    Discrimination4QuestionItem5 = await QuestionItems.create({ name: 'At least once a week', order: 4 }).save();
  }
  let Discrimination4QuestionItem6 = await QuestionItems.findOne({ name: 'Prefer not to answer' });
  if (!Discrimination4QuestionItem6) {
    Discrimination4QuestionItem6 = await QuestionItems.create({ name: 'Prefer not to answer', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Discrimination4Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Discrimination4Question)
    .set(DiscriminationSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination4Question)
    .add(Discrimination4QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination4Question)
    .add(Discrimination4QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination4Question)
    .add(Discrimination4QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination4Question)
    .add(Discrimination4QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination4Question)
    .add(Discrimination4QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination4Question)
    .add(Discrimination4QuestionItem6);

  let Discrimination5Question = await Question.findOne({ question: 'You are threatened or harassed.' });
  if (!Discrimination5Question) {
    Discrimination5Question = await Question.create({
      question: 'You are threatened or harassed.',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Discrimination5QuestionItem1 = await QuestionItems.findOne({ name: 'Never' });
  if (!Discrimination5QuestionItem1) {
    Discrimination5QuestionItem1 = await QuestionItems.create({ name: 'Never', order: 0 }).save();
  }
  let Discrimination5QuestionItem2 = await QuestionItems.findOne({ name: 'Rarely' });
  if (!Discrimination5QuestionItem2) {
    Discrimination5QuestionItem2 = await QuestionItems.create({ name: 'Rarely', order: 1 }).save();
  }
  let Discrimination5QuestionItem3 = await QuestionItems.findOne({ name: 'Sometimes' });
  if (!Discrimination5QuestionItem3) {
    Discrimination5QuestionItem3 = await QuestionItems.create({ name: 'Sometimes', order: 2 }).save();
  }
  let Discrimination5QuestionItem4 = await QuestionItems.findOne({ name: 'Often' });
  if (!Discrimination5QuestionItem4) {
    Discrimination5QuestionItem4 = await QuestionItems.create({ name: 'Often', order: 3 }).save();
  }
  let Discrimination5QuestionItem5 = await QuestionItems.findOne({ name: 'At least once a week' });
  if (!Discrimination5QuestionItem5) {
    Discrimination5QuestionItem5 = await QuestionItems.create({ name: 'At least once a week', order: 4 }).save();
  }
  let Discrimination5QuestionItem6 = await QuestionItems.findOne({ name: 'Prefer not to answer' });
  if (!Discrimination5QuestionItem6) {
    Discrimination5QuestionItem6 = await QuestionItems.create({ name: 'Prefer not to answer', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Discrimination5Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Discrimination5Question)
    .set(DiscriminationSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination5Question)
    .add(Discrimination5QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination5Question)
    .add(Discrimination5QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination5Question)
    .add(Discrimination5QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination5Question)
    .add(Discrimination5QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination5Question)
    .add(Discrimination5QuestionItem5);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Discrimination5Question)
    .add(Discrimination5QuestionItem6);

  let Employment1Question = await Question.findOne({ question: 'How long is your commute to work? ' });
  if (!Employment1Question) {
    Employment1Question = await Question.create({
      question: 'How long is your commute to work? ',
      stack: 0,
      stackPhrase: '',
      placeHolder: '3',
      order: 0,
      inputConfirmation: 'Numerical',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Employment1Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Employment1Question)
    .set(EmploymentSubSection);

  let Employment2Question = await Question.findOne({ question: 'How long is your commute home?' });
  if (!Employment2Question) {
    Employment2Question = await Question.create({
      question: 'How long is your commute home?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '5',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Employment2Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Employment2Question)
    .set(EmploymentSubSection);

  let Employment3aQuestion = await Question.findOne({
    question: 'About how many hours a week did you typically work before you went on leave?',
  });
  if (!Employment3aQuestion) {
    Employment3aQuestion = await Question.create({
      question: 'About how many hours a week did you typically work before you went on leave?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '3',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Employment3aQuestion)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Employment3aQuestion)
    .set(EmploymentSubSection);

  let Employment3bQuestion = await Question.findOne({ question: 'About how many hours do you typically work a week?' });
  if (!Employment3bQuestion) {
    Employment3bQuestion = await Question.create({
      question: 'About how many hours do you typically work a week?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '2',
      order: 3,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Employment3bQuestion)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Employment3bQuestion)
    .set(EmploymentSubSection);

  let Employment4Question = await Question.findOne({ question: 'What hours do you typically work?' });
  if (!Employment4Question) {
    Employment4Question = await Question.create({
      question: 'What hours do you typically work?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Employment4QuestionItem1 = await QuestionItems.findOne({ name: '1st Shift (day), 8:00/9:00 am – 5:00 pm' });
  if (!Employment4QuestionItem1) {
    Employment4QuestionItem1 = await QuestionItems.create({
      name: '1st Shift (day), 8:00/9:00 am – 5:00 pm',
      order: 0,
    }).save();
  }
  let Employment4QuestionItem2 = await QuestionItems.findOne({
    name: '2nd Shift (afternoon), 3:00/4:00 pm – 11:00 pm/12:00 am ',
  });
  if (!Employment4QuestionItem2) {
    Employment4QuestionItem2 = await QuestionItems.create({
      name: '2nd Shift (afternoon), 3:00/4:00 pm – 11:00 pm/12:00 am ',
      order: 1,
    }).save();
  }
  let Employment4QuestionItem3 = await QuestionItems.findOne({ name: '3rd Shift (night), 10:00 pm – 6:00/7:00 am' });
  if (!Employment4QuestionItem3) {
    Employment4QuestionItem3 = await QuestionItems.create({
      name: '3rd Shift (night), 10:00 pm – 6:00/7:00 am',
      order: 2,
    }).save();
  }
  let Employment4QuestionItem4 = await QuestionItems.findOne({ name: 'Rotating Shift ' });
  if (!Employment4QuestionItem4) {
    Employment4QuestionItem4 = await QuestionItems.create({ name: 'Rotating Shift ', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Employment4Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Employment4Question)
    .set(EmploymentSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Employment4Question)
    .add(Employment4QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Employment4Question)
    .add(Employment4QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Employment4Question)
    .add(Employment4QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Employment4Question)
    .add(Employment4QuestionItem4);

  let Employment5Question = await Question.findOne({ question: 'How many hours do you typically work per day?' });
  if (!Employment5Question) {
    Employment5Question = await Question.create({
      question: 'How many hours do you typically work per day?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 5,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Employment5QuestionItem1 = await QuestionItems.findOne({ name: 'Less than 8 hours' });
  if (!Employment5QuestionItem1) {
    Employment5QuestionItem1 = await QuestionItems.create({ name: 'Less than 8 hours', order: 0 }).save();
  }
  let Employment5QuestionItem2 = await QuestionItems.findOne({ name: '8 hours' });
  if (!Employment5QuestionItem2) {
    Employment5QuestionItem2 = await QuestionItems.create({ name: '8 hours', order: 1 }).save();
  }
  let Employment5QuestionItem3 = await QuestionItems.findOne({ name: '10 hours' });
  if (!Employment5QuestionItem3) {
    Employment5QuestionItem3 = await QuestionItems.create({ name: '10 hours', order: 2 }).save();
  }
  let Employment5QuestionItem4 = await QuestionItems.findOne({ name: '12 hours' });
  if (!Employment5QuestionItem4) {
    Employment5QuestionItem4 = await QuestionItems.create({ name: '12 hours', order: 3 }).save();
  }
  let Employment5QuestionItem5 = await QuestionItems.findOne({ name: 'More than 14 hours' });
  if (!Employment5QuestionItem5) {
    Employment5QuestionItem5 = await QuestionItems.create({ name: 'More than 14 hours', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Employment5Question)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Employment5Question)
    .set(EmploymentSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Employment5Question)
    .add(Employment5QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Employment5Question)
    .add(Employment5QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Employment5Question)
    .add(Employment5QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Employment5Question)
    .add(Employment5QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Employment5Question)
    .add(Employment5QuestionItem5);

  let Employment6Question = await Question.findOne({
    question:
      'In the past 4 weeks, about how many hours per week did you miss from work because of problems with your health? Include hours you missed on sick days, times you went in late, left early, etc., because of problems with your health. (If it varied, give your best estimate of an average.)',
  });
  if (!Employment6Question) {
    Employment6Question = await Question.create({
      question:
        'In the past 4 weeks, about how many hours per week did you miss from work because of problems with your health? Include hours you missed on sick days, times you went in late, left early, etc., because of problems with your health. (If it varied, give your best estimate of an average.)',
      stack: 2,
      stackPhrase: '',
      placeHolder: '3',
      order: 6,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Employment6Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Employment6Question)
    .set(EmploymentSubSection);

  let Employment7Question = await Question.findOne({
    question:
      'In the past 4 weeks, about how many hours per week did you miss from work because of any other reason, such as vacation or holidays? (If it varied, give your best estimate of an average.)',
  });
  if (!Employment7Question) {
    Employment7Question = await Question.create({
      question:
        'In the past 4 weeks, about how many hours per week did you miss from work because of any other reason, such as vacation or holidays? (If it varied, give your best estimate of an average.)',
      stack: 2,
      stackPhrase: '',
      placeHolder: '5',
      order: 7,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Employment7Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Employment7Question)
    .set(EmploymentSubSection);

  let Employment8Question = await Question.findOne({
    question:
      'In the past 4 weeks, how many hours per week did you actually work? (If it varied, give your best estimate of an average.)',
  });
  if (!Employment8Question) {
    Employment8Question = await Question.create({
      question:
        'In the past 4 weeks, how many hours per week did you actually work? (If it varied, give your best estimate of an average.)',
      stack: 3,
      stackPhrase: '',
      placeHolder: '4',
      order: 8,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Employment8Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Employment8Question)
    .set(EmploymentSubSection);

  let SocialNet1Question = await Question.findOne({
    question:
      'The next few questions are about all your friends and relatives. How many hours in a typical week do you spend socializing on social media, texting, emailing, writing, or talking on the phone with any friends or relatives that do not live with you. ',
  });
  if (!SocialNet1Question) {
    SocialNet1Question = await Question.create({
      question:
        'The next few questions are about all your friends and relatives. How many hours in a typical week do you spend socializing on social media, texting, emailing, writing, or talking on the phone with any friends or relatives that do not live with you. ',
      stack: 0,
      stackPhrase: '',
      placeHolder: '3',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SocialNet1Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SocialNet1Question)
    .set(SocialNetSubSection);

  let SocialNet2Question = await Question.findOne({
    question:
      'In a typical week, how many different friends or relatives do you interact with on social media, text, email, write to, or talk to on the phone with?',
  });
  if (!SocialNet2Question) {
    SocialNet2Question = await Question.create({
      question:
        'In a typical week, how many different friends or relatives do you interact with on social media, text, email, write to, or talk to on the phone with?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '4',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SocialNet2Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SocialNet2Question)
    .set(SocialNetSubSection);

  let SocialNet3Question = await Question.findOne({
    question:
      'How many hours in a typical month do you spend socializing in person (either visiting each other in your homes or going out together) with any friends or relatives that do not live with you?',
  });
  if (!SocialNet3Question) {
    SocialNet3Question = await Question.create({
      question:
        'How many hours in a typical month do you spend socializing in person (either visiting each other in your homes or going out together) with any friends or relatives that do not live with you?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '3',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SocialNet3Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SocialNet3Question)
    .set(SocialNetSubSection);

  let SocialNet4Question = await Question.findOne({
    question: 'In a typical month, how many different friends or relatives do you socialize with in person?',
  });
  if (!SocialNet4Question) {
    SocialNet4Question = await Question.create({
      question: 'In a typical month, how many different friends or relatives do you socialize with in person?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '4',
      order: 3,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SocialNet4Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SocialNet4Question)
    .set(SocialNetSubSection);

  let SocialNet5Question = await Question.findOne({
    question: 'How much could you rely on them for help if you had a serious problem?',
  });
  if (!SocialNet5Question) {
    SocialNet5Question = await Question.create({
      question: 'How much could you rely on them for help if you had a serious problem?',
      stack: 2,
      stackPhrase: 'The next questions are about the relationships you have with the people in your personal life',
      placeHolder: '',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SocialNet5QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!SocialNet5QuestionItem1) {
    SocialNet5QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let SocialNet5QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!SocialNet5QuestionItem2) {
    SocialNet5QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let SocialNet5QuestionItem3 = await QuestionItems.findOne({ name: 'Some' });
  if (!SocialNet5QuestionItem3) {
    SocialNet5QuestionItem3 = await QuestionItems.create({ name: 'Some', order: 2 }).save();
  }
  let SocialNet5QuestionItem4 = await QuestionItems.findOne({ name: 'A lot' });
  if (!SocialNet5QuestionItem4) {
    SocialNet5QuestionItem4 = await QuestionItems.create({ name: 'A lot', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SocialNet5Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SocialNet5Question)
    .set(SocialNetSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet5Question)
    .add(SocialNet5QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet5Question)
    .add(SocialNet5QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet5Question)
    .add(SocialNet5QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet5Question)
    .add(SocialNet5QuestionItem4);

  let SocialNet6Question = await Question.findOne({
    question: 'How much could you open up to them if you needed to talk about your problems?',
  });
  if (!SocialNet6Question) {
    SocialNet6Question = await Question.create({
      question: 'How much could you open up to them if you needed to talk about your problems?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 5,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SocialNet6QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!SocialNet6QuestionItem1) {
    SocialNet6QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let SocialNet6QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!SocialNet6QuestionItem2) {
    SocialNet6QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let SocialNet6QuestionItem3 = await QuestionItems.findOne({ name: 'Some' });
  if (!SocialNet6QuestionItem3) {
    SocialNet6QuestionItem3 = await QuestionItems.create({ name: 'Some', order: 2 }).save();
  }
  let SocialNet6QuestionItem4 = await QuestionItems.findOne({ name: 'A lot' });
  if (!SocialNet6QuestionItem4) {
    SocialNet6QuestionItem4 = await QuestionItems.create({ name: 'A lot', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SocialNet6Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SocialNet6Question)
    .set(SocialNetSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet6Question)
    .add(SocialNet6QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet6Question)
    .add(SocialNet6QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet6Question)
    .add(SocialNet6QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet6Question)
    .add(SocialNet6QuestionItem4);

  let SocialNet7Question = await Question.findOne({ question: 'How much do they make too many demands on you?' });
  if (!SocialNet7Question) {
    SocialNet7Question = await Question.create({
      question: 'How much do they make too many demands on you?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 6,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SocialNet7QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!SocialNet7QuestionItem1) {
    SocialNet7QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let SocialNet7QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!SocialNet7QuestionItem2) {
    SocialNet7QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let SocialNet7QuestionItem3 = await QuestionItems.findOne({ name: 'Some' });
  if (!SocialNet7QuestionItem3) {
    SocialNet7QuestionItem3 = await QuestionItems.create({ name: 'Some', order: 2 }).save();
  }
  let SocialNet7QuestionItem4 = await QuestionItems.findOne({ name: 'A lot' });
  if (!SocialNet7QuestionItem4) {
    SocialNet7QuestionItem4 = await QuestionItems.create({ name: 'A lot', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SocialNet7Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SocialNet7Question)
    .set(SocialNetSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet7Question)
    .add(SocialNet7QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet7Question)
    .add(SocialNet7QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet7Question)
    .add(SocialNet7QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet7Question)
    .add(SocialNet7QuestionItem4);

  let SocialNet8Question = await Question.findOne({ question: 'How much do they argue with you?' });
  if (!SocialNet8Question) {
    SocialNet8Question = await Question.create({
      question: 'How much do they argue with you?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 7,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let SocialNet8QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!SocialNet8QuestionItem1) {
    SocialNet8QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let SocialNet8QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!SocialNet8QuestionItem2) {
    SocialNet8QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let SocialNet8QuestionItem3 = await QuestionItems.findOne({ name: 'Some' });
  if (!SocialNet8QuestionItem3) {
    SocialNet8QuestionItem3 = await QuestionItems.create({ name: 'Some', order: 2 }).save();
  }
  let SocialNet8QuestionItem4 = await QuestionItems.findOne({ name: 'A lot' });
  if (!SocialNet8QuestionItem4) {
    SocialNet8QuestionItem4 = await QuestionItems.create({ name: 'A lot', order: 3 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(SocialNet8Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(SocialNet8Question)
    .set(SocialNetSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet8Question)
    .add(SocialNet8QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet8Question)
    .add(SocialNet8QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet8Question)
    .add(SocialNet8QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(SocialNet8Question)
    .add(SocialNet8QuestionItem4);

  let Neighborhood1Question = await Question.findOne({ question: 'Are friendly' });
  if (!Neighborhood1Question) {
    Neighborhood1Question = await Question.create({
      question: 'Are friendly',
      stack: 0,
      stackPhrase:
        'The next questions are about your neighborhood. How much do you agree or disagree with each of the following statements about people in your neighborhood?',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood1QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood1QuestionItem1) {
    Neighborhood1QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood1QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood1QuestionItem2) {
    Neighborhood1QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood1QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood1QuestionItem3) {
    Neighborhood1QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood1QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood1QuestionItem4) {
    Neighborhood1QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood1QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood1QuestionItem5) {
    Neighborhood1QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood1Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood1Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood1Question)
    .add(Neighborhood1QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood1Question)
    .add(Neighborhood1QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood1Question)
    .add(Neighborhood1QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood1Question)
    .add(Neighborhood1QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood1Question)
    .add(Neighborhood1QuestionItem5);

  let Neighborhood2Question = await Question.findOne({ question: 'Can be trusted' });
  if (!Neighborhood2Question) {
    Neighborhood2Question = await Question.create({
      question: 'Can be trusted',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood2QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood2QuestionItem1) {
    Neighborhood2QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood2QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood2QuestionItem2) {
    Neighborhood2QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood2QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood2QuestionItem3) {
    Neighborhood2QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood2QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood2QuestionItem4) {
    Neighborhood2QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood2QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood2QuestionItem5) {
    Neighborhood2QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood2Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood2Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood2Question)
    .add(Neighborhood2QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood2Question)
    .add(Neighborhood2QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood2Question)
    .add(Neighborhood2QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood2Question)
    .add(Neighborhood2QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood2Question)
    .add(Neighborhood2QuestionItem5);

  let Neighborhood3Question = await Question.findOne({ question: 'Share the same values' });
  if (!Neighborhood3Question) {
    Neighborhood3Question = await Question.create({
      question: 'Share the same values',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood3QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood3QuestionItem1) {
    Neighborhood3QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood3QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood3QuestionItem2) {
    Neighborhood3QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood3QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood3QuestionItem3) {
    Neighborhood3QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood3QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood3QuestionItem4) {
    Neighborhood3QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood3QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood3QuestionItem5) {
    Neighborhood3QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood3Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood3Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood3Question)
    .add(Neighborhood3QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood3Question)
    .add(Neighborhood3QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood3Question)
    .add(Neighborhood3QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood3Question)
    .add(Neighborhood3QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood3Question)
    .add(Neighborhood3QuestionItem5);

  let Neighborhood4Question = await Question.findOne({ question: 'Are willing to help eachother' });
  if (!Neighborhood4Question) {
    Neighborhood4Question = await Question.create({
      question: 'Are willing to help eachother',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 3,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood4QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood4QuestionItem1) {
    Neighborhood4QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood4QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood4QuestionItem2) {
    Neighborhood4QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood4QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood4QuestionItem3) {
    Neighborhood4QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood4QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood4QuestionItem4) {
    Neighborhood4QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood4QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood4QuestionItem5) {
    Neighborhood4QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood4Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood4Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood4Question)
    .add(Neighborhood4QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood4Question)
    .add(Neighborhood4QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood4Question)
    .add(Neighborhood4QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood4Question)
    .add(Neighborhood4QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood4Question)
    .add(Neighborhood4QuestionItem5);

  let Neighborhood5Question = await Question.findOne({ question: 'Do you know by name?' });
  if (!Neighborhood5Question) {
    Neighborhood5Question = await Question.create({
      question: 'Do you know by name?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '6',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood5Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood5Question)
    .set(NeighborhoodSubSection);

  let Neighborhood6Question = await Question.findOne({ question: 'Do you ever have a conversation with?' });
  if (!Neighborhood6Question) {
    Neighborhood6Question = await Question.create({
      question: 'Do you ever have a conversation with?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '4',
      order: 5,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood6Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood6Question)
    .set(NeighborhoodSubSection);

  let Neighborhood7Question = await Question.findOne({ question: 'Do you consider to be your friends?' });
  if (!Neighborhood7Question) {
    Neighborhood7Question = await Question.create({
      question: 'Do you consider to be your friends?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '2',
      order: 6,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood7Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood7Question)
    .set(NeighborhoodSubSection);

  let Neighborhood8Question = await Question.findOne({ question: 'Do you get together with socially?' });
  if (!Neighborhood8Question) {
    Neighborhood8Question = await Question.create({
      question: 'Do you get together with socially?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '1',
      order: 7,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood8Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood8Question)
    .set(NeighborhoodSubSection);

  let Neighborhood9Question = await Question.findOne({
    question: 'Do you feel close enough to that you would ask them for help if you needed it?',
  });
  if (!Neighborhood9Question) {
    Neighborhood9Question = await Question.create({
      question: 'Do you feel close enough to that you would ask them for help if you needed it?',
      stack: 3,
      stackPhrase: '',
      placeHolder: '8',
      order: 8,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood9Question)
    .set(openQuestionCategory);
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood9Question)
    .set(NeighborhoodSubSection);

  let Neighborhood10Question = await Question.findOne({
    question: 'Drug or alcohol abuse is a problem in my community.',
  });
  if (!Neighborhood10Question) {
    Neighborhood10Question = await Question.create({
      question: 'Drug or alcohol abuse is a problem in my community.',
      stack: 4,
      stackPhrase:
        'Please answer these questions thinking about your neighborhood or community.  Do you agree or disagree with these statements? ',
      placeHolder: '7',
      order: 9,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood10QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood10QuestionItem1) {
    Neighborhood10QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood10QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood10QuestionItem2) {
    Neighborhood10QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood10QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood10QuestionItem3) {
    Neighborhood10QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood10QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood10QuestionItem4) {
    Neighborhood10QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood10QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood10QuestionItem5) {
    Neighborhood10QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood10Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood10Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood10Question)
    .add(Neighborhood10QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood10Question)
    .add(Neighborhood10QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood10Question)
    .add(Neighborhood10QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood10Question)
    .add(Neighborhood10QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood10Question)
    .add(Neighborhood10QuestionItem5);

  let Neighborhood11Question = await Question.findOne({ question: 'We have great parks and recreational facilities.' });
  if (!Neighborhood11Question) {
    Neighborhood11Question = await Question.create({
      question: 'We have great parks and recreational facilities.',
      stack: 4,
      stackPhrase: '',
      placeHolder: '',
      order: 10,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood11QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood11QuestionItem1) {
    Neighborhood11QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood11QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood11QuestionItem2) {
    Neighborhood11QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood11QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood11QuestionItem3) {
    Neighborhood11QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood11QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood11QuestionItem4) {
    Neighborhood11QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood11QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood11QuestionItem5) {
    Neighborhood11QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood11Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood11Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood11Question)
    .add(Neighborhood11QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood11Question)
    .add(Neighborhood11QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood11Question)
    .add(Neighborhood11QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood11Question)
    .add(Neighborhood11QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood11Question)
    .add(Neighborhood11QuestionItem5);

  let Neighborhood12Question = await Question.findOne({
    question: 'Public transportation is readily available to me if I need it.',
  });
  if (!Neighborhood12Question) {
    Neighborhood12Question = await Question.create({
      question: 'Public transportation is readily available to me if I need it.',
      stack: 4,
      stackPhrase: '',
      placeHolder: '',
      order: 11,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood12QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood12QuestionItem1) {
    Neighborhood12QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood12QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood12QuestionItem2) {
    Neighborhood12QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood12QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood12QuestionItem3) {
    Neighborhood12QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood12QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood12QuestionItem4) {
    Neighborhood12QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood12QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood12QuestionItem5) {
    Neighborhood12QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood12Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood12Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood12Question)
    .add(Neighborhood12QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood12Question)
    .add(Neighborhood12QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood12Question)
    .add(Neighborhood12QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood12Question)
    .add(Neighborhood12QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood12Question)
    .add(Neighborhood12QuestionItem5);

  let Neighborhood13Question = await Question.findOne({
    question: 'There are plenty of jobs available for those who want them.',
  });
  if (!Neighborhood13Question) {
    Neighborhood13Question = await Question.create({
      question: 'There are plenty of jobs available for those who want them.',
      stack: 5,
      stackPhrase:
        'Please answer these questions thinking about your neighborhood or community. Do you agree or disagree with these statements?',
      placeHolder: '',
      order: 12,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood13QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood13QuestionItem1) {
    Neighborhood13QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood13QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood13QuestionItem2) {
    Neighborhood13QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood13QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood13QuestionItem3) {
    Neighborhood13QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood13QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood13QuestionItem4) {
    Neighborhood13QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood13QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood13QuestionItem5) {
    Neighborhood13QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood13Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood13Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood13Question)
    .add(Neighborhood13QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood13Question)
    .add(Neighborhood13QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood13Question)
    .add(Neighborhood13QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood13Question)
    .add(Neighborhood13QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood13Question)
    .add(Neighborhood13QuestionItem5);

  let Neighborhood14Question = await Question.findOne({ question: 'Crime in my area is a serious problem.' });
  if (!Neighborhood14Question) {
    Neighborhood14Question = await Question.create({
      question: 'Crime in my area is a serious problem.',
      stack: 5,
      stackPhrase: '',
      placeHolder: '',
      order: 13,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood14QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood14QuestionItem1) {
    Neighborhood14QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood14QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood14QuestionItem2) {
    Neighborhood14QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood14QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood14QuestionItem3) {
    Neighborhood14QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood14QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood14QuestionItem4) {
    Neighborhood14QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood14QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood14QuestionItem5) {
    Neighborhood14QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood14Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood14Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood14Question)
    .add(Neighborhood14QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood14Question)
    .add(Neighborhood14QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood14Question)
    .add(Neighborhood14QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood14Question)
    .add(Neighborhood14QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood14Question)
    .add(Neighborhood14QuestionItem5);

  let Neighborhood15Question = await Question.findOne({ question: 'Air pollution is a problem in my community.' });
  if (!Neighborhood15Question) {
    Neighborhood15Question = await Question.create({
      question: 'Air pollution is a problem in my community.',
      stack: 5,
      stackPhrase: '',
      placeHolder: '',
      order: 14,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood15QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood15QuestionItem1) {
    Neighborhood15QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood15QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood15QuestionItem2) {
    Neighborhood15QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood15QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood15QuestionItem3) {
    Neighborhood15QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood15QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood15QuestionItem4) {
    Neighborhood15QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood15QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood15QuestionItem5) {
    Neighborhood15QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood15Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood15Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood15Question)
    .add(Neighborhood15QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood15Question)
    .add(Neighborhood15QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood15Question)
    .add(Neighborhood15QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood15Question)
    .add(Neighborhood15QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood15Question)
    .add(Neighborhood15QuestionItem5);

  let Neighborhood16Question = await Question.findOne({ question: 'I feel safe in my neighborhood.' });
  if (!Neighborhood16Question) {
    Neighborhood16Question = await Question.create({
      question: 'I feel safe in my neighborhood.',
      stack: 6,
      stackPhrase:
        'Please answer these questions thinking about your neighborhood or community. Do you agree or disagree with these statements?',
      placeHolder: '',
      order: 15,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood16QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood16QuestionItem1) {
    Neighborhood16QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood16QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood16QuestionItem2) {
    Neighborhood16QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood16QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood16QuestionItem3) {
    Neighborhood16QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood16QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood16QuestionItem4) {
    Neighborhood16QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood16QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood16QuestionItem5) {
    Neighborhood16QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood16Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood16Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood16Question)
    .add(Neighborhood16QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood16Question)
    .add(Neighborhood16QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood16Question)
    .add(Neighborhood16QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood16Question)
    .add(Neighborhood16QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood16Question)
    .add(Neighborhood16QuestionItem5);

  let Neighborhood17Question = await Question.findOne({
    question: 'There are affordable places to live in my neighborhood.',
  });
  if (!Neighborhood17Question) {
    Neighborhood17Question = await Question.create({
      question: 'There are affordable places to live in my neighborhood.',
      stack: 6,
      stackPhrase: '',
      placeHolder: '',
      order: 16,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood17QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood17QuestionItem1) {
    Neighborhood17QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood17QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood17QuestionItem2) {
    Neighborhood17QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood17QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood17QuestionItem3) {
    Neighborhood17QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood17QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood17QuestionItem4) {
    Neighborhood17QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood17QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood17QuestionItem5) {
    Neighborhood17QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood17Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood17Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood17Question)
    .add(Neighborhood17QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood17Question)
    .add(Neighborhood17QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood17Question)
    .add(Neighborhood17QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood17Question)
    .add(Neighborhood17QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood17Question)
    .add(Neighborhood17QuestionItem5);

  let Neighborhood18Question = await Question.findOne({
    question: 'The quality of health care in my neighborhood is good.',
  });
  if (!Neighborhood18Question) {
    Neighborhood18Question = await Question.create({
      question: 'The quality of health care in my neighborhood is good.',
      stack: 6,
      stackPhrase: '',
      placeHolder: '',
      order: 17,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood18QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood18QuestionItem1) {
    Neighborhood18QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood18QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood18QuestionItem2) {
    Neighborhood18QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood18QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood18QuestionItem3) {
    Neighborhood18QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood18QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood18QuestionItem4) {
    Neighborhood18QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood18QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood18QuestionItem5) {
    Neighborhood18QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood18Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood18Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood18Question)
    .add(Neighborhood18QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood18Question)
    .add(Neighborhood18QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood18Question)
    .add(Neighborhood18QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood18Question)
    .add(Neighborhood18QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood18Question)
    .add(Neighborhood18QuestionItem5);

  let Neighborhood19Question = await Question.findOne({ question: 'There are good sidewalks for walking safely.' });
  if (!Neighborhood19Question) {
    Neighborhood19Question = await Question.create({
      question: 'There are good sidewalks for walking safely.',
      stack: 6,
      stackPhrase: '',
      placeHolder: '',
      order: 18,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood19QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood19QuestionItem1) {
    Neighborhood19QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood19QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood19QuestionItem2) {
    Neighborhood19QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood19QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood19QuestionItem3) {
    Neighborhood19QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood19QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood19QuestionItem4) {
    Neighborhood19QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood19QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood19QuestionItem5) {
    Neighborhood19QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood19Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood19Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood19Question)
    .add(Neighborhood19QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood19Question)
    .add(Neighborhood19QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood19Question)
    .add(Neighborhood19QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood19Question)
    .add(Neighborhood19QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood19Question)
    .add(Neighborhood19QuestionItem5);

  let Neighborhood20Question = await Question.findOne({ question: 'I am able to get healthy food easily.' });
  if (!Neighborhood20Question) {
    Neighborhood20Question = await Question.create({
      question: 'I am able to get healthy food easily.',
      stack: 7,
      stackPhrase:
        'Please answer these questions thinking about your neighborhood or community. Do you agree or disagree with these statements?',
      placeHolder: '',
      order: 19,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood20QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood20QuestionItem1) {
    Neighborhood20QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood20QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood20QuestionItem2) {
    Neighborhood20QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood20QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood20QuestionItem3) {
    Neighborhood20QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood20QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood20QuestionItem4) {
    Neighborhood20QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood20QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood20QuestionItem5) {
    Neighborhood20QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood20Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood20Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood20Question)
    .add(Neighborhood20QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood20Question)
    .add(Neighborhood20QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood20Question)
    .add(Neighborhood20QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood20Question)
    .add(Neighborhood20QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood20Question)
    .add(Neighborhood20QuestionItem5);

  let Neighborhood21Question = await Question.findOne({
    question: 'I am able to find affordable, high quality childcare in my neighborhood.',
  });
  if (!Neighborhood21Question) {
    Neighborhood21Question = await Question.create({
      question: 'I am able to find affordable, high quality childcare in my neighborhood.',
      stack: 7,
      stackPhrase: '',
      placeHolder: '',
      order: 20,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Neighborhood21QuestionItem1 = await QuestionItems.findOne({ name: 'Strongly agree' });
  if (!Neighborhood21QuestionItem1) {
    Neighborhood21QuestionItem1 = await QuestionItems.create({ name: 'Strongly agree', order: 0 }).save();
  }
  let Neighborhood21QuestionItem2 = await QuestionItems.findOne({ name: 'Somewhat agree' });
  if (!Neighborhood21QuestionItem2) {
    Neighborhood21QuestionItem2 = await QuestionItems.create({ name: 'Somewhat agree', order: 1 }).save();
  }
  let Neighborhood21QuestionItem3 = await QuestionItems.findOne({ name: 'Neither agree not disagree' });
  if (!Neighborhood21QuestionItem3) {
    Neighborhood21QuestionItem3 = await QuestionItems.create({ name: 'Neither agree not disagree', order: 2 }).save();
  }
  let Neighborhood21QuestionItem4 = await QuestionItems.findOne({ name: 'Somewhat disagree' });
  if (!Neighborhood21QuestionItem4) {
    Neighborhood21QuestionItem4 = await QuestionItems.create({ name: 'Somewhat disagree', order: 3 }).save();
  }
  let Neighborhood21QuestionItem5 = await QuestionItems.findOne({ name: 'Strongly disagree' });
  if (!Neighborhood21QuestionItem5) {
    Neighborhood21QuestionItem5 = await QuestionItems.create({ name: 'Strongly disagree', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Neighborhood21Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Neighborhood21Question)
    .set(NeighborhoodSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood21Question)
    .add(Neighborhood21QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood21Question)
    .add(Neighborhood21QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood21Question)
    .add(Neighborhood21QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood21Question)
    .add(Neighborhood21QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Neighborhood21Question)
    .add(Neighborhood21QuestionItem5);

  let Religiousness1Question = await Question.findOne({ question: 'get through hard times?' });
  if (!Religiousness1Question) {
    Religiousness1Question = await Question.create({
      question: 'get through hard times?',
      stack: 0,
      stackPhrase:
        'The following questions ask how your beliefs have affected different aspects of your quality of life in the past two weeks. For example, one question asks "To what extent do you feel connected with your mind body and soul?" If you have experienced this very much, click "very much". If you have not experienced this at all, click "Not at all". Questions refer to the last two weeks. ',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness1QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness1QuestionItem1) {
    Religiousness1QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness1QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness1QuestionItem2) {
    Religiousness1QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness1QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness1QuestionItem3) {
    Religiousness1QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness1QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness1QuestionItem4) {
    Religiousness1QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness1QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness1QuestionItem5) {
    Religiousness1QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness1Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness1Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness1Question)
    .add(Religiousness1QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness1Question)
    .add(Religiousness1QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness1Question)
    .add(Religiousness1QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness1Question)
    .add(Religiousness1QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness1Question)
    .add(Religiousness1QuestionItem5);

  let Religiousness2Question = await Question.findOne({ question: 'To help you to tolerate stress?' });
  if (!Religiousness2Question) {
    Religiousness2Question = await Question.create({
      question: 'To help you to tolerate stress?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness2QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness2QuestionItem1) {
    Religiousness2QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness2QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness2QuestionItem2) {
    Religiousness2QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness2QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness2QuestionItem3) {
    Religiousness2QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness2QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness2QuestionItem4) {
    Religiousness2QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness2QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness2QuestionItem5) {
    Religiousness2QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness2Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness2Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness2Question)
    .add(Religiousness2QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness2Question)
    .add(Religiousness2QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness2Question)
    .add(Religiousness2QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness2Question)
    .add(Religiousness2QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness2Question)
    .add(Religiousness2QuestionItem5);

  let Religiousness3Question = await Question.findOne({
    question: 'To what extent does any connection to a spiritual being help you to understand others?',
  });
  if (!Religiousness3Question) {
    Religiousness3Question = await Question.create({
      question: 'To what extent does any connection to a spiritual being help you to understand others?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness3QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness3QuestionItem1) {
    Religiousness3QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness3QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness3QuestionItem2) {
    Religiousness3QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness3QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness3QuestionItem3) {
    Religiousness3QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness3QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness3QuestionItem4) {
    Religiousness3QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness3QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness3QuestionItem5) {
    Religiousness3QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness3Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness3Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness3Question)
    .add(Religiousness3QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness3Question)
    .add(Religiousness3QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness3Question)
    .add(Religiousness3QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness3Question)
    .add(Religiousness3QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness3Question)
    .add(Religiousness3QuestionItem5);

  let Religiousness4Question = await Question.findOne({
    question: 'To what extent does any connection to a spiritual being provide you with comfort / reassurance?',
  });
  if (!Religiousness4Question) {
    Religiousness4Question = await Question.create({
      question: 'To what extent does any connection to a spiritual being provide you with comfort / reassurance?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 3,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness4QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness4QuestionItem1) {
    Religiousness4QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness4QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness4QuestionItem2) {
    Religiousness4QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness4QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness4QuestionItem3) {
    Religiousness4QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness4QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness4QuestionItem4) {
    Religiousness4QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness4QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness4QuestionItem5) {
    Religiousness4QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness4Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness4Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness4Question)
    .add(Religiousness4QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness4Question)
    .add(Religiousness4QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness4Question)
    .add(Religiousness4QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness4Question)
    .add(Religiousness4QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness4Question)
    .add(Religiousness4QuestionItem5);

  let Religiousness5Question = await Question.findOne({ question: 'To what extent do you find meaning in life?' });
  if (!Religiousness5Question) {
    Religiousness5Question = await Question.create({
      question: 'To what extent do you find meaning in life?',
      stack: 1,
      stackPhrase:
        'The following questions ask how your beliefs have affected different aspects of your quality of life in the past two weeks. For example, one question asks "To what extent do you feel connected with your mind body and soul?" If you have experienced this very much, click "very much". If you have not experienced this at all, click "Not at all". Questions refer to the last two weeks.',
      placeHolder: '',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness5QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness5QuestionItem1) {
    Religiousness5QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness5QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness5QuestionItem2) {
    Religiousness5QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness5QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness5QuestionItem3) {
    Religiousness5QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness5QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness5QuestionItem4) {
    Religiousness5QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness5QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness5QuestionItem5) {
    Religiousness5QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness5Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness5Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness5Question)
    .add(Religiousness5QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness5Question)
    .add(Religiousness5QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness5Question)
    .add(Religiousness5QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness5Question)
    .add(Religiousness5QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness5Question)
    .add(Religiousness5QuestionItem5);

  let Religiousness6Question = await Question.findOne({
    question: 'To what extent does taking care of other people provide meaning of life for you?',
  });
  if (!Religiousness6Question) {
    Religiousness6Question = await Question.create({
      question: 'To what extent does taking care of other people provide meaning of life for you?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 5,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness6QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness6QuestionItem1) {
    Religiousness6QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness6QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness6QuestionItem2) {
    Religiousness6QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness6QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness6QuestionItem3) {
    Religiousness6QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness6QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness6QuestionItem4) {
    Religiousness6QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness6QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness6QuestionItem5) {
    Religiousness6QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness6Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness6Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness6Question)
    .add(Religiousness6QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness6Question)
    .add(Religiousness6QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness6Question)
    .add(Religiousness6QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness6Question)
    .add(Religiousness6QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness6Question)
    .add(Religiousness6QuestionItem5);

  let Religiousness7Question = await Question.findOne({
    question: 'To what extent do you feel your life has a purpose?',
  });
  if (!Religiousness7Question) {
    Religiousness7Question = await Question.create({
      question: 'To what extent do you feel your life has a purpose?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 6,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness7QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness7QuestionItem1) {
    Religiousness7QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness7QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness7QuestionItem2) {
    Religiousness7QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness7QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness7QuestionItem3) {
    Religiousness7QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness7QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness7QuestionItem4) {
    Religiousness7QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness7QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness7QuestionItem5) {
    Religiousness7QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness7Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness7Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness7Question)
    .add(Religiousness7QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness7Question)
    .add(Religiousness7QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness7Question)
    .add(Religiousness7QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness7Question)
    .add(Religiousness7QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness7Question)
    .add(Religiousness7QuestionItem5);

  let Religiousness8Question = await Question.findOne({
    question: 'To what extent do you feel you are here for a reason?',
  });
  if (!Religiousness8Question) {
    Religiousness8Question = await Question.create({
      question: 'To what extent do you feel you are here for a reason?',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 7,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness8QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness8QuestionItem1) {
    Religiousness8QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness8QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness8QuestionItem2) {
    Religiousness8QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness8QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness8QuestionItem3) {
    Religiousness8QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness8QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness8QuestionItem4) {
    Religiousness8QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness8QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness8QuestionItem5) {
    Religiousness8QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness8Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness8Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness8Question)
    .add(Religiousness8QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness8Question)
    .add(Religiousness8QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness8Question)
    .add(Religiousness8QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness8Question)
    .add(Religiousness8QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness8Question)
    .add(Religiousness8QuestionItem5);

  let Religiousness9Question = await Question.findOne({
    question: 'To what extent do you feel inner spiritual strength?',
  });
  if (!Religiousness9Question) {
    Religiousness9Question = await Question.create({
      question: 'To what extent do you feel inner spiritual strength?',
      stack: 2,
      stackPhrase:
        'The following questions ask how your beliefs have affected different aspects of your quality of life in the past two weeks. For example, one question asks "To what extent do you feel connected with your mind body and soul?" If you have experienced this very much, click "very much". If you have not experienced this at all, click "Not at all". Questions refer to the last two weeks.',
      placeHolder: '',
      order: 8,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness9QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness9QuestionItem1) {
    Religiousness9QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness9QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness9QuestionItem2) {
    Religiousness9QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness9QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness9QuestionItem3) {
    Religiousness9QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness9QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness9QuestionItem4) {
    Religiousness9QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness9QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness9QuestionItem5) {
    Religiousness9QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness9Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness9Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness9Question)
    .add(Religiousness9QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness9Question)
    .add(Religiousness9QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness9Question)
    .add(Religiousness9QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness9Question)
    .add(Religiousness9QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness9Question)
    .add(Religiousness9QuestionItem5);

  let Religiousness10Question = await Question.findOne({
    question: 'To what extent can you find spiritual strength in difficult times?',
  });
  if (!Religiousness10Question) {
    Religiousness10Question = await Question.create({
      question: 'To what extent can you find spiritual strength in difficult times?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 9,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness10QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness10QuestionItem1) {
    Religiousness10QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness10QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness10QuestionItem2) {
    Religiousness10QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness10QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness10QuestionItem3) {
    Religiousness10QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness10QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness10QuestionItem4) {
    Religiousness10QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness10QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness10QuestionItem5) {
    Religiousness10QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness10Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness10Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness10Question)
    .add(Religiousness10QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness10Question)
    .add(Religiousness10QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness10Question)
    .add(Religiousness10QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness10Question)
    .add(Religiousness10QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness10Question)
    .add(Religiousness10QuestionItem5);

  let Religiousness11Question = await Question.findOne({
    question: 'To what extent does faith contribute to your well-being?',
  });
  if (!Religiousness11Question) {
    Religiousness11Question = await Question.create({
      question: 'To what extent does faith contribute to your well-being?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 10,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness11QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness11QuestionItem1) {
    Religiousness11QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness11QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness11QuestionItem2) {
    Religiousness11QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness11QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness11QuestionItem3) {
    Religiousness11QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness11QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness11QuestionItem4) {
    Religiousness11QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness11QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness11QuestionItem5) {
    Religiousness11QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness11Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness11Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness11Question)
    .add(Religiousness11QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness11Question)
    .add(Religiousness11QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness11Question)
    .add(Religiousness11QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness11Question)
    .add(Religiousness11QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness11Question)
    .add(Religiousness11QuestionItem5);

  let Religiousness12Question = await Question.findOne({
    question: 'To what extent does faith give you comfort in daily life?',
  });
  if (!Religiousness12Question) {
    Religiousness12Question = await Question.create({
      question: 'To what extent does faith give you comfort in daily life?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 11,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness12QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness12QuestionItem1) {
    Religiousness12QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness12QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness12QuestionItem2) {
    Religiousness12QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness12QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness12QuestionItem3) {
    Religiousness12QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness12QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness12QuestionItem4) {
    Religiousness12QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness12QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness12QuestionItem5) {
    Religiousness12QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness12Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness12Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness12Question)
    .add(Religiousness12QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness12Question)
    .add(Religiousness12QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness12Question)
    .add(Religiousness12QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness12Question)
    .add(Religiousness12QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness12Question)
    .add(Religiousness12QuestionItem5);

  let Religiousness13Question = await Question.findOne({
    question: 'To what extent does faith give you strength in daily life?',
  });
  if (!Religiousness13Question) {
    Religiousness13Question = await Question.create({
      question: 'To what extent does faith give you strength in daily life?',
      stack: 3,
      stackPhrase:
        'The following questions ask how your beliefs have affected different aspects of your quality of life in the past two weeks. For example, one question asks "To what extent do you feel connected with your mind body and soul?" If you have experienced this very much, click "very much". If you have not experienced this at all, click "Not at all". Questions refer to the last two weeks.',
      placeHolder: '',
      order: 12,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness13QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness13QuestionItem1) {
    Religiousness13QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness13QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness13QuestionItem2) {
    Religiousness13QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness13QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness13QuestionItem3) {
    Religiousness13QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness13QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness13QuestionItem4) {
    Religiousness13QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness13QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness13QuestionItem5) {
    Religiousness13QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness13Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness13Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness13Question)
    .add(Religiousness13QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness13Question)
    .add(Religiousness13QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness13Question)
    .add(Religiousness13QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness13Question)
    .add(Religiousness13QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness13Question)
    .add(Religiousness13QuestionItem5);

  let Religiousness14Question = await Question.findOne({
    question: 'To what extent do you feel spiritually touched by beauty?',
  });
  if (!Religiousness14Question) {
    Religiousness14Question = await Question.create({
      question: 'To what extent do you feel spiritually touched by beauty?',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 13,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness14QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness14QuestionItem1) {
    Religiousness14QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness14QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness14QuestionItem2) {
    Religiousness14QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness14QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness14QuestionItem3) {
    Religiousness14QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness14QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness14QuestionItem4) {
    Religiousness14QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness14QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness14QuestionItem5) {
    Religiousness14QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness14Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness14Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness14Question)
    .add(Religiousness14QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness14Question)
    .add(Religiousness14QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness14Question)
    .add(Religiousness14QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness14Question)
    .add(Religiousness14QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness14Question)
    .add(Religiousness14QuestionItem5);

  let Religiousness15Question = await Question.findOne({
    question: 'To what extent do you have feelings of inspiration or excitement in your life?',
  });
  if (!Religiousness15Question) {
    Religiousness15Question = await Question.create({
      question: 'To what extent do you have feelings of inspiration or excitement in your life?',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 14,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness15QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness15QuestionItem1) {
    Religiousness15QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness15QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness15QuestionItem2) {
    Religiousness15QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness15QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness15QuestionItem3) {
    Religiousness15QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness15QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness15QuestionItem4) {
    Religiousness15QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness15QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness15QuestionItem5) {
    Religiousness15QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness15Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness15Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness15Question)
    .add(Religiousness15QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness15Question)
    .add(Religiousness15QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness15Question)
    .add(Religiousness15QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness15Question)
    .add(Religiousness15QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness15Question)
    .add(Religiousness15QuestionItem5);

  let Religiousness16Question = await Question.findOne({
    question: 'To what extent are you grateful for the things in nature that you can enjoy?',
  });
  if (!Religiousness16Question) {
    Religiousness16Question = await Question.create({
      question: 'To what extent are you grateful for the things in nature that you can enjoy?',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 15,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness16QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness16QuestionItem1) {
    Religiousness16QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness16QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness16QuestionItem2) {
    Religiousness16QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness16QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness16QuestionItem3) {
    Religiousness16QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness16QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness16QuestionItem4) {
    Religiousness16QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness16QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness16QuestionItem5) {
    Religiousness16QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness16Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness16Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness16Question)
    .add(Religiousness16QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness16Question)
    .add(Religiousness16QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness16Question)
    .add(Religiousness16QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness16Question)
    .add(Religiousness16QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness16Question)
    .add(Religiousness16QuestionItem5);

  let Religiousness17Question = await Question.findOne({ question: 'How hopeful do you feel?' });
  if (!Religiousness17Question) {
    Religiousness17Question = await Question.create({
      question: 'How hopeful do you feel?',
      stack: 4,
      stackPhrase:
        'The following questions ask how your beliefs have affected different aspects of your quality of life in the past two weeks. For example, one question asks "To what extent do you feel connected with your mind body and soul?" If you have experienced this very much, click "very much". If you have not experienced this at all, click "Not at all". Questions refer to the last two weeks.',
      placeHolder: '',
      order: 16,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness17QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness17QuestionItem1) {
    Religiousness17QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness17QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness17QuestionItem2) {
    Religiousness17QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness17QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness17QuestionItem3) {
    Religiousness17QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness17QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness17QuestionItem4) {
    Religiousness17QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness17QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness17QuestionItem5) {
    Religiousness17QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness17Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness17Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness17Question)
    .add(Religiousness17QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness17Question)
    .add(Religiousness17QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness17Question)
    .add(Religiousness17QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness17Question)
    .add(Religiousness17QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness17Question)
    .add(Religiousness17QuestionItem5);

  let Religiousness18Question = await Question.findOne({ question: 'To what extent are you hopeful about your life?' });
  if (!Religiousness18Question) {
    Religiousness18Question = await Question.create({
      question: 'To what extent are you hopeful about your life?',
      stack: 4,
      stackPhrase: '',
      placeHolder: '',
      order: 17,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness18QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness18QuestionItem1) {
    Religiousness18QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness18QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness18QuestionItem2) {
    Religiousness18QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness18QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness18QuestionItem3) {
    Religiousness18QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness18QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness18QuestionItem4) {
    Religiousness18QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness18QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness18QuestionItem5) {
    Religiousness18QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness18Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness18Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness18Question)
    .add(Religiousness18QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness18Question)
    .add(Religiousness18QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness18Question)
    .add(Religiousness18QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness18Question)
    .add(Religiousness18QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness18Question)
    .add(Religiousness18QuestionItem5);

  let Religiousness19Question = await Question.findOne({
    question: 'To what extent are you able to experience awe from your surroundings? (e.g. nature, art, music)',
  });
  if (!Religiousness19Question) {
    Religiousness19Question = await Question.create({
      question: 'To what extent are you able to experience awe from your surroundings? (e.g. nature, art, music)',
      stack: 4,
      stackPhrase: '',
      placeHolder: '',
      order: 18,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness19QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness19QuestionItem1) {
    Religiousness19QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness19QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness19QuestionItem2) {
    Religiousness19QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness19QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness19QuestionItem3) {
    Religiousness19QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness19QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness19QuestionItem4) {
    Religiousness19QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness19QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness19QuestionItem5) {
    Religiousness19QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness19Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness19Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness19Question)
    .add(Religiousness19QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness19Question)
    .add(Religiousness19QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness19Question)
    .add(Religiousness19QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness19Question)
    .add(Religiousness19QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness19Question)
    .add(Religiousness19QuestionItem5);

  let Religiousness20Question = await Question.findOne({
    question: 'To what extent do you feel any connection between your mind, body and soul?',
  });
  if (!Religiousness20Question) {
    Religiousness20Question = await Question.create({
      question: 'To what extent do you feel any connection between your mind, body and soul?',
      stack: 4,
      stackPhrase: '',
      placeHolder: '',
      order: 19,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness20QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness20QuestionItem1) {
    Religiousness20QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness20QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness20QuestionItem2) {
    Religiousness20QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness20QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness20QuestionItem3) {
    Religiousness20QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness20QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness20QuestionItem4) {
    Religiousness20QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness20QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness20QuestionItem5) {
    Religiousness20QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness20Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness20Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness20Question)
    .add(Religiousness20QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness20Question)
    .add(Religiousness20QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness20Question)
    .add(Religiousness20QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness20Question)
    .add(Religiousness20QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness20Question)
    .add(Religiousness20QuestionItem5);

  let Religiousness21Question = await Question.findOne({
    question: 'To what extent do you feel the way you live is consistent with what you feel and think?',
  });
  if (!Religiousness21Question) {
    Religiousness21Question = await Question.create({
      question: 'To what extent do you feel the way you live is consistent with what you feel and think?',
      stack: 5,
      stackPhrase:
        'The following questions ask how your beliefs have affected different aspects of your quality of life in the past two weeks. For example, one question asks "To what extent do you feel connected with your mind body and soul?" If you have experienced this very much, click "very much". If you have not experienced this at all, click "Not at all". Questions refer to the last two weeks.',
      placeHolder: '',
      order: 20,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness21QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness21QuestionItem1) {
    Religiousness21QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness21QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness21QuestionItem2) {
    Religiousness21QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness21QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness21QuestionItem3) {
    Religiousness21QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness21QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness21QuestionItem4) {
    Religiousness21QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness21QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness21QuestionItem5) {
    Religiousness21QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness21Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness21Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness21Question)
    .add(Religiousness21QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness21Question)
    .add(Religiousness21QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness21Question)
    .add(Religiousness21QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness21Question)
    .add(Religiousness21QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness21Question)
    .add(Religiousness21QuestionItem5);

  let Religiousness22Question = await Question.findOne({
    question: 'How much do your beliefs help you to create coherence between what you do, think and feel?',
  });
  if (!Religiousness22Question) {
    Religiousness22Question = await Question.create({
      question: 'How much do your beliefs help you to create coherence between what you do, think and feel?',
      stack: 5,
      stackPhrase: '',
      placeHolder: '',
      order: 21,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness22QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness22QuestionItem1) {
    Religiousness22QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness22QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness22QuestionItem2) {
    Religiousness22QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness22QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness22QuestionItem3) {
    Religiousness22QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness22QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness22QuestionItem4) {
    Religiousness22QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness22QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness22QuestionItem5) {
    Religiousness22QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness22Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness22Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness22Question)
    .add(Religiousness22QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness22Question)
    .add(Religiousness22QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness22Question)
    .add(Religiousness22QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness22Question)
    .add(Religiousness22QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness22Question)
    .add(Religiousness22QuestionItem5);

  let Religiousness23Question = await Question.findOne({
    question: 'How much does spiritual strength help you to live better?',
  });
  if (!Religiousness23Question) {
    Religiousness23Question = await Question.create({
      question: 'How much does spiritual strength help you to live better?',
      stack: 5,
      stackPhrase: '',
      placeHolder: '',
      order: 22,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness23QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness23QuestionItem1) {
    Religiousness23QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness23QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness23QuestionItem2) {
    Religiousness23QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness23QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness23QuestionItem3) {
    Religiousness23QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness23QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness23QuestionItem4) {
    Religiousness23QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness23QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness23QuestionItem5) {
    Religiousness23QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness23Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness23Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness23Question)
    .add(Religiousness23QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness23Question)
    .add(Religiousness23QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness23Question)
    .add(Religiousness23QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness23Question)
    .add(Religiousness23QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness23Question)
    .add(Religiousness23QuestionItem5);

  let Religiousness24Question = await Question.findOne({
    question: 'To what extent does your spiritual strength help you to feel happy in life?',
  });
  if (!Religiousness24Question) {
    Religiousness24Question = await Question.create({
      question: 'To what extent does your spiritual strength help you to feel happy in life?',
      stack: 5,
      stackPhrase: '',
      placeHolder: '',
      order: 23,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness24QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness24QuestionItem1) {
    Religiousness24QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness24QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness24QuestionItem2) {
    Religiousness24QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness24QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness24QuestionItem3) {
    Religiousness24QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness24QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness24QuestionItem4) {
    Religiousness24QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness24QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness24QuestionItem5) {
    Religiousness24QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness24Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness24Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness24Question)
    .add(Religiousness24QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness24Question)
    .add(Religiousness24QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness24Question)
    .add(Religiousness24QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness24Question)
    .add(Religiousness24QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness24Question)
    .add(Religiousness24QuestionItem5);

  let Religiousness25Question = await Question.findOne({
    question: 'To what extent do you feel peaceful within yourself?',
  });
  if (!Religiousness25Question) {
    Religiousness25Question = await Question.create({
      question: 'To what extent do you feel peaceful within yourself?',
      stack: 6,
      stackPhrase:
        'The following questions ask how your beliefs have affected different aspects of your quality of life in the past two weeks. For example, one question asks "To what extent do you feel connected with your mind body and soul?" If you have experienced this very much, click "very much". If you have not experienced this at all, click "Not at all". Questions refer to the last two weeks.',
      placeHolder: '',
      order: 24,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness25QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness25QuestionItem1) {
    Religiousness25QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness25QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness25QuestionItem2) {
    Religiousness25QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness25QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness25QuestionItem3) {
    Religiousness25QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness25QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness25QuestionItem4) {
    Religiousness25QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness25QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness25QuestionItem5) {
    Religiousness25QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness25Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness25Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness25Question)
    .add(Religiousness25QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness25Question)
    .add(Religiousness25QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness25Question)
    .add(Religiousness25QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness25Question)
    .add(Religiousness25QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness25Question)
    .add(Religiousness25QuestionItem5);

  let Religiousness26Question = await Question.findOne({ question: 'To what extent do you have inner peace?' });
  if (!Religiousness26Question) {
    Religiousness26Question = await Question.create({
      question: 'To what extent do you have inner peace?',
      stack: 6,
      stackPhrase: '',
      placeHolder: '',
      order: 25,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness26QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness26QuestionItem1) {
    Religiousness26QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness26QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness26QuestionItem2) {
    Religiousness26QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness26QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness26QuestionItem3) {
    Religiousness26QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness26QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness26QuestionItem4) {
    Religiousness26QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness26QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness26QuestionItem5) {
    Religiousness26QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness26Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness26Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness26Question)
    .add(Religiousness26QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness26Question)
    .add(Religiousness26QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness26Question)
    .add(Religiousness26QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness26Question)
    .add(Religiousness26QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness26Question)
    .add(Religiousness26QuestionItem5);

  let Religiousness27Question = await Question.findOne({
    question: 'How much are you able to feel peaceful when you need to?',
  });
  if (!Religiousness27Question) {
    Religiousness27Question = await Question.create({
      question: 'How much are you able to feel peaceful when you need to?',
      stack: 6,
      stackPhrase: '',
      placeHolder: '',
      order: 26,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness27QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness27QuestionItem1) {
    Religiousness27QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness27QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness27QuestionItem2) {
    Religiousness27QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness27QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness27QuestionItem3) {
    Religiousness27QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness27QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness27QuestionItem4) {
    Religiousness27QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness27QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness27QuestionItem5) {
    Religiousness27QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness27Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness27Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness27Question)
    .add(Religiousness27QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness27Question)
    .add(Religiousness27QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness27Question)
    .add(Religiousness27QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness27Question)
    .add(Religiousness27QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness27Question)
    .add(Religiousness27QuestionItem5);

  let Religiousness28Question = await Question.findOne({
    question: 'To what extent do you feel a sense of harmony in your life?',
  });
  if (!Religiousness28Question) {
    Religiousness28Question = await Question.create({
      question: 'To what extent do you feel a sense of harmony in your life?',
      stack: 6,
      stackPhrase: '',
      placeHolder: '',
      order: 27,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness28QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness28QuestionItem1) {
    Religiousness28QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness28QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness28QuestionItem2) {
    Religiousness28QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness28QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness28QuestionItem3) {
    Religiousness28QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness28QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness28QuestionItem4) {
    Religiousness28QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness28QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness28QuestionItem5) {
    Religiousness28QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness28Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness28Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness28Question)
    .add(Religiousness28QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness28Question)
    .add(Religiousness28QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness28Question)
    .add(Religiousness28QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness28Question)
    .add(Religiousness28QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness28Question)
    .add(Religiousness28QuestionItem5);

  let Religiousness29Question = await Question.findOne({
    question: 'To what extent does being optimistic improve your quality of life?',
  });
  if (!Religiousness29Question) {
    Religiousness29Question = await Question.create({
      question: 'To what extent does being optimistic improve your quality of life?',
      stack: 7,
      stackPhrase:
        'The following questions ask how your beliefs have affected different aspects of your quality of life in the past two weeks. For example, one question asks "To what extent do you feel connected with your mind body and soul?" If you have experienced this very much, click "very much". If you have not experienced this at all, click "Not at all". Questions refer to the last two weeks.',
      placeHolder: '',
      order: 28,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness29QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness29QuestionItem1) {
    Religiousness29QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness29QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness29QuestionItem2) {
    Religiousness29QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness29QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness29QuestionItem3) {
    Religiousness29QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness29QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness29QuestionItem4) {
    Religiousness29QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness29QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness29QuestionItem5) {
    Religiousness29QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness29Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness29Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness29Question)
    .add(Religiousness29QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness29Question)
    .add(Religiousness29QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness29Question)
    .add(Religiousness29QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness29Question)
    .add(Religiousness29QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness29Question)
    .add(Religiousness29QuestionItem5);

  let Religiousness30Question = await Question.findOne({
    question: 'How able are you to remain optimistic in times of uncertainty?',
  });
  if (!Religiousness30Question) {
    Religiousness30Question = await Question.create({
      question: 'How able are you to remain optimistic in times of uncertainty?',
      stack: 7,
      stackPhrase: '',
      placeHolder: '',
      order: 29,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness30QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness30QuestionItem1) {
    Religiousness30QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness30QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness30QuestionItem2) {
    Religiousness30QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness30QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness30QuestionItem3) {
    Religiousness30QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness30QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness30QuestionItem4) {
    Religiousness30QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness30QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness30QuestionItem5) {
    Religiousness30QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness30Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness30Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness30Question)
    .add(Religiousness30QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness30Question)
    .add(Religiousness30QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness30Question)
    .add(Religiousness30QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness30Question)
    .add(Religiousness30QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness30Question)
    .add(Religiousness30QuestionItem5);

  let Religiousness31Question = await Question.findOne({
    question: 'To what extent does faith help you to enjoy life?',
  });
  if (!Religiousness31Question) {
    Religiousness31Question = await Question.create({
      question: 'To what extent does faith help you to enjoy life?',
      stack: 7,
      stackPhrase: '',
      placeHolder: '',
      order: 30,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness31QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness31QuestionItem1) {
    Religiousness31QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness31QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness31QuestionItem2) {
    Religiousness31QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness31QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness31QuestionItem3) {
    Religiousness31QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness31QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness31QuestionItem4) {
    Religiousness31QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness31QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness31QuestionItem5) {
    Religiousness31QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness31Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness31Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness31Question)
    .add(Religiousness31QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness31Question)
    .add(Religiousness31QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness31Question)
    .add(Religiousness31QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness31Question)
    .add(Religiousness31QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness31Question)
    .add(Religiousness31QuestionItem5);

  let Religiousness32Question = await Question.findOne({
    question: 'How satisfied are you that you have a balance between mind, body and soul?',
  });
  if (!Religiousness32Question) {
    Religiousness32Question = await Question.create({
      question: 'How satisfied are you that you have a balance between mind, body and soul?',
      stack: 7,
      stackPhrase: '',
      placeHolder: '',
      order: 31,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Religiousness32QuestionItem1 = await QuestionItems.findOne({ name: 'Not at all' });
  if (!Religiousness32QuestionItem1) {
    Religiousness32QuestionItem1 = await QuestionItems.create({ name: 'Not at all', order: 0 }).save();
  }
  let Religiousness32QuestionItem2 = await QuestionItems.findOne({ name: 'A little' });
  if (!Religiousness32QuestionItem2) {
    Religiousness32QuestionItem2 = await QuestionItems.create({ name: 'A little', order: 1 }).save();
  }
  let Religiousness32QuestionItem3 = await QuestionItems.findOne({ name: 'A moderate amount' });
  if (!Religiousness32QuestionItem3) {
    Religiousness32QuestionItem3 = await QuestionItems.create({ name: 'A moderate amount', order: 2 }).save();
  }
  let Religiousness32QuestionItem4 = await QuestionItems.findOne({ name: 'Very much' });
  if (!Religiousness32QuestionItem4) {
    Religiousness32QuestionItem4 = await QuestionItems.create({ name: 'Very much', order: 3 }).save();
  }
  let Religiousness32QuestionItem5 = await QuestionItems.findOne({ name: 'An extreme amount' });
  if (!Religiousness32QuestionItem5) {
    Religiousness32QuestionItem5 = await QuestionItems.create({ name: 'An extreme amount', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Religiousness32Question)
    .set(radiogroupQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Religiousness32Question)
    .set(ReligiousnessSubSection);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness32Question)
    .add(Religiousness32QuestionItem1);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness32Question)
    .add(Religiousness32QuestionItem2);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness32Question)
    .add(Religiousness32QuestionItem3);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness32Question)
    .add(Religiousness32QuestionItem4);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'items')
    .of(Religiousness32Question)
    .add(Religiousness32QuestionItem5);

  let Sleep1Question = await Question.findOne({
    question: 'How long did it usually take for you to fall asleep during the past 4 weeks?',
  });
  if (!Sleep1Question) {
    Sleep1Question = await Question.create({
      question: 'How long did it usually take for you to fall asleep during the past 4 weeks?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Sleep1QuestionItem1 = await QuestionItems.findOne({ name: '0-15 minutes' });
  if (!Sleep1QuestionItem1) {
    Sleep1QuestionItem1 = await QuestionItems.create({ name: '0-15 minutes', order: 0 }).save();
  }
  let Sleep1QuestionItem2 = await QuestionItems.findOne({ name: '16-30 minutes' });
  if (!Sleep1QuestionItem2) {
    Sleep1QuestionItem2 = await QuestionItems.create({ name: '16-30 minutes', order: 1 }).save();
  }
  let Sleep1QuestionItem3 = await QuestionItems.findOne({ name: '31-45 minutes' });
  if (!Sleep1QuestionItem3) {
    Sleep1QuestionItem3 = await QuestionItems.create({ name: '31-45 minutes', order: 2 }).save();
  }
  let Sleep1QuestionItem4 = await QuestionItems.findOne({ name: '46-60 minutes' });
  if (!Sleep1QuestionItem4) {
    Sleep1QuestionItem4 = await QuestionItems.create({ name: '46-60 minutes', order: 3 }).save();
  }
  let Sleep1QuestionItem5 = await QuestionItems.findOne({ name: 'More than 60 minutes' });
  if (!Sleep1QuestionItem5) {
    Sleep1QuestionItem5 = await QuestionItems.create({ name: 'More than 60 minutes', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Sleep1Question)
    .set(comboQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Sleep1Question).set(SleepSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep1Question).add(Sleep1QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep1Question).add(Sleep1QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep1Question).add(Sleep1QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep1Question).add(Sleep1QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep1Question).add(Sleep1QuestionItem5);

  let Sleep2Question = await Question.findOne({
    question: 'On the average, how many hours did you sleep each night during the past 4 weeks?',
  });
  if (!Sleep2Question) {
    Sleep2Question = await Question.create({
      question: 'On the average, how many hours did you sleep each night during the past 4 weeks?',
      stack: 0,
      stackPhrase: '',
      placeHolder: '3',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Sleep2Question)
    .set(openQuestionCategory);
  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Sleep2Question).set(SleepSubSection);

  let Sleep3Question = await Question.findOne({
    question: 'Feel that your sleep was not quiet (moving restlessly, feeling tense, speaking, etc., while sleeping)?',
  });
  if (!Sleep3Question) {
    Sleep3Question = await Question.create({
      question:
        'Feel that your sleep was not quiet (moving restlessly, feeling tense, speaking, etc., while sleeping)?',
      stack: 1,
      stackPhrase: 'How often during the past 4 weeks did you',
      placeHolder: '',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Sleep3QuestionItem1 = await QuestionItems.findOne({ name: 'All of the time' });
  if (!Sleep3QuestionItem1) {
    Sleep3QuestionItem1 = await QuestionItems.create({ name: 'All of the time', order: 0 }).save();
  }
  let Sleep3QuestionItem2 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!Sleep3QuestionItem2) {
    Sleep3QuestionItem2 = await QuestionItems.create({ name: 'Most of the time', order: 1 }).save();
  }
  let Sleep3QuestionItem3 = await QuestionItems.findOne({ name: 'A good bit of the time' });
  if (!Sleep3QuestionItem3) {
    Sleep3QuestionItem3 = await QuestionItems.create({ name: 'A good bit of the time', order: 2 }).save();
  }
  let Sleep3QuestionItem4 = await QuestionItems.findOne({ name: 'Some of the time' });
  if (!Sleep3QuestionItem4) {
    Sleep3QuestionItem4 = await QuestionItems.create({ name: 'Some of the time', order: 3 }).save();
  }
  let Sleep3QuestionItem5 = await QuestionItems.findOne({ name: 'A little of the time' });
  if (!Sleep3QuestionItem5) {
    Sleep3QuestionItem5 = await QuestionItems.create({ name: 'A little of the time', order: 4 }).save();
  }
  let Sleep3QuestionItem6 = await QuestionItems.findOne({ name: 'None of the time' });
  if (!Sleep3QuestionItem6) {
    Sleep3QuestionItem6 = await QuestionItems.create({ name: 'None of the time', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Sleep3Question)
    .set(radiogroupQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Sleep3Question).set(SleepSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep3Question).add(Sleep3QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep3Question).add(Sleep3QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep3Question).add(Sleep3QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep3Question).add(Sleep3QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep3Question).add(Sleep3QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep3Question).add(Sleep3QuestionItem6);

  let Sleep4Question = await Question.findOne({
    question: 'Get enough sleep to feel rested upon waking in the morning? ',
  });
  if (!Sleep4Question) {
    Sleep4Question = await Question.create({
      question: 'Get enough sleep to feel rested upon waking in the morning? ',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 3,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Sleep4QuestionItem1 = await QuestionItems.findOne({ name: 'All of the time' });
  if (!Sleep4QuestionItem1) {
    Sleep4QuestionItem1 = await QuestionItems.create({ name: 'All of the time', order: 0 }).save();
  }
  let Sleep4QuestionItem2 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!Sleep4QuestionItem2) {
    Sleep4QuestionItem2 = await QuestionItems.create({ name: 'Most of the time', order: 1 }).save();
  }
  let Sleep4QuestionItem3 = await QuestionItems.findOne({ name: 'A good bit of the time' });
  if (!Sleep4QuestionItem3) {
    Sleep4QuestionItem3 = await QuestionItems.create({ name: 'A good bit of the time', order: 2 }).save();
  }
  let Sleep4QuestionItem4 = await QuestionItems.findOne({ name: 'Some of the time' });
  if (!Sleep4QuestionItem4) {
    Sleep4QuestionItem4 = await QuestionItems.create({ name: 'Some of the time', order: 3 }).save();
  }
  let Sleep4QuestionItem5 = await QuestionItems.findOne({ name: 'A little of the time' });
  if (!Sleep4QuestionItem5) {
    Sleep4QuestionItem5 = await QuestionItems.create({ name: 'A little of the time', order: 4 }).save();
  }
  let Sleep4QuestionItem6 = await QuestionItems.findOne({ name: 'None of the time' });
  if (!Sleep4QuestionItem6) {
    Sleep4QuestionItem6 = await QuestionItems.create({ name: 'None of the time', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Sleep4Question)
    .set(radiogroupQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Sleep4Question).set(SleepSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep4Question).add(Sleep4QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep4Question).add(Sleep4QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep4Question).add(Sleep4QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep4Question).add(Sleep4QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep4Question).add(Sleep4QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep4Question).add(Sleep4QuestionItem6);

  let Sleep5Question = await Question.findOne({ question: 'Awaken short of breath or with a headache? ' });
  if (!Sleep5Question) {
    Sleep5Question = await Question.create({
      question: 'Awaken short of breath or with a headache? ',
      stack: 1,
      stackPhrase: '',
      placeHolder: '',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Sleep5QuestionItem1 = await QuestionItems.findOne({ name: 'All of the time' });
  if (!Sleep5QuestionItem1) {
    Sleep5QuestionItem1 = await QuestionItems.create({ name: 'All of the time', order: 0 }).save();
  }
  let Sleep5QuestionItem2 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!Sleep5QuestionItem2) {
    Sleep5QuestionItem2 = await QuestionItems.create({ name: 'Most of the time', order: 1 }).save();
  }
  let Sleep5QuestionItem3 = await QuestionItems.findOne({ name: 'A good bit of the time' });
  if (!Sleep5QuestionItem3) {
    Sleep5QuestionItem3 = await QuestionItems.create({ name: 'A good bit of the time', order: 2 }).save();
  }
  let Sleep5QuestionItem4 = await QuestionItems.findOne({ name: 'Some of the time' });
  if (!Sleep5QuestionItem4) {
    Sleep5QuestionItem4 = await QuestionItems.create({ name: 'Some of the time', order: 3 }).save();
  }
  let Sleep5QuestionItem5 = await QuestionItems.findOne({ name: 'A little of the time' });
  if (!Sleep5QuestionItem5) {
    Sleep5QuestionItem5 = await QuestionItems.create({ name: 'A little of the time', order: 4 }).save();
  }
  let Sleep5QuestionItem6 = await QuestionItems.findOne({ name: 'None of the time' });
  if (!Sleep5QuestionItem6) {
    Sleep5QuestionItem6 = await QuestionItems.create({ name: 'None of the time', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Sleep5Question)
    .set(radiogroupQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Sleep5Question).set(SleepSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep5Question).add(Sleep5QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep5Question).add(Sleep5QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep5Question).add(Sleep5QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep5Question).add(Sleep5QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep5Question).add(Sleep5QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep5Question).add(Sleep5QuestionItem6);

  let Sleep6Question = await Question.findOne({ question: 'Feel drowsy or sleepy during the day?' });
  if (!Sleep6Question) {
    Sleep6Question = await Question.create({
      question: 'Feel drowsy or sleepy during the day?',
      stack: 2,
      stackPhrase: 'How often during the past 4 weeks did you',
      placeHolder: '',
      order: 5,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Sleep6QuestionItem1 = await QuestionItems.findOne({ name: 'All of the time' });
  if (!Sleep6QuestionItem1) {
    Sleep6QuestionItem1 = await QuestionItems.create({ name: 'All of the time', order: 0 }).save();
  }
  let Sleep6QuestionItem2 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!Sleep6QuestionItem2) {
    Sleep6QuestionItem2 = await QuestionItems.create({ name: 'Most of the time', order: 1 }).save();
  }
  let Sleep6QuestionItem3 = await QuestionItems.findOne({ name: 'A good bit of the time' });
  if (!Sleep6QuestionItem3) {
    Sleep6QuestionItem3 = await QuestionItems.create({ name: 'A good bit of the time', order: 2 }).save();
  }
  let Sleep6QuestionItem4 = await QuestionItems.findOne({ name: 'Some of the time' });
  if (!Sleep6QuestionItem4) {
    Sleep6QuestionItem4 = await QuestionItems.create({ name: 'Some of the time', order: 3 }).save();
  }
  let Sleep6QuestionItem5 = await QuestionItems.findOne({ name: 'A little of the time' });
  if (!Sleep6QuestionItem5) {
    Sleep6QuestionItem5 = await QuestionItems.create({ name: 'A little of the time', order: 4 }).save();
  }
  let Sleep6QuestionItem6 = await QuestionItems.findOne({ name: 'None of the time' });
  if (!Sleep6QuestionItem6) {
    Sleep6QuestionItem6 = await QuestionItems.create({ name: 'None of the time', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Sleep6Question)
    .set(radiogroupQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Sleep6Question).set(SleepSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep6Question).add(Sleep6QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep6Question).add(Sleep6QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep6Question).add(Sleep6QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep6Question).add(Sleep6QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep6Question).add(Sleep6QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep6Question).add(Sleep6QuestionItem6);

  let Sleep7Question = await Question.findOne({ question: 'Have trouble falling asleep?' });
  if (!Sleep7Question) {
    Sleep7Question = await Question.create({
      question: 'Have trouble falling asleep?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 6,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Sleep7QuestionItem1 = await QuestionItems.findOne({ name: 'All of the time' });
  if (!Sleep7QuestionItem1) {
    Sleep7QuestionItem1 = await QuestionItems.create({ name: 'All of the time', order: 0 }).save();
  }
  let Sleep7QuestionItem2 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!Sleep7QuestionItem2) {
    Sleep7QuestionItem2 = await QuestionItems.create({ name: 'Most of the time', order: 1 }).save();
  }
  let Sleep7QuestionItem3 = await QuestionItems.findOne({ name: 'A good bit of the time' });
  if (!Sleep7QuestionItem3) {
    Sleep7QuestionItem3 = await QuestionItems.create({ name: 'A good bit of the time', order: 2 }).save();
  }
  let Sleep7QuestionItem4 = await QuestionItems.findOne({ name: 'Some of the time' });
  if (!Sleep7QuestionItem4) {
    Sleep7QuestionItem4 = await QuestionItems.create({ name: 'Some of the time', order: 3 }).save();
  }
  let Sleep7QuestionItem5 = await QuestionItems.findOne({ name: 'A little of the time' });
  if (!Sleep7QuestionItem5) {
    Sleep7QuestionItem5 = await QuestionItems.create({ name: 'A little of the time', order: 4 }).save();
  }
  let Sleep7QuestionItem6 = await QuestionItems.findOne({ name: 'None of the time' });
  if (!Sleep7QuestionItem6) {
    Sleep7QuestionItem6 = await QuestionItems.create({ name: 'None of the time', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Sleep7Question)
    .set(radiogroupQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Sleep7Question).set(SleepSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep7Question).add(Sleep7QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep7Question).add(Sleep7QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep7Question).add(Sleep7QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep7Question).add(Sleep7QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep7Question).add(Sleep7QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep7Question).add(Sleep7QuestionItem6);

  let Sleep8Question = await Question.findOne({
    question: 'Awaken during your sleep time and have trouble falling asleep again?',
  });
  if (!Sleep8Question) {
    Sleep8Question = await Question.create({
      question: 'Awaken during your sleep time and have trouble falling asleep again?',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 7,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Sleep8QuestionItem1 = await QuestionItems.findOne({ name: 'All of the time' });
  if (!Sleep8QuestionItem1) {
    Sleep8QuestionItem1 = await QuestionItems.create({ name: 'All of the time', order: 0 }).save();
  }
  let Sleep8QuestionItem2 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!Sleep8QuestionItem2) {
    Sleep8QuestionItem2 = await QuestionItems.create({ name: 'Most of the time', order: 1 }).save();
  }
  let Sleep8QuestionItem3 = await QuestionItems.findOne({ name: 'A good bit of the time' });
  if (!Sleep8QuestionItem3) {
    Sleep8QuestionItem3 = await QuestionItems.create({ name: 'A good bit of the time', order: 2 }).save();
  }
  let Sleep8QuestionItem4 = await QuestionItems.findOne({ name: 'Some of the time' });
  if (!Sleep8QuestionItem4) {
    Sleep8QuestionItem4 = await QuestionItems.create({ name: 'Some of the time', order: 3 }).save();
  }
  let Sleep8QuestionItem5 = await QuestionItems.findOne({ name: 'A little of the time' });
  if (!Sleep8QuestionItem5) {
    Sleep8QuestionItem5 = await QuestionItems.create({ name: 'A little of the time', order: 4 }).save();
  }
  let Sleep8QuestionItem6 = await QuestionItems.findOne({ name: 'None of the time' });
  if (!Sleep8QuestionItem6) {
    Sleep8QuestionItem6 = await QuestionItems.create({ name: 'None of the time', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Sleep8Question)
    .set(radiogroupQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Sleep8Question).set(SleepSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep8Question).add(Sleep8QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep8Question).add(Sleep8QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep8Question).add(Sleep8QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep8Question).add(Sleep8QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep8Question).add(Sleep8QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep8Question).add(Sleep8QuestionItem6);

  let Sleep9Question = await Question.findOne({ question: 'Have trouble staying awake during the day? ' });
  if (!Sleep9Question) {
    Sleep9Question = await Question.create({
      question: 'Have trouble staying awake during the day? ',
      stack: 2,
      stackPhrase: '',
      placeHolder: '',
      order: 8,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Sleep9QuestionItem1 = await QuestionItems.findOne({ name: 'All of the time' });
  if (!Sleep9QuestionItem1) {
    Sleep9QuestionItem1 = await QuestionItems.create({ name: 'All of the time', order: 0 }).save();
  }
  let Sleep9QuestionItem2 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!Sleep9QuestionItem2) {
    Sleep9QuestionItem2 = await QuestionItems.create({ name: 'Most of the time', order: 1 }).save();
  }
  let Sleep9QuestionItem3 = await QuestionItems.findOne({ name: 'A good bit of the time' });
  if (!Sleep9QuestionItem3) {
    Sleep9QuestionItem3 = await QuestionItems.create({ name: 'A good bit of the time', order: 2 }).save();
  }
  let Sleep9QuestionItem4 = await QuestionItems.findOne({ name: 'Some of the time' });
  if (!Sleep9QuestionItem4) {
    Sleep9QuestionItem4 = await QuestionItems.create({ name: 'Some of the time', order: 3 }).save();
  }
  let Sleep9QuestionItem5 = await QuestionItems.findOne({ name: 'A little of the time' });
  if (!Sleep9QuestionItem5) {
    Sleep9QuestionItem5 = await QuestionItems.create({ name: 'A little of the time', order: 4 }).save();
  }
  let Sleep9QuestionItem6 = await QuestionItems.findOne({ name: 'None of the time' });
  if (!Sleep9QuestionItem6) {
    Sleep9QuestionItem6 = await QuestionItems.create({ name: 'None of the time', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Sleep9Question)
    .set(radiogroupQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Sleep9Question).set(SleepSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep9Question).add(Sleep9QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep9Question).add(Sleep9QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep9Question).add(Sleep9QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep9Question).add(Sleep9QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep9Question).add(Sleep9QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep9Question).add(Sleep9QuestionItem6);

  let Sleep10Question = await Question.findOne({ question: 'Snore during your sleep?' });
  if (!Sleep10Question) {
    Sleep10Question = await Question.create({
      question: 'Snore during your sleep?',
      stack: 3,
      stackPhrase: 'How often during the past 4 weeks did you',
      placeHolder: '',
      order: 9,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Sleep10QuestionItem1 = await QuestionItems.findOne({ name: 'All of the time' });
  if (!Sleep10QuestionItem1) {
    Sleep10QuestionItem1 = await QuestionItems.create({ name: 'All of the time', order: 0 }).save();
  }
  let Sleep10QuestionItem2 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!Sleep10QuestionItem2) {
    Sleep10QuestionItem2 = await QuestionItems.create({ name: 'Most of the time', order: 1 }).save();
  }
  let Sleep10QuestionItem3 = await QuestionItems.findOne({ name: 'A good bit of the time' });
  if (!Sleep10QuestionItem3) {
    Sleep10QuestionItem3 = await QuestionItems.create({ name: 'A good bit of the time', order: 2 }).save();
  }
  let Sleep10QuestionItem4 = await QuestionItems.findOne({ name: 'Some of the time' });
  if (!Sleep10QuestionItem4) {
    Sleep10QuestionItem4 = await QuestionItems.create({ name: 'Some of the time', order: 3 }).save();
  }
  let Sleep10QuestionItem5 = await QuestionItems.findOne({ name: 'A little of the time' });
  if (!Sleep10QuestionItem5) {
    Sleep10QuestionItem5 = await QuestionItems.create({ name: 'A little of the time', order: 4 }).save();
  }
  let Sleep10QuestionItem6 = await QuestionItems.findOne({ name: 'None of the time' });
  if (!Sleep10QuestionItem6) {
    Sleep10QuestionItem6 = await QuestionItems.create({ name: 'None of the time', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Sleep10Question)
    .set(radiogroupQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Sleep10Question).set(SleepSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep10Question).add(Sleep10QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep10Question).add(Sleep10QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep10Question).add(Sleep10QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep10Question).add(Sleep10QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep10Question).add(Sleep10QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep10Question).add(Sleep10QuestionItem6);

  let Sleep11Question = await Question.findOne({ question: 'Take naps (5 minutes or longer) during the day?' });
  if (!Sleep11Question) {
    Sleep11Question = await Question.create({
      question: 'Take naps (5 minutes or longer) during the day?',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 10,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Sleep11QuestionItem1 = await QuestionItems.findOne({ name: 'All of the time' });
  if (!Sleep11QuestionItem1) {
    Sleep11QuestionItem1 = await QuestionItems.create({ name: 'All of the time', order: 0 }).save();
  }
  let Sleep11QuestionItem2 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!Sleep11QuestionItem2) {
    Sleep11QuestionItem2 = await QuestionItems.create({ name: 'Most of the time', order: 1 }).save();
  }
  let Sleep11QuestionItem3 = await QuestionItems.findOne({ name: 'A good bit of the time' });
  if (!Sleep11QuestionItem3) {
    Sleep11QuestionItem3 = await QuestionItems.create({ name: 'A good bit of the time', order: 2 }).save();
  }
  let Sleep11QuestionItem4 = await QuestionItems.findOne({ name: 'Some of the time' });
  if (!Sleep11QuestionItem4) {
    Sleep11QuestionItem4 = await QuestionItems.create({ name: 'Some of the time', order: 3 }).save();
  }
  let Sleep11QuestionItem5 = await QuestionItems.findOne({ name: 'A little of the time' });
  if (!Sleep11QuestionItem5) {
    Sleep11QuestionItem5 = await QuestionItems.create({ name: 'A little of the time', order: 4 }).save();
  }
  let Sleep11QuestionItem6 = await QuestionItems.findOne({ name: 'None of the time' });
  if (!Sleep11QuestionItem6) {
    Sleep11QuestionItem6 = await QuestionItems.create({ name: 'None of the time', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Sleep11Question)
    .set(radiogroupQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Sleep11Question).set(SleepSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep11Question).add(Sleep11QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep11Question).add(Sleep11QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep11Question).add(Sleep11QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep11Question).add(Sleep11QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep11Question).add(Sleep11QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep11Question).add(Sleep11QuestionItem6);

  let Sleep12Question = await Question.findOne({ question: 'Get the amount of sleep you needed?' });
  if (!Sleep12Question) {
    Sleep12Question = await Question.create({
      question: 'Get the amount of sleep you needed?',
      stack: 3,
      stackPhrase: '',
      placeHolder: '',
      order: 11,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Sleep12QuestionItem1 = await QuestionItems.findOne({ name: 'All of the time' });
  if (!Sleep12QuestionItem1) {
    Sleep12QuestionItem1 = await QuestionItems.create({ name: 'All of the time', order: 0 }).save();
  }
  let Sleep12QuestionItem2 = await QuestionItems.findOne({ name: 'Most of the time' });
  if (!Sleep12QuestionItem2) {
    Sleep12QuestionItem2 = await QuestionItems.create({ name: 'Most of the time', order: 1 }).save();
  }
  let Sleep12QuestionItem3 = await QuestionItems.findOne({ name: 'A good bit of the time' });
  if (!Sleep12QuestionItem3) {
    Sleep12QuestionItem3 = await QuestionItems.create({ name: 'A good bit of the time', order: 2 }).save();
  }
  let Sleep12QuestionItem4 = await QuestionItems.findOne({ name: 'Some of the time' });
  if (!Sleep12QuestionItem4) {
    Sleep12QuestionItem4 = await QuestionItems.create({ name: 'Some of the time', order: 3 }).save();
  }
  let Sleep12QuestionItem5 = await QuestionItems.findOne({ name: 'A little of the time' });
  if (!Sleep12QuestionItem5) {
    Sleep12QuestionItem5 = await QuestionItems.create({ name: 'A little of the time', order: 4 }).save();
  }
  let Sleep12QuestionItem6 = await QuestionItems.findOne({ name: 'None of the time' });
  if (!Sleep12QuestionItem6) {
    Sleep12QuestionItem6 = await QuestionItems.create({ name: 'None of the time', order: 5 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Sleep12Question)
    .set(radiogroupQuestionCategory);

  await getConnection().createQueryBuilder().relation(Question, 'subSection').of(Sleep12Question).set(SleepSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep12Question).add(Sleep12QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep12Question).add(Sleep12QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep12Question).add(Sleep12QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep12Question).add(Sleep12QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep12Question).add(Sleep12QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Sleep12Question).add(Sleep12QuestionItem6);
};
