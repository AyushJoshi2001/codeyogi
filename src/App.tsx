import { Suspense, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { me } from "./api/auth";
import { LS_AUTH_TOKEN } from "./api/base";
import AppContainerLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthLazy from "./pages/Auth/Auth.lazy";
// import AppContainerPage from "./pages/AppContainer.page";
// import AuthPage from "./pages/Auth.page";
import NotFoundPage from "./pages/NotFound.page";
import { meFetchAction, useAppSelector } from "./store";

// const AuthPageLazy = lazy(() => import("./pages/Auth/Auth.page"));
// const AppContainerPageLazy = lazy(
//   () => import("./pages/AppContainer/AppContainer.page")
// );

function App() {
  // const [user, setUser] = useState<User>();
  const user = useAppSelector((state) => state.me);
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      return;
    }

    me().then((u) => dispatch(meFetchAction(u)));
  }, []); // eslint-disable-line

  if (token && !user) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <ImSpinner9 className="text-8xl text-primary animate-spin" />
      </div>
    );
  }

  // console.log("App page rendering : ", user);

  return (
    <>
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
    </>
  );
}

export default App;
