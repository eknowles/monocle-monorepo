import type { EntityId } from "@reduxjs/toolkit/dist/entities/models";
import type { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PackedGrid } from "react-packed-grid";
import { Recording } from "../../../components/recording";
import { viewsSelectors } from "../../../redux/modules/view";

export const ViewRoute: FC = () => {
  const { viewId } = useParams<any>();
  const view = useSelector((state) =>
    viewsSelectors.selectById(state, viewId as EntityId)
  );

  return (
    <PackedGrid
      boxAspectRatio={16 / 9}
      className="w-full h-full bg-white dark:bg-code-900 dark:text-white"
    >
      {view &&
        view.recordings.map((recordingToken) => (
          <Recording key={recordingToken} recordingToken={recordingToken} />
        ))}
    </PackedGrid>
  );
};
