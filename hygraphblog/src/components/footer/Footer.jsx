import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { getFooter } from "../../query/getFooter";

export const Footer = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["giveMeFooter"],
    queryFn: async () => request(import.meta.env.VITE_PUBLIC_URL_ID, getFooter),
  });

  if (isLoading) {
    return <p>Loading... </p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <footer>
      <h2>{data.footers[0].author}</h2>
      <p>All articles are written by AI</p>
    </footer>
  );
};
