import * as React from "react";
import { useHistory } from "react-router-dom";
import { StyledLink } from "baseui/link";
import { Unstable_AppNavBar as AppNavBar } from "baseui/app-nav-bar";
import { t } from "react-switch-lang";

function renderItem(item) {
  let navTitle = item.label;

  return t(navTitle);
}

const MAIN_NAV = [
  {
    item: { label: "communityResources" },
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
  },
  {
    item: { label: "dementiaInformation" },
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
  },
  {
    item: { label: "research" },
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
  },
  {
    item: { label: "outreach" },
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
  },
  {
    item: { label: "aboutUs" },
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
  },
];

function isActive(arr, item, activeItem) {
  let active = false;
  for (let i = 0; i < arr.length; i++) {
    const elm = arr[i];
    if (elm === item) {
      if (item === activeItem) return true;
      return isActive((item && item.nav) || [], activeItem, activeItem);
    } else if (elm.nav) {
      active = isActive(elm.nav || [], item, activeItem);
    }
  }
  return active;
}

const Menu = () => {
  let history = useHistory();
  const [activeNavItem, setActiveNavItem] = React.useState();

  const SelectedTitle = () => {
    history.push("/");
    setActiveNavItem(undefined);
  };

  const appDisplayName = (
    <StyledLink
      $style={{
        textDecoration: "none",
        color: "inherit",
        ":hover": { color: "inherit", cursor: "pointer" },
        ":visited": { color: "inherit" },
      }}
      onClick={SelectedTitle}
    >
      {t("researchProject")}
    </StyledLink>
  );

  const onNavChange = ({ item }) => {
    const newItem = item.item.label;
    if (item === activeNavItem) return;
    switch (newItem) {
      case "communityResources":
        history.push("/community");
        break;
      case "research":
        history.push("/research");
        break;
      case "aboutUs":
        history.push("/about");
        break;
      case "outreach":
        history.push("/outreach");
        break;
      case "dementiaInformation":
        history.push("/dementia");
        break;
      case "languages":
        break;
      default:
        history.push("/");
        break;
    }
    setActiveNavItem(item);
  };

  return (
    <AppNavBar
      appDisplayName={appDisplayName}
      mainNav={MAIN_NAV}
      isNavItemActive={({ item }) => {
        return item === activeNavItem || isActive(MAIN_NAV, item, activeNavItem);
      }}
      onNavItemSelect={onNavChange}
    />
  );
};

export default Menu;
