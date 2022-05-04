import React, { ReactNode, useEffect } from "react";
import { useQuery } from "react-query";
import { LIST_OF_POSTS_SERVICES } from "data/services/listOfPosts";

const PostPage = (): ReactNode => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    "posts",
    LIST_OF_POSTS_SERVICES.getListOfPosts
  );
  if (isLoading) {
    return <div>Getting your List of Posts</div>;
  }

  if (isError && error) {
    return (
      <div>
        Something Went Wrong <button onClick={refetch}>test</button>
      </div>
    );
  }
  return (
    <div>{data?.data && data.data.map(({ title }) => <div>{title}</div>)}</div>
  );
};

export default PostPage;
