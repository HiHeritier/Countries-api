import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/Loader";

const Home = lazy(() => import("./components/Home"));
const CountryDetails = lazy(() => import("./components/CountryDetails"));

function App() {
  const darkModePrefrence = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(JSON.parse(darkModePrefrence));

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    const html = document.querySelector("html");
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkMode]);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div>
        <Header
          darkMode={darkMode}
          handleDarkModeChange={handleDarkModeChange}
        />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/countries/:name">
              <CountryDetails />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
