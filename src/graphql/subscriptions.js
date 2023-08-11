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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      name
      isDeleted
      createdAt
      updatedAt
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
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
