import type { FC } from "react";
import CameraIcon from "@monocle/icons/src/camera.svg";
import { SideNavItem } from "@monocle/components";

interface IRecordingListItemProps {
  id: string | number;
  name: string;
}

export const RecordingListItem: FC<IRecordingListItemProps> = ({
  name,
  id,
}) => {
  const path = `/app/recording/${id}`;
  return (
    <SideNavItem
      path={path}
      state={{
        setTab: {
          path,
          name,
          icon: "recording",
          params: { recordingToken: id },
        },
      }}
    >
      <CameraIcon width="14" height="14" className="ml-4 mr-1 text-code-200" />
      {name}
    </SideNavItem>
  );
};
