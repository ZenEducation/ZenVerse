import { API } from "aws-amplify";
import { getCategory, listCategories } from "@/src/graphql/queries";
import {  updateCategory } from "~~/src/graphql/mutations";

export const fetchCategoris = async () => {
  const categories = await (
    await API.graphql({
      query: listCategories,
      variables: { filter: { isDeleted: { ne: true } } },
    })
  ).data.listCategories.items;
  return categories;
};



// export const fetchBlog = async (id) => {
//   try {
//     const blog = await (
//       await API.graphql({
//         query: getBlogPost,
//         variables: { id: id }
//       })
//     ).data;
//     return blog.getBlogPost;
//   } catch (error) {
//     console.log(error);
//   }
// };
