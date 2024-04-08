import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useSearch() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const url = query
      ? `https://newsapi.org/v2/everything?q=${query}&apiKey=41ac115c519f46b19dab16cc8dc09b98`
      : `https://newsapi.org/v2/top-headlines?country=us&apiKey=41ac115c519f46b19dab16cc8dc09b98`;
    (async () => {
      try {
        const answer = await axios.get(url);
        setData(answer?.data?.articles);
      } catch {
        setData([]);
      }
    })();
  }, [query]);
  return { data };
}

export default useSearch;
