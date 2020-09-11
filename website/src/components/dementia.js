import * as React from "react";
import DementiaCard from "./dementia_card";
import { Display2 } from "baseui/typography";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { t } from "react-switch-lang";

let dementia = [
  {
    id: "1",
    title: "10 Signs of Alzheimer's",
    description: "Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.",
    image: "https://source.unsplash.com/user/erondu/700x400",
  },
  {
    id: "2",
    title: "Interactive Brain Tour",
    description: "Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.",
    image: "https://source.unsplash.com/user/erondu/700x400",
  },
  {
    id: "3",
    title: "Caregivers",
    description: "Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.",
    image: "https://source.unsplash.com/user/erondu/700x400",
  },
];

const Dementia = () => {
  return (
    <div className="dementia-container">
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
