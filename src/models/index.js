// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BlogPost, Category, Comment } = initSchema(schema);

export {
  BlogPost,
  Category,
  Comment
};