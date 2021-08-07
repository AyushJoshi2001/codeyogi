import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../../components/AuthHero";
import { User } from "../../models/User";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";

interface Props {
  onLogin: (user: User) => void;
}

const Auth: FC<Props> = (props) => {
  return (
    <div className="flex justify-between">
      <Switch>
        <Route path="/login">
          <LoginPage onLogin={props.onLogin} />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
      </Switch>
      <AuthHero />
    </div>
  );
};

Auth.defaultProps = {};

export default memo(Auth);
