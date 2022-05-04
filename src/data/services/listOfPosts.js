import { AxiosResponse } from "axios";
import jsonPlaceholder from "data/configs/jsonPlaceholder";
import { JSON_PLACEHOLDER_ENDPOINTS } from "data/constants";
import { Post } from "../Entities/Post";

export const LIST_OF_POSTS_SERVICES = {
  getListOfPosts: (): AxiosResponse =>
    jsonPlaceholder.get(JSON_PLACEHOLDER_ENDPOINTS.LIST_OF_POSTS),
  getPostById: (postId: String): AxiosResponse =>
    jsonPlaceholder.get(`${JSON_PLACEHOLDER_ENDPOINTS}/${postId}`),
  createPost: (post: Post): AxiosResponse =>
    jsonPlaceholder.post(JSON_PLACEHOLDER_ENDPOINTS.LIST_OF_POSTS, post),
};
