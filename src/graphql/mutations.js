/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
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
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
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
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
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
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
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
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
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
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
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
