import { API } from "aws-amplify";
import { listComments } from "@/src/graphql/queries";
import { createComment } from "~~/src/graphql/mutations";

export const fetchComments = async (id) => {
  console.log(id);
  const comments = await (
    await API.graphql({
      query: listComments,
      variables: {
        filter: { isDeleted: { ne: true }, blogPostCommentId: { eq: id } },
      },
    })
  ).data.listComments.items;
  return comments;
};

export const addComment = async (data) => {
  const comment = await (
    await API.graphql({ query: createComment, variables: { input: data } })
  ).data;
  console.log(comment);
  return comment;
};
