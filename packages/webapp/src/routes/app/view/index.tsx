import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { viewsSelectors } from '../../../redux/modules/view';

export const ViewRoute: FC = () => {
  const { viewId } = useParams<any>();
  const view = useSelector((state) => viewsSelectors.selectById(state, viewId));

  return (
    <div className="flex w-full h-full dark:bg-code-900 dark:text-white">
      {JSON.stringify(view)}
    </div>
  );
};
