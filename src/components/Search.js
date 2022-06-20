import { useState } from "react";

const Search = ({ getQuery }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (value) => {
    setSearchText(value);
    if (value) {
      getQuery(`name/${value}`);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="mb-12 md:mb-0">
      <div className="w-full md:w-96 flex items-center bg-white text-gray-dark dark:bg-blue-light dark:text-white shadow-sm rounded-md px-6 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon w-5 h-5 mr-4 fill-current"
          viewBox="0 0 512 512"
        >
          <title>Search</title>
          <path d="M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z" />
        </svg>

        {/* Listen to input change and update searchText state */}
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchText}
          onChange={(e) => handleInputChange(e.target.value)}
          className="w-full bg-transparent font-semibold text-blue-dark dark:text-white placeholder-gray-dark dark:placeholder-white dark:placeholder-opacity-75 py-2 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-dark dark:ring-white"
        />
      </div>
    </form>
  );
};

export default Search;
