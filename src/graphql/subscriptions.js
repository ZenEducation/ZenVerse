/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlogPost = /* GraphQL */ `
  subscription OnCreateBlogPost($filter: ModelSubscriptionBlogPostFilterInput) {
    onCreateBlogPost(filter: $filter) {
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
      coverImage
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
export const onUpdateBlogPost = /* GraphQL */ `
  subscription OnUpdateBlogPost($filter: ModelSubscriptionBlogPostFilterInput) {
    onUpdateBlogPost(filter: $filter) {
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
      coverImage
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
export const onDeleteBlogPost = /* GraphQL */ `
  subscription OnDeleteBlogPost($filter: ModelSubscriptionBlogPostFilterInput) {
    onDeleteBlogPost(filter: $filter) {
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
      coverImage
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      content
      isDeleted
      blogPostId {
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
        coverImage
        isDeleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogPostCategoryId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blogPostCommentId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      content
      isDeleted
      blogPostId {
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
        coverImage
        isDeleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogPostCategoryId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blogPostCommentId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      content
      isDeleted
      blogPostId {
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
        coverImage
        isDeleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogPostCategoryId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blogPostCommentId
    }
  }
`;
