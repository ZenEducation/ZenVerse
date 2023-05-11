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
      jobs {
        items {
          id
          title
          description
          duties
          requirements
          niceToHave
          benefits
          jobLocation
          residenceAddress
          residenceCity
          jobType
          minSalary
          maxSalary
          minHourlyRate
          maxHourlyRate
          currencyForSalary
          createdAt
          updatedAt
          departmentJobsId
          applicantJobsId
        }
        nextToken
      }
      createdAt
      updatedAt
      jobDepartmentsId
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
      jobs {
        items {
          id
          title
          description
          duties
          requirements
          niceToHave
          benefits
          jobLocation
          residenceAddress
          residenceCity
          jobType
          minSalary
          maxSalary
          minHourlyRate
          maxHourlyRate
          currencyForSalary
          createdAt
          updatedAt
          departmentJobsId
          applicantJobsId
        }
        nextToken
      }
      createdAt
      updatedAt
      jobDepartmentsId
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
      jobs {
        items {
          id
          title
          description
          duties
          requirements
          niceToHave
          benefits
          jobLocation
          residenceAddress
          residenceCity
          jobType
          minSalary
          maxSalary
          minHourlyRate
          maxHourlyRate
          currencyForSalary
          createdAt
          updatedAt
          departmentJobsId
          applicantJobsId
        }
        nextToken
      }
      createdAt
      updatedAt
      jobDepartmentsId
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
      jobLocation
      residenceAddress
      residenceCity
      jobType
      minSalary
      maxSalary
      minHourlyRate
      maxHourlyRate
      currencyForSalary
      departments {
        items {
          id
          name
          description
          logoUri
          createdAt
          updatedAt
          jobDepartmentsId
        }
        nextToken
      }
      applicants {
        items {
          id
          name
          email
          mobile
          cover
          resumeUri
          createdAt
          updatedAt
          jobApplicantsId
        }
        nextToken
      }
      createdAt
      updatedAt
      departmentJobsId
      applicantJobsId
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
      jobLocation
      residenceAddress
      residenceCity
      jobType
      minSalary
      maxSalary
      minHourlyRate
      maxHourlyRate
      currencyForSalary
      departments {
        items {
          id
          name
          description
          logoUri
          createdAt
          updatedAt
          jobDepartmentsId
        }
        nextToken
      }
      applicants {
        items {
          id
          name
          email
          mobile
          cover
          resumeUri
          createdAt
          updatedAt
          jobApplicantsId
        }
        nextToken
      }
      createdAt
      updatedAt
      departmentJobsId
      applicantJobsId
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
      jobLocation
      residenceAddress
      residenceCity
      jobType
      minSalary
      maxSalary
      minHourlyRate
      maxHourlyRate
      currencyForSalary
      departments {
        items {
          id
          name
          description
          logoUri
          createdAt
          updatedAt
          jobDepartmentsId
        }
        nextToken
      }
      applicants {
        items {
          id
          name
          email
          mobile
          cover
          resumeUri
          createdAt
          updatedAt
          jobApplicantsId
        }
        nextToken
      }
      createdAt
      updatedAt
      departmentJobsId
      applicantJobsId
    }
  }
`;
export const onCreateApplicant = /* GraphQL */ `
  subscription OnCreateApplicant(
    $filter: ModelSubscriptionApplicantFilterInput
  ) {
    onCreateApplicant(filter: $filter) {
      id
      name
      email
      mobile
      cover
      resumeUri
      jobs {
        items {
          id
          title
          description
          duties
          requirements
          niceToHave
          benefits
          jobLocation
          residenceAddress
          residenceCity
          jobType
          minSalary
          maxSalary
          minHourlyRate
          maxHourlyRate
          currencyForSalary
          createdAt
          updatedAt
          departmentJobsId
          applicantJobsId
        }
        nextToken
      }
      createdAt
      updatedAt
      jobApplicantsId
    }
  }
`;
export const onUpdateApplicant = /* GraphQL */ `
  subscription OnUpdateApplicant(
    $filter: ModelSubscriptionApplicantFilterInput
  ) {
    onUpdateApplicant(filter: $filter) {
      id
      name
      email
      mobile
      cover
      resumeUri
      jobs {
        items {
          id
          title
          description
          duties
          requirements
          niceToHave
          benefits
          jobLocation
          residenceAddress
          residenceCity
          jobType
          minSalary
          maxSalary
          minHourlyRate
          maxHourlyRate
          currencyForSalary
          createdAt
          updatedAt
          departmentJobsId
          applicantJobsId
        }
        nextToken
      }
      createdAt
      updatedAt
      jobApplicantsId
    }
  }
`;
export const onDeleteApplicant = /* GraphQL */ `
  subscription OnDeleteApplicant(
    $filter: ModelSubscriptionApplicantFilterInput
  ) {
    onDeleteApplicant(filter: $filter) {
      id
      name
      email
      mobile
      cover
      resumeUri
      jobs {
        items {
          id
          title
          description
          duties
          requirements
          niceToHave
          benefits
          jobLocation
          residenceAddress
          residenceCity
          jobType
          minSalary
          maxSalary
          minHourlyRate
          maxHourlyRate
          currencyForSalary
          createdAt
          updatedAt
          departmentJobsId
          applicantJobsId
        }
        nextToken
      }
      createdAt
      updatedAt
      jobApplicantsId
    }
  }
`;
