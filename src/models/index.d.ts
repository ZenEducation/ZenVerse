import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTestimonialData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestimonialData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testiminial_no?: string | null;
  readonly student_name?: string | null;
  readonly sub_title?: string | null;
  readonly category?: string | null;
  readonly content?: string | null;
  readonly profilePicKey?: string | null;
  readonly publishDate?: string | null;
  readonly isPublished?: boolean | null;
  readonly youtubeURL?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestimonialData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestimonialData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testiminial_no?: string | null;
  readonly student_name?: string | null;
  readonly sub_title?: string | null;
  readonly category?: string | null;
  readonly content?: string | null;
  readonly profilePicKey?: string | null;
  readonly publishDate?: string | null;
  readonly isPublished?: boolean | null;
  readonly youtubeURL?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestimonialData = LazyLoading extends LazyLoadingDisabled ? EagerTestimonialData : LazyTestimonialData

export declare const TestimonialData: (new (init: ModelInit<TestimonialData>) => TestimonialData) & {
  copyOf(source: TestimonialData, mutator: (draft: MutableModel<TestimonialData>) => MutableModel<TestimonialData> | void): TestimonialData;
}