import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Channel from "./Components/Channel/Channel";
import Video from "./Components/Video/Video";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/channel" component={Channel} />
          <Route path="/video" component={Video} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
