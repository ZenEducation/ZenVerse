// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Deals } = initSchema(schema);

export {
  Deals
};