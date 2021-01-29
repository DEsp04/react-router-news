import './App.css';
import { Route, NavLink, Switch } from "react-router-dom";
import Bitcoin from "./components/BitcoinNews";
import Business from "./components/BusinessNews";
import Home from "./components/Home";
import BITCOIN from "./data/bitcoinSeed";
import BUSINESS from "./data/businessSeed";


console.log(BITCOIN);
console.log(BUSINESS);

function App() {







  


  return (
    <div className="App">
      <nav>
        <NavLink
          exact 
          to={"/"}
        >
          Home
        </NavLink>

        <NavLink to={"/businessnews"}>
          News
        </NavLink>

        <NavLink to={"/bitcoinnews"}>
          Bitcoin
        </NavLink>
      </nav>

      <main>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
              
          <Route path={"/businessnews"}>
            <Business  />
          </Route>

          <Route path={"/bitcoinnews"}>
            <Bitcoin  />
          </Route>  
        </Switch>
        
      </main>
    </div>
  );
}

export default App;
