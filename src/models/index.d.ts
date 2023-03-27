import { ModelInit, MutableModel, __modelMeta__, CustomIdentifier, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum UserType {
  GUEST = "Guest",
  STUDENT = "Student",
  GUARDIAN = "Guardian",
  EDUCATOR = "Educator",
  EDU_CARER = "EduCarer",
  INTERN = "Intern",
  INTERN_APPLICANT = "InternApplicant",
  JOB_APPLICANT = "JobApplicant",
  TELECALLER = "Telecaller",
  LMS_INSTRUCTOR = "LMSInstructor",
  EMPLOYEE = "Employee",
  ADMIN = "Admin",
  VENDOR = "Vendor",
  SUPER_ADMIN = "SuperAdmin",
  INVESTOR = "Investor"
}

export enum ChatType {
  PERSONAL = "Personal",
  GROUP = "Group",
  CHANNEL = "Channel"
}



type EagerAuthInfo = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<AuthInfo, 'userId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly userId: string;
  readonly user?: User | null;
  readonly email: string;
  readonly phoneNum?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthInfo = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<AuthInfo, 'userId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly userId: string;
  readonly user: AsyncItem<User | undefined>;
  readonly email: string;
  readonly phoneNum?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AuthInfo = LazyLoading extends LazyLoadingDisabled ? EagerAuthInfo : LazyAuthInfo

export declare const AuthInfo: (new (init: ModelInit<AuthInfo>) => AuthInfo) & {
  copyOf(source: AuthInfo, mutator: (draft: MutableModel<AuthInfo>) => MutableModel<AuthInfo> | void): AuthInfo;
}

type EagerAuthUserPermission = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<AuthUserPermission, 'userId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly userId: string;
  readonly user?: User | null;
  readonly allowCourseCreation?: boolean | null;
  readonly email: string;
  readonly allowEduCares?: boolean | null;
  readonly phoneNumber: string;
  readonly altPhoneNum?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthUserPermission = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<AuthUserPermission, 'userId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly userId: string;
  readonly user: AsyncItem<User | undefined>;
  readonly allowCourseCreation?: boolean | null;
  readonly email: string;
  readonly allowEduCares?: boolean | null;
  readonly phoneNumber: string;
  readonly altPhoneNum?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AuthUserPermission = LazyLoading extends LazyLoadingDisabled ? EagerAuthUserPermission : LazyAuthUserPermission

export declare const AuthUserPermission: (new (init: ModelInit<AuthUserPermission>) => AuthUserPermission) & {
  copyOf(source: AuthUserPermission, mutator: (draft: MutableModel<AuthUserPermission>) => MutableModel<AuthUserPermission> | void): AuthUserPermission;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly name: string;
  readonly type: UserType | keyof typeof UserType;
  readonly address?: string | null;
  readonly pinCode?: number | null;
  readonly authInfo?: AuthInfo | null;
  readonly authUserPermission?: AuthUserPermission | null;
  readonly usersChats?: (UserChats | null)[] | null;
  readonly moderatorInChannels?: (UserChannelModerators | null)[] | null;
  readonly adminInGroups?: (UserGroupAdmins | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly name: string;
  readonly type: UserType | keyof typeof UserType;
  readonly address?: string | null;
  readonly pinCode?: number | null;
  readonly authInfo: AsyncItem<AuthInfo | undefined>;
  readonly authUserPermission: AsyncItem<AuthUserPermission | undefined>;
  readonly usersChats: AsyncCollection<UserChats>;
  readonly moderatorInChannels: AsyncCollection<UserChannelModerators>;
  readonly adminInGroups: AsyncCollection<UserGroupAdmins>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EageriCHAT = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<iCHAT, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly users?: (UserChats | null)[] | null;
  readonly type: ChatType | keyof typeof ChatType;
  readonly latestMessage?: iCHATMessage | null;
  readonly messages?: (iCHATMessage | null)[] | null;
  readonly channelInfo?: iCHATChannel | null;
  readonly groupInfo?: iCHATGroup | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly iCHATLatestMessageId?: string | null;
  readonly iCHATChannelInfoChatId?: string | null;
  readonly iCHATGroupInfoId?: string | null;
}

type LazyiCHAT = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<iCHAT, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly users: AsyncCollection<UserChats>;
  readonly type: ChatType | keyof typeof ChatType;
  readonly latestMessage: AsyncItem<iCHATMessage | undefined>;
  readonly messages: AsyncCollection<iCHATMessage>;
  readonly channelInfo: AsyncItem<iCHATChannel | undefined>;
  readonly groupInfo: AsyncItem<iCHATGroup | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly iCHATLatestMessageId?: string | null;
  readonly iCHATChannelInfoChatId?: string | null;
  readonly iCHATGroupInfoId?: string | null;
}

export declare type iCHAT = LazyLoading extends LazyLoadingDisabled ? EageriCHAT : LazyiCHAT

export declare const iCHAT: (new (init: ModelInit<iCHAT>) => iCHAT) & {
  copyOf(source: iCHAT, mutator: (draft: MutableModel<iCHAT>) => MutableModel<iCHAT> | void): iCHAT;
}

type EageriCHATChannel = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<iCHATChannel, 'chatId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly chatId: string;
  readonly chat?: iCHAT | null;
  readonly bio?: string | null;
  readonly image?: string | null;
  readonly backgroundImage?: string | null;
  readonly admin?: User | null;
  readonly moderators?: (UserChannelModerators | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly iCHATChannelAdminId?: string | null;
}

type LazyiCHATChannel = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<iCHATChannel, 'chatId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly chatId: string;
  readonly chat: AsyncItem<iCHAT | undefined>;
  readonly bio?: string | null;
  readonly image?: string | null;
  readonly backgroundImage?: string | null;
  readonly admin: AsyncItem<User | undefined>;
  readonly moderators: AsyncCollection<UserChannelModerators>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly iCHATChannelAdminId?: string | null;
}

