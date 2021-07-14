import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/Dashboard.page";
import RecordingsPage from "./pages/Recordings.page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
