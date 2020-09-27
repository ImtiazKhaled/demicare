import React, { useState } from "react";
import Menu from "./components/menu";
import Navigation from "./components/navigation";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { LightTheme, BaseProvider, DarkTheme } from "baseui";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PropTypes from "prop-types";
import en from "./components/common/english.json";
import zh from "./components/common/chinese.json";
import ko from "./components/common/korean.json";
import { setTranslations, setDefaultLanguage, translate, setLanguageCookie } from "react-switch-lang";


setTranslations({ en, zh, ko });
setDefaultLanguage("en");
setLanguageCookie("language", { path: "/", maxAge: 157680000 }, undefined);

const engine = new Styletron();

const App = () => {
  const [theme, changeTheme] = useState(LightTheme);

  document.documentElement.style.setProperty("background", theme.colors.background);

  return (
    <StyletronProvider value={engine}>
      <Router>
        <BaseProvider theme={theme}>
          <Menu />
          <Navigation changeTheme={() => changeTheme(theme === DarkTheme ? LightTheme : DarkTheme)} />
        </BaseProvider>
      </Router>
    </StyletronProvider>
  );
};

App.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(App);
