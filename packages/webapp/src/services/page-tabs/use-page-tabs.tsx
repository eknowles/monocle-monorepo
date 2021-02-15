import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTabs = () => {
  const [tabs, setTabs] = useState([]);
  let location = useLocation();

  return {
    location,
    tabs,
  };
};
