import { API } from "aws-amplify";
import { getBlogPost, listBlogPosts } from "@/src/graphql/queries";
import { createBlogPost, updateBlogPost } from "~~/src/graphql/mutations";

export const fetchBlogs = async (categoryId) => {
  let blogPostCategoryId;
  if (categoryId !== "all") {
    blogPostCategoryId = categoryId;
    const blogs = await (
      await API.graphql({
        query: listBlogPosts,
        variables: {
          filter: {
            isDeleted: { ne: true },
            blogPostCategoryId: { eq: blogPostCategoryId },
          },
        },
      })
    ).data.listBlogPosts;
    return blogs;
  } else {
    const blogs = await (
      await API.graphql({
        query: listBlogPosts,
        variables: {
          filter: {
            isDeleted: { ne: true },
          },
        },
      })
    ).data.listBlogPosts;
    return blogs;
  }
};

export const updateBlog = async (data) => {
  console.log(data);
  const blog = (
    await API.graphql({
      query: updateBlogPost,
      variables: { input: data },
    })
  ).data;
  console.log(blog);
  return blog;
};

export const createBlog = async (data) => {
  const blogs = await (
    await API.graphql({ query: createBlogPost, variables: { input: data } })
  ).data;
  return blogs;
};

export const fetchBlog = async (id) => {
  try {
    const blog = await (
      await API.graphql({
        query: getBlogPost,
        variables: { id: id },
      })
    ).data;
    return blog.getBlogPost;
  } catch (error) {
    console.log(error);
  }
};
