/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVariablePricing = /* GraphQL */ `
  subscription OnCreateVariablePricing(
    $filter: ModelSubscriptionVariablePricingFilterInput
  ) {
    onCreateVariablePricing(filter: $filter) {
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
export const onUpdateVariablePricing = /* GraphQL */ `
  subscription OnUpdateVariablePricing(
    $filter: ModelSubscriptionVariablePricingFilterInput
  ) {
    onUpdateVariablePricing(filter: $filter) {
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
export const onDeleteVariablePricing = /* GraphQL */ `
  subscription OnDeleteVariablePricing(
    $filter: ModelSubscriptionVariablePricingFilterInput
  ) {
    onDeleteVariablePricing(filter: $filter) {
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
export const onCreateMockTest = /* GraphQL */ `
  subscription OnCreateMockTest($filter: ModelSubscriptionMockTestFilterInput) {
    onCreateMockTest(filter: $filter) {
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
export const onUpdateMockTest = /* GraphQL */ `
  subscription OnUpdateMockTest($filter: ModelSubscriptionMockTestFilterInput) {
    onUpdateMockTest(filter: $filter) {
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
export const onDeleteMockTest = /* GraphQL */ `
  subscription OnDeleteMockTest($filter: ModelSubscriptionMockTestFilterInput) {
    onDeleteMockTest(filter: $filter) {
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
export const onCreateLearner = /* GraphQL */ `
  subscription OnCreateLearner($filter: ModelSubscriptionLearnerFilterInput) {
    onCreateLearner(filter: $filter) {
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
export const onUpdateLearner = /* GraphQL */ `
  subscription OnUpdateLearner($filter: ModelSubscriptionLearnerFilterInput) {
    onUpdateLearner(filter: $filter) {
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
export const onDeleteLearner = /* GraphQL */ `
  subscription OnDeleteLearner($filter: ModelSubscriptionLearnerFilterInput) {
    onDeleteLearner(filter: $filter) {
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
export const onCreateAffiliate = /* GraphQL */ `
  subscription OnCreateAffiliate(
    $filter: ModelSubscriptionAffiliateFilterInput
  ) {
    onCreateAffiliate(filter: $filter) {
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
export const onUpdateAffiliate = /* GraphQL */ `
  subscription OnUpdateAffiliate(
    $filter: ModelSubscriptionAffiliateFilterInput
  ) {
    onUpdateAffiliate(filter: $filter) {
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
export const onDeleteAffiliate = /* GraphQL */ `
  subscription OnDeleteAffiliate(
    $filter: ModelSubscriptionAffiliateFilterInput
  ) {
    onDeleteAffiliate(filter: $filter) {
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
export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onCreateAdmin(filter: $filter) {
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
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onUpdateAdmin(filter: $filter) {
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
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onDeleteAdmin(filter: $filter) {
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
export const onCreateInstructor = /* GraphQL */ `
  subscription OnCreateInstructor(
    $filter: ModelSubscriptionInstructorFilterInput
  ) {
    onCreateInstructor(filter: $filter) {
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
export const onUpdateInstructor = /* GraphQL */ `
  subscription OnUpdateInstructor(
    $filter: ModelSubscriptionInstructorFilterInput
  ) {
    onUpdateInstructor(filter: $filter) {
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
export const onDeleteInstructor = /* GraphQL */ `
  subscription OnDeleteInstructor(
    $filter: ModelSubscriptionInstructorFilterInput
  ) {
    onDeleteInstructor(filter: $filter) {
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
