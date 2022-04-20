import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { history } from "./History/history";
import { Toaster } from "react-hot-toast";
import Loader from "./Components/UI/Loader";
import Index from "./pages/index";
import { useSelector } from "react-redux";

const App = () => {
  const { loading } = useSelector((state) => state.loading);

  return (
    <div className="">
     
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
