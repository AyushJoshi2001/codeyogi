import { Suspense, useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { me } from "./api/auth";
import { LS_AUTH_TOKEN } from "./api/base";
import AppContext from "./App.context";
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
  }, []);

  if (token && !user) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <ImSpinner9 className="text-8xl text-primary animate-spin" />
      </div>
    );
  }

  console.log(user);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-screen h-screen">
            <ImSpinner9 className="text-8xl text-primary animate-spin" />
          </div>
        }
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>

            <Route path={["/login", "/signup"]} exact>
              {user ? <Redirect to="/dashboard" /> : <AuthLazy />}
            </Route>

            <Route
              path={[
                "/dashboard",
                "/recordings",
                "/profile",
                "/batch/:batchNumber/lecture/:lectureNumber",
              ]}
              exact
            >
              {user ? <AppContainerLazy /> : <Redirect to="/login" />}
            </Route>

            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </AppContext.Provider>
  );
}

export default App;
