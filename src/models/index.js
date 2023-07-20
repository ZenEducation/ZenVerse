// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ArticleStatus = {
  "ALL": "ALL",
  "PUBLISHED": "PUBLISHED",
  "DRAFT": "DRAFT",
  "ARCHIVED": "ARCHIVED"
};

const ArticleVisibility = {
  "PUBLIC": "PUBLIC",
  "PRIVATE": "PRIVATE",
  "INDRAFT": "INDRAFT"
};

const { Article, Categories } = initSchema(schema);

export {
  Article,
  Categories,
  ArticleStatus,
  ArticleVisibility
};