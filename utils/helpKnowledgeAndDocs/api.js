// utils/api.js
import { DataStore } from "@aws-amplify/datastore";
import { Article, Categories } from "~/src/models";
import { API, graphqlOperation } from "aws-amplify";
import { Predicates } from "@aws-amplify/datastore"; // Import Predicates

export async function saveContent(input) {
  try {
    const savedCategory = await DataStore.save(new Categories(input));
    return savedCategory;
  } catch (error) {
    console.error("Error saving content:", error);
    throw error;
  }
}

export const updateArticleById = async (id, updatedFields) => {
  try {
    const article = await DataStore.query(Article, id);
    if (!article) {
      throw new Error("Article not found");
    }
    console.log(updatedFields, "Updated Fields");
    const updatedPost = await DataStore.save(
      Article.copyOf(article, (updated) => {
        updated.slug = updatedFields.slug;
        updated.visibility = updatedFields.visibility;
        updated.relatedArticles = updatedFields.relatedArticles;
        updated.imageUrl = updatedFields.imageUrl;
        updated.content = updatedFields.content;
        updated.status = updatedFields.status;
        updated.updatedAt = updatedFields.updatedAt;
      })
    );
    return updatedPost;
  } catch (error) {
    console.error("Error updating article:", error);
    throw error;
  }
};

export async function fetchCategories() {
  try {
    const categories = await DataStore.query(Categories);
    // console.log("i am from api ", categories);
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function deleteArticleById(articleId) {
  try {
    // Fetch the article from the DataStore
    const article = await DataStore.query(Article, articleId);

    // Delete the article
    await DataStore.delete(article);

    // Return true if the deletion was successful
    return true;
  } catch (error) {
    console.error("Error deleting article:", error);
    return false;
  }
}

export async function fetchArticles() {
  try {
    const articles = await DataStore.query(Article);
    return articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
}
export async function findArticleById(articleId) {
  try {
    const article = await DataStore.query(Article, articleId);
    return article;
  } catch (error) {
    console.error(`Error finding article with ID ${articleId}:`, error);
    throw error;
  }
}
export async function fetchArticlesByCategory(category) {
  try {
    const articles = await DataStore.query(Article);
    return articles.filter((article) => article.category === category);
  } catch (error) {
    console.error("Error fetching articles by category:", error);
    throw error;
  }
}
export async function createArticle(articleData) {
  try {
    const newArticle = await DataStore.save(new Article(articleData));
    return newArticle;
  } catch (error) {
    console.error("Error creating article:", error);
    throw error;
  }
}
