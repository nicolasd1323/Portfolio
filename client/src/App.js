import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "./services/index";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/home/Home.jsx";
import About from "./screens/about/AboutMe.jsx";
import Portfolio from "./screens/portfolio/Portfolio.jsx";
import Details from "./screens/detail/Details.jsx";
import ContactMe from './screens/contact/ContactMe.jsx'
import "./App.css";

function App() {
  const [piece, setPiece] = useState([]);
  const [fetchPieces, setFetchPieces] = useState(true);

  useEffect(() => {
    const getPieces = async () => {
      const resp = await axios.get(baseURL, config);
      setPiece(resp.data.records);
    };
    getPieces();
  }, [fetchPieces]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" />
          <Route path="/about-me" />

          <Route path="/portfolio-products/">
            <Portfolio piece={piece} />
          </Route>

          <Route path="/portfolio-products/:name">
          <Details piece={piece}/>
          </Route>
          
          <Route path='/contact'>
          <ContactMe />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
