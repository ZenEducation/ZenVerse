// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AttemptStatus = {
  "NOTSTARTED": "NOTSTARTED",
  "INPROGRESS": "INPROGRESS",
  "DONE": "DONE"
};

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

const { Topic, Responce, Attempt, Question, Group, Section, Exam, VariablePricing, MockTest, Learner, Affiliate, Admin, Instructor, MockTestLearner, MockTestAffiliate, MockTestAdmin, MockTestInstructor, Criteria, Option, Range } = initSchema(schema);

export {
  Topic,
  Responce,
  Attempt,
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
  MockTestLearner,
  MockTestAffiliate,
  MockTestAdmin,
  MockTestInstructor,
  AttemptStatus,
  QuestionType,
  Difficuilty,
  Criteria,
  Option,
  Range
};