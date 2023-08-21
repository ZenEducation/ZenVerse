import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum JobType {
  FULL_TIME = "FULL_TIME",
  HALF_TIME = "HALF_TIME",
  PART_TIME = "PART_TIME",
  INTERNSHIP = "INTERNSHIP"
}

export enum JobMode {
  ONSITE = "ONSITE",
  REMOTE = "REMOTE",
  HYBRID = "HYBRID"
}



type EagerDepartment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Department, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly logoUri?: string | null;
  readonly createdAt?: string | null;
  readonly jobs?: (Job | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyDepartment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Department, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly logoUri?: string | null;
  readonly createdAt?: string | null;
  readonly jobs: AsyncCollection<Job>;
  readonly updatedAt?: string | null;
}

export declare type Department = LazyLoading extends LazyLoadingDisabled ? EagerDepartment : LazyDepartment

export declare const Department: (new (init: ModelInit<Department>) => Department) & {
  copyOf(source: Department, mutator: (draft: MutableModel<Department>) => MutableModel<Department> | void): Department;
}

type EagerJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Job, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly duties: string;
  readonly requirements: string;
  readonly niceToHave: string;
  readonly benefits: string;
  readonly minSalary?: number | null;
  readonly maxSalary?: number | null;
  readonly jobType: JobType | keyof typeof JobType;
  readonly jobMode: JobMode | keyof typeof JobMode;
  readonly location?: string | null;
  readonly createdAt?: string | null;
  readonly departmentId: string;
  readonly department: Department;
  readonly jobDepartmentId: string;
  readonly updatedAt?: string | null;
}

type LazyJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Job, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly duties: string;
  readonly requirements: string;
  readonly niceToHave: string;
  readonly benefits: string;
  readonly minSalary?: number | null;
  readonly maxSalary?: number | null;
  readonly jobType: JobType | keyof typeof JobType;
  readonly jobMode: JobMode | keyof typeof JobMode;
  readonly location?: string | null;
  readonly createdAt?: string | null;
  readonly departmentId: string;
  readonly department: AsyncItem<Department>;
  readonly jobDepartmentId: string;
  readonly updatedAt?: string | null;
}

export declare type Job = LazyLoading extends LazyLoadingDisabled ? EagerJob : LazyJob

export declare const Job: (new (init: ModelInit<Job>) => Job) & {
  copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}