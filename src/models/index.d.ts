import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerVariablePricing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VariablePricing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly days?: number | null;
  readonly price?: number | null;
  readonly discountPrice?: number | null;
  readonly mocktestID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVariablePricing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VariablePricing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly days?: number | null;
  readonly price?: number | null;
  readonly discountPrice?: number | null;
  readonly mocktestID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VariablePricing = LazyLoading extends LazyLoadingDisabled ? EagerVariablePricing : LazyVariablePricing

export declare const VariablePricing: (new (init: ModelInit<VariablePricing>) => VariablePricing) & {
  copyOf(source: VariablePricing, mutator: (draft: MutableModel<VariablePricing>) => MutableModel<VariablePricing> | void): VariablePricing;
}

type EagerMockTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MockTest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly shortId?: string | null;
  readonly isFree?: boolean | null;
  readonly publishingDate?: string | null;
  readonly publishingStatus?: string | null;
  readonly description?: string | null;
  readonly shortDescription?: string | null;
  readonly price?: number | null;
  readonly discount?: number | null;
  readonly isValidityDays?: boolean | null;
  readonly validityDays?: number | null;
  readonly expiryDate?: string | null;
  readonly VariablePricings?: (VariablePricing | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMockTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MockTest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly shortId?: string | null;
  readonly isFree?: boolean | null;
  readonly publishingDate?: string | null;
  readonly publishingStatus?: string | null;
  readonly description?: string | null;
  readonly shortDescription?: string | null;
  readonly price?: number | null;
  readonly discount?: number | null;
  readonly isValidityDays?: boolean | null;
  readonly validityDays?: number | null;
  readonly expiryDate?: string | null;
  readonly VariablePricings: AsyncCollection<VariablePricing>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MockTest = LazyLoading extends LazyLoadingDisabled ? EagerMockTest : LazyMockTest

export declare const MockTest: (new (init: ModelInit<MockTest>) => MockTest) & {
  copyOf(source: MockTest, mutator: (draft: MutableModel<MockTest>) => MutableModel<MockTest> | void): MockTest;
}

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
  readonly role?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
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
  readonly role?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
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
  readonly role?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
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
  readonly role?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
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
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly role: string;
  readonly password?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
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
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly role: string;
  readonly password?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
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
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly password?: string | null;
  readonly role?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
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
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly password?: string | null;
  readonly role?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Instructor = LazyLoading extends LazyLoadingDisabled ? EagerInstructor : LazyInstructor

export declare const Instructor: (new (init: ModelInit<Instructor>) => Instructor) & {
  copyOf(source: Instructor, mutator: (draft: MutableModel<Instructor>) => MutableModel<Instructor> | void): Instructor;
}