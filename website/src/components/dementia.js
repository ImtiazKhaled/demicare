import React from "react";
import DementiaCard from "./dementia_card";
import { Display2 } from "baseui/typography";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

import { getLanguage } from "react-switch-lang"
import { useStyletron } from 'baseui';
import { Grid, Cell } from 'baseui/layout-grid';
import { t } from "react-switch-lang";
import { useDementia, useDementiaUpdate } from '../context/DementiaContext'
import { useUser } from '../context/UserContext'
const Dementia = () => {

  const user = useUser();
  const dementia = useDementia().filter(d => d.lang === "en" || d.lang === getLanguage());
  const updateDementia = useDementiaUpdate();

  React.useEffect(() => {
    updateDementia()
  }, [])

  return (
    <div className="dementia-container">
      <Display2 marginBottom="scale1000"> {t("dementiaInformation")} </Display2>

      <Grid >
        {dementia.map((dementia) => (
          <Cell span={[12, 8, 4]} key={dementia.id}>
            <Inner><DementiaCard {...dementia} /></Inner>

          </Cell>

        ))}

      </Grid>

      <br></br>

      <br></br>
    </div>
  );
};

const Inner = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // background: theme.colors.accent200,
        // color: theme.colors.accent700,
        padding: '.25rem',
      })}
    >
      {children}
    </div>
  );
};

export default Dementia;
