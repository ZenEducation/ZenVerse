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
export const createApplicant = /* GraphQL */ `
  mutation CreateApplicant(
    $input: CreateApplicantInput!
    $condition: ModelApplicantConditionInput
  ) {
    createApplicant(input: $input, condition: $condition) {
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
export const updateApplicant = /* GraphQL */ `
  mutation UpdateApplicant(
    $input: UpdateApplicantInput!
    $condition: ModelApplicantConditionInput
  ) {
    updateApplicant(input: $input, condition: $condition) {
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
export const deleteApplicant = /* GraphQL */ `
  mutation DeleteApplicant(
    $input: DeleteApplicantInput!
    $condition: ModelApplicantConditionInput
  ) {
    deleteApplicant(input: $input, condition: $condition) {
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
