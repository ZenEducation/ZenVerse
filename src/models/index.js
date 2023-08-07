// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Learner, Affiliate, Admin, Instructor } = initSchema(schema);

export {
  Learner,
  Affiliate,
  Admin,
  Instructor
};