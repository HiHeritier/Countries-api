import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CountryBorders = ({ countryBorders }) => {
  const borders = countryBorders.join(",");

  const {
    data: countries,
    isLoading,
    error,
  } = useFetch(`https://restcountries.com/v2/alpha?codes=${borders}`);

  if (isLoading) return "Loading...";
  if (error) return "Oops! something went wrong!!!";

  return (
    countries &&
    countries.map((country) => (
      <Link
        key={country.name}
        to={`/countries/${country.name}`}
        className="bg-white dark:bg-blue-light shadow-md font-light inline-block mb-2 mr-2 px-5 rounded-sm"
      >
        {country.name}
      </Link>
    ))
  );
};

export default CountryBorders;
