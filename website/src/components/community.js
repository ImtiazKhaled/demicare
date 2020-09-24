import * as React from "react";
import { StyledTable, StyledHead, StyledHeadCell, StyledBody, StyledRow, StyledCell } from "baseui/table";
import { Display2 } from "baseui/typography";
import { StyledBodyCell } from "baseui/table-grid";
import { Button } from "baseui/button";
import ReactMD from "react-markdown";
import { t } from "react-switch-lang";


const Community = () => {
  
  const [ markdown, setMarkdown ] = React.useState(`### Bilingual in English and Korean \n
  Phone number: [972-245-1573](tel:9722451573) \n
  Address: [1618 Kirby Rd, Carrollton, TX 75006](https://www.google.com/maps/dir/0000,0000/Carrollton+Health+%26+Rehabilitation+Center+Carrollton,+TX+75006/@32.8051728,-97.1511311,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x864c26479c9a28d9:0x81db9789c4704bfb!2m2!1d-96.8987142!2d32.9473194) \n
  Website: [carrolltonhealth.com](https://carrolltonhealth.com)
  `)

  const getLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (position) => {
        var tempMarkdown = markdown.replace('0000',position.coords.latitude.toString()) 
        tempMarkdown = tempMarkdown.replace('0000',position.coords.longitude.toString()) 
        setMarkdown(tempMarkdown)
      });            
    } else {
      console.error('This browser does not support locations')
    }
  }
  
  React.useEffect(() => {
    getLocation()
  })

  const showAllLocations = () => {
    console.log('should show all maps now')
  }

  const DATA = [
    ["Carrolton Health & Rehabilitation Center", markdown],
    ["Carrolton Health & Rehabilitation Center", markdown],
  ];

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
          {DATA.map((row, index) => (
            <StyledRow key={index}>
              <StyledCell>
                <StyledBodyCell>{row[0]}</StyledBodyCell>
              </StyledCell>
              <StyledCell>
                <StyledBodyCell>
                  <ReactMD source={row[1]} />
                </StyledBodyCell>
              </StyledCell>
            </StyledRow>
          ))}
        </StyledBody>
      </StyledTable>
    </div>
  );
};

export default Community