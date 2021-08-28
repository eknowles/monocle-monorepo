import { SideSection } from "@monocle/components";
import React from "react";
import { useSelector } from "react-redux";
import { viewsSelectors } from "../../../redux/modules/view";
import { AddViewButton } from "./add-view-button";
import { SideViewItem } from "./side-view-item";

export const ViewMenu = () => {
  const views = useSelector(viewsSelectors.selectAll);

  return (
    <>
      <SideSection label="Views">
        <AddViewButton />
      </SideSection>
      {views.map((view) => (
        <SideViewItem key={view.id} id={view.id} name={view.name} />
      ))}
    </>
  );
};
