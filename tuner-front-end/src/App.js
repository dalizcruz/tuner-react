import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import SongList from "./Components/SongList";
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
              <SongList />
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
