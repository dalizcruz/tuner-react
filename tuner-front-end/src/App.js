import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Index from "./Pages/Index";
import New from "./Pages/New";

import NavBar from "./Components/NavBar";
import { apiURL } from "./util/apiURL"

const API = apiURL()


function App() {
  // const addNewSong = async () => {
  //   let res;
  //   try {
  //     res await = axios.post(`${API}/songs`)
  //   } catch (error) {
      
  //   }
  // };
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
              <New />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
