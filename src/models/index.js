// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Contact, Conversation, Messsage } = initSchema(schema);

export {
  Contact,
  Conversation,
  Messsage
};