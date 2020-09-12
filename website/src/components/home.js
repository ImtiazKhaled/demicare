import * as React from "react";
import { Button } from "baseui/button";
import { setLanguage, t } from "react-switch-lang";

const Home = (props) => {
  return (
    <div className="home-container">
      <Button onClick={() => setLanguage('en')}>{t("English")}</Button>
      <Button onClick={() => setLanguage('ko')}>{t("Korean")}</Button>
      <Button onClick={() => setLanguage('zh')}>{t("Chinese")}</Button>
      <br /><br /><br />
      <Button onClick={() => props.changeTheme()}>{t("changeTheme")}</Button>
    </div>
  );
};

export default Home;
