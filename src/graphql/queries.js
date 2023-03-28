/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlogPost = /* GraphQL */ `
  query GetBlogPost($id: ID!) {
    getBlogPost(id: $id) {
      id
      title
      content
      category {
        id
        name
        isDeleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      comment {
        items {
          id
          content
          isDeleted
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          blogPostCommentId
        }
        nextToken
        startedAt
      }
      isDeleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blogPostCategoryId
    }
  }
`;
export const listBlogPosts = /* GraphQL */ `
  query ListBlogPosts(
    $filter: ModelBlogPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        category {
          id
          name
          isDeleted
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        comment {
          nextToken
          startedAt
        }
        isDeleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogPostCategoryId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBlogPosts = /* GraphQL */ `
  query SyncBlogPosts(
    $filter: ModelBlogPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlogPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        content
        category {
          id
          name
          isDeleted
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        comment {
          nextToken
          startedAt
        }
        isDeleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogPostCategoryId
      }
      nextToken
      startedAt
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      isDeleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        isDeleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        isDeleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      isDeleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blogPostCommentId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        isDeleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogPostCommentId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        isDeleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogPostCommentId
      }
      nextToken
      startedAt
    }
  }
`;
