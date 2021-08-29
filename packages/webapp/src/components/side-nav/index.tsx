import { Side, SideSection } from "@monocle/components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { Recording } from "@monocle/protobuf/generated/monocle";
import { getServerListItem, getRecordings } from "../../redux/modules/server";
import { RecordingListItem } from "./recording-list-item";
import { ServerListItem } from "./server-list-item";
import { ViewMenu } from "./views/view-menu";

export const SideNav = () => {
  const { id, name } = useSelector(getServerListItem);
  const recordings = useSelector(getRecordings) || [];

  return (
    <Side>
      {false && <ViewMenu />}
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
