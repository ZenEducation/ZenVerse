import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerLearner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Learner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLearner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Learner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Learner = LazyLoading extends LazyLoadingDisabled ? EagerLearner : LazyLearner

export declare const Learner: (new (init: ModelInit<Learner>) => Learner) & {
  copyOf(source: Learner, mutator: (draft: MutableModel<Learner>) => MutableModel<Learner> | void): Learner;
}

type EagerAffiliate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Affiliate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly commitionRate?: number | null;
  readonly isLifelong?: boolean | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAffiliate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Affiliate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly commitionRate?: number | null;
  readonly isLifelong?: boolean | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Affiliate = LazyLoading extends LazyLoadingDisabled ? EagerAffiliate : LazyAffiliate

export declare const Affiliate: (new (init: ModelInit<Affiliate>) => Affiliate) & {
  copyOf(source: Affiliate, mutator: (draft: MutableModel<Affiliate>) => MutableModel<Affiliate> | void): Affiliate;
}

type EagerAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly role: string;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly role: string;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Admin = LazyLoading extends LazyLoadingDisabled ? EagerAdmin : LazyAdmin

export declare const Admin: (new (init: ModelInit<Admin>) => Admin) & {
  copyOf(source: Admin, mutator: (draft: MutableModel<Admin>) => MutableModel<Admin> | void): Admin;
}

type EagerInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Instructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Instructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Instructor = LazyLoading extends LazyLoadingDisabled ? EagerInstructor : LazyInstructor

export declare const Instructor: (new (init: ModelInit<Instructor>) => Instructor) & {
  copyOf(source: Instructor, mutator: (draft: MutableModel<Instructor>) => MutableModel<Instructor> | void): Instructor;
}