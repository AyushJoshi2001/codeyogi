import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import { User } from "../../models/User";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingsPage from "./Recordings.page";

interface Props {
  user: User;
}

const AppContainer: FC<Props> = ({ user }) => {
  return (
    <>
      <NavBar user={user} />
      <div className="flex">
        <Sidebar />
        <Switch>
          <Route path="/dashboard">
            <DashboardPage user={user!} />
          </Route>
          <Route path="/recordings">
            <RecordingsPage />
          </Route>
          <Route path="/batch/:batchNumber/lecture/:lectureNumber">
            <LecturePage />
          </Route>
        </Switch>
      </div>
    </>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
