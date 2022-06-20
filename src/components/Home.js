import { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import CountryList from "./CountryList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [query, setQuery] = useState("all");
  const {
    data: countries,
    isLoading,
    error,
  } = useFetch(`https://restcountries.com/v2/${query}`);

  return (
    <main className="container">
      <section className="my-8 md:flex justify-between">
        <Search getQuery={(q) => setQuery(q)} />
        <Filter getQuery={(q) => setQuery(q)} />
      </section>

      <section>
        {countries && (
          <CountryList
            countries={countries}
            isLoading={isLoading}
            error={error}
          />
        )}
      </section>
    </main>
  );
};

export default Home;
