import { Side, SideSection } from "@monocle/components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getServerListItem, getRecordings } from "../../redux/modules/server";
import { viewsSelectors } from "../../redux/modules/view";
import { AddViewButton } from "./add-view-button";
import { RecordingListItem } from "./recording-list-item";
import { ServerListItem } from "./server-list-item";
import { SideViewItem } from "./side-view-item";
import type { Recording } from "@monocle/protobuf/generated/monocle";

export const SideNav = () => {
  const { id, name } = useSelector(getServerListItem);
  const recordings = useSelector(getRecordings) || [];
  const views = useSelector(viewsSelectors.selectAll);

  return (
    <Side>
      <SideSection label="Views">
        <AddViewButton />
      </SideSection>
      {views.map((view) => (
        <SideViewItem key={view.id} id={view.id} name={view.name} />
      ))}
      <SideSection label="Servers" />
      {id && name && <ServerListItem key={id} id={id} name={name} />}
      {recordings.length > 0 &&
        recordings.map((recording: Recording) => (
          <RecordingListItem
            key={recording.token}
            id={recording.token}
            name={recording.name}
          />
        ))}
    </Side>
  );
};
