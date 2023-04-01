/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
