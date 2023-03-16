/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onCreateDepartment(filter: $filter) {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onUpdateDepartment(filter: $filter) {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onDeleteDepartment(filter: $filter) {
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
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob($filter: ModelSubscriptionJobFilterInput) {
    onCreateJob(filter: $filter) {
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
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob($filter: ModelSubscriptionJobFilterInput) {
    onUpdateJob(filter: $filter) {
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
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob($filter: ModelSubscriptionJobFilterInput) {
    onDeleteJob(filter: $filter) {
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
export const onCreateApplicant = /* GraphQL */ `
  subscription OnCreateApplicant(
    $filter: ModelSubscriptionApplicantFilterInput
  ) {
    onCreateApplicant(filter: $filter) {
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
export const onUpdateApplicant = /* GraphQL */ `
  subscription OnUpdateApplicant(
    $filter: ModelSubscriptionApplicantFilterInput
  ) {
    onUpdateApplicant(filter: $filter) {
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
export const onDeleteApplicant = /* GraphQL */ `
  subscription OnDeleteApplicant(
    $filter: ModelSubscriptionApplicantFilterInput
  ) {
    onDeleteApplicant(filter: $filter) {
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
