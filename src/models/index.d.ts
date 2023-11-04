import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerAcademics = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Academics, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly physics?: (string | null)[] | null;
  readonly biology?: (string | null)[] | null;
  readonly chemistry?: (string | null)[] | null;
  readonly mathematics?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAcademics = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Academics, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly physics?: (string | null)[] | null;
  readonly biology?: (string | null)[] | null;
  readonly chemistry?: (string | null)[] | null;
  readonly mathematics?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Academics = LazyLoading extends LazyLoadingDisabled ? EagerAcademics : LazyAcademics

export declare const Academics: (new (init: ModelInit<Academics>) => Academics) & {
  copyOf(source: Academics, mutator: (draft: MutableModel<Academics>) => MutableModel<Academics> | void): Academics;
}