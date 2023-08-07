/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
