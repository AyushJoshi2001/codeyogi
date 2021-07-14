import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardPage from "./Dashboard.page";
import RecordingsPage from "./Recordings.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Switch>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/recordings">
          <RecordingsPage />
        </Route>
      </Switch>
    </div>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
