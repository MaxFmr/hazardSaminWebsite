import { getAllItems } from "./items-util";
import { flatDeep } from "../utils/flatDeep";

export const getPostTags = () => {
  const posts = getAllItems("posts");

  const tags = flatDeep(posts.map((post) => post.postTags));

  return [...new Set(tags)];
};
