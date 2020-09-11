import * as React from "react";
import { Button } from "baseui/button";
import { t } from "react-switch-lang";

const Home = (props) => {
  return (
    <div className="home-container">
      <Button onClick={() => props.changeTheme()}>{t("changeTheme")}</Button>
    </div>
  );
};

export default Home;
