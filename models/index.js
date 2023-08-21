// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const JobType = {
  "FULL_TIME": "FULL_TIME",
  "HALF_TIME": "HALF_TIME",
  "PART_TIME": "PART_TIME",
  "INTERNSHIP": "INTERNSHIP"
};

const JobMode = {
  "ONSITE": "ONSITE",
  "REMOTE": "REMOTE",
  "HYBRID": "HYBRID"
};

const { Department, Job } = initSchema(schema);

export {
  Department,
  Job,
  JobType,
  JobMode
};