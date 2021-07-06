import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "./services/index";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/home/Home";
import About from "./screens/about/AboutMe";
import Portfolio from "./screens/portfolio/Portfolio";
import Details from "./screens/detail/Details";
import ContactMe from "./screens/contact/ContactMe";
import "./App.css";

function App() {
  const [pieces, setPieces] = useState([]);
  const [fetchPieces, setFetchPieces] = useState(false);

  useEffect(() => {
    const getPieces = async () => {
      const resp = await axios.get(baseURL, config);
      setPieces(resp.data.records);
      console.log(resp.data.records);
    };
    getPieces();
  }, [fetchPieces]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" />
        <Route path="/about-me" />

        <Route path="/portfolio-products">
          <Portfolio pieces={pieces} />
        </Route>

        <Route path="/portfolio-products/:name">
          <Details pieces={pieces} />
        </Route>

        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
