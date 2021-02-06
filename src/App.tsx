import React, { useEffect, useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { UserContext } from "context";
import { RootPage, LoginPage } from "pages";
import { AuthRoute, NonAuthRoute } from "components";

export const customHistory = createBrowserHistory();
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const rootComponent = loggedIn ? RootPage : LoginPage;

  useEffect(() => {
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
  }, [loggedIn]);

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Router history={customHistory}>
        <Switch>
          <Route exact path="/" component={rootComponent} />
          <NonAuthRoute
            isAuth={loggedIn}
            exact
            path="/accounts/login"
            component={LoginPage}
          />
          <AuthRoute
            isAuth={loggedIn}
            exact
            path="/auth"
            component={() => <div>auth</div>}
          />
          <Route render={() => <h3>No Match</h3>} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
