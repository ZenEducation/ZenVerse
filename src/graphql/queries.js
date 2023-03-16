/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
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
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
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
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const jobsByJobDepartmentIdAndJobId = /* GraphQL */ `
  query JobsByJobDepartmentIdAndJobId(
    $jobDepartmentId: ID!
    $jobId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    jobsByJobDepartmentIdAndJobId(
      jobDepartmentId: $jobDepartmentId
      jobId: $jobId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getApplicant = /* GraphQL */ `
  query GetApplicant($id: ID!) {
    getApplicant(id: $id) {
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
export const listApplicants = /* GraphQL */ `
  query ListApplicants(
    $filter: ModelApplicantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApplicants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          jobDepartmentId
          id
          updatedAt
        }
        applicantJobId
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const applicantsByApplicantJobIdAndApplicantId = /* GraphQL */ `
  query ApplicantsByApplicantJobIdAndApplicantId(
    $applicantJobId: ID!
    $applicantId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelApplicantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    applicantsByApplicantJobIdAndApplicantId(
      applicantJobId: $applicantJobId
      applicantId: $applicantId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          jobDepartmentId
          id
          updatedAt
        }
        applicantJobId
        id
        updatedAt
      }
      nextToken
    }
  }
`;
