import { Link } from "react-router-dom";

const Header = ({ darkMode, handleDarkModeChange }) => {
  return (
    <header className="bg-white text-blue-dark dark:bg-blue-light dark:text-white shadow-sm py-8">
      <div className="container flex justify-between items-center">
        <h1 className="font-bold md:font-extrabold text-lg">
          <Link to="/">Rest Countries API</Link>
        </h1>
        {/* Update dark mode state whenever the user click the toggle button */}
        <button onClick={handleDarkModeChange} className="flex">
          {/* Check the darkMode value and show the right icon */}
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon w-4 h-4 fill-current"
              viewBox="0 0 512 512"
            >
              <title>Moon</title>
              <path d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon w-4 h-4 fill-current"
              viewBox="0 0 512 512"
            >
              <title>Moon</title>
              <path
                d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="40"
              />
            </svg>
          )}
          <span className="text-sm font-medium md:font-bold capitalize tracking-wide ml-2">
            dark mode
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
