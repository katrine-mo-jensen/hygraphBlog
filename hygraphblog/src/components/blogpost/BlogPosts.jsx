import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { OneBlog } from "../../query/oneBlog";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



export const OneBlogPosts = () => {
  const {id} = useParams()

  const { data, isLoading, error } = useQuery({
    queryKey: ["giveOneBlog"],
    queryFn: async () =>
      request(import.meta.env.VITE_PUBLIC_URL_ID, OneBlog, {id:id}),
  });

  console.log(data)

  if (isLoading) {
    return <p>Loading... </p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }


  return (
    <>
     
      <article>
        {/* <h3>{data.blogPosts.blogTitle}</h3>  */}
        
      </article>
      <button>
        {" "}
        <Link to="/blogposts">BACK</Link>{" "}
      </button>
    </>
  );
};
