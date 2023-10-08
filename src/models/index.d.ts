import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerOfferLater = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OfferLater, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly OfferLaterNo: string;
  readonly Name: string;
  readonly Designation: string;
  readonly Salary: number;
  readonly perTaskorHour: string;
  readonly Email: string;
  readonly AdditionalConditions: string;
  readonly isSended: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOfferLater = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OfferLater, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly OfferLaterNo: string;
  readonly Name: string;
  readonly Designation: string;
  readonly Salary: number;
  readonly perTaskorHour: string;
  readonly Email: string;
  readonly AdditionalConditions: string;
  readonly isSended: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OfferLater = LazyLoading extends LazyLoadingDisabled ? EagerOfferLater : LazyOfferLater

export declare const OfferLater: (new (init: ModelInit<OfferLater>) => OfferLater) & {
  copyOf(source: OfferLater, mutator: (draft: MutableModel<OfferLater>) => MutableModel<OfferLater> | void): OfferLater;
}