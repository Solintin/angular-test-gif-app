import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { history } from "./History/history";
import Index from "./pages/index";
import Detail from "./pages/detail";

const App = () => {

  return (
    <div className="lg:p-5 p-3">
     
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route  path="/:id" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
