// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UntitledModel,Whiteboard } = initSchema(schema);

export {
  UntitledModel,
  Whiteboard
};