import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fname: string;
  readonly lname: string;
  readonly title?: string | null;
  readonly email?: string | null;
  readonly company_name: string;
  readonly phone: string;
  readonly description?: string | null;
  readonly street?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly zip?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fname: string;
  readonly lname: string;
  readonly title?: string | null;
  readonly email?: string | null;
  readonly company_name: string;
  readonly phone: string;
  readonly description?: string | null;
  readonly street?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly zip?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Contact = LazyLoading extends LazyLoadingDisabled ? EagerContact : LazyContact

export declare const Contact: (new (init: ModelInit<Contact>) => Contact) & {
  copyOf(source: Contact, mutator: (draft: MutableModel<Contact>) => MutableModel<Contact> | void): Contact;
}

type EagerCompanies = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Companies, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly website: string;
  readonly description?: string | null;
  readonly street?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly zip?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompanies = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Companies, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly website: string;
  readonly description?: string | null;
  readonly street?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly zip?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Companies = LazyLoading extends LazyLoadingDisabled ? EagerCompanies : LazyCompanies

export declare const Companies: (new (init: ModelInit<Companies>) => Companies) & {
  copyOf(source: Companies, mutator: (draft: MutableModel<Companies>) => MutableModel<Companies> | void): Companies;
}

type EagerProducts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Products, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly code?: string | null;
  readonly category: string;
  readonly unit_price?: number | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProducts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Products, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly code?: string | null;
  readonly category: string;
  readonly unit_price?: number | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Products = LazyLoading extends LazyLoadingDisabled ? EagerProducts : LazyProducts

export declare const Products: (new (init: ModelInit<Products>) => Products) & {
  copyOf(source: Products, mutator: (draft: MutableModel<Products>) => MutableModel<Products> | void): Products;
}

type EagerCalls = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Calls, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly to_from: string;
  readonly start_date: string;
  readonly start_time: string;
  readonly type?: string | null;
  readonly related_to?: string | null;
  readonly agenda?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCalls = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Calls, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly to_from: string;
  readonly start_date: string;
  readonly start_time: string;
  readonly type?: string | null;
  readonly related_to?: string | null;
  readonly agenda?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Calls = LazyLoading extends LazyLoadingDisabled ? EagerCalls : LazyCalls

export declare const Calls: (new (init: ModelInit<Calls>) => Calls) & {
  copyOf(source: Calls, mutator: (draft: MutableModel<Calls>) => MutableModel<Calls> | void): Calls;
}

type EagerEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Events, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly from_date: string;
  readonly from_time: string;
  readonly to_date: string;
  readonly to_time: string;
  readonly location?: string | null;
  readonly related_to?: string | null;
  readonly participants?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Events, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly from_date: string;
  readonly from_time: string;
  readonly to_date: string;
  readonly to_time: string;
  readonly location?: string | null;
  readonly related_to?: string | null;
  readonly participants?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Events = LazyLoading extends LazyLoadingDisabled ? EagerEvents : LazyEvents

export declare const Events: (new (init: ModelInit<Events>) => Events) & {
  copyOf(source: Events, mutator: (draft: MutableModel<Events>) => MutableModel<Events> | void): Events;
}

type EagerTasks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tasks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly due_date?: string | null;
  readonly status: string;
  readonly priority: string;
  readonly related_to?: string | null;
  readonly task_owner: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTasks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tasks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly due_date?: string | null;
  readonly status: string;
  readonly priority: string;
  readonly related_to?: string | null;
  readonly task_owner: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tasks = LazyLoading extends LazyLoadingDisabled ? EagerTasks : LazyTasks

export declare const Tasks: (new (init: ModelInit<Tasks>) => Tasks) & {
  copyOf(source: Tasks, mutator: (draft: MutableModel<Tasks>) => MutableModel<Tasks> | void): Tasks;
}

type EagerDeals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Deals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dealName: string;
  readonly companyName: string;
  readonly summary: string;
  readonly amount: number;
  readonly currency: string;
  readonly status: string;
  readonly pipeline: string;
  readonly stage: string;
  readonly source: string;
  readonly owner: string;
  readonly primaryContact: string;
  readonly weightedForecast: number;
  readonly probability: number;
  readonly expectedClose: string;
  readonly revenueType: string;
  readonly dealPerformanceLane: string;
  readonly productInterest: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDeals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Deals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dealName: string;
  readonly companyName: string;
  readonly summary: string;
  readonly amount: number;
  readonly currency: string;
  readonly status: string;
  readonly pipeline: string;
  readonly stage: string;
  readonly source: string;
  readonly owner: string;
  readonly primaryContact: string;
  readonly weightedForecast: number;
  readonly probability: number;
  readonly expectedClose: string;
  readonly revenueType: string;
  readonly dealPerformanceLane: string;
  readonly productInterest: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Deals = LazyLoading extends LazyLoadingDisabled ? EagerDeals : LazyDeals

export declare const Deals: (new (init: ModelInit<Deals>) => Deals) & {
  copyOf(source: Deals, mutator: (draft: MutableModel<Deals>) => MutableModel<Deals> | void): Deals;
}