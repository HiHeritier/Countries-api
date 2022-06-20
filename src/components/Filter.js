import { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Filter = ({ getQuery }) => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // handle open state change
  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  };

  // handle option change
  const handleOptionChange = (value) => {
    setSelectedRegion(value);
    setIsOpen(false);
    getQuery(`region/${value}`);
  };

  // Close select menu when a user click outside it
  const domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    // Select menu container
    <div
      ref={domNode}
      className="relative w-48 sm:w-60 lg:w-72 bg-transparent rounded-md shadow-sm font-medium"
    >
      {/* select menu button */}
      <button
        onClick={handleOpenChange}
        className="w-full flex justify-between items-center shadow-sm text-left bg-white dark:bg-blue-light rounded-md px-5 py-4 focus:outline-none focus:ring-1 focus:ring-gray-dark dark:focus:ring-white"
      >
        <span className="truncate">{selectedRegion || "Filter by region"}</span>
        <span className="pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {/* Options container */}
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white dark:bg-blue-light shadow-md rounded-md mt-2 p-1 focus:outline-none">
          {regions.map((region) => (
            <li
              key={region}
              onClick={() => handleOptionChange(region)}
              className={`cursor-pointer select-none rounded-md px-5 py-2 hover:bg-gray-200 dark:hover:bg-blue-dark hover:bg-opacity-60 dark:hover:bg-opacity-50 ${
                selectedRegion === region ? "font-semibold" : ""
              }`}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
