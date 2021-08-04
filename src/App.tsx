import { lazy, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { me } from "./api";
import { LS_AUTH_TOKEN } from "./api/base";
import { User } from "./models/User";
import AppContainerPage from "./pages/AppContainer.page";
import AuthPage from "./pages/Auth.page";
import NotFoundPage from "./pages/NotFound.page";

// const AuthPage = lazy(() => import("./pages/Auth.page"));
// const AppContainerPage = lazy(() => import("./pages/AppContainer.page"));

function App() {
  const [user, setUser] = useState<User>();
  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) {
      return;
    }

    me().then((u) => {
      setUser(u);
    });
  }, []);

  if (token && !user) {
    return <div>loading...</div>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>

        <Route path={["/login", "/signup"]} exact>
          {token ? <Redirect to="/dashboard" /> : <AuthPage />}
        </Route>

        <Route
          path={[
            "/dashboard",
            "/recordings",
            "/batch/:batchNumber/lecture/:lectureNumber",
          ]}
          exact
        >
          {user ? <AppContainerPage user={user!} /> : <Redirect to="/login" />}
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
