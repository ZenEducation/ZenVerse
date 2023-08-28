// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Contact, Companies, Products, Calls, Events, Tasks, Deals } = initSchema(schema);

export {
  Contact,
  Companies,
  Products,
  Calls,
  Events,
  Tasks,
  Deals
};