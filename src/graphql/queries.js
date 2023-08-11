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
      nextToken
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
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
        post {
          id
          title
          content
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
      nextToken
    }
  }
`;
