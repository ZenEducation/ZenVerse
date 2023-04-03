/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlogPost = /* GraphQL */ `
  mutation CreateBlogPost(
    $input: CreateBlogPostInput!
    $condition: ModelBlogPostConditionInput
  ) {
    createBlogPost(input: $input, condition: $condition) {
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
export const updateBlogPost = /* GraphQL */ `
  mutation UpdateBlogPost(
    $input: UpdateBlogPostInput!
    $condition: ModelBlogPostConditionInput
  ) {
    updateBlogPost(input: $input, condition: $condition) {
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
export const deleteBlogPost = /* GraphQL */ `
  mutation DeleteBlogPost(
    $input: DeleteBlogPostInput!
    $condition: ModelBlogPostConditionInput
  ) {
    deleteBlogPost(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
