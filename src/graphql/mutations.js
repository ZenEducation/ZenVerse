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
      }
      comment {
        items {
          id
          content
          isDeleted
          createdAt
          updatedAt
          blogPostCommentId
        }
        nextToken
      }
      coverImage
      isDeleted
      createdAt
      updatedAt
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
      }
      comment {
        items {
          id
          content
          isDeleted
          createdAt
          updatedAt
          blogPostCommentId
        }
        nextToken
      }
      coverImage
      isDeleted
      createdAt
      updatedAt
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
      }
      comment {
        items {
          id
          content
          isDeleted
          createdAt
          updatedAt
          blogPostCommentId
        }
        nextToken
      }
      coverImage
      isDeleted
      createdAt
      updatedAt
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
      post {
        id
        title
        content
        category {
          id
          name
          isDeleted
          createdAt
          updatedAt
        }
        comment {
          nextToken
        }
        coverImage
        isDeleted
        createdAt
        updatedAt
        blogPostCategoryId
      }
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
        }
        comment {
          nextToken
        }
        coverImage
        isDeleted
        createdAt
        updatedAt
        blogPostCategoryId
      }
      createdAt
      updatedAt
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
      post {
        id
        title
        content
        category {
          id
          name
          isDeleted
          createdAt
          updatedAt
        }
        comment {
          nextToken
        }
        coverImage
        isDeleted
        createdAt
        updatedAt
        blogPostCategoryId
      }
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
        }
        comment {
          nextToken
        }
        coverImage
        isDeleted
        createdAt
        updatedAt
        blogPostCategoryId
      }
      createdAt
      updatedAt
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
      post {
        id
        title
        content
        category {
          id
          name
          isDeleted
          createdAt
          updatedAt
        }
        comment {
          nextToken
        }
        coverImage
        isDeleted
        createdAt
        updatedAt
        blogPostCategoryId
      }
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
        }
        comment {
          nextToken
        }
        coverImage
        isDeleted
        createdAt
        updatedAt
        blogPostCategoryId
      }
      createdAt
      updatedAt
      blogPostCommentId
    }
  }
`;
