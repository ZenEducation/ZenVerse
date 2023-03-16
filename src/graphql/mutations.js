/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
      departmentId
      name
      description
      logoUri
      createdAt
      jobs {
        items {
          jobId
          title
          description
          duties
          requirements
          niceToHave
          jobLocation
          location
          jobType
          minSalary
          maxSalary
          currencyForSalary
          createdAt
          jobDepartmentId
          id
          updatedAt
        }
        nextToken
      }
      id
      updatedAt
    }
  }
`;
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
      departmentId
      name
      description
      logoUri
      createdAt
      jobs {
        items {
          jobId
          title
          description
          duties
          requirements
          niceToHave
          jobLocation
          location
          jobType
          minSalary
          maxSalary
          currencyForSalary
          createdAt
          jobDepartmentId
          id
          updatedAt
        }
        nextToken
      }
      id
      updatedAt
    }
  }
`;
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
      departmentId
      name
      description
      logoUri
      createdAt
      jobs {
        items {
          jobId
          title
          description
          duties
          requirements
          niceToHave
          jobLocation
          location
          jobType
          minSalary
          maxSalary
          currencyForSalary
          createdAt
          jobDepartmentId
          id
          updatedAt
        }
        nextToken
      }
      id
      updatedAt
    }
  }
`;
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
      jobId
      title
      description
      duties
      requirements
      niceToHave
      jobLocation
      location
      jobType
      minSalary
      maxSalary
      currencyForSalary
      createdAt
      department {
        departmentId
        name
        description
        logoUri
        createdAt
        jobs {
          nextToken
        }
        id
        updatedAt
      }
      jobDepartmentId
      applicants {
        items {
          applicantId
          name
          email
          mobile
          cover
          resumeUri
          createdAt
          applicantJobId
          id
          updatedAt
        }
        nextToken
      }
      id
      updatedAt
    }
  }
`;
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
      jobId
      title
      description
      duties
      requirements
      niceToHave
      jobLocation
      location
      jobType
      minSalary
      maxSalary
      currencyForSalary
      createdAt
      department {
        departmentId
        name
        description
        logoUri
        createdAt
        jobs {
          nextToken
        }
        id
        updatedAt
      }
      jobDepartmentId
      applicants {
        items {
          applicantId
          name
          email
          mobile
          cover
          resumeUri
          createdAt
          applicantJobId
          id
          updatedAt
        }
        nextToken
      }
      id
      updatedAt
    }
  }
`;
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
      jobId
      title
      description
      duties
      requirements
      niceToHave
      jobLocation
      location
      jobType
      minSalary
      maxSalary
      currencyForSalary
      createdAt
      department {
        departmentId
        name
        description
        logoUri
        createdAt
        jobs {
          nextToken
        }
        id
        updatedAt
      }
      jobDepartmentId
      applicants {
        items {
          applicantId
          name
          email
          mobile
          cover
          resumeUri
          createdAt
          applicantJobId
          id
          updatedAt
        }
        nextToken
      }
      id
      updatedAt
    }
  }
`;
export const createApplicant = /* GraphQL */ `
  mutation CreateApplicant(
    $input: CreateApplicantInput!
    $condition: ModelApplicantConditionInput
  ) {
    createApplicant(input: $input, condition: $condition) {
      applicantId
      name
      email
      mobile
      cover
      resumeUri
      createdAt
      job {
        jobId
        title
        description
        duties
        requirements
        niceToHave
        jobLocation
        location
        jobType
        minSalary
        maxSalary
        currencyForSalary
        createdAt
        department {
          departmentId
          name
          description
          logoUri
          createdAt
          id
          updatedAt
        }
        jobDepartmentId
        applicants {
          nextToken
        }
        id
        updatedAt
      }
      applicantJobId
      id
      updatedAt
    }
  }
`;
export const updateApplicant = /* GraphQL */ `
  mutation UpdateApplicant(
    $input: UpdateApplicantInput!
    $condition: ModelApplicantConditionInput
  ) {
    updateApplicant(input: $input, condition: $condition) {
      applicantId
      name
      email
      mobile
      cover
      resumeUri
      createdAt
      job {
        jobId
        title
        description
        duties
        requirements
        niceToHave
        jobLocation
        location
        jobType
        minSalary
        maxSalary
        currencyForSalary
        createdAt
        department {
          departmentId
          name
          description
          logoUri
          createdAt
          id
          updatedAt
        }
        jobDepartmentId
        applicants {
          nextToken
        }
        id
        updatedAt
      }
      applicantJobId
      id
      updatedAt
    }
  }
`;
export const deleteApplicant = /* GraphQL */ `
  mutation DeleteApplicant(
    $input: DeleteApplicantInput!
    $condition: ModelApplicantConditionInput
  ) {
    deleteApplicant(input: $input, condition: $condition) {
      applicantId
      name
      email
      mobile
      cover
      resumeUri
      createdAt
      job {
        jobId
        title
        description
        duties
        requirements
        niceToHave
        jobLocation
        location
        jobType
        minSalary
        maxSalary
        currencyForSalary
        createdAt
        department {
          departmentId
          name
          description
          logoUri
          createdAt
          id
          updatedAt
        }
        jobDepartmentId
        applicants {
          nextToken
        }
        id
        updatedAt
      }
      applicantJobId
      id
      updatedAt
    }
  }
`;
