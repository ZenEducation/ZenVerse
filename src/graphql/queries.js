/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      slug
      title
      content
      status
      visibility
      category
      language
      metaDescription
      imageUrl
      likes
      dislikes
      updatedAt
      createdAt
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        slug
        title
        content
        status
        visibility
        category
        language
        metaDescription
        imageUrl
        likes
        dislikes
        updatedAt
        createdAt
      }
      nextToken
    }
  }
`;
