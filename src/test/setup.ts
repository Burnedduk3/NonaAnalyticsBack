import 'module-alias/register';
import { boilerplateData } from './../utils/setupdevDB';
import 'module-alias/register';
import { testConn } from './testCon';

testConn(true).then(async () => {
  await boilerplateData();
  process.exit();
});
