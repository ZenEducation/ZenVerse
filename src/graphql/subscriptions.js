/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onCreateDepartment(filter: $filter) {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onUpdateDepartment(filter: $filter) {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onDeleteDepartment(filter: $filter) {
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
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob($filter: ModelSubscriptionJobFilterInput) {
    onCreateJob(filter: $filter) {
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
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob($filter: ModelSubscriptionJobFilterInput) {
    onUpdateJob(filter: $filter) {
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
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob($filter: ModelSubscriptionJobFilterInput) {
    onDeleteJob(filter: $filter) {
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
