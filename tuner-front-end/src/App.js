import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route>
{/* songs/:index */}
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
