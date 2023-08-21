/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
      id
      name
      description
      logoUri
      createdAt
      jobs {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        logoUri
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
      id
      title
      description
      duties
      requirements
      niceToHave
      benefits
      minSalary
      maxSalary
      jobType
      jobMode
      location
      createdAt
      departmentId
      department {
        id
        name
        description
        logoUri
        createdAt
        updatedAt
        __typename
      }
      jobDepartmentId
      updatedAt
      __typename
    }
  }
`;
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        duties
        requirements
        niceToHave
        benefits
        minSalary
        maxSalary
        jobType
        jobMode
        location
        createdAt
        departmentId
        jobDepartmentId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const jobsByJobDepartmentIdAndId = /* GraphQL */ `
  query JobsByJobDepartmentIdAndId(
    $jobDepartmentId: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    jobsByJobDepartmentIdAndId(
      jobDepartmentId: $jobDepartmentId
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        duties
        requirements
        niceToHave
        benefits
        minSalary
        maxSalary
        jobType
        jobMode
        location
        createdAt
        departmentId
        jobDepartmentId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
