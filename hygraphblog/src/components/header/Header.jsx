import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { getHeader } from "../../query/getHeader";

export const Header = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["giveMeHead"],
    queryFn: async () => request(import.meta.env.VITE_PUBLIC_URL_ID, getHeader),
  });

  if (isLoading) {
    return <p>Loading... </p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <footer>
      <h2>{data.headers[0].headerTitle}</h2>
    </footer>
  );
};
