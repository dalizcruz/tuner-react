import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";


import NavBar from "./Components/NavBar";
import SongList from "./Components/SongList";
import New from "./Pages/New";



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
              <New />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
