import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Index from "./Pages/Index";
import New from "./Pages/New";
import SongNewForm from "./Components/SongNewForm";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/songs">
              <Index />
            </Route>
            {/* <Route exact path="/songs/:id">
              < Show/>
            </Route> */}
            <Route exact path="/songs/new">
              <SongNewForm />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
