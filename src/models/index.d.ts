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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Learner = LazyLoading extends LazyLoadingDisabled ? EagerLearner : LazyLearner

export declare const Learner: (new (init: ModelInit<Learner>) => Learner) & {
  copyOf(source: Learner, mutator: (draft: MutableModel<Learner>) => MutableModel<Learner> | void): Learner;
}