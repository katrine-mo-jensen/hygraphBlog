import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { getAllBlogPosts } from "../query/allBlogPosts";
import { Link } from "react-router-dom";

export const AllTheContent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["giveMeAllThePosts"],
    queryFn: async () =>
      request(import.meta.env.VITE_PUBLIC_URL_ID, getAllBlogPosts),
  });

  if (isLoading) {
    return <p>Loading... </p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {data.blogPosts.map((item, index) => {
        return (
          <Link key={index} to={`/blogposts/${item.id}`}>
            <h3>{item.blogTitle}</h3>
            <p>{item.blogDescription}</p>
          </Link>
        );
      })}
    </>
  );
};