export declare type iCHATChannel = LazyLoading extends LazyLoadingDisabled ? EageriCHATChannel : LazyiCHATChannel

export declare const iCHATChannel: (new (init: ModelInit<iCHATChannel>) => iCHATChannel) & {
  copyOf(source: iCHATChannel, mutator: (draft: MutableModel<iCHATChannel>) => MutableModel<iCHATChannel> | void): iCHATChannel;
}

type EageriCHATGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<iCHATGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly chatId: string;
  readonly chat?: iCHAT | null;
  readonly bio?: string | null;
  readonly image?: string | null;
  readonly backgroundImage?: string | null;
  readonly admins?: (UserGroupAdmins | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyiCHATGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<iCHATGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly chatId: string;
  readonly chat: AsyncItem<iCHAT | undefined>;
  readonly bio?: string | null;
  readonly image?: string | null;
  readonly backgroundImage?: string | null;
  readonly admins: AsyncCollection<UserGroupAdmins>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type iCHATGroup = LazyLoading extends LazyLoadingDisabled ? EageriCHATGroup : LazyiCHATGroup

export declare const iCHATGroup: (new (init: ModelInit<iCHATGroup>) => iCHATGroup) & {
  copyOf(source: iCHATGroup, mutator: (draft: MutableModel<iCHATGroup>) => MutableModel<iCHATGroup> | void): iCHATGroup;
}

type EageriCHATMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<iCHATMessage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender?: User | null;
  readonly content: string;
  readonly chatId: string;
  readonly chat?: iCHAT | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly iCHATMessageSenderId?: string | null;
}

type LazyiCHATMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<iCHATMessage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender: AsyncItem<User | undefined>;
  readonly content: string;
  readonly chatId: string;
  readonly chat: AsyncItem<iCHAT | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly iCHATMessageSenderId?: string | null;
}

export declare type iCHATMessage = LazyLoading extends LazyLoadingDisabled ? EageriCHATMessage : LazyiCHATMessage

export declare const iCHATMessage: (new (init: ModelInit<iCHATMessage>) => iCHATMessage) & {
  copyOf(source: iCHATMessage, mutator: (draft: MutableModel<iCHATMessage>) => MutableModel<iCHATMessage> | void): iCHATMessage;
}

type EagerUserChats = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChats, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly iCHATId?: string | null;
  readonly user: User;
  readonly iChat: iCHAT;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserChats = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChats, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly iCHATId?: string | null;
  readonly user: AsyncItem<User>;
  readonly iChat: AsyncItem<iCHAT>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserChats = LazyLoading extends LazyLoadingDisabled ? EagerUserChats : LazyUserChats

export declare const UserChats: (new (init: ModelInit<UserChats>) => UserChats) & {
  copyOf(source: UserChats, mutator: (draft: MutableModel<UserChats>) => MutableModel<UserChats> | void): UserChats;
}

type EagerUserChannelModerators = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChannelModerators, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly iCHATChannelChatId?: string | null;
  readonly user: User;
  readonly iChatChannel: iCHATChannel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserChannelModerators = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChannelModerators, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly iCHATChannelChatId?: string | null;
  readonly user: AsyncItem<User>;
  readonly iChatChannel: AsyncItem<iCHATChannel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserChannelModerators = LazyLoading extends LazyLoadingDisabled ? EagerUserChannelModerators : LazyUserChannelModerators

export declare const UserChannelModerators: (new (init: ModelInit<UserChannelModerators>) => UserChannelModerators) & {
  copyOf(source: UserChannelModerators, mutator: (draft: MutableModel<UserChannelModerators>) => MutableModel<UserChannelModerators> | void): UserChannelModerators;
}

type EagerUserGroupAdmins = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserGroupAdmins, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly iCHATGroupId?: string | null;
  readonly user: User;
  readonly iChatGroup: iCHATGroup;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserGroupAdmins = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserGroupAdmins, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly iCHATGroupId?: string | null;
  readonly user: AsyncItem<User>;
  readonly iChatGroup: AsyncItem<iCHATGroup>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserGroupAdmins = LazyLoading extends LazyLoadingDisabled ? EagerUserGroupAdmins : LazyUserGroupAdmins

export declare const UserGroupAdmins: (new (init: ModelInit<UserGroupAdmins>) => UserGroupAdmins) & {
  copyOf(source: UserGroupAdmins, mutator: (draft: MutableModel<UserGroupAdmins>) => MutableModel<UserGroupAdmins> | void): UserGroupAdmins;
}