import React from "react";
import DementiaCard from "./dementia_card";
import { Display2 } from "baseui/typography";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { t } from "react-switch-lang";
import { useDementia, useDementiaUpdate } from '../context/DementiaContext'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Dementia = () => {

  const { user, setUser } = useContext(UserContext);
  const dementia = useDementia();
  const updateDementia = useDementiaUpdate();

  React.useEffect(() => {
    updateDementia()
  }, [])

  return (
    <div className="dementia-container">
      {user && <h1>Hello <code>{user}</code></h1>}
      <Display2 marginBottom="scale1000"> {t("dementiaInformation")} </Display2>
      <FlexGrid flexGridColumnCount={[1, 1, 1, 3]} flexGridRowGap="scale900">
        {dementia.map((dementia) => (
          <FlexGridItem key={dementia.id}>
            <DementiaCard {...dementia} />
          </FlexGridItem>
        ))}
      </FlexGrid>
    </div>
  );
};

export default Dementia;
