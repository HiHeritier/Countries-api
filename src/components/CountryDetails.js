import { useParams, useHistory } from "react-router";
import CountryBorders from "./CountryBorders";
import useFetch from "../hooks/useFetch";
import CountryInfo from "./CountryInfo";
import Infos from "../infos.json";

const CountryDetails = () => {
  const { name } = useParams();
  const history = useHistory();

  // Fetch country by name
  const { data, error } = useFetch(
    `https://restcountries.com/v2/name/${name}?fullText=true`
  );

  const country = data && data[0];

  const countryInfos = country && (
    <section className="grid xl:grid-cols-2 xl:gap-24 lg:mt-16">
      {/* Country flag */}
      <div className="relative pb-3/5 xl:pb-10/12 mb-10 xl:mb-0">
        <img
          src={country.flags["svg"]}
          alt={`${country.name} flag`}
          className="absolute h-full w-full object-cover"
        />
      </div>

      {/* Country infos */}
      <div className="capitalize self-center">
        <h2 className="font-bold text-xl lg:text-2xl mb-4">{country.name}</h2>

        <div className="grid sm:grid-cols-2 xl:gap-6">
          {/* Get the required info from a Json file */}
          {Infos.detailsInfos.map((infoBlock, index) => (
            <div className="mb-8 text-sm leading-8">
              {infoBlock.map((info, index) => (
                <CountryInfo
                  key={index}
                  title={info.title}
                  property={country[info.property]}
                  subproperty={info.subproperty}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Country borders */}
        <div className="text-sm leading-8">
          <span className="block md:inline mb-2 md:mb-0 md:mr-2 font-semibold">
            border countries:{" "}
          </span>

          {country.borders ? (
            <CountryBorders countryBorders={country.borders} />
          ) : (
            <span className="font-light">none</span>
          )}
        </div>
      </div>
    </section>
  );

  return (
    <main className="container text-base">
      {/* Go back button */}
      <button
        onClick={() => history.goBack()}
        className="flex items-center bg-white dark:bg-blue-light shadow-md mt-10 md:mt-16 mb-10 px-5 py-2 rounded-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon h-4 w-4 mr-3"
          viewBox="0 0 512 512"
        >
          <title>Arrow Back</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="M244 400L100 256l144-144M120 256h292"
          />
        </svg>
        <span className="capitalize text-sm">back</span>
      </button>

      {error && "Oops! Something went wrong!"}
      {countryInfos}
    </main>
  );
};

export default CountryDetails;
