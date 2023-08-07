/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLearner = /* GraphQL */ `
  mutation CreateLearner(
    $input: CreateLearnerInput!
    $condition: ModelLearnerConditionInput
  ) {
    createLearner(input: $input, condition: $condition) {
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
export const updateLearner = /* GraphQL */ `
  mutation UpdateLearner(
    $input: UpdateLearnerInput!
    $condition: ModelLearnerConditionInput
  ) {
    updateLearner(input: $input, condition: $condition) {
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
export const deleteLearner = /* GraphQL */ `
  mutation DeleteLearner(
    $input: DeleteLearnerInput!
    $condition: ModelLearnerConditionInput
  ) {
    deleteLearner(input: $input, condition: $condition) {
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
