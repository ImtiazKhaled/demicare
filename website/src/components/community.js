import React, { useEffect, useState } from "react";
import { StyledTable, StyledHead, StyledHeadCell, StyledBody } from "baseui/table";
import { Display2 } from "baseui/typography";
import { Button } from "baseui/button";
import { t, getLanguage } from "react-switch-lang";
import CommunityRow from "./community_row";
import db from "./common/Firebase";

const Community = (props) => {
  const [DATA, setResources] = useState([]);
  useEffect(() => {
    db.collection("facilities").onSnapshot((snapshot) => setResources(snapshot.docs.map((doc) => doc.data())));
  }, []);

  let resources;

  if (getLanguage() === "en") {
    resources = DATA;
  } else {
    resources = DATA.filter((facility) => facility.lang === getLanguage());
  }

  const showAllLocations = () => {
    console.log("should show all maps now");
  };

  return (
    <div className="community-container">
      <Display2 marginBottom="scale1000"> {t("communityResources")} </Display2>
      <Button onClick={() => showAllLocations()}> {t("seeFacilities")} </Button> <br /> <br />
      <StyledTable>
        <StyledHead>
          <StyledHeadCell>{t("title")}</StyledHeadCell>
          <StyledHeadCell>{t("resource")}</StyledHeadCell>
        </StyledHead>
        <StyledBody>
          {resources.map((row, index) => (
            <CommunityRow key={index} id={index} {...row} />
          ))}
        </StyledBody>
      </StyledTable>
      <div style={{ margin: "10vh" }} />
    </div>
  );
};

export default Community;
