// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const QuestionType = {
  "MCQ": "MCQ",
  "PARA": "PARA",
  "FILLIN": "FILLIN",
  "NUM": "NUM"
};

const Difficuilty = {
  "EASY": "EASY",
  "MODERATE": "MODERATE",
  "HARD": "HARD"
};

const { Question, Group, Section, Exam, VariablePricing, MockTest, Learner, Affiliate, Admin, Instructor, Criteria, Option, Range } = initSchema(schema);

export {
  Question,
  Group,
  Section,
  Exam,
  VariablePricing,
  MockTest,
  Learner,
  Affiliate,
  Admin,
  Instructor,
  QuestionType,
  Difficuilty,
  Criteria,
  Option,
  Range
};