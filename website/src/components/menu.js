import * as React from "react";
import { AppNavBar, setItemActive } from "baseui/app-nav-bar";
import { useHistory } from "react-router-dom";
import { StyledLink } from "baseui/link";
import { t } from "react-switch-lang";

const Menu = () => {

  let history = useHistory();

  const [mainItems, setMainItems] = React.useState([
    { label: t('communityResources') },
    { label: t('dementiaInformation') },
    { label: t('research') },
    { label: t('outreach') },
    { label: t('aboutUs') },
  ]);

  const appDisplayName = (
    <StyledLink
      $style={{
        textDecoration: "none",
        color: "inherit",
        ":hover": { color: "inherit", cursor: "pointer" },
        ":visited": { color: "inherit" },
      }}
      onClick={() => history.push('/')}
    >
      {t("researchProject")}
    </StyledLink>
  );

  const onItemSelect = (item) => {
    setMainItems(prev => setItemActive(prev, item));
    switch (item.label) {
      case t('communityResources'):
        history.push('/community');
        break;
      case t('research'):
        history.push('/research');
        break;
      case t('aboutUs'):
        history.push('/about');
        break;
      case t('outreach'):
        history.push('/outreach');
        break;
      case t('dementiaInformation'):
        history.push('/dementia');
        break;
      case t('languages'):
        break;
      default:
        history.push('/');
        break;
    }
  }

  return (
    <AppNavBar
      title={appDisplayName}
      mainItems={mainItems}
      onMainItemSelect={onItemSelect}
    />
  );
}

export default Menu;
