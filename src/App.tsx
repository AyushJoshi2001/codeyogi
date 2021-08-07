import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { me } from "./api/auth";
import { LS_AUTH_TOKEN } from "./api/base";
import { User } from "./models/User";
import AppContainerLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthLazy from "./pages/Auth/Auth.lazy";
// import AppContainerPage from "./pages/AppContainer.page";
// import AuthPage from "./pages/Auth.page";
import NotFoundPage from "./pages/NotFound.page";

// const AuthPageLazy = lazy(() => import("./pages/Auth/Auth.page"));
// const AppContainerPageLazy = lazy(
//   () => import("./pages/AppContainer/AppContainer.page")
// );

function App() {
  const [user, setUser] = useState<User>();
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  // console.log("token : ", token);

  useEffect(() => {
    if (!token) {
      return;
    }

    me().then((u) => setUser(u));
  }, [token]);

  if (token && !user) {
    return <div>loading...</div>;
  }

  return (
    <Suspense fallback={<div className="text-red-500">Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>

          <Route path={["/login", "/signup"]} exact>
            {user ? (
              <Redirect to="/dashboard" />
            ) : (
              <AuthLazy onLogin={setUser} />
            )}
          </Route>

          <Route
            path={[
              "/dashboard",
              "/recordings",
              "/batch/:batchNumber/lecture/:lectureNumber",
            ]}
            exact
          >
            {user ? (
              <AppContainerLazy user={user!} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
