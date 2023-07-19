// utils/api.js
import { DataStore } from "@aws-amplify/datastore";
import { Article, Categories } from "~/src/models"; // Adjust the path according to your model definition

export async function saveContent(input) {
  try {
    const savedCategory = await DataStore.save(new Categories(input));
    return savedCategory;
  } catch (error) {
    console.error("Error saving content:", error);
    throw error;
  }
}

export async function fetchCategories() {
  try {
    const categories = await DataStore.query(Categories);
    console.log("i am from api ", categories);
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
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

export async function createArticle(articleData) {
  try {
    const newArticle = await DataStore.save(new Article(articleData));
    return newArticle;
  } catch (error) {
    console.error("Error creating article:", error);
    throw error;
  }
}
