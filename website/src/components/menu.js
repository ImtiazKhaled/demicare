import * as React from "react";
import { AppNavBar, setItemActive } from "baseui/app-nav-bar";
import { useHistory } from "react-router-dom";
import { StyledLink } from "baseui/link";
import { translate, t } from "react-switch-lang";

const Menu = () => {

  let history = useHistory();

  let [mainItems, setMainItems] = React.useState([]);

  mainItems = [
    { key: 'community', label: t('communityResources') },
    { key: 'dementia', label: t('dementiaInformation') },
    { key: 'research', label: t('research') },
    { key: 'outreach', label: t('outreach') },
    { key: 'about', label: t('aboutUs') },
  ];

  const appDisplayName = (
    <StyledLink
      $style={{
        textDecoration: "none",
        color: "inherit",
        ":hover": { color: "inherit", cursor: "pointer" },
        ":visited": { color: "inherit" },
      }}
      onClick={() => { setMainItems(prev => setItemActive(prev, { label: 'whatis', active: false })); history.push('/') }}
    >
      {t("researchProject")}
    </StyledLink>
  );

  const onItemSelect = (item) => {
    setMainItems(prev => setItemActive(prev, item));
    switch (item.key) {
      case 'community':
        history.push('/community');
        break;
      case 'research':
        history.push('/research');
        break;
      case 'about':
        history.push('/about');
        break;
      case 'outreach':
        history.push('/outreach');
        break;
      case 'dementia':
        history.push('/dementia');
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

export default translate(Menu);
