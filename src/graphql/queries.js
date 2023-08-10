/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVariablePricing = /* GraphQL */ `
  query GetVariablePricing($id: ID!) {
    getVariablePricing(id: $id) {
      id
      days
      price
      discountPrice
      mocktestID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listVariablePricings = /* GraphQL */ `
  query ListVariablePricings(
    $filter: ModelVariablePricingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVariablePricings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        days
        price
        discountPrice
        mocktestID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncVariablePricings = /* GraphQL */ `
  query SyncVariablePricings(
    $filter: ModelVariablePricingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVariablePricings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        days
        price
        discountPrice
        mocktestID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const variablePricingsByMocktestID = /* GraphQL */ `
  query VariablePricingsByMocktestID(
    $mocktestID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVariablePricingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    variablePricingsByMocktestID(
      mocktestID: $mocktestID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        days
        price
        discountPrice
        mocktestID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMockTest = /* GraphQL */ `
  query GetMockTest($id: ID!) {
    getMockTest(id: $id) {
      id
      name
      shortId
      isFree
      publishingDate
      publishingStatus
      description
      shortDescription
      price
      discount
      isValidityDays
      validityDays
      expiryDate
      VariablePricings {
        items {
          id
          days
          price
          discountPrice
          mocktestID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listMockTests = /* GraphQL */ `
  query ListMockTests(
    $filter: ModelMockTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMockTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        shortId
        isFree
        publishingDate
        publishingStatus
        description
        shortDescription
        price
        discount
        isValidityDays
        validityDays
        expiryDate
        VariablePricings {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMockTests = /* GraphQL */ `
  query SyncMockTests(
    $filter: ModelMockTestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMockTests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        shortId
        isFree
        publishingDate
        publishingStatus
        description
        shortDescription
        price
        discount
        isValidityDays
        validityDays
        expiryDate
        VariablePricings {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getLearner = /* GraphQL */ `
  query GetLearner($id: ID!) {
    getLearner(id: $id) {
      id
      name
      email
      mobile
      lastLogin
      joinedOn
      isEnabled
      products
      leadStatus
      userSegment
      password
      role
      state
      language
      userNote
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listLearners = /* GraphQL */ `
  query ListLearners(
    $filter: ModelLearnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLearners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        password
        role
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncLearners = /* GraphQL */ `
  query SyncLearners(
    $filter: ModelLearnerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLearners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        password
        role
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAffiliate = /* GraphQL */ `
  query GetAffiliate($id: ID!) {
    getAffiliate(id: $id) {
      id
      name
      email
      mobile
      lastLogin
      joinedOn
      isEnabled
      products
      leadStatus
      userSegment
      commitionRate
      isLifelong
      password
      role
      state
      language
      userNote
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAffiliates = /* GraphQL */ `
  query ListAffiliates(
    $filter: ModelAffiliateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAffiliates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        commitionRate
        isLifelong
        password
        role
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAffiliates = /* GraphQL */ `
  query SyncAffiliates(
    $filter: ModelAffiliateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAffiliates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        commitionRate
        isLifelong
        password
        role
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAdmin = /* GraphQL */ `
  query GetAdmin($id: ID!) {
    getAdmin(id: $id) {
      id
      name
      email
      mobile
      lastLogin
      joinedOn
      isEnabled
      products
      leadStatus
      userSegment
      role
      password
      state
      language
      userNote
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAdmins = /* GraphQL */ `
  query ListAdmins(
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        role
        password
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAdmins = /* GraphQL */ `
  query SyncAdmins(
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAdmins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        role
        password
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getInstructor = /* GraphQL */ `
  query GetInstructor($id: ID!) {
    getInstructor(id: $id) {
      id
      name
      email
      mobile
      lastLogin
      joinedOn
      isEnabled
      products
      leadStatus
      userSegment
      password
      role
      state
      language
      userNote
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listInstructors = /* GraphQL */ `
  query ListInstructors(
    $filter: ModelInstructorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        password
        role
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncInstructors = /* GraphQL */ `
  query SyncInstructors(
    $filter: ModelInstructorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInstructors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        password
        role
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
