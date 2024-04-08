import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  return (
    <div className="m-3">
      <input
        type="text"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="border-solid rounded py-3 px-5 w-30 h-8"
      />
      <button className=" bg-purple-900 h-8 rounded mx-1 py-1 px-3 text-white ">
        <Link
          to={{
            pathname: "/",
            search: `?query=${query}`,
          }}
        >
          search
        </Link>
      </button>
    </div>
  );
}
