import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Nav from "./components/menu/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/pages/Hotels" component={Hotels} />
        <Route path="/pages/Flights" component={Home} />
        <Route path="/pages/Cruises" component={Home} />
        <Route path="/pages/Activities" component={Home} />
        <Route path="/pages/Transfers" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
