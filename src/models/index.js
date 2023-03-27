// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserType = {
  "GUEST": "Guest",
  "STUDENT": "Student",
  "GUARDIAN": "Guardian",
  "EDUCATOR": "Educator",
  "EDU_CARER": "EduCarer",
  "INTERN": "Intern",
  "INTERN_APPLICANT": "InternApplicant",
  "JOB_APPLICANT": "JobApplicant",
  "TELECALLER": "Telecaller",
  "LMS_INSTRUCTOR": "LMSInstructor",
  "EMPLOYEE": "Employee",
  "ADMIN": "Admin",
  "VENDOR": "Vendor",
  "SUPER_ADMIN": "SuperAdmin",
  "INVESTOR": "Investor"
};

const ChatType = {
  "PERSONAL": "Personal",
  "GROUP": "Group",
  "CHANNEL": "Channel"
};

const { AuthInfo, AuthUserPermission, User, iCHAT, iCHATChannel, iCHATGroup, iCHATMessage, UserChats, UserChannelModerators, UserGroupAdmins } = initSchema(schema);

export {
  AuthInfo,
  AuthUserPermission,
  User,
  iCHAT,
  iCHATChannel,
  iCHATGroup,
  iCHATMessage,
  UserChats,
  UserChannelModerators,
  UserGroupAdmins,
  UserType,
  ChatType
};