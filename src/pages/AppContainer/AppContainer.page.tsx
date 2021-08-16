import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingsPage from "./Recordings.page";
import ProfilePage from "./Profile.page";
import GroupPage from "./Group.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <Sidebar className="flex-shrink-0" />
        <Switch>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/recordings">
            <RecordingsPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/group/:groupId">
            <GroupPage />
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
