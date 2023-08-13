import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum ArticleStatus {
  ALL = "ALL",
  PUBLISHED = "PUBLISHED",
  DRAFT = "DRAFT",
  ARCHIVED = "ARCHIVED"
}

export enum ArticleVisibility {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
  INDRAFT = "INDRAFT"
}



type EagerArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Article, 'id'>;
    readOnlyFields: 'createdAt';
  };
  readonly id: string;
  readonly slug?: string | null;
  readonly tittle?: string | null;
  readonly content?: string | null;
  readonly status?: ArticleStatus | keyof typeof ArticleStatus | null;
  readonly visibility?: ArticleVisibility | keyof typeof ArticleVisibility | null;
  readonly category?: string | null;
  readonly language?: string | null;
  readonly metaDescription?: string | null;
  readonly imageUrl?: string | null;
  readonly relatedArticles?: (string | null)[] | null;
  readonly likes?: number | null;
  readonly dislikes?: number | null;
  readonly updatedAt?: string | null;
  readonly author?: string | null;
  readonly createdAt?: string | null;
}

type LazyArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Article, 'id'>;
    readOnlyFields: 'createdAt';
  };
  readonly id: string;
  readonly slug?: string | null;
  readonly tittle?: string | null;
  readonly content?: string | null;
  readonly status?: ArticleStatus | keyof typeof ArticleStatus | null;
  readonly visibility?: ArticleVisibility | keyof typeof ArticleVisibility | null;
  readonly category?: string | null;
  readonly language?: string | null;
  readonly metaDescription?: string | null;
  readonly imageUrl?: string | null;
  readonly relatedArticles?: (string | null)[] | null;
  readonly likes?: number | null;
  readonly dislikes?: number | null;
  readonly updatedAt?: string | null;
  readonly author?: string | null;
  readonly createdAt?: string | null;
}

export declare type Article = LazyLoading extends LazyLoadingDisabled ? EagerArticle : LazyArticle

export declare const Article: (new (init: ModelInit<Article>) => Article) & {
  copyOf(source: Article, mutator: (draft: MutableModel<Article>) => MutableModel<Article> | void): Article;
}

type EagerCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly level?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly level?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Categories = LazyLoading extends LazyLoadingDisabled ? EagerCategories : LazyCategories

export declare const Categories: (new (init: ModelInit<Categories>) => Categories) & {
  copyOf(source: Categories, mutator: (draft: MutableModel<Categories>) => MutableModel<Categories> | void): Categories;
}