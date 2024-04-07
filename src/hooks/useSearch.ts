import axios from "axios";
import { useEffect, useState } from "react";

function useSearch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const answer = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=41ac115c519f46b19dab16cc8dc09b98"
      );
      setData(answer?.data?.articles);
      console.log({ answer });
    })();
  }, []);
  return { headlines: data };
}

export default useSearch;
