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
    HealthcareSubSection = await SubSection.create({ name: 'Health care info and health care access', order: 4 }).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(SubSection, 'section')
    .of(HealthcareSubSection)
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
  let Demographics5aQuestion = await Question.findOne({ question: 'In what country were you born?'});
  if (!Demographics5aQuestion){
    Demographics5aQuestion = await Question.create({
      question: 'In what country were you born?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 5,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Demographics5aQuestionItem1 = await QuestionItems.findOne({ name: "Canada"});
  if (!Demographics5aQuestionItem1) {
    Demographics5aQuestionItem1 = await QuestionItems.create({ name: "Canada", order:0}).save();
  }
  let Demographics5aQuestionItem2 = await QuestionItems.findOne({ name: "Cuba"});
  if (!Demographics5aQuestionItem2) {
    Demographics5aQuestionItem2 = await QuestionItems.create({ name: "Cuba", order:1}).save();
  }
  let Demographics5aQuestionItem3 = await QuestionItems.findOne({ name: "Mexico"});
  if (!Demographics5aQuestionItem3) {
    Demographics5aQuestionItem3 = await QuestionItems.create({ name: "Mexico", order:2}).save();
  }
  let Demographics5aQuestionItem4 = await QuestionItems.findOne({ name: "Puerto Rico"});
  if (!Demographics5aQuestionItem4) {
    Demographics5aQuestionItem4 = await QuestionItems.create({ name: "Puerto Rico", order:3}).save();
  }
  let Demographics5aQuestionItem5 = await QuestionItems.findOne({ name: "Afghanistan"});
  if (!Demographics5aQuestionItem5) {
    Demographics5aQuestionItem5 = await QuestionItems.create({ name: "Afghanistan", order:4}).save();
  }
  let Demographics5aQuestionItem6 = await QuestionItems.findOne({ name: "Akrotiri"});
  if (!Demographics5aQuestionItem6) {
    Demographics5aQuestionItem6 = await QuestionItems.create({ name: "Akrotiri", order:5}).save();
  }
  let Demographics5aQuestionItem7 = await QuestionItems.findOne({ name: "Albania"});
  if (!Demographics5aQuestionItem7) {
    Demographics5aQuestionItem7 = await QuestionItems.create({ name: "Albania", order:6}).save();
  }
  let Demographics5aQuestionItem8 = await QuestionItems.findOne({ name: "Algeria"});
  if (!Demographics5aQuestionItem8) {
    Demographics5aQuestionItem8 = await QuestionItems.create({ name: "Algeria", order:7}).save();
  }
  let Demographics5aQuestionItem9 = await QuestionItems.findOne({ name: "American Samoa"});
  if (!Demographics5aQuestionItem9) {
    Demographics5aQuestionItem9 = await QuestionItems.create({ name: "American Samoa", order:8}).save();
  }
  let Demographics5aQuestionItem10 = await QuestionItems.findOne({ name: "Andorra"});
  if (!Demographics5aQuestionItem10) {
    Demographics5aQuestionItem10 = await QuestionItems.create({ name: "Andorra", order:9}).save();
  }
  let Demographics5aQuestionItem11 = await QuestionItems.findOne({ name: "Angola"});
  if (!Demographics5aQuestionItem11) {
    Demographics5aQuestionItem11 = await QuestionItems.create({ name: "Angola", order:10}).save();
  }
  let Demographics5aQuestionItem12 = await QuestionItems.findOne({ name: "Anguilla"});
  if (!Demographics5aQuestionItem12) {
    Demographics5aQuestionItem12 = await QuestionItems.create({ name: "Anguilla", order:11}).save();
  }
  let Demographics5aQuestionItem13 = await QuestionItems.findOne({ name: "Antarctica"});
  if (!Demographics5aQuestionItem13) {
    Demographics5aQuestionItem13 = await QuestionItems.create({ name: "Antarctica", order:12}).save();
  }
  let Demographics5aQuestionItem14 = await QuestionItems.findOne({ name: "Antiguaand Barbuda"});
  if (!Demographics5aQuestionItem14) {
    Demographics5aQuestionItem14 = await QuestionItems.create({ name: "Antiguaand Barbuda", order:13}).save();
  }
  let Demographics5aQuestionItem15 = await QuestionItems.findOne({ name: "Argentina"});
  if (!Demographics5aQuestionItem15) {
    Demographics5aQuestionItem15 = await QuestionItems.create({ name: "Argentina", order:14}).save();
  }
  let Demographics5aQuestionItem16 = await QuestionItems.findOne({ name: "Armenia"});
  if (!Demographics5aQuestionItem16) {
    Demographics5aQuestionItem16 = await QuestionItems.create({ name: "Armenia", order:15}).save();
  }
  let Demographics5aQuestionItem17 = await QuestionItems.findOne({ name: "Aruba"});
  if (!Demographics5aQuestionItem17) {
    Demographics5aQuestionItem17 = await QuestionItems.create({ name: "Aruba", order:16}).save();
  }
  let Demographics5aQuestionItem18 = await QuestionItems.findOne({ name: "Ashmoreand Cartier Islands"});
  if (!Demographics5aQuestionItem18) {
    Demographics5aQuestionItem18 = await QuestionItems.create({ name: "Ashmoreand Cartier Islands", order:17}).save();
  }
  let Demographics5aQuestionItem19 = await QuestionItems.findOne({ name: "Australia"});
  if (!Demographics5aQuestionItem19) {
    Demographics5aQuestionItem19 = await QuestionItems.create({ name: "Australia", order:18}).save();
  }
  let Demographics5aQuestionItem20 = await QuestionItems.findOne({ name: "Austria"});
  if (!Demographics5aQuestionItem20) {
    Demographics5aQuestionItem20 = await QuestionItems.create({ name: "Austria", order:19}).save();
  }
  let Demographics5aQuestionItem21 = await QuestionItems.findOne({ name: "Azerbaijan"});
  if (!Demographics5aQuestionItem21) {
    Demographics5aQuestionItem21 = await QuestionItems.create({ name: "Azerbaijan", order:20}).save();
  }
  let Demographics5aQuestionItem22 = await QuestionItems.findOne({ name: "Bahamas,The"});
  if (!Demographics5aQuestionItem22) {
    Demographics5aQuestionItem22 = await QuestionItems.create({ name: "Bahamas,The", order:21}).save();
  }
  let Demographics5aQuestionItem23 = await QuestionItems.findOne({ name: "Bahrain"});
  if (!Demographics5aQuestionItem23) {
    Demographics5aQuestionItem23 = await QuestionItems.create({ name: "Bahrain", order:22}).save();
  }
  let Demographics5aQuestionItem24 = await QuestionItems.findOne({ name: "Bangladesh"});
  if (!Demographics5aQuestionItem24) {
    Demographics5aQuestionItem24 = await QuestionItems.create({ name: "Bangladesh", order:23}).save();
  }
  let Demographics5aQuestionItem25 = await QuestionItems.findOne({ name: "Barbados"});
  if (!Demographics5aQuestionItem25) {
    Demographics5aQuestionItem25 = await QuestionItems.create({ name: "Barbados", order:24}).save();
  }
  let Demographics5aQuestionItem26 = await QuestionItems.findOne({ name: "Bassasda India"});
  if (!Demographics5aQuestionItem26) {
    Demographics5aQuestionItem26 = await QuestionItems.create({ name: "Bassasda India", order:25}).save();
  }
  let Demographics5aQuestionItem27 = await QuestionItems.findOne({ name: "Belarus"});
  if (!Demographics5aQuestionItem27) {
    Demographics5aQuestionItem27 = await QuestionItems.create({ name: "Belarus", order:26}).save();
  }
  let Demographics5aQuestionItem28 = await QuestionItems.findOne({ name: "Belgium"});
  if (!Demographics5aQuestionItem28) {
    Demographics5aQuestionItem28 = await QuestionItems.create({ name: "Belgium", order:27}).save();
  }
  let Demographics5aQuestionItem29 = await QuestionItems.findOne({ name: "Belize"});
  if (!Demographics5aQuestionItem29) {
    Demographics5aQuestionItem29 = await QuestionItems.create({ name: "Belize", order:28}).save();
  }
  let Demographics5aQuestionItem30 = await QuestionItems.findOne({ name: "Benin"});
  if (!Demographics5aQuestionItem30) {
    Demographics5aQuestionItem30 = await QuestionItems.create({ name: "Benin", order:29}).save();
  }
  let Demographics5aQuestionItem31 = await QuestionItems.findOne({ name: "Bermuda"});
  if (!Demographics5aQuestionItem31) {
    Demographics5aQuestionItem31 = await QuestionItems.create({ name: "Bermuda", order:30}).save();
  }
  let Demographics5aQuestionItem32 = await QuestionItems.findOne({ name: "Bhutan"});
  if (!Demographics5aQuestionItem32) {
    Demographics5aQuestionItem32 = await QuestionItems.create({ name: "Bhutan", order:31}).save();
  }
  let Demographics5aQuestionItem33 = await QuestionItems.findOne({ name: "Bolivia"});
  if (!Demographics5aQuestionItem33) {
    Demographics5aQuestionItem33 = await QuestionItems.create({ name: "Bolivia", order:32}).save();
  }
  let Demographics5aQuestionItem34 = await QuestionItems.findOne({ name: "Bosnia and Herzegovina"});
  if (!Demographics5aQuestionItem34) {
    Demographics5aQuestionItem34 = await QuestionItems.create({ name: "Bosnia and Herzegovina", order:33}).save();
  }
  let Demographics5aQuestionItem35 = await QuestionItems.findOne({ name: "Botswana"});
  if (!Demographics5aQuestionItem35) {
    Demographics5aQuestionItem35 = await QuestionItems.create({ name: "Botswana", order:34}).save();
  }
  let Demographics5aQuestionItem36 = await QuestionItems.findOne({ name: "Bouvet Island"});
  if (!Demographics5aQuestionItem36) {
    Demographics5aQuestionItem36 = await QuestionItems.create({ name: "Bouvet Island", order:35}).save();
  }
  let Demographics5aQuestionItem37 = await QuestionItems.findOne({ name: "Brazil"});
  if (!Demographics5aQuestionItem37) {
    Demographics5aQuestionItem37 = await QuestionItems.create({ name: "Brazil", order:36}).save();
  }
  let Demographics5aQuestionItem38 = await QuestionItems.findOne({ name: "British Indian Ocean Territory"});
  if (!Demographics5aQuestionItem38) {
    Demographics5aQuestionItem38 = await QuestionItems.create({ name: "British Indian Ocean Territory", order:37}).save();
  }
  let Demographics5aQuestionItem39 = await QuestionItems.findOne({ name: "British Virgin Islands"});
  if (!Demographics5aQuestionItem39) {
    Demographics5aQuestionItem39 = await QuestionItems.create({ name: "British Virgin Islands", order:38}).save();
  }
  let Demographics5aQuestionItem40 = await QuestionItems.findOne({ name: "Brunei"});
  if (!Demographics5aQuestionItem40) {
    Demographics5aQuestionItem40 = await QuestionItems.create({ name: "Brunei", order:39}).save();
  }
  let Demographics5aQuestionItem41 = await QuestionItems.findOne({ name: "Bulgaria"});
  if (!Demographics5aQuestionItem41) {
    Demographics5aQuestionItem41 = await QuestionItems.create({ name: "Bulgaria", order:40}).save();
  }
  let Demographics5aQuestionItem42 = await QuestionItems.findOne({ name: "Burkina Faso"});
  if (!Demographics5aQuestionItem42) {
    Demographics5aQuestionItem42 = await QuestionItems.create({ name: "Burkina Faso", order:41}).save();
  }
  let Demographics5aQuestionItem43 = await QuestionItems.findOne({ name: "Burma"});
  if (!Demographics5aQuestionItem43) {
    Demographics5aQuestionItem43 = await QuestionItems.create({ name: "Burma", order:42}).save();
  }
  let Demographics5aQuestionItem44 = await QuestionItems.findOne({ name: "Burundi"});
  if (!Demographics5aQuestionItem44) {
    Demographics5aQuestionItem44 = await QuestionItems.create({ name: "Burundi", order:43}).save();
  }
  let Demographics5aQuestionItem45 = await QuestionItems.findOne({ name: "Cambodia"});
  if (!Demographics5aQuestionItem45) {
    Demographics5aQuestionItem45 = await QuestionItems.create({ name: "Cambodia", order:44}).save();
  }
  let Demographics5aQuestionItem46 = await QuestionItems.findOne({ name: "Cameroon"});
  if (!Demographics5aQuestionItem46) {
    Demographics5aQuestionItem46 = await QuestionItems.create({ name: "Cameroon", order:45}).save();
  }
  let Demographics5aQuestionItem47 = await QuestionItems.findOne({ name: "Canada"});
  if (!Demographics5aQuestionItem47) {
    Demographics5aQuestionItem47 = await QuestionItems.create({ name: "Canada", order:46}).save();
  }
  let Demographics5aQuestionItem48 = await QuestionItems.findOne({ name: "Cape Verde"});
  if (!Demographics5aQuestionItem48) {
    Demographics5aQuestionItem48 = await QuestionItems.create({ name: "Cape Verde", order:47}).save();
  }
  let Demographics5aQuestionItem49 = await QuestionItems.findOne({ name: "Cayman Islands"});
  if (!Demographics5aQuestionItem49) {
    Demographics5aQuestionItem49 = await QuestionItems.create({ name: "Cayman Islands", order:48}).save();
  }
  let Demographics5aQuestionItem50 = await QuestionItems.findOne({ name: "Central African Republic"});
  if (!Demographics5aQuestionItem50) {
    Demographics5aQuestionItem50 = await QuestionItems.create({ name: "Central African Republic", order:49}).save();
  }
  let Demographics5aQuestionItem51 = await QuestionItems.findOne({ name: "Chad"});
  if (!Demographics5aQuestionItem51) {
    Demographics5aQuestionItem51 = await QuestionItems.create({ name: "Chad", order:50}).save();
  }
  let Demographics5aQuestionItem52 = await QuestionItems.findOne({ name: "Chile"});
  if (!Demographics5aQuestionItem52) {
    Demographics5aQuestionItem52 = await QuestionItems.create({ name: "Chile", order:51}).save();
  }
  let Demographics5aQuestionItem53 = await QuestionItems.findOne({ name: "China"});
  if (!Demographics5aQuestionItem53) {
    Demographics5aQuestionItem53 = await QuestionItems.create({ name: "China", order:52}).save();
  }
  let Demographics5aQuestionItem54 = await QuestionItems.findOne({ name: "Christmas Island"});
  if (!Demographics5aQuestionItem54) {
    Demographics5aQuestionItem54 = await QuestionItems.create({ name: "Christmas Island", order:53}).save();
  }
  let Demographics5aQuestionItem55 = await QuestionItems.findOne({ name: "Clipperton Island"});
  if (!Demographics5aQuestionItem55) {
    Demographics5aQuestionItem55 = await QuestionItems.create({ name: "Clipperton Island", order:54}).save();
  }
  let Demographics5aQuestionItem56 = await QuestionItems.findOne({ name: "Cocos (Keeling) Islands"});
  if (!Demographics5aQuestionItem56) {
    Demographics5aQuestionItem56 = await QuestionItems.create({ name: "Cocos (Keeling) Islands", order:55}).save();
  }
  let Demographics5aQuestionItem57 = await QuestionItems.findOne({ name: "Colombia"});
  if (!Demographics5aQuestionItem57) {
    Demographics5aQuestionItem57 = await QuestionItems.create({ name: "Colombia", order:56}).save();
  }
  let Demographics5aQuestionItem58 = await QuestionItems.findOne({ name: "Comoros"});
  if (!Demographics5aQuestionItem58) {
    Demographics5aQuestionItem58 = await QuestionItems.create({ name: "Comoros", order:57}).save();
  }
  let Demographics5aQuestionItem59 = await QuestionItems.findOne({ name: "Congo,Democratic Republic of the"});
  if (!Demographics5aQuestionItem59) {
    Demographics5aQuestionItem59 = await QuestionItems.create({ name: "Congo,Democratic Republic of the", order:58}).save();
  }
  let Demographics5aQuestionItem60 = await QuestionItems.findOne({ name: "Congo,Republic of the"});
  if (!Demographics5aQuestionItem60) {
    Demographics5aQuestionItem60 = await QuestionItems.create({ name: "Congo,Republic of the", order:59}).save();
  }
  let Demographics5aQuestionItem61 = await QuestionItems.findOne({ name: "CookIslands"});
  if (!Demographics5aQuestionItem61) {
    Demographics5aQuestionItem61 = await QuestionItems.create({ name: "CookIslands", order:60}).save();
  }
  let Demographics5aQuestionItem62 = await QuestionItems.findOne({ name: "CoralSea Islands"});
  if (!Demographics5aQuestionItem62) {
    Demographics5aQuestionItem62 = await QuestionItems.create({ name: "CoralSea Islands", order:61}).save();
  }
  let Demographics5aQuestionItem63 = await QuestionItems.findOne({ name: "CostaRica"});
  if (!Demographics5aQuestionItem63) {
    Demographics5aQuestionItem63 = await QuestionItems.create({ name: "CostaRica", order:62}).save();
  }
  let Demographics5aQuestionItem64 = await QuestionItems.findOne({ name: "Cote d'Ivoire"});
  if (!Demographics5aQuestionItem64) {
    Demographics5aQuestionItem64 = await QuestionItems.create({ name: "Cote d'Ivoire", order:63}).save();
  }
  let Demographics5aQuestionItem65 = await QuestionItems.findOne({ name: "Croatia"});
  if (!Demographics5aQuestionItem65) {
    Demographics5aQuestionItem65 = await QuestionItems.create({ name: "Croatia", order:64}).save();
  }
  let Demographics5aQuestionItem66 = await QuestionItems.findOne({ name: "Cuba"});
  if (!Demographics5aQuestionItem66) {
    Demographics5aQuestionItem66 = await QuestionItems.create({ name: "Cuba", order:65}).save();
  }
  let Demographics5aQuestionItem67 = await QuestionItems.findOne({ name: "Cyprus"});
  if (!Demographics5aQuestionItem67) {
    Demographics5aQuestionItem67 = await QuestionItems.create({ name: "Cyprus", order:66}).save();
  }
  let Demographics5aQuestionItem68 = await QuestionItems.findOne({ name: "Czech Republic"});
  if (!Demographics5aQuestionItem68) {
    Demographics5aQuestionItem68 = await QuestionItems.create({ name: "Czech Republic", order:67}).save();
  }
  let Demographics5aQuestionItem69 = await QuestionItems.findOne({ name: "Denmark"});
  if (!Demographics5aQuestionItem69) {
    Demographics5aQuestionItem69 = await QuestionItems.create({ name: "Denmark", order:68}).save();
  }
  let Demographics5aQuestionItem70 = await QuestionItems.findOne({ name: "Dhekelia"});
  if (!Demographics5aQuestionItem70) {
    Demographics5aQuestionItem70 = await QuestionItems.create({ name: "Dhekelia", order:69}).save();
  }
  let Demographics5aQuestionItem71 = await QuestionItems.findOne({ name: "Djibouti"});
  if (!Demographics5aQuestionItem71) {
    Demographics5aQuestionItem71 = await QuestionItems.create({ name: "Djibouti", order:70}).save();
  }
  let Demographics5aQuestionItem72 = await QuestionItems.findOne({ name: "Dominica"});
  if (!Demographics5aQuestionItem72) {
    Demographics5aQuestionItem72 = await QuestionItems.create({ name: "Dominica", order:71}).save();
  }
  let Demographics5aQuestionItem73 = await QuestionItems.findOne({ name: "Dominican Republic"});
  if (!Demographics5aQuestionItem73) {
    Demographics5aQuestionItem73 = await QuestionItems.create({ name: "Dominican Republic", order:72}).save();
  }
  let Demographics5aQuestionItem74 = await QuestionItems.findOne({ name: "Ecuador"});
  if (!Demographics5aQuestionItem74) {
    Demographics5aQuestionItem74 = await QuestionItems.create({ name: "Ecuador", order:73}).save();
  }
  let Demographics5aQuestionItem75 = await QuestionItems.findOne({ name: "Egypt"});
  if (!Demographics5aQuestionItem75) {
    Demographics5aQuestionItem75 = await QuestionItems.create({ name: "Egypt", order:74}).save();
  }
  let Demographics5aQuestionItem76 = await QuestionItems.findOne({ name: "El Salvador"});
  if (!Demographics5aQuestionItem76) {
    Demographics5aQuestionItem76 = await QuestionItems.create({ name: "El Salvador", order:75}).save();
  }
  let Demographics5aQuestionItem77 = await QuestionItems.findOne({ name: "Equatorial Guinea"});
  if (!Demographics5aQuestionItem77) {
    Demographics5aQuestionItem77 = await QuestionItems.create({ name: "Equatorial Guinea", order:76}).save();
  }
  let Demographics5aQuestionItem78 = await QuestionItems.findOne({ name: "Eritrea"});
  if (!Demographics5aQuestionItem78) {
    Demographics5aQuestionItem78 = await QuestionItems.create({ name: "Eritrea", order:77}).save();
  }
  let Demographics5aQuestionItem79 = await QuestionItems.findOne({ name: "Estonia"});
  if (!Demographics5aQuestionItem79) {
    Demographics5aQuestionItem79 = await QuestionItems.create({ name: "Estonia", order:78}).save();
  }
  let Demographics5aQuestionItem80 = await QuestionItems.findOne({ name: "Ethiopia"});
  if (!Demographics5aQuestionItem80) {
    Demographics5aQuestionItem80 = await QuestionItems.create({ name: "Ethiopia", order:79}).save();
  }
  let Demographics5aQuestionItem81 = await QuestionItems.findOne({ name: "Europa Island"});
  if (!Demographics5aQuestionItem81) {
    Demographics5aQuestionItem81 = await QuestionItems.create({ name: "Europa Island", order:80}).save();
  }
  let Demographics5aQuestionItem82 = await QuestionItems.findOne({ name: "Falkland Islands (Islas Malvinas)"});
  if (!Demographics5aQuestionItem82) {
    Demographics5aQuestionItem82 = await QuestionItems.create({ name: "Falkland Islands (Islas Malvinas)", order:81}).save();
  }
  let Demographics5aQuestionItem83 = await QuestionItems.findOne({ name: "Faroe Islands"});
  if (!Demographics5aQuestionItem83) {
    Demographics5aQuestionItem83 = await QuestionItems.create({ name: "Faroe Islands", order:82}).save();
  }
  let Demographics5aQuestionItem84 = await QuestionItems.findOne({ name: "Fiji"});
  if (!Demographics5aQuestionItem84) {
    Demographics5aQuestionItem84 = await QuestionItems.create({ name: "Fiji", order:83}).save();
  }
  let Demographics5aQuestionItem85 = await QuestionItems.findOne({ name: "Finland"});
  if (!Demographics5aQuestionItem85) {
    Demographics5aQuestionItem85 = await QuestionItems.create({ name: "Finland", order:84}).save();
  }
  let Demographics5aQuestionItem86 = await QuestionItems.findOne({ name: "France"});
  if (!Demographics5aQuestionItem86) {
    Demographics5aQuestionItem86 = await QuestionItems.create({ name: "France", order:85}).save();
  }
  let Demographics5aQuestionItem87 = await QuestionItems.findOne({ name: "French Guiana"});
  if (!Demographics5aQuestionItem87) {
    Demographics5aQuestionItem87 = await QuestionItems.create({ name: "French Guiana", order:86}).save();
  }
  let Demographics5aQuestionItem88 = await QuestionItems.findOne({ name: "French Polynesia"});
  if (!Demographics5aQuestionItem88) {
    Demographics5aQuestionItem88 = await QuestionItems.create({ name: "French Polynesia", order:87}).save();
  }
  let Demographics5aQuestionItem89 = await QuestionItems.findOne({ name: "French Southern and Antarctic Lands"});
  if (!Demographics5aQuestionItem89) {
    Demographics5aQuestionItem89 = await QuestionItems.create({ name: "French Southern and Antarctic Lands", order:88}).save();
  }
  let Demographics5aQuestionItem90 = await QuestionItems.findOne({ name: "Gabon"});
  if (!Demographics5aQuestionItem90) {
    Demographics5aQuestionItem90 = await QuestionItems.create({ name: "Gabon", order:89}).save();
  }
  let Demographics5aQuestionItem91 = await QuestionItems.findOne({ name: "Gambia,The"});
  if (!Demographics5aQuestionItem91) {
    Demographics5aQuestionItem91 = await QuestionItems.create({ name: "Gambia,The", order:90}).save();
  }
  let Demographics5aQuestionItem92 = await QuestionItems.findOne({ name: "Gaza Strip"});
  if (!Demographics5aQuestionItem92) {
    Demographics5aQuestionItem92 = await QuestionItems.create({ name: "Gaza Strip", order:91}).save();
  }
  let Demographics5aQuestionItem93 = await QuestionItems.findOne({ name: "Georgia"});
  if (!Demographics5aQuestionItem93) {
    Demographics5aQuestionItem93 = await QuestionItems.create({ name: "Georgia", order:92}).save();
  }
  let Demographics5aQuestionItem94 = await QuestionItems.findOne({ name: "Germany"});
  if (!Demographics5aQuestionItem94) {
    Demographics5aQuestionItem94 = await QuestionItems.create({ name: "Germany", order:93}).save();
  }
  let Demographics5aQuestionItem95 = await QuestionItems.findOne({ name: "Ghana"});
  if (!Demographics5aQuestionItem95) {
    Demographics5aQuestionItem95 = await QuestionItems.create({ name: "Ghana", order:94}).save();
  }
  let Demographics5aQuestionItem96 = await QuestionItems.findOne({ name: "Gibraltar"});
  if (!Demographics5aQuestionItem96) {
    Demographics5aQuestionItem96 = await QuestionItems.create({ name: "Gibraltar", order:95}).save();
  }
  let Demographics5aQuestionItem97 = await QuestionItems.findOne({ name: "Glorioso Islands"});
  if (!Demographics5aQuestionItem97) {
    Demographics5aQuestionItem97 = await QuestionItems.create({ name: "Glorioso Islands", order:96}).save();
  }
  let Demographics5aQuestionItem98 = await QuestionItems.findOne({ name: "Greece"});
  if (!Demographics5aQuestionItem98) {
    Demographics5aQuestionItem98 = await QuestionItems.create({ name: "Greece", order:97}).save();
  }
  let Demographics5aQuestionItem99 = await QuestionItems.findOne({ name: "Greenland"});
  if (!Demographics5aQuestionItem99) {
    Demographics5aQuestionItem99 = await QuestionItems.create({ name: "Greenland", order:98}).save();
  }
  let Demographics5aQuestionItem100 = await QuestionItems.findOne({ name: "Grenada"});
  if (!Demographics5aQuestionItem100) {
    Demographics5aQuestionItem100 = await QuestionItems.create({ name: "Grenada", order:99}).save();
  }
  let Demographics5aQuestionItem101 = await QuestionItems.findOne({ name: "Guadeloupe"});
  if (!Demographics5aQuestionItem101) {
    Demographics5aQuestionItem101 = await QuestionItems.create({ name: "Guadeloupe", order:100}).save();
  }
  let Demographics5aQuestionItem102 = await QuestionItems.findOne({ name: "Guam"});
  if (!Demographics5aQuestionItem102) {
    Demographics5aQuestionItem102 = await QuestionItems.create({ name: "Guam", order:101}).save();
  }
  let Demographics5aQuestionItem103 = await QuestionItems.findOne({ name: "Guatemala"});
  if (!Demographics5aQuestionItem103) {
    Demographics5aQuestionItem103 = await QuestionItems.create({ name: "Guatemala", order:102}).save();
  }
  let Demographics5aQuestionItem104 = await QuestionItems.findOne({ name: "Guernsey"});
  if (!Demographics5aQuestionItem104) {
    Demographics5aQuestionItem104 = await QuestionItems.create({ name: "Guernsey", order:103}).save();
  }
  let Demographics5aQuestionItem105 = await QuestionItems.findOne({ name: "Guinea"});
  if (!Demographics5aQuestionItem105) {
    Demographics5aQuestionItem105 = await QuestionItems.create({ name: "Guinea", order:104}).save();
  }
  let Demographics5aQuestionItem106 = await QuestionItems.findOne({ name: "Guinea-Bissau"});
  if (!Demographics5aQuestionItem106) {
    Demographics5aQuestionItem106 = await QuestionItems.create({ name: "Guinea-Bissau", order:105}).save();
  }
  let Demographics5aQuestionItem107 = await QuestionItems.findOne({ name: "Guyana"});
  if (!Demographics5aQuestionItem107) {
    Demographics5aQuestionItem107 = await QuestionItems.create({ name: "Guyana", order:106}).save();
  }
  let Demographics5aQuestionItem108 = await QuestionItems.findOne({ name: "Haiti"});
  if (!Demographics5aQuestionItem108) {
    Demographics5aQuestionItem108 = await QuestionItems.create({ name: "Haiti", order:107}).save();
  }
  let Demographics5aQuestionItem109 = await QuestionItems.findOne({ name: "Heard Island and McDonald Islands"});
  if (!Demographics5aQuestionItem109) {
    Demographics5aQuestionItem109 = await QuestionItems.create({ name: "Heard Island and McDonald Islands", order:108}).save();
  }
  let Demographics5aQuestionItem110 = await QuestionItems.findOne({ name: "Holy See (VaticanCity)"});
  if (!Demographics5aQuestionItem110) {
    Demographics5aQuestionItem110 = await QuestionItems.create({ name: "Holy See (VaticanCity)", order:109}).save();
  }
  let Demographics5aQuestionItem111 = await QuestionItems.findOne({ name: "Honduras"});
  if (!Demographics5aQuestionItem111) {
    Demographics5aQuestionItem111 = await QuestionItems.create({ name: "Honduras", order:110}).save();
  }
  let Demographics5aQuestionItem112 = await QuestionItems.findOne({ name: "HongKong"});
  if (!Demographics5aQuestionItem112) {
    Demographics5aQuestionItem112 = await QuestionItems.create({ name: "HongKong", order:111}).save();
  }
  let Demographics5aQuestionItem113 = await QuestionItems.findOne({ name: "Hungary"});
  if (!Demographics5aQuestionItem113) {
    Demographics5aQuestionItem113 = await QuestionItems.create({ name: "Hungary", order:112}).save();
  }
  let Demographics5aQuestionItem114 = await QuestionItems.findOne({ name: "Iceland"});
  if (!Demographics5aQuestionItem114) {
    Demographics5aQuestionItem114 = await QuestionItems.create({ name: "Iceland", order:113}).save();
  }
  let Demographics5aQuestionItem115 = await QuestionItems.findOne({ name: "India"});
  if (!Demographics5aQuestionItem115) {
    Demographics5aQuestionItem115 = await QuestionItems.create({ name: "India", order:114}).save();
  }
  let Demographics5aQuestionItem116 = await QuestionItems.findOne({ name: "Indonesia"});
  if (!Demographics5aQuestionItem116) {
    Demographics5aQuestionItem116 = await QuestionItems.create({ name: "Indonesia", order:115}).save();
  }
  let Demographics5aQuestionItem117 = await QuestionItems.findOne({ name: "Iran"});
  if (!Demographics5aQuestionItem117) {
    Demographics5aQuestionItem117 = await QuestionItems.create({ name: "Iran", order:116}).save();
  }
  let Demographics5aQuestionItem118 = await QuestionItems.findOne({ name: "Iraq"});
  if (!Demographics5aQuestionItem118) {
    Demographics5aQuestionItem118 = await QuestionItems.create({ name: "Iraq", order:117}).save();
  }
  let Demographics5aQuestionItem119 = await QuestionItems.findOne({ name: "Ireland"});
  if (!Demographics5aQuestionItem119) {
    Demographics5aQuestionItem119 = await QuestionItems.create({ name: "Ireland", order:118}).save();
  }
  let Demographics5aQuestionItem120 = await QuestionItems.findOne({ name: "Isle of Man"});
  if (!Demographics5aQuestionItem120) {
    Demographics5aQuestionItem120 = await QuestionItems.create({ name: "Isle of Man", order:119}).save();
  }
  let Demographics5aQuestionItem121 = await QuestionItems.findOne({ name: "Israel"});
  if (!Demographics5aQuestionItem121) {
    Demographics5aQuestionItem121 = await QuestionItems.create({ name: "Israel", order:120}).save();
  }
  let Demographics5aQuestionItem122 = await QuestionItems.findOne({ name: "Italy"});
  if (!Demographics5aQuestionItem122) {
    Demographics5aQuestionItem122 = await QuestionItems.create({ name: "Italy", order:121}).save();
  }
  let Demographics5aQuestionItem123 = await QuestionItems.findOne({ name: "Jamaica"});
  if (!Demographics5aQuestionItem123) {
    Demographics5aQuestionItem123 = await QuestionItems.create({ name: "Jamaica", order:122}).save();
  }
  let Demographics5aQuestionItem124 = await QuestionItems.findOne({ name: "Jan Mayen"});
  if (!Demographics5aQuestionItem124) {
    Demographics5aQuestionItem124 = await QuestionItems.create({ name: "Jan Mayen", order:123}).save();
  }
  let Demographics5aQuestionItem125 = await QuestionItems.findOne({ name: "Japan"});
  if (!Demographics5aQuestionItem125) {
    Demographics5aQuestionItem125 = await QuestionItems.create({ name: "Japan", order:124}).save();
  }
  let Demographics5aQuestionItem126 = await QuestionItems.findOne({ name: "Jersey"});
  if (!Demographics5aQuestionItem126) {
    Demographics5aQuestionItem126 = await QuestionItems.create({ name: "Jersey", order:125}).save();
  }
  let Demographics5aQuestionItem127 = await QuestionItems.findOne({ name: "Jordan"});
  if (!Demographics5aQuestionItem127) {
    Demographics5aQuestionItem127 = await QuestionItems.create({ name: "Jordan", order:126}).save();
  }
  let Demographics5aQuestionItem128 = await QuestionItems.findOne({ name: "Juande Nova Island"});
  if (!Demographics5aQuestionItem128) {
    Demographics5aQuestionItem128 = await QuestionItems.create({ name: "Juande Nova Island", order:127}).save();
  }
  let Demographics5aQuestionItem129 = await QuestionItems.findOne({ name: "Kazakhstan"});
  if (!Demographics5aQuestionItem129) {
    Demographics5aQuestionItem129 = await QuestionItems.create({ name: "Kazakhstan", order:128}).save();
  }
  let Demographics5aQuestionItem130 = await QuestionItems.findOne({ name: "Kenya"});
  if (!Demographics5aQuestionItem130) {
    Demographics5aQuestionItem130 = await QuestionItems.create({ name: "Kenya", order:129}).save();
  }
  let Demographics5aQuestionItem131 = await QuestionItems.findOne({ name: "Kiribati"});
  if (!Demographics5aQuestionItem131) {
    Demographics5aQuestionItem131 = await QuestionItems.create({ name: "Kiribati", order:130}).save();
  }
  let Demographics5aQuestionItem132 = await QuestionItems.findOne({ name: "Korea,North"});
  if (!Demographics5aQuestionItem132) {
    Demographics5aQuestionItem132 = await QuestionItems.create({ name: "Korea,North", order:131}).save();
  }
  let Demographics5aQuestionItem133 = await QuestionItems.findOne({ name: "Korea,South"});
  if (!Demographics5aQuestionItem133) {
    Demographics5aQuestionItem133 = await QuestionItems.create({ name: "Korea,South", order:132}).save();
  }
  let Demographics5aQuestionItem134 = await QuestionItems.findOne({ name: "Kuwait"});
  if (!Demographics5aQuestionItem134) {
    Demographics5aQuestionItem134 = await QuestionItems.create({ name: "Kuwait", order:133}).save();
  }
  let Demographics5aQuestionItem135 = await QuestionItems.findOne({ name: "Kyrgyzstan"});
  if (!Demographics5aQuestionItem135) {
    Demographics5aQuestionItem135 = await QuestionItems.create({ name: "Kyrgyzstan", order:134}).save();
  }
  let Demographics5aQuestionItem136 = await QuestionItems.findOne({ name: "Laos"});
  if (!Demographics5aQuestionItem136) {
    Demographics5aQuestionItem136 = await QuestionItems.create({ name: "Laos", order:135}).save();
  }
  let Demographics5aQuestionItem137 = await QuestionItems.findOne({ name: "Latvia"});
  if (!Demographics5aQuestionItem137) {
    Demographics5aQuestionItem137 = await QuestionItems.create({ name: "Latvia", order:136}).save();
  }
  let Demographics5aQuestionItem138 = await QuestionItems.findOne({ name: "Lebanon"});
  if (!Demographics5aQuestionItem138) {
    Demographics5aQuestionItem138 = await QuestionItems.create({ name: "Lebanon", order:137}).save();
  }
  let Demographics5aQuestionItem139 = await QuestionItems.findOne({ name: "Lesotho"});
  if (!Demographics5aQuestionItem139) {
    Demographics5aQuestionItem139 = await QuestionItems.create({ name: "Lesotho", order:138}).save();
  }
  let Demographics5aQuestionItem140 = await QuestionItems.findOne({ name: "Liberia"});
  if (!Demographics5aQuestionItem140) {
    Demographics5aQuestionItem140 = await QuestionItems.create({ name: "Liberia", order:139}).save();
  }
  let Demographics5aQuestionItem141 = await QuestionItems.findOne({ name: "Libya"});
  if (!Demographics5aQuestionItem141) {
    Demographics5aQuestionItem141 = await QuestionItems.create({ name: "Libya", order:140}).save();
  }
  let Demographics5aQuestionItem142 = await QuestionItems.findOne({ name: "Liechtenstein"});
  if (!Demographics5aQuestionItem142) {
    Demographics5aQuestionItem142 = await QuestionItems.create({ name: "Liechtenstein", order:141}).save();
  }
  let Demographics5aQuestionItem143 = await QuestionItems.findOne({ name: "Lithuania"});
  if (!Demographics5aQuestionItem143) {
    Demographics5aQuestionItem143 = await QuestionItems.create({ name: "Lithuania", order:142}).save();
  }
  let Demographics5aQuestionItem144 = await QuestionItems.findOne({ name: "Luxembourg"});
  if (!Demographics5aQuestionItem144) {
    Demographics5aQuestionItem144 = await QuestionItems.create({ name: "Luxembourg", order:143}).save();
  }
  let Demographics5aQuestionItem145 = await QuestionItems.findOne({ name: "Macau"});
  if (!Demographics5aQuestionItem145) {
    Demographics5aQuestionItem145 = await QuestionItems.create({ name: "Macau", order:144}).save();
  }
  let Demographics5aQuestionItem146 = await QuestionItems.findOne({ name: "Macedonia"});
  if (!Demographics5aQuestionItem146) {
    Demographics5aQuestionItem146 = await QuestionItems.create({ name: "Macedonia", order:145}).save();
  }
  let Demographics5aQuestionItem147 = await QuestionItems.findOne({ name: "Madagascar"});
  if (!Demographics5aQuestionItem147) {
    Demographics5aQuestionItem147 = await QuestionItems.create({ name: "Madagascar", order:146}).save();
  }
  let Demographics5aQuestionItem148 = await QuestionItems.findOne({ name: "Malawi"});
  if (!Demographics5aQuestionItem148) {
    Demographics5aQuestionItem148 = await QuestionItems.create({ name: "Malawi", order:147}).save();
  }
  let Demographics5aQuestionItem149 = await QuestionItems.findOne({ name: "Malaysia"});
  if (!Demographics5aQuestionItem149) {
    Demographics5aQuestionItem149 = await QuestionItems.create({ name: "Malaysia", order:148}).save();
  }
  let Demographics5aQuestionItem150 = await QuestionItems.findOne({ name: "Maldives"});
  if (!Demographics5aQuestionItem150) {
    Demographics5aQuestionItem150 = await QuestionItems.create({ name: "Maldives", order:149}).save();
  }
  let Demographics5aQuestionItem151 = await QuestionItems.findOne({ name: "Mali"});
  if (!Demographics5aQuestionItem151) {
    Demographics5aQuestionItem151 = await QuestionItems.create({ name: "Mali", order:150}).save();
  }
  let Demographics5aQuestionItem152 = await QuestionItems.findOne({ name: "Malta"});
  if (!Demographics5aQuestionItem152) {
    Demographics5aQuestionItem152 = await QuestionItems.create({ name: "Malta", order:151}).save();
  }
  let Demographics5aQuestionItem153 = await QuestionItems.findOne({ name: "Marshall Islands"});
  if (!Demographics5aQuestionItem153) {
    Demographics5aQuestionItem153 = await QuestionItems.create({ name: "Marshall Islands", order:152}).save();
  }
  let Demographics5aQuestionItem154 = await QuestionItems.findOne({ name: "Martinique"});
  if (!Demographics5aQuestionItem154) {
    Demographics5aQuestionItem154 = await QuestionItems.create({ name: "Martinique", order:153}).save();
  }
  let Demographics5aQuestionItem155 = await QuestionItems.findOne({ name: "Mauritania"});
  if (!Demographics5aQuestionItem155) {
    Demographics5aQuestionItem155 = await QuestionItems.create({ name: "Mauritania", order:154}).save();
  }
  let Demographics5aQuestionItem156 = await QuestionItems.findOne({ name: "Mauritius"});
  if (!Demographics5aQuestionItem156) {
    Demographics5aQuestionItem156 = await QuestionItems.create({ name: "Mauritius", order:155}).save();
  }
  let Demographics5aQuestionItem157 = await QuestionItems.findOne({ name: "Mayotte"});
  if (!Demographics5aQuestionItem157) {
    Demographics5aQuestionItem157 = await QuestionItems.create({ name: "Mayotte", order:156}).save();
  }
  let Demographics5aQuestionItem158 = await QuestionItems.findOne({ name: "Mexico"});
  if (!Demographics5aQuestionItem158) {
    Demographics5aQuestionItem158 = await QuestionItems.create({ name: "Mexico", order:157}).save();
  }
  let Demographics5aQuestionItem159 = await QuestionItems.findOne({ name: "Micronesia,Federated Stat esof"});
  if (!Demographics5aQuestionItem159) {
    Demographics5aQuestionItem159 = await QuestionItems.create({ name: "Micronesia,Federated Stat esof", order:158}).save();
  }
  let Demographics5aQuestionItem160 = await QuestionItems.findOne({ name: "Moldova"});
  if (!Demographics5aQuestionItem160) {
    Demographics5aQuestionItem160 = await QuestionItems.create({ name: "Moldova", order:159}).save();
  }
  let Demographics5aQuestionItem161 = await QuestionItems.findOne({ name: "Monaco"});
  if (!Demographics5aQuestionItem161) {
    Demographics5aQuestionItem161 = await QuestionItems.create({ name: "Monaco", order:160}).save();
  }
  let Demographics5aQuestionItem162 = await QuestionItems.findOne({ name: "Mongolia"});
  if (!Demographics5aQuestionItem162) {
    Demographics5aQuestionItem162 = await QuestionItems.create({ name: "Mongolia", order:161}).save();
  }
  let Demographics5aQuestionItem163 = await QuestionItems.findOne({ name: "Montserrat"});
  if (!Demographics5aQuestionItem163) {
    Demographics5aQuestionItem163 = await QuestionItems.create({ name: "Montserrat", order:162}).save();
  }
  let Demographics5aQuestionItem164 = await QuestionItems.findOne({ name: "Morocco"});
  if (!Demographics5aQuestionItem164) {
    Demographics5aQuestionItem164 = await QuestionItems.create({ name: "Morocco", order:163}).save();
  }
  let Demographics5aQuestionItem165 = await QuestionItems.findOne({ name: "Mozambique"});
  if (!Demographics5aQuestionItem165) {
    Demographics5aQuestionItem165 = await QuestionItems.create({ name: "Mozambique", order:164}).save();
  }
  let Demographics5aQuestionItem166 = await QuestionItems.findOne({ name: "Namibia"});
  if (!Demographics5aQuestionItem166) {
    Demographics5aQuestionItem166 = await QuestionItems.create({ name: "Namibia", order:165}).save();
  }
  let Demographics5aQuestionItem167 = await QuestionItems.findOne({ name: "Nauru"});
  if (!Demographics5aQuestionItem167) {
    Demographics5aQuestionItem167 = await QuestionItems.create({ name: "Nauru", order:166}).save();
  }
  let Demographics5aQuestionItem168 = await QuestionItems.findOne({ name: "Navassa Island"});
  if (!Demographics5aQuestionItem168) {
    Demographics5aQuestionItem168 = await QuestionItems.create({ name: "Navassa Island", order:167}).save();
  }
  let Demographics5aQuestionItem169 = await QuestionItems.findOne({ name: "Nepal"});
  if (!Demographics5aQuestionItem169) {
    Demographics5aQuestionItem169 = await QuestionItems.create({ name: "Nepal", order:168}).save();
  }
  let Demographics5aQuestionItem170 = await QuestionItems.findOne({ name: "Netherlands"});
  if (!Demographics5aQuestionItem170) {
    Demographics5aQuestionItem170 = await QuestionItems.create({ name: "Netherlands", order:169}).save();
  }
  let Demographics5aQuestionItem171 = await QuestionItems.findOne({ name: "Netherlands Antilles"});
  if (!Demographics5aQuestionItem171) {
    Demographics5aQuestionItem171 = await QuestionItems.create({ name: "Netherlands Antilles", order:170}).save();
  }
  let Demographics5aQuestionItem172 = await QuestionItems.findOne({ name: "New Caledonia"});
  if (!Demographics5aQuestionItem172) {
    Demographics5aQuestionItem172 = await QuestionItems.create({ name: "New Caledonia", order:171}).save();
  }
  let Demographics5aQuestionItem173 = await QuestionItems.findOne({ name: "New Zealand"});
  if (!Demographics5aQuestionItem173) {
    Demographics5aQuestionItem173 = await QuestionItems.create({ name: "New Zealand", order:172}).save();
  }
  let Demographics5aQuestionItem174 = await QuestionItems.findOne({ name: "Nicaragua"});
  if (!Demographics5aQuestionItem174) {
    Demographics5aQuestionItem174 = await QuestionItems.create({ name: "Nicaragua", order:173}).save();
  }
  let Demographics5aQuestionItem175 = await QuestionItems.findOne({ name: "Niger"});
  if (!Demographics5aQuestionItem175) {
    Demographics5aQuestionItem175 = await QuestionItems.create({ name: "Niger", order:174}).save();
  }
  let Demographics5aQuestionItem176 = await QuestionItems.findOne({ name: "Nigeria"});
  if (!Demographics5aQuestionItem176) {
    Demographics5aQuestionItem176 = await QuestionItems.create({ name: "Nigeria", order:175}).save();
  }
  let Demographics5aQuestionItem177 = await QuestionItems.findOne({ name: "Niue"});
  if (!Demographics5aQuestionItem177) {
    Demographics5aQuestionItem177 = await QuestionItems.create({ name: "Niue", order:176}).save();
  }
  let Demographics5aQuestionItem178 = await QuestionItems.findOne({ name: "Norfolk Island"});
  if (!Demographics5aQuestionItem178) {
    Demographics5aQuestionItem178 = await QuestionItems.create({ name: "Norfolk Island", order:177}).save();
  }
  let Demographics5aQuestionItem179 = await QuestionItems.findOne({ name: "Northern Mariana Islands"});
  if (!Demographics5aQuestionItem179) {
    Demographics5aQuestionItem179 = await QuestionItems.create({ name: "Northern Mariana Islands", order:178}).save();
  }
  let Demographics5aQuestionItem180 = await QuestionItems.findOne({ name: "Norway"});
  if (!Demographics5aQuestionItem180) {
    Demographics5aQuestionItem180 = await QuestionItems.create({ name: "Norway", order:179}).save();
  }
  let Demographics5aQuestionItem181 = await QuestionItems.findOne({ name: "Oman"});
  if (!Demographics5aQuestionItem181) {
    Demographics5aQuestionItem181 = await QuestionItems.create({ name: "Oman", order:180}).save();
  }
  let Demographics5aQuestionItem182 = await QuestionItems.findOne({ name: "Pakistan"});
  if (!Demographics5aQuestionItem182) {
    Demographics5aQuestionItem182 = await QuestionItems.create({ name: "Pakistan", order:181}).save();
  }
  let Demographics5aQuestionItem183 = await QuestionItems.findOne({ name: "Palau"});
  if (!Demographics5aQuestionItem183) {
    Demographics5aQuestionItem183 = await QuestionItems.create({ name: "Palau", order:182}).save();
  }
  let Demographics5aQuestionItem184 = await QuestionItems.findOne({ name: "Panama"});
  if (!Demographics5aQuestionItem184) {
    Demographics5aQuestionItem184 = await QuestionItems.create({ name: "Panama", order:183}).save();
  }
  let Demographics5aQuestionItem185 = await QuestionItems.findOne({ name: "Papua New Guinea"});
  if (!Demographics5aQuestionItem185) {
    Demographics5aQuestionItem185 = await QuestionItems.create({ name: "Papua New Guinea", order:184}).save();
  }
  let Demographics5aQuestionItem186 = await QuestionItems.findOne({ name: "Paracel Islands"});
  if (!Demographics5aQuestionItem186) {
    Demographics5aQuestionItem186 = await QuestionItems.create({ name: "Paracel Islands", order:185}).save();
  }
  let Demographics5aQuestionItem187 = await QuestionItems.findOne({ name: "Paraguay"});
  if (!Demographics5aQuestionItem187) {
    Demographics5aQuestionItem187 = await QuestionItems.create({ name: "Paraguay", order:186}).save();
  }
  let Demographics5aQuestionItem188 = await QuestionItems.findOne({ name: "Peru"});
  if (!Demographics5aQuestionItem188) {
    Demographics5aQuestionItem188 = await QuestionItems.create({ name: "Peru", order:187}).save();
  }
  let Demographics5aQuestionItem189 = await QuestionItems.findOne({ name: "Philippines"});
  if (!Demographics5aQuestionItem189) {
    Demographics5aQuestionItem189 = await QuestionItems.create({ name: "Philippines", order:188}).save();
  }
  let Demographics5aQuestionItem190 = await QuestionItems.findOne({ name: "Pitcairn Islands"});
  if (!Demographics5aQuestionItem190) {
    Demographics5aQuestionItem190 = await QuestionItems.create({ name: "Pitcairn Islands", order:189}).save();
  }
  let Demographics5aQuestionItem191 = await QuestionItems.findOne({ name: "Poland"});
  if (!Demographics5aQuestionItem191) {
    Demographics5aQuestionItem191 = await QuestionItems.create({ name: "Poland", order:190}).save();
  }
  let Demographics5aQuestionItem192 = await QuestionItems.findOne({ name: "Portugal"});
  if (!Demographics5aQuestionItem192) {
    Demographics5aQuestionItem192 = await QuestionItems.create({ name: "Portugal", order:191}).save();
  }
  let Demographics5aQuestionItem193 = await QuestionItems.findOne({ name: "PuertoRico"});
  if (!Demographics5aQuestionItem193) {
    Demographics5aQuestionItem193 = await QuestionItems.create({ name: "PuertoRico", order:192}).save();
  }
  let Demographics5aQuestionItem194 = await QuestionItems.findOne({ name: "Qatar"});
  if (!Demographics5aQuestionItem194) {
    Demographics5aQuestionItem194 = await QuestionItems.create({ name: "Qatar", order:193}).save();
  }
  let Demographics5aQuestionItem195 = await QuestionItems.findOne({ name: "Reunion"});
  if (!Demographics5aQuestionItem195) {
    Demographics5aQuestionItem195 = await QuestionItems.create({ name: "Reunion", order:194}).save();
  }
  let Demographics5aQuestionItem196 = await QuestionItems.findOne({ name: "Romania"});
  if (!Demographics5aQuestionItem196) {
    Demographics5aQuestionItem196 = await QuestionItems.create({ name: "Romania", order:195}).save();
  }
  let Demographics5aQuestionItem197 = await QuestionItems.findOne({ name: "Russia"});
  if (!Demographics5aQuestionItem197) {
    Demographics5aQuestionItem197 = await QuestionItems.create({ name: "Russia", order:196}).save();
  }
  let Demographics5aQuestionItem198 = await QuestionItems.findOne({ name: "Rwanda"});
  if (!Demographics5aQuestionItem198) {
    Demographics5aQuestionItem198 = await QuestionItems.create({ name: "Rwanda", order:197}).save();
  }
  let Demographics5aQuestionItem199 = await QuestionItems.findOne({ name: "SaintHelena"});
  if (!Demographics5aQuestionItem199) {
    Demographics5aQuestionItem199 = await QuestionItems.create({ name: "SaintHelena", order:198}).save();
  }
  let Demographics5aQuestionItem200 = await QuestionItems.findOne({ name: "Saint Kitts and Nevis"});
  if (!Demographics5aQuestionItem200) {
    Demographics5aQuestionItem200 = await QuestionItems.create({ name: "Saint Kitts and Nevis", order:199}).save();
  }
  let Demographics5aQuestionItem201 = await QuestionItems.findOne({ name: "Saint Lucia"});
  if (!Demographics5aQuestionItem201) {
    Demographics5aQuestionItem201 = await QuestionItems.create({ name: "Saint Lucia", order:200}).save();
  }
  let Demographics5aQuestionItem202 = await QuestionItems.findOne({ name: "Saint Pierre and Miquelon"});
  if (!Demographics5aQuestionItem202) {
    Demographics5aQuestionItem202 = await QuestionItems.create({ name: "Saint Pierre and Miquelon", order:201}).save();
  }
  let Demographics5aQuestionItem203 = await QuestionItems.findOne({ name: "Saint Vincent and the Grenadines"});
  if (!Demographics5aQuestionItem203) {
    Demographics5aQuestionItem203 = await QuestionItems.create({ name: "Saint Vincent and the Grenadines", order:202}).save();
  }
  let Demographics5aQuestionItem204 = await QuestionItems.findOne({ name: "Samoa"});
  if (!Demographics5aQuestionItem204) {
    Demographics5aQuestionItem204 = await QuestionItems.create({ name: "Samoa", order:203}).save();
  }
  let Demographics5aQuestionItem205 = await QuestionItems.findOne({ name: "SanMarino"});
  if (!Demographics5aQuestionItem205) {
    Demographics5aQuestionItem205 = await QuestionItems.create({ name: "SanMarino", order:204}).save();
  }
  let Demographics5aQuestionItem206 = await QuestionItems.findOne({ name: "Sao Tome and Principe"});
  if (!Demographics5aQuestionItem206) {
    Demographics5aQuestionItem206 = await QuestionItems.create({ name: "Sao Tome and Principe", order:205}).save();
  }
  let Demographics5aQuestionItem207 = await QuestionItems.findOne({ name: "Saudi Arabia"});
  if (!Demographics5aQuestionItem207) {
    Demographics5aQuestionItem207 = await QuestionItems.create({ name: "Saudi Arabia", order:206}).save();
  }
  let Demographics5aQuestionItem208 = await QuestionItems.findOne({ name: "Senegal"});
  if (!Demographics5aQuestionItem208) {
    Demographics5aQuestionItem208 = await QuestionItems.create({ name: "Senegal", order:207}).save();
  }
  let Demographics5aQuestionItem209 = await QuestionItems.findOne({ name: "Serbia and Montenegro"});
  if (!Demographics5aQuestionItem209) {
    Demographics5aQuestionItem209 = await QuestionItems.create({ name: "Serbia and Montenegro", order:208}).save();
  }
  let Demographics5aQuestionItem210 = await QuestionItems.findOne({ name: "Seychelles"});
  if (!Demographics5aQuestionItem210) {
    Demographics5aQuestionItem210 = await QuestionItems.create({ name: "Seychelles", order:209}).save();
  }
  let Demographics5aQuestionItem211 = await QuestionItems.findOne({ name: "Sierra Leone"});
  if (!Demographics5aQuestionItem211) {
    Demographics5aQuestionItem211 = await QuestionItems.create({ name: "Sierra Leone", order:210}).save();
  }
  let Demographics5aQuestionItem212 = await QuestionItems.findOne({ name: "Singapore"});
  if (!Demographics5aQuestionItem212) {
    Demographics5aQuestionItem212 = await QuestionItems.create({ name: "Singapore", order:211}).save();
  }
  let Demographics5aQuestionItem213 = await QuestionItems.findOne({ name: "Slovakia"});
  if (!Demographics5aQuestionItem213) {
    Demographics5aQuestionItem213 = await QuestionItems.create({ name: "Slovakia", order:212}).save();
  }
  let Demographics5aQuestionItem214 = await QuestionItems.findOne({ name: "Slovenia"});
  if (!Demographics5aQuestionItem214) {
    Demographics5aQuestionItem214 = await QuestionItems.create({ name: "Slovenia", order:213}).save();
  }
  let Demographics5aQuestionItem215 = await QuestionItems.findOne({ name: "Solomon Islands"});
  if (!Demographics5aQuestionItem215) {
    Demographics5aQuestionItem215 = await QuestionItems.create({ name: "Solomon Islands", order:214}).save();
  }
  let Demographics5aQuestionItem216 = await QuestionItems.findOne({ name: "Somalia"});
  if (!Demographics5aQuestionItem216) {
    Demographics5aQuestionItem216 = await QuestionItems.create({ name: "Somalia", order:215}).save();
  }
  let Demographics5aQuestionItem217 = await QuestionItems.findOne({ name: "SouthAfrica"});
  if (!Demographics5aQuestionItem217) {
    Demographics5aQuestionItem217 = await QuestionItems.create({ name: "SouthAfrica", order:216}).save();
  }
  let Demographics5aQuestionItem218 = await QuestionItems.findOne({ name: "South Georgia and the South Sandwich Islands"});
  if (!Demographics5aQuestionItem218) {
    Demographics5aQuestionItem218 = await QuestionItems.create({ name: "South Georgia and the South Sandwich Islands", order:217}).save();
  }
  let Demographics5aQuestionItem219 = await QuestionItems.findOne({ name: "Spain"});
  if (!Demographics5aQuestionItem219) {
    Demographics5aQuestionItem219 = await QuestionItems.create({ name: "Spain", order:218}).save();
  }
  let Demographics5aQuestionItem220 = await QuestionItems.findOne({ name: "Spratly Islands"});
  if (!Demographics5aQuestionItem220) {
    Demographics5aQuestionItem220 = await QuestionItems.create({ name: "Spratly Islands", order:219}).save();
  }
  let Demographics5aQuestionItem221 = await QuestionItems.findOne({ name: "SriLanka"});
  if (!Demographics5aQuestionItem221) {
    Demographics5aQuestionItem221 = await QuestionItems.create({ name: "SriLanka", order:220}).save();
  }
  let Demographics5aQuestionItem222 = await QuestionItems.findOne({ name: "Sudan"});
  if (!Demographics5aQuestionItem222) {
    Demographics5aQuestionItem222 = await QuestionItems.create({ name: "Sudan", order:221}).save();
  }
  let Demographics5aQuestionItem223 = await QuestionItems.findOne({ name: "Suriname"});
  if (!Demographics5aQuestionItem223) {
    Demographics5aQuestionItem223 = await QuestionItems.create({ name: "Suriname", order:222}).save();
  }
  let Demographics5aQuestionItem224 = await QuestionItems.findOne({ name: "Svalbard"});
  if (!Demographics5aQuestionItem224) {
    Demographics5aQuestionItem224 = await QuestionItems.create({ name: "Svalbard", order:223}).save();
  }
  let Demographics5aQuestionItem225 = await QuestionItems.findOne({ name: "Swaziland"});
  if (!Demographics5aQuestionItem225) {
    Demographics5aQuestionItem225 = await QuestionItems.create({ name: "Swaziland", order:224}).save();
  }
  let Demographics5aQuestionItem226 = await QuestionItems.findOne({ name: "Sweden"});
  if (!Demographics5aQuestionItem226) {
    Demographics5aQuestionItem226 = await QuestionItems.create({ name: "Sweden", order:225}).save();
  }
  let Demographics5aQuestionItem227 = await QuestionItems.findOne({ name: "Switzerland"});
  if (!Demographics5aQuestionItem227) {
    Demographics5aQuestionItem227 = await QuestionItems.create({ name: "Switzerland", order:226}).save();
  }
  let Demographics5aQuestionItem228 = await QuestionItems.findOne({ name: "Syria"});
  if (!Demographics5aQuestionItem228) {
    Demographics5aQuestionItem228 = await QuestionItems.create({ name: "Syria", order:227}).save();
  }
  let Demographics5aQuestionItem229 = await QuestionItems.findOne({ name: "Taiwan"});
  if (!Demographics5aQuestionItem229) {
    Demographics5aQuestionItem229 = await QuestionItems.create({ name: "Taiwan", order:228}).save();
  }
  let Demographics5aQuestionItem230 = await QuestionItems.findOne({ name: "Tajikistan"});
  if (!Demographics5aQuestionItem230) {
    Demographics5aQuestionItem230 = await QuestionItems.create({ name: "Tajikistan", order:229}).save();
  }
  let Demographics5aQuestionItem231 = await QuestionItems.findOne({ name: "Tanzania"});
  if (!Demographics5aQuestionItem231) {
    Demographics5aQuestionItem231 = await QuestionItems.create({ name: "Tanzania", order:230}).save();
  }
  let Demographics5aQuestionItem232 = await QuestionItems.findOne({ name: "Thailand"});
  if (!Demographics5aQuestionItem232) {
    Demographics5aQuestionItem232 = await QuestionItems.create({ name: "Thailand", order:231}).save();
  }
  let Demographics5aQuestionItem233 = await QuestionItems.findOne({ name: "Timor-Leste"});
  if (!Demographics5aQuestionItem233) {
    Demographics5aQuestionItem233 = await QuestionItems.create({ name: "Timor-Leste", order:232}).save();
  }
  let Demographics5aQuestionItem234 = await QuestionItems.findOne({ name: "Togo"});
  if (!Demographics5aQuestionItem234) {
    Demographics5aQuestionItem234 = await QuestionItems.create({ name: "Togo", order:233}).save();
  }
  let Demographics5aQuestionItem235 = await QuestionItems.findOne({ name: "Tokelau"});
  if (!Demographics5aQuestionItem235) {
    Demographics5aQuestionItem235 = await QuestionItems.create({ name: "Tokelau", order:234}).save();
  }
  let Demographics5aQuestionItem236 = await QuestionItems.findOne({ name: "Tonga"});
  if (!Demographics5aQuestionItem236) {
    Demographics5aQuestionItem236 = await QuestionItems.create({ name: "Tonga", order:235}).save();
  }
  let Demographics5aQuestionItem237 = await QuestionItems.findOne({ name: "Trinidad and Tobago"});
  if (!Demographics5aQuestionItem237) {
    Demographics5aQuestionItem237 = await QuestionItems.create({ name: "Trinidad and Tobago", order:236}).save();
  }
  let Demographics5aQuestionItem238 = await QuestionItems.findOne({ name: "Tromelin Island"});
  if (!Demographics5aQuestionItem238) {
    Demographics5aQuestionItem238 = await QuestionItems.create({ name: "Tromelin Island", order:237}).save();
  }
  let Demographics5aQuestionItem239 = await QuestionItems.findOne({ name: "Tunisia"});
  if (!Demographics5aQuestionItem239) {
    Demographics5aQuestionItem239 = await QuestionItems.create({ name: "Tunisia", order:238}).save();
  }
  let Demographics5aQuestionItem240 = await QuestionItems.findOne({ name: "Turkey"});
  if (!Demographics5aQuestionItem240) {
    Demographics5aQuestionItem240 = await QuestionItems.create({ name: "Turkey", order:239}).save();
  }
  let Demographics5aQuestionItem241 = await QuestionItems.findOne({ name: "Turkmenistan"});
  if (!Demographics5aQuestionItem241) {
    Demographics5aQuestionItem241 = await QuestionItems.create({ name: "Turkmenistan", order:240}).save();
  }
  let Demographics5aQuestionItem242 = await QuestionItems.findOne({ name: "Turksand Caicos Islands"});
  if (!Demographics5aQuestionItem242) {
    Demographics5aQuestionItem242 = await QuestionItems.create({ name: "Turksand Caicos Islands", order:241}).save();
  }
  let Demographics5aQuestionItem243 = await QuestionItems.findOne({ name: "Tuvalu"});
  if (!Demographics5aQuestionItem243) {
    Demographics5aQuestionItem243 = await QuestionItems.create({ name: "Tuvalu", order:242}).save();
  }
  let Demographics5aQuestionItem244 = await QuestionItems.findOne({ name: "Uganda"});
  if (!Demographics5aQuestionItem244) {
    Demographics5aQuestionItem244 = await QuestionItems.create({ name: "Uganda", order:243}).save();
  }
  let Demographics5aQuestionItem245 = await QuestionItems.findOne({ name: "Ukraine"});
  if (!Demographics5aQuestionItem245) {
    Demographics5aQuestionItem245 = await QuestionItems.create({ name: "Ukraine", order:244}).save();
  }
  let Demographics5aQuestionItem246 = await QuestionItems.findOne({ name: "United Arab Emirates"});
  if (!Demographics5aQuestionItem246) {
    Demographics5aQuestionItem246 = await QuestionItems.create({ name: "United Arab Emirates", order:245}).save();
  }
  let Demographics5aQuestionItem247 = await QuestionItems.findOne({ name: "United Kingdom"});
  if (!Demographics5aQuestionItem247) {
    Demographics5aQuestionItem247 = await QuestionItems.create({ name: "United Kingdom", order:246}).save();
  }
  let Demographics5aQuestionItem248 = await QuestionItems.findOne({ name: "Uruguay"});
  if (!Demographics5aQuestionItem248) {
    Demographics5aQuestionItem248 = await QuestionItems.create({ name: "Uruguay", order:247}).save();
  }
  let Demographics5aQuestionItem249 = await QuestionItems.findOne({ name: "Uzbekistan"});
  if (!Demographics5aQuestionItem249) {
    Demographics5aQuestionItem249 = await QuestionItems.create({ name: "Uzbekistan", order:248}).save();
  }
  let Demographics5aQuestionItem250 = await QuestionItems.findOne({ name: "Vanuatu"});
  if (!Demographics5aQuestionItem250) {
    Demographics5aQuestionItem250 = await QuestionItems.create({ name: "Vanuatu", order:249}).save();
  }
  let Demographics5aQuestionItem251 = await QuestionItems.findOne({ name: "Venezuela"});
  if (!Demographics5aQuestionItem251) {
    Demographics5aQuestionItem251 = await QuestionItems.create({ name: "Venezuela", order:250}).save();
  }
  let Demographics5aQuestionItem252 = await QuestionItems.findOne({ name: "Vietnam"});
  if (!Demographics5aQuestionItem252) {
    Demographics5aQuestionItem252 = await QuestionItems.create({ name: "Vietnam", order:251}).save();
  }
  let Demographics5aQuestionItem253 = await QuestionItems.findOne({ name: "Virgin Islands"});
  if (!Demographics5aQuestionItem253) {
    Demographics5aQuestionItem253 = await QuestionItems.create({ name: "Virgin Islands", order:252}).save();
  }
  let Demographics5aQuestionItem254 = await QuestionItems.findOne({ name: "Wake Island"});
  if (!Demographics5aQuestionItem254) {
    Demographics5aQuestionItem254 = await QuestionItems.create({ name: "Wake Island", order:253}).save();
  }
  let Demographics5aQuestionItem255 = await QuestionItems.findOne({ name: "Wallis and Futuna"});
  if (!Demographics5aQuestionItem255) {
    Demographics5aQuestionItem255 = await QuestionItems.create({ name: "Wallis and Futuna", order:254}).save();
  }
  let Demographics5aQuestionItem256 = await QuestionItems.findOne({ name: "West Bank"});
  if (!Demographics5aQuestionItem256) {
    Demographics5aQuestionItem256 = await QuestionItems.create({ name: "West Bank", order:255}).save();
  }
  let Demographics5aQuestionItem257 = await QuestionItems.findOne({ name: "Western Sahara"});
  if (!Demographics5aQuestionItem257) {
    Demographics5aQuestionItem257 = await QuestionItems.create({ name: "Western Sahara", order:256}).save();
  }
  let Demographics5aQuestionItem258 = await QuestionItems.findOne({ name: "Yemen"});
  if (!Demographics5aQuestionItem258) {
    Demographics5aQuestionItem258 = await QuestionItems.create({ name: "Yemen", order:257}).save();
  }
  let Demographics5aQuestionItem259 = await QuestionItems.findOne({ name: "Zambia"});
  if (!Demographics5aQuestionItem259) {
    Demographics5aQuestionItem259 = await QuestionItems.create({ name: "Zambia", order:258}).save();
  }
  let Demographics5aQuestionItem260 = await QuestionItems.findOne({ name: "Zimbabwe"});
  if (!Demographics5aQuestionItem260) {
    Demographics5aQuestionItem260 = await QuestionItems.create({ name: "Zimbabwe", order:259}).save();
  }
  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'category')
    .of(Demographics5aQuestion)
    .set(comboQuestionCategory);

  await getConnection()
    .createQueryBuilder()
    .relation(Question, 'subSection')
    .of(Demographics5aQuestion)
    .set(DemographicsSubSection);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem6);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem7);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem8);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem9);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem10);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem11);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem12);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem13);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem14);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem15);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem16);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem17);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem18);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem19);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem20);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem21);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem22);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem23);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem24);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem25);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem26);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem27);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem28);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem29);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem30);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem31);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem32);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem33);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem34);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem35);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem36);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem37);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem38);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem39);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem40);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem41);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem42);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem43);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem44);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem45);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem46);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem47);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem48);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem49);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem50);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem51);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem52);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem53);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem54);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem55);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem56);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem57);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem58);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem59);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem60);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem61);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem62);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem63);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem64);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem65);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem66);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem67);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem68);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem69);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem70);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem71);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem72);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem73);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem74);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem75);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem76);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem77);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem78);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem79);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem80);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem81);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem82);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem83);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem84);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem85);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem86);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem87);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem88);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem89);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem90);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem91);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem92);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem93);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem94);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem95);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem96);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem97);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem98);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem99);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem100);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem101);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem102);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem103);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem104);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem105);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem106);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem107);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem108);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem109);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem110);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem111);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem112);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem113);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem114);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem115);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem116);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem117);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem118);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem119);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem120);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem121);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem122);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem123);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem124);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem125);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem126);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem127);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem128);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem129);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem130);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem131);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem132);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem133);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem134);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem135);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem136);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem137);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem138);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem139);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem140);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem141);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem142);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem143);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem144);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem145);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem146);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem147);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem148);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem149);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem150);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem151);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem152);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem153);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem154);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem155);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem156);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem157);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem158);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem159);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem160);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem161);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem162);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem163);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem164);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem165);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem166);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem167);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem168);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem169);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem170);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem171);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem172);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem173);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem174);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem175);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem176);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem177);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem178);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem179);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem180);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem181);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem182);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem183);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem184);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem185);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem186);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem187);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem188);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem189);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem190);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem191);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem192);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem193);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem194);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem195);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem196);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem197);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem198);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem199);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem200);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem201);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem202);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem203);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem204);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem205);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem206);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem207);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem208);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem209);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem210);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem211);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem212);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem213);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem214);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem215);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem216);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem217);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem218);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem219);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem220);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem221);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem222);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem223);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem224);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem225);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem226);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem227);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem228);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem229);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem230);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem231);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem232);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem233);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem234);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem235);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem236);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem237);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem238);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem239);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem240);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem241);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem242);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem243);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem244);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem245);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem246);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem247);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem248);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem249);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem250);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem251);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem252);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem253);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem254);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem255);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem256);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem257);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem258);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem259);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Demographics5aQuestion).add(Demographics5aQuestionItem260);


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
      question: 'For all members living in your household, what is the combined annual income (the total pre-tax income from all sources earned in the past year)?',

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

  let Screenings1aQuestion = await Question.findOne({ question: 'Human Papilloma (HPV) Vaccine'});
  if (!Screenings1aQuestion){
    Screenings1aQuestion = await Question.create({
      question: 'Human Papilloma (HPV) Vaccine',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings1aQuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Screenings1aQuestionItem1) {
    Screenings1aQuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Screenings1aQuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings1aQuestionItem2) {
    Screenings1aQuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
  }
  let Screenings1aQuestionItem3 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings1aQuestionItem3) {
    Screenings1aQuestionItem3 = await QuestionItems.create({ name: 'Do not know', order:2}).save();
  }
  let Screenings1aQuestionItem4 = await QuestionItems.findOne({ name: 'Not applicable'});
  if (!Screenings1aQuestionItem4) {
    Screenings1aQuestionItem4 = await QuestionItems.create({ name: 'Not applicable', order:3}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1aQuestion).add(Screenings1aQuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1aQuestion).add(Screenings1aQuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1aQuestion).add(Screenings1aQuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1aQuestion).add(Screenings1aQuestionItem4);

  let Screenings1bQuestion = await Question.findOne({ question: 'Pneumococcal Vaccine (participants 65 and older and/or diabetes, cancer, heart, lung, or immune disease)'});
  if (!Screenings1bQuestion){
    Screenings1bQuestion = await Question.create({
      question: 'Pneumococcal Vaccine (participants 65 and older and/or diabetes, cancer, heart, lung, or immune disease)',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings1bQuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Screenings1bQuestionItem1) {
    Screenings1bQuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Screenings1bQuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings1bQuestionItem2) {
    Screenings1bQuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
  }
  let Screenings1bQuestionItem3 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings1bQuestionItem3) {
    Screenings1bQuestionItem3 = await QuestionItems.create({ name: 'Do not know', order:2}).save();
  }
  let Screenings1bQuestionItem4 = await QuestionItems.findOne({ name: 'Not applicable'});
  if (!Screenings1bQuestionItem4) {
    Screenings1bQuestionItem4 = await QuestionItems.create({ name: 'Not applicable', order:3}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1bQuestion).add(Screenings1bQuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1bQuestion).add(Screenings1bQuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1bQuestion).add(Screenings1bQuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1bQuestion).add(Screenings1bQuestionItem4);

  let Screenings1cQuestion = await Question.findOne({ question: 'Tetanus /Diphtheria//Pertussis Vaccine (Tdap or Tp)'});
  if (!Screenings1cQuestion){
    Screenings1cQuestion = await Question.create({
      question: 'Tetanus /Diphtheria//Pertussis Vaccine (Tdap or Tp)',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings1cQuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Screenings1cQuestionItem1) {
    Screenings1cQuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Screenings1cQuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings1cQuestionItem2) {
    Screenings1cQuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
  }
  let Screenings1cQuestionItem3 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings1cQuestionItem3) {
    Screenings1cQuestionItem3 = await QuestionItems.create({ name: 'Do not know', order:2}).save();
  }
  let Screenings1cQuestionItem4 = await QuestionItems.findOne({ name: 'Not applicable'});
  if (!Screenings1cQuestionItem4) {
    Screenings1cQuestionItem4 = await QuestionItems.create({ name: 'Not applicable', order:3}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1cQuestion).add(Screenings1cQuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1cQuestion).add(Screenings1cQuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1cQuestion).add(Screenings1cQuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1cQuestion).add(Screenings1cQuestionItem4);

  let Screenings1dQuestion = await Question.findOne({ question: 'Varicella Zoster Vaccine (for Shingles) (Participants 50 and older)'});
  if (!Screenings1dQuestion){
    Screenings1dQuestion = await Question.create({
      question: 'Varicella Zoster Vaccine (for Shingles) (Participants 50 and older)',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 3,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings1dQuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Screenings1dQuestionItem1) {
    Screenings1dQuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Screenings1dQuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings1dQuestionItem2) {
    Screenings1dQuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
  }
  let Screenings1dQuestionItem3 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings1dQuestionItem3) {
    Screenings1dQuestionItem3 = await QuestionItems.create({ name: 'Do not know', order:2}).save();
  }
  let Screenings1dQuestionItem4 = await QuestionItems.findOne({ name: 'Not applicable'});
  if (!Screenings1dQuestionItem4) {
    Screenings1dQuestionItem4 = await QuestionItems.create({ name: 'Not applicable', order:3}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1dQuestion).add(Screenings1dQuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1dQuestion).add(Screenings1dQuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1dQuestion).add(Screenings1dQuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1dQuestion).add(Screenings1dQuestionItem4);

  let Screenings1eQuestion = await Question.findOne({ question: 'Hepatitis A'});
  if (!Screenings1eQuestion){
    Screenings1eQuestion = await Question.create({
      question: 'Hepatitis A',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings1eQuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Screenings1eQuestionItem1) {
    Screenings1eQuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Screenings1eQuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings1eQuestionItem2) {
    Screenings1eQuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
  }
  let Screenings1eQuestionItem3 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings1eQuestionItem3) {
    Screenings1eQuestionItem3 = await QuestionItems.create({ name: 'Do not know', order:2}).save();
  }
  let Screenings1eQuestionItem4 = await QuestionItems.findOne({ name: 'Not applicable'});
  if (!Screenings1eQuestionItem4) {
    Screenings1eQuestionItem4 = await QuestionItems.create({ name: 'Not applicable', order:3}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1eQuestion).add(Screenings1eQuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1eQuestion).add(Screenings1eQuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1eQuestion).add(Screenings1eQuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1eQuestion).add(Screenings1eQuestionItem4);

  let Screenings1fQuestion = await Question.findOne({ question: 'Hepatitis B'});
  if (!Screenings1fQuestion){
    Screenings1fQuestion = await Question.create({
      question: 'Hepatitis B',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 5,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings1fQuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Screenings1fQuestionItem1) {
    Screenings1fQuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Screenings1fQuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings1fQuestionItem2) {
    Screenings1fQuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
  }
  let Screenings1fQuestionItem3 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings1fQuestionItem3) {
    Screenings1fQuestionItem3 = await QuestionItems.create({ name: 'Do not know', order:2}).save();
  }
  let Screenings1fQuestionItem4 = await QuestionItems.findOne({ name: 'Not applicable'});
  if (!Screenings1fQuestionItem4) {
    Screenings1fQuestionItem4 = await QuestionItems.create({ name: 'Not applicable', order:3}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1fQuestion).add(Screenings1fQuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1fQuestion).add(Screenings1fQuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1fQuestion).add(Screenings1fQuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1fQuestion).add(Screenings1fQuestionItem4);

  let Screenings1gQuestion = await Question.findOne({ question: 'Meningococcal (Meningitis)'});
  if (!Screenings1gQuestion){
    Screenings1gQuestion = await Question.create({
      question: 'Meningococcal (Meningitis)',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 6,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings1gQuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Screenings1gQuestionItem1) {
    Screenings1gQuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Screenings1gQuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings1gQuestionItem2) {
    Screenings1gQuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
  }
  let Screenings1gQuestionItem3 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings1gQuestionItem3) {
    Screenings1gQuestionItem3 = await QuestionItems.create({ name: 'Do not know', order:2}).save();
  }
  let Screenings1gQuestionItem4 = await QuestionItems.findOne({ name: 'Not applicable'});
  if (!Screenings1gQuestionItem4) {
    Screenings1gQuestionItem4 = await QuestionItems.create({ name: 'Not applicable', order:3}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1gQuestion).add(Screenings1gQuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1gQuestion).add(Screenings1gQuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1gQuestion).add(Screenings1gQuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings1gQuestion).add(Screenings1gQuestionItem4);

  let Screenings2Question = await Question.findOne({ question: 'Do you get the Influenza (Flu) Vaccine annually?'});
  if (!Screenings2Question){
    Screenings2Question = await Question.create({
      question: 'Do you get the Influenza (Flu) Vaccine annually?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 7,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings2QuestionItem1 = await QuestionItems.findOne({ name: 'Yes - every year'});
  if (!Screenings2QuestionItem1) {
    Screenings2QuestionItem1 = await QuestionItems.create({ name: 'Yes - every year', order:0}).save();
  }
  let Screenings2QuestionItem2 = await QuestionItems.findOne({ name: 'Yes - some years'});
  if (!Screenings2QuestionItem2) {
    Screenings2QuestionItem2 = await QuestionItems.create({ name: 'Yes - some years', order:1}).save();
  }
  let Screenings2QuestionItem3 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings2QuestionItem3) {
    Screenings2QuestionItem3 = await QuestionItems.create({ name: 'No', order:2}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings2Question).add(Screenings2QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings2Question).add(Screenings2QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings2Question).add(Screenings2QuestionItem3);

  let Screenings3Question = await Question.findOne({ question: 'Have you received a COVID-19 vaccine?'});
  if (!Screenings3Question){
    Screenings3Question = await Question.create({
      question: 'Have you received a COVID-19 vaccine?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'Yes/No',
      order: 8,
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

  let Screenings4Question = await Question.findOne({ question: 'How likely are you to get the COVID-19 vaccine when it becomes available to you?'});
  if (!Screenings4Question){
    Screenings4Question = await Question.create({
      question: 'How likely are you to get the COVID-19 vaccine when it becomes available to you?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 9,
      inputConfirmation: 'Alpha',
    }).save();
  }

  let Screenings4QuestionItem1 = await QuestionItems.findOne({ name: 'Very Likely'});
  if (!Screenings4QuestionItem1) {
    Screenings4QuestionItem1 = await QuestionItems.create({ name: 'Very Likely', order:0}).save();
  }
  let Screenings4QuestionItem2 = await QuestionItems.findOne({ name: 'Likely'});
  if (!Screenings4QuestionItem2) {
    Screenings4QuestionItem2 = await QuestionItems.create({ name: 'Likely', order:1}).save();
  }
  let Screenings4QuestionItem3 = await QuestionItems.findOne({ name: 'Neutral'});
  if (!Screenings4QuestionItem3) {
    Screenings4QuestionItem3 = await QuestionItems.create({ name: 'Neutral', order:2}).save();
  }
  let Screenings4QuestionItem4 = await QuestionItems.findOne({ name: 'Not Likely'});
  if (!Screenings4QuestionItem4) {
    Screenings4QuestionItem4 = await QuestionItems.create({ name: 'Not Likely', order:3}).save();
  }
  let Screenings4QuestionItem5 = await QuestionItems.findOne({ name: 'Very Unlikely'});
  if (!Screenings4QuestionItem5) {
    Screenings4QuestionItem5 = await QuestionItems.create({ name: 'Very Unlikely', order:4}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings4Question).add(Screenings4QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings4Question).add(Screenings4QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings4Question).add(Screenings4QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings4Question).add(Screenings4QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings4Question).add(Screenings4QuestionItem5);

  let Screenings5Question = await Question.findOne({ question: 'Have you ever delayed having your child get a vaccine for reasons other than illness or allergy?'});
  if (!Screenings5Question){
    Screenings5Question = await Question.create({
      question: 'Have you ever delayed having your child get a vaccine for reasons other than illness or allergy?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 10,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings5QuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Screenings5QuestionItem1) {
    Screenings5QuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Screenings5QuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings5QuestionItem2) {
    Screenings5QuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
  }
  let Screenings5QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings5QuestionItem3) {
    Screenings5QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order:2}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings5Question).add(Screenings5QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings5Question).add(Screenings5QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings5Question).add(Screenings5QuestionItem3);

  let Screenings6Question = await Question.findOne({ question: 'Have you ever decided not to have your child get a vaccine for reasons other than illness or allergy? '});
  if (!Screenings6Question){
    Screenings6Question = await Question.create({
      question: 'Have you ever decided not to have your child get a vaccine for reasons other than illness or allergy? ',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 11,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings6QuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Screenings6QuestionItem1) {
    Screenings6QuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Screenings6QuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings6QuestionItem2) {
    Screenings6QuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
  }
  let Screenings6QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings6QuestionItem3) {
    Screenings6QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order:2}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings6Question).add(Screenings6QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings6Question).add(Screenings6QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings6Question).add(Screenings6QuestionItem3);

  let Screenings7Question = await Question.findOne({ question: 'Including yourself, please select all the people age 45 or below in your immediate family that have been vaccinated against HPV. Mark all that apply.'});
  if (!Screenings7Question){
    Screenings7Question = await Question.create({
      question: 'Including yourself, please select all the people age 45 or below in your immediate family that have been vaccinated against HPV. Mark all that apply.',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 12,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings7QuestionItem1 = await QuestionItems.findOne({ name: 'Me'});
  if (!Screenings7QuestionItem1) {
    Screenings7QuestionItem1 = await QuestionItems.create({ name: 'Me', order:0}).save();
  }
  let Screenings7QuestionItem2 = await QuestionItems.findOne({ name: 'My spouse/partner'});
  if (!Screenings7QuestionItem2) {
    Screenings7QuestionItem2 = await QuestionItems.create({ name: 'My spouse/partner', order:1}).save();
  }
  let Screenings7QuestionItem3 = await QuestionItems.findOne({ name: 'My male children'});
  if (!Screenings7QuestionItem3) {
    Screenings7QuestionItem3 = await QuestionItems.create({ name: 'My male children', order:2}).save();
  }
  let Screenings7QuestionItem4 = await QuestionItems.findOne({ name: 'My female children'});
  if (!Screenings7QuestionItem4) {
    Screenings7QuestionItem4 = await QuestionItems.create({ name: 'My female children', order:3}).save();
  }
  let Screenings7QuestionItem5 = await QuestionItems.findOne({ name: 'No one has been vaccinated for HPV'});
  if (!Screenings7QuestionItem5) {
    Screenings7QuestionItem5 = await QuestionItems.create({ name: 'No one has been vaccinated for HPV', order:4}).save();
  }
  let Screenings7QuestionItem6 = await QuestionItems.findOne({ name: 'Do not Know'});
  if (!Screenings7QuestionItem6) {
    Screenings7QuestionItem6 = await QuestionItems.create({ name: 'Do not Know', order:5}).save();
  }
  let Screenings7QuestionItem7 = await QuestionItems.findOne({ name: 'Prefer not to answer'});
  if (!Screenings7QuestionItem7) {
    Screenings7QuestionItem7 = await QuestionItems.create({ name: 'Prefer not to answer', order:6}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings7Question).add(Screenings7QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings7Question).add(Screenings7QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings7Question).add(Screenings7QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings7Question).add(Screenings7QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings7Question).add(Screenings7QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings7Question).add(Screenings7QuestionItem6);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings7Question).add(Screenings7QuestionItem7);

  let Screenings8Question = await Question.findOne({ question: 'A blood stool test is a test that may use a special kit at home to determine whether the stool contains blood. Have you ever had this test using a home kit?'});
  if (!Screenings8Question){
    Screenings8Question = await Question.create({
      question: 'A blood stool test is a test that may use a special kit at home to determine whether the stool contains blood. Have you ever had this test using a home kit?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 13,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings8QuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Screenings8QuestionItem1) {
    Screenings8QuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Screenings8QuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings8QuestionItem2) {
    Screenings8QuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
  }
  let Screenings8QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings8QuestionItem3) {
    Screenings8QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order:2}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings8Question).add(Screenings8QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings8Question).add(Screenings8QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings8Question).add(Screenings8QuestionItem3);

  let Screenings9Question = await Question.findOne({ question: 'How long has it been since you had your last blood stool test using a home kit?'});
  if (!Screenings9Question){
    Screenings9Question = await Question.create({
      question: 'How long has it been since you had your last blood stool test using a home kit?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 14,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings9QuestionItem1 = await QuestionItems.findOne({ name: 'Within the past year (anytime less than 12 months ago)'});
  if (!Screenings9QuestionItem1) {
    Screenings9QuestionItem1 = await QuestionItems.create({ name: 'Within the past year (anytime less than 12 months ago)', order:0}).save();
  }
  let Screenings9QuestionItem2 = await QuestionItems.findOne({ name: 'Within the past 2 years (at least 1 year but less than 2 years ago)'});
  if (!Screenings9QuestionItem2) {
    Screenings9QuestionItem2 = await QuestionItems.create({ name: 'Within the past 2 years (at least 1 year but less than 2 years ago)', order:1}).save();
  }
  let Screenings9QuestionItem3 = await QuestionItems.findOne({ name: 'Within the past 3 years (at least 2 years but less than 3 years ago)'});
  if (!Screenings9QuestionItem3) {
    Screenings9QuestionItem3 = await QuestionItems.create({ name: 'Within the past 3 years (at least 2 years but less than 3 years ago)', order:2}).save();
  }
  let Screenings9QuestionItem4 = await QuestionItems.findOne({ name: 'Within the past 5 years (at least 3 years but less than 5 years ago)'});
  if (!Screenings9QuestionItem4) {
    Screenings9QuestionItem4 = await QuestionItems.create({ name: 'Within the past 5 years (at least 3 years but less than 5 years ago)', order:3}).save();
  }
  let Screenings9QuestionItem5 = await QuestionItems.findOne({ name: '5 or more years ago'});
  if (!Screenings9QuestionItem5) {
    Screenings9QuestionItem5 = await QuestionItems.create({ name: '5 or more years ago', order:4}).save();
  }
  let Screenings9QuestionItem6 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings9QuestionItem6) {
    Screenings9QuestionItem6 = await QuestionItems.create({ name: 'Do not know', order:5}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9Question).add(Screenings9QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9Question).add(Screenings9QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9Question).add(Screenings9QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9Question).add(Screenings9QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9Question).add(Screenings9QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9Question).add(Screenings9QuestionItem6);

  let Screenings10Question = await Question.findOne({ question: 'Sigmoidoscopy and colonoscopy are exams in which a tube is inserted in the rectum to view the colon for signs of cancer or other health problems. Have you ever had either of these exams?'});
  if (!Screenings10Question){
    Screenings10Question = await Question.create({
      question: 'Sigmoidoscopy and colonoscopy are exams in which a tube is inserted in the rectum to view the colon for signs of cancer or other health problems. Have you ever had either of these exams?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 15,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings10QuestionItem1 = await QuestionItems.findOne({ name: 'Yes, sigmoidoscopy'});
  if (!Screenings10QuestionItem1) {
    Screenings10QuestionItem1 = await QuestionItems.create({ name: 'Yes, sigmoidoscopy', order:0}).save();
  }
  let Screenings10QuestionItem2 = await QuestionItems.findOne({ name: 'Yes, colonoscopy (usually includes medication through a needle in your arm to make you sleepy)'});
  if (!Screenings10QuestionItem2) {
    Screenings10QuestionItem2 = await QuestionItems.create({ name: 'Yes, colonoscopy (usually includes medication through a needle in your arm to make you sleepy)', order:1}).save();
  }
  let Screenings10QuestionItem3 = await QuestionItems.findOne({ name: 'Yes, both'});
  if (!Screenings10QuestionItem3) {
    Screenings10QuestionItem3 = await QuestionItems.create({ name: 'Yes, both', order:2}).save();
  }
  let Screenings10QuestionItem4 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings10QuestionItem4) {
    Screenings10QuestionItem4 = await QuestionItems.create({ name: 'No', order:3}).save();
  }
  let Screenings10QuestionItem5 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings10QuestionItem5) {
    Screenings10QuestionItem5 = await QuestionItems.create({ name: 'Do not know', order:4}).save();
  }
  let Screenings10QuestionItem6 = await QuestionItems.findOne({ name: 'Prefer not to answer'});
  if (!Screenings10QuestionItem6) {
    Screenings10QuestionItem6 = await QuestionItems.create({ name: 'Prefer not to answer', order:5}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings10Question).add(Screenings10QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings10Question).add(Screenings10QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings10Question).add(Screenings10QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings10Question).add(Screenings10QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings10Question).add(Screenings10QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings10Question).add(Screenings10QuestionItem6);

  let Screenings9aQuestion = await Question.findOne({ question: 'When was your MOST RECENT sigmoidoscopy?'});
  if (!Screenings9aQuestion){
    Screenings9aQuestion = await Question.create({
      question: 'When was your MOST RECENT sigmoidoscopy?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 16,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings9aQuestionItem1 = await QuestionItems.findOne({ name: 'Within the past year (anytime less than 12 months ago)'});
  if (!Screenings9aQuestionItem1) {
    Screenings9aQuestionItem1 = await QuestionItems.create({ name: 'Within the past year (anytime less than 12 months ago)', order:0}).save();
  }
  let Screenings9aQuestionItem2 = await QuestionItems.findOne({ name: 'Within the past 2 years (at least 1 year but less than 2 years ago)'});
  if (!Screenings9aQuestionItem2) {
    Screenings9aQuestionItem2 = await QuestionItems.create({ name: 'Within the past 2 years (at least 1 year but less than 2 years ago)', order:1}).save();
  }
  let Screenings9aQuestionItem3 = await QuestionItems.findOne({ name: 'Within the past 3 years (at least 2 years but less than 3 years ago)'});
  if (!Screenings9aQuestionItem3) {
    Screenings9aQuestionItem3 = await QuestionItems.create({ name: 'Within the past 3 years (at least 2 years but less than 3 years ago)', order:2}).save();
  }
  let Screenings9aQuestionItem4 = await QuestionItems.findOne({ name: 'Within the past 5 years (at least 3 years but less than 5 years ago)'});
  if (!Screenings9aQuestionItem4) {
    Screenings9aQuestionItem4 = await QuestionItems.create({ name: 'Within the past 5 years (at least 3 years but less than 5 years ago)', order:3}).save();
  }
  let Screenings9aQuestionItem5 = await QuestionItems.findOne({ name: 'Within the past 10 years (at least 5 years but less than 10 years ago)'});
  if (!Screenings9aQuestionItem5) {
    Screenings9aQuestionItem5 = await QuestionItems.create({ name: 'Within the past 10 years (at least 5 years but less than 10 years ago)', order:4}).save();
  }
  let Screenings9aQuestionItem6 = await QuestionItems.findOne({ name: '10 or more years ago'});
  if (!Screenings9aQuestionItem6) {
    Screenings9aQuestionItem6 = await QuestionItems.create({ name: '10 or more years ago', order:5}).save();
  }
  let Screenings9aQuestionItem7 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings9aQuestionItem7) {
    Screenings9aQuestionItem7 = await QuestionItems.create({ name: 'Do not know', order:6}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9aQuestion).add(Screenings9aQuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9aQuestion).add(Screenings9aQuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9aQuestion).add(Screenings9aQuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9aQuestion).add(Screenings9aQuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9aQuestion).add(Screenings9aQuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9aQuestion).add(Screenings9aQuestionItem6);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9aQuestion).add(Screenings9aQuestionItem7);

  let Screenings9bQuestion = await Question.findOne({ question: 'When was your MOST RECENT colonoscopy'});
  if (!Screenings9bQuestion){
    Screenings9bQuestion = await Question.create({
      question: 'When was your MOST RECENT colonoscopy',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 17,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings9bQuestionItem1 = await QuestionItems.findOne({ name: 'Within the past year (anytime less than 12 months ago)'});
  if (!Screenings9bQuestionItem1) {
    Screenings9bQuestionItem1 = await QuestionItems.create({ name: 'Within the past year (anytime less than 12 months ago)', order:0}).save();
  }
  let Screenings9bQuestionItem2 = await QuestionItems.findOne({ name: 'Within the past 2 years (at least 1 year but less than 2 years ago)'});
  if (!Screenings9bQuestionItem2) {
    Screenings9bQuestionItem2 = await QuestionItems.create({ name: 'Within the past 2 years (at least 1 year but less than 2 years ago)', order:1}).save();
  }
  let Screenings9bQuestionItem3 = await QuestionItems.findOne({ name: 'Within the past 3 years (at least 2 years but less than 3 years ago)'});
  if (!Screenings9bQuestionItem3) {
    Screenings9bQuestionItem3 = await QuestionItems.create({ name: 'Within the past 3 years (at least 2 years but less than 3 years ago)', order:2}).save();
  }
  let Screenings9bQuestionItem4 = await QuestionItems.findOne({ name: 'Within the past 5 years (at least 3 years but less than 5 years ago)'});
  if (!Screenings9bQuestionItem4) {
    Screenings9bQuestionItem4 = await QuestionItems.create({ name: 'Within the past 5 years (at least 3 years but less than 5 years ago)', order:3}).save();
  }
  let Screenings9bQuestionItem5 = await QuestionItems.findOne({ name: 'Within the past 10 years (at least 5 years but less than 10 years ago)'});
  if (!Screenings9bQuestionItem5) {
    Screenings9bQuestionItem5 = await QuestionItems.create({ name: 'Within the past 10 years (at least 5 years but less than 10 years ago)', order:4}).save();
  }
  let Screenings9bQuestionItem6 = await QuestionItems.findOne({ name: '10 or more years ago'});
  if (!Screenings9bQuestionItem6) {
    Screenings9bQuestionItem6 = await QuestionItems.create({ name: '10 or more years ago', order:5}).save();
  }
  let Screenings9bQuestionItem7 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings9bQuestionItem7) {
    Screenings9bQuestionItem7 = await QuestionItems.create({ name: 'Do not know', order:6}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9bQuestion).add(Screenings9bQuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9bQuestion).add(Screenings9bQuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9bQuestion).add(Screenings9bQuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9bQuestion).add(Screenings9bQuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9bQuestion).add(Screenings9bQuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9bQuestion).add(Screenings9bQuestionItem6);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings9bQuestion).add(Screenings9bQuestionItem7);

  let Screenings11Question = await Question.findOne({ question: 'Annually, do you have a digital rectal exam (DRE) and/or prostate specific antigen (PSA) test?'});
  if (!Screenings11Question){
    Screenings11Question = await Question.create({
      question: 'Annually, do you have a digital rectal exam (DRE) and/or prostate specific antigen (PSA) test?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 18,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings11QuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Screenings11QuestionItem1) {
    Screenings11QuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Screenings11QuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings11QuestionItem2) {
    Screenings11QuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
  }
  let Screenings11QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings11QuestionItem3) {
    Screenings11QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order:2}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings11Question).add(Screenings11QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings11Question).add(Screenings11QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings11Question).add(Screenings11QuestionItem3);

  let Screenings12Question = await Question.findOne({ question: 'A mammogram is an x-ray of each breast to look for breast cancer. Have you ever had a mammogram? [Female over the age of 40]'});
  if (!Screenings12Question){
    Screenings12Question = await Question.create({
      question: 'A mammogram is an x-ray of each breast to look for breast cancer. Have you ever had a mammogram? [Female over the age of 40]',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 19,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings12QuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Screenings12QuestionItem1) {
    Screenings12QuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Screenings12QuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings12QuestionItem2) {
    Screenings12QuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
  }
  let Screenings12QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings12QuestionItem3) {
    Screenings12QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order:2}).save();
  }
  let Screenings12QuestionItem4 = await QuestionItems.findOne({ name: 'Prefer not to answer'});
  if (!Screenings12QuestionItem4) {
    Screenings12QuestionItem4 = await QuestionItems.create({ name: 'Prefer not to answer', order:3}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings12Question).add(Screenings12QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings12Question).add(Screenings12QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings12Question).add(Screenings12QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings12Question).add(Screenings12QuestionItem4);

  let Screenings13Question = await Question.findOne({ question: 'A pap smear test (pap smear) is a test that is done by your doctor to check your cervix for cells that are not normal and could eventually cause cervical cancer. Have you ever had a Pap test? '});
  if (!Screenings13Question){
    Screenings13Question = await Question.create({
      question: 'A pap smear test (pap smear) is a test that is done by your doctor to check your cervix for cells that are not normal and could eventually cause cervical cancer. Have you ever had a Pap test? ',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 20,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings13QuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Screenings13QuestionItem1) {
    Screenings13QuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Screenings13QuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings13QuestionItem2) {
    Screenings13QuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
  }
  let Screenings13QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Screenings13QuestionItem3) {
    Screenings13QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order:2}).save();
  }
  let Screenings13QuestionItem4 = await QuestionItems.findOne({ name: 'Prefer not to answer'});
  if (!Screenings13QuestionItem4) {
    Screenings13QuestionItem4 = await QuestionItems.create({ name: 'Prefer not to answer', order:3}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings13Question).add(Screenings13QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings13Question).add(Screenings13QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings13Question).add(Screenings13QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings13Question).add(Screenings13QuestionItem4);

  let Screenings13aQuestion = await Question.findOne({ question: 'Do you have the pap test annually? '});
  if (!Screenings13aQuestion){
    Screenings13aQuestion = await Question.create({
      question: 'Do you have the pap test annually? ',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 21,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Screenings13aQuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Screenings13aQuestionItem1) {
    Screenings13aQuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Screenings13aQuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Screenings13aQuestionItem2) {
    Screenings13aQuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings13aQuestion).add(Screenings13aQuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Screenings13aQuestion).add(Screenings13aQuestionItem2);


  let Healthcare1Question = await Question.findOne({ question: 'Overall, how confident are you that you could get advice or information about health or medical topics if you needed it? '});
  if (!Healthcare1Question){
    Healthcare1Question = await Question.create({
      question: 'Overall, how confident are you that you could get advice or information about health or medical topics if you needed it? ',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 0,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Healthcare1QuestionItem1 = await QuestionItems.findOne({ name: 'Completely confident'});
  if (!Healthcare1QuestionItem1) {
    Healthcare1QuestionItem1 = await QuestionItems.create({ name: 'Completely confident', order:0}).save();
  }
  let Healthcare1QuestionItem2 = await QuestionItems.findOne({ name: 'Very confident'});
  if (!Healthcare1QuestionItem2) {
    Healthcare1QuestionItem2 = await QuestionItems.create({ name: 'Very confident', order:1}).save();
  }
  let Healthcare1QuestionItem3 = await QuestionItems.findOne({ name: 'Somewhat confident'});
  if (!Healthcare1QuestionItem3) {
    Healthcare1QuestionItem3 = await QuestionItems.create({ name: 'Somewhat confident', order:2}).save();
  }
  let Healthcare1QuestionItem4 = await QuestionItems.findOne({ name: 'A little confident'});
  if (!Healthcare1QuestionItem4) {
    Healthcare1QuestionItem4 = await QuestionItems.create({ name: 'A little confident', order:3}).save();
  }
  let Healthcare1QuestionItem5 = await QuestionItems.findOne({ name: 'Not confident at all'});
  if (!Healthcare1QuestionItem5) {
    Healthcare1QuestionItem5 = await QuestionItems.create({ name: 'Not confident at all', order:4}).save();
  }
  let Healthcare1QuestionItem6 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Healthcare1QuestionItem6) {
    Healthcare1QuestionItem6 = await QuestionItems.create({ name: 'Do not know', order:5}).save();
  }
  let Healthcare1QuestionItem7 = await QuestionItems.findOne({ name: 'Prefer not to answer'});
  if (!Healthcare1QuestionItem7) {
    Healthcare1QuestionItem7 = await QuestionItems.create({ name: 'Prefer not to answer', order:6}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare1Question).add(Healthcare1QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare1Question).add(Healthcare1QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare1Question).add(Healthcare1QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare1Question).add(Healthcare1QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare1Question).add(Healthcare1QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare1Question).add(Healthcare1QuestionItem6);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare1Question).add(Healthcare1QuestionItem7);

  let Healthcare2Question = await Question.findOne({ question: 'Which place do you go most often when you are sick or need professional advice about your health? Mark only one'});
  if (!Healthcare2Question){
    Healthcare2Question = await Question.create({
      question: 'Which place do you go most often when you are sick or need professional advice about your health? Mark only one',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 1,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Healthcare2QuestionItem1 = await QuestionItems.findOne({ name: 'Clinic or health center'});
  if (!Healthcare2QuestionItem1) {
    Healthcare2QuestionItem1 = await QuestionItems.create({ name: 'Clinic or health center', order:0}).save();
  }
  let Healthcare2QuestionItem2 = await QuestionItems.findOne({ name: 'Doctor office or HMO'});
  if (!Healthcare2QuestionItem2) {
    Healthcare2QuestionItem2 = await QuestionItems.create({ name: 'Doctor office or HMO', order:1}).save();
  }
  let Healthcare2QuestionItem3 = await QuestionItems.findOne({ name: 'Urgent care'});
  if (!Healthcare2QuestionItem3) {
    Healthcare2QuestionItem3 = await QuestionItems.create({ name: 'Urgent care', order:2}).save();
  }
  let Healthcare2QuestionItem4 = await QuestionItems.findOne({ name: 'Hospital emergency room'});
  if (!Healthcare2QuestionItem4) {
    Healthcare2QuestionItem4 = await QuestionItems.create({ name: 'Hospital emergency room', order:3}).save();
  }
  let Healthcare2QuestionItem5 = await QuestionItems.findOne({ name: 'Hospital outpatient department'});
  if (!Healthcare2QuestionItem5) {
    Healthcare2QuestionItem5 = await QuestionItems.create({ name: 'Hospital outpatient department', order:4}).save();
  }
  let Healthcare2QuestionItem6 = await QuestionItems.findOne({ name: 'Some other place'});
  if (!Healthcare2QuestionItem6) {
    Healthcare2QuestionItem6 = await QuestionItems.create({ name: 'Some other place', order:5}).save();
  }
  let Healthcare2QuestionItem7 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Healthcare2QuestionItem7) {
    Healthcare2QuestionItem7 = await QuestionItems.create({ name: 'Do not know', order:6}).save();
  }
  let Healthcare2QuestionItem8 = await QuestionItems.findOne({ name: 'Prefer not to answer'});
  if (!Healthcare2QuestionItem8) {
    Healthcare2QuestionItem8 = await QuestionItems.create({ name: 'Prefer not to answer', order:7}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare2Question).add(Healthcare2QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare2Question).add(Healthcare2QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare2Question).add(Healthcare2QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare2Question).add(Healthcare2QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare2Question).add(Healthcare2QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare2Question).add(Healthcare2QuestionItem6);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare2Question).add(Healthcare2QuestionItem7);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare2Question).add(Healthcare2QuestionItem8);

  let Healthcare3Question = await Question.findOne({ question: 'Was there a time in the past 12 months when you needed medical care but did not get the care you needed?'});
  if (!Healthcare3Question){
    Healthcare3Question = await Question.create({
      question: 'Was there a time in the past 12 months when you needed medical care but did not get the care you needed?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 2,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Healthcare3QuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Healthcare3QuestionItem1) {
    Healthcare3QuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Healthcare3QuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Healthcare3QuestionItem2) {
    Healthcare3QuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
  }
  let Healthcare3QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Healthcare3QuestionItem3) {
    Healthcare3QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order:2}).save();
  }
  let Healthcare3QuestionItem4 = await QuestionItems.findOne({ name: 'Prefer not to answer'});
  if (!Healthcare3QuestionItem4) {
    Healthcare3QuestionItem4 = await QuestionItems.create({ name: 'Prefer not to answer', order:3}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare3Question).add(Healthcare3QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare3Question).add(Healthcare3QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare3Question).add(Healthcare3QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare3Question).add(Healthcare3QuestionItem4);

  let Healthcare4Question = await Question.findOne({ question: 'What is the main reason you didn’t get the medical care you needed? Mark only one'});
  if (!Healthcare4Question){
    Healthcare4Question = await Question.create({
      question: 'What is the main reason you didn’t get the medical care you needed? Mark only one',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 3,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Healthcare4QuestionItem1 = await QuestionItems.findOne({ name: 'Can not afford it / costs too much'});
  if (!Healthcare4QuestionItem1) {
    Healthcare4QuestionItem1 = await QuestionItems.create({ name: 'Can not afford it / costs too much', order:0}).save();
  }
  let Healthcare4QuestionItem2 = await QuestionItems.findOne({ name: 'Do not have insurance'});
  if (!Healthcare4QuestionItem2) {
    Healthcare4QuestionItem2 = await QuestionItems.create({ name: 'Do not have insurance', order:1}).save();
  }
  let Healthcare4QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know where to go'});
  if (!Healthcare4QuestionItem3) {
    Healthcare4QuestionItem3 = await QuestionItems.create({ name: 'Do not know where to go', order:2}).save();
  }
  let Healthcare4QuestionItem4 = await QuestionItems.findOne({ name: 'Trouble getting appointment'});
  if (!Healthcare4QuestionItem4) {
    Healthcare4QuestionItem4 = await QuestionItems.create({ name: 'Trouble getting appointment', order:3}).save();
  }
  let Healthcare4QuestionItem5 = await QuestionItems.findOne({ name: 'Unable to take time off work to go to appointment'});
  if (!Healthcare4QuestionItem5) {
    Healthcare4QuestionItem5 = await QuestionItems.create({ name: 'Unable to take time off work to go to appointment', order:4}).save();
  }
  let Healthcare4QuestionItem6 = await QuestionItems.findOne({ name: 'Other'});
  if (!Healthcare4QuestionItem6) {
    Healthcare4QuestionItem6 = await QuestionItems.create({ name: 'Other', order:5}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare4Question).add(Healthcare4QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare4Question).add(Healthcare4QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare4Question).add(Healthcare4QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare4Question).add(Healthcare4QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare4Question).add(Healthcare4QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare4Question).add(Healthcare4QuestionItem6);

  let Healthcare5Question = await Question.findOne({ question: 'Do you have any kind of health care coverage, including health insurance, prepaid plans such as HMOs, and/or government plans such as Medicare, Medicaid, or Indian Health Service?'});
  if (!Healthcare5Question){
    Healthcare5Question = await Question.create({
      question: 'Do you have any kind of health care coverage, including health insurance, prepaid plans such as HMOs, and/or government plans such as Medicare, Medicaid, or Indian Health Service?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 4,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Healthcare5QuestionItem1 = await QuestionItems.findOne({ name: 'Yes'});
  if (!Healthcare5QuestionItem1) {
    Healthcare5QuestionItem1 = await QuestionItems.create({ name: 'Yes', order:0}).save();
  }
  let Healthcare5QuestionItem2 = await QuestionItems.findOne({ name: 'No'});
  if (!Healthcare5QuestionItem2) {
    Healthcare5QuestionItem2 = await QuestionItems.create({ name: 'No', order:1}).save();
  }
  let Healthcare5QuestionItem3 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Healthcare5QuestionItem3) {
    Healthcare5QuestionItem3 = await QuestionItems.create({ name: 'Do not know', order:2}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare5Question).add(Healthcare5QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare5Question).add(Healthcare5QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare5Question).add(Healthcare5QuestionItem3);

  let Healthcare6Question = await Question.findOne({ question: 'What is the primary source of your health care coverage?'});
  if (!Healthcare6Question){
    Healthcare6Question = await Question.create({
      question: 'What is the primary source of your health care coverage?',
      stack: 0,
      stackPhrase: 'Whatever phrase',
      placeHolder: 'NONE',
      order: 5,
      inputConfirmation: 'Alpha',
    }).save();
  }
  let Healthcare6QuestionItem1 = await QuestionItems.findOne({ name: 'A plan purchased through an employer or union (including plans purchased through another persons employer)'});
  if (!Healthcare6QuestionItem1) {
    Healthcare6QuestionItem1 = await QuestionItems.create({ name: 'A plan purchased through an employer or union (including plans purchased through another persons employer)', order:0}).save();
  }
  let Healthcare6QuestionItem2 = await QuestionItems.findOne({ name: 'A plan that you or another family member buys on your own'});
  if (!Healthcare6QuestionItem2) {
    Healthcare6QuestionItem2 = await QuestionItems.create({ name: 'A plan that you or another family member buys on your own', order:1}).save();
  }
  let Healthcare6QuestionItem3 = await QuestionItems.findOne({ name: 'Medicare'});
  if (!Healthcare6QuestionItem3) {
    Healthcare6QuestionItem3 = await QuestionItems.create({ name: 'Medicare', order:2}).save();
  }
  let Healthcare6QuestionItem4 = await QuestionItems.findOne({ name: 'Medicaid or other state program'});
  if (!Healthcare6QuestionItem4) {
    Healthcare6QuestionItem4 = await QuestionItems.create({ name: 'Medicaid or other state program', order:3}).save();
  }
  let Healthcare6QuestionItem5 = await QuestionItems.findOne({ name: 'TRICARE (formerly CHAMPUS), VA, or Military'});
  if (!Healthcare6QuestionItem5) {
    Healthcare6QuestionItem5 = await QuestionItems.create({ name: 'TRICARE (formerly CHAMPUS), VA, or Military', order:4}).save();
  }
  let Healthcare6QuestionItem6 = await QuestionItems.findOne({ name: 'Alaska Native, Indian Health Service, Tribal Health Services'});
  if (!Healthcare6QuestionItem6) {
    Healthcare6QuestionItem6 = await QuestionItems.create({ name: 'Alaska Native, Indian Health Service, Tribal Health Services', order:5}).save();
  }
  let Healthcare6QuestionItem7 = await QuestionItems.findOne({ name: 'Other source (please specify) [OPEN END TEXT BOX; ALLOW MAX 50 CHARACTERS]'});
  if (!Healthcare6QuestionItem7) {
    Healthcare6QuestionItem7 = await QuestionItems.create({ name: 'Other source (please specify) [OPEN END TEXT BOX; ALLOW MAX 50 CHARACTERS]', order:6}).save();
  }
  let Healthcare6QuestionItem8 = await QuestionItems.findOne({ name: 'Do not know'});
  if (!Healthcare6QuestionItem8) {
    Healthcare6QuestionItem8 = await QuestionItems.create({ name: 'Do not know', order:7}).save();
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

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare6Question).add(Healthcare6QuestionItem1);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare6Question).add(Healthcare6QuestionItem2);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare6Question).add(Healthcare6QuestionItem3);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare6Question).add(Healthcare6QuestionItem4);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare6Question).add(Healthcare6QuestionItem5);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare6Question).add(Healthcare6QuestionItem6);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare6Question).add(Healthcare6QuestionItem7);

  await getConnection().createQueryBuilder().relation(Question, 'items').of(Healthcare6Question).add(Healthcare6QuestionItem8);


};
