import React from 'react';
import { FC } from 'react';

import './shell.module.css';
import { AppBar } from '../app-bar';

export const Shell: FC = ({ children }) => (
  <div className="w-screen h-screen flex flex-col dark:bg-gray-900 dark:text-dawn-200">
    <AppBar></AppBar>
    {children}
  </div>
);
