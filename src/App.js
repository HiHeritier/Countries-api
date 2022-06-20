import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/Loader";

const Home = lazy(() => import("./components/Home"));
const CountryDetails = lazy(() => import("./components/CountryDetails"));

function App() {
  // Define dark mode state and use the current value in the local storage as the initial vlaue
  const darkModePrefrence = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(JSON.parse(darkModePrefrence));

  // On first page load and whenever the darkMode state changes, update the dark mode value in localStorage and toggle the "dark" class in the html element
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    const html = document.querySelector("html");
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkMode]);

  // Update darkMode state
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
