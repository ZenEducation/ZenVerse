/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
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
        jobs {
          nextToken
        }
        createdAt
        updatedAt
        jobDepartmentsId
      }
      nextToken
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
          nextToken
        }
        applicants {
          nextToken
        }
        createdAt
        updatedAt
        departmentJobsId
        applicantJobsId
      }
      nextToken
    }
  }
`;
export const getApplicant = /* GraphQL */ `
  query GetApplicant($id: ID!) {
    getApplicant(id: $id) {
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
export const listApplicants = /* GraphQL */ `
  query ListApplicants(
    $filter: ModelApplicantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApplicants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        mobile
        cover
        resumeUri
        jobs {
          nextToken
        }
        createdAt
        updatedAt
        jobApplicantsId
      }
      nextToken
    }
  }
`;
