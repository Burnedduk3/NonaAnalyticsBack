import { CONFIG_DATABASE_URL } from '@config/variables';
import dotEnv from 'dotenv';
import { Connection, createConnection } from 'typeorm';

dotEnv.config();

let client: Connection | null;

export const testConn = async (drop: boolean = false): Promise<Connection> => {
  if (!client) {
    client = await createConnection({
      name: 'default',
      type: 'postgres',
      url: CONFIG_DATABASE_URL,
      ssl: false,
      synchronize: drop,
      dropSchema: drop,
      entities: [
        __dirname + '/../entities/Category.entity.ts',
        __dirname + '/../entities/Form.entity.ts',
        __dirname + '/../entities/FormResponses.entity.ts',
        __dirname + '/../entities/Question.entity.ts',
        __dirname + '/../entities/QuestionImages.entity.ts',
        __dirname + '/../entities/QuestionItems.entity.ts',
        __dirname + '/../entities/Section.entity.ts',
        __dirname + '/../entities/SubSection.entity.ts',
        __dirname + '/../entities/User.entity.ts',
      ],
    });
  }
  return client;
};
