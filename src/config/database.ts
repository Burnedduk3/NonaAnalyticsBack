import { ConnectionOptions, createConnection } from 'typeorm';
import { CONFIG_DATABASE_URL, CONFIG_ENVIROMENT } from './variables';

const config: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  url: CONFIG_DATABASE_URL,
  ssl: CONFIG_ENVIROMENT !== 'development' && {
    rejectUnauthorized: false,
  },
  synchronize: CONFIG_ENVIROMENT === 'development',
  logging: CONFIG_ENVIROMENT === 'development',
  entities: [
    'src/entities/FormResponses.entity.ts',
    'src/entities/Question.entity.ts',
    'src/entities/Category.entity.ts',
    'src/entities/User.entity.ts',
    'src/entities/Form.entity.ts',
    'src/entities/Section.entity.ts',
    'src/entities/SubSection.entity.ts',
    'src/entities/QuestionImages.entity.ts',
    'src/entities/QuestionItems.entity.ts',
  ],
};
export const getDBConfig = async () => await createConnection(config);
