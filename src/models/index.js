// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Learner } = initSchema(schema);

export {
  Learner
};