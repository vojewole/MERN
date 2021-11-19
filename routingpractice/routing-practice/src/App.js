import "./App.css";
import { Router } from "@reach/router";
import Home from "./component/home";
import Four from "./component/four";
import Hello from "./component/hello";
import HelloBlueRed from "./component/hellobluered";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Four num={4} path="/4" />
        <Hello word={"hello"} path="/hello" />
        <HelloBlueRed word={"hello"} path="/hello/:firstColor/:secondColor" />
      </Router>
    </div>
  );
}

export default App;
