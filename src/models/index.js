// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { VariablePricing, MockTest, Learner, Affiliate, Admin, Instructor } = initSchema(schema);

export {
  VariablePricing,
  MockTest,
  Learner,
  Affiliate,
  Admin,
  Instructor
};