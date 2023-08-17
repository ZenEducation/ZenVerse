import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





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