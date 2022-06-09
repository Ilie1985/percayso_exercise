import "./App.css";
import Header from "../Header/Header";
import News from "../News/News";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <News />
    </div>
  );
};

export default App;
