import React from 'react';
import ReactDOM from 'react-dom';
import '@monocle/common/index.css';

import App from './components/App';

document.documentElement.classList.add('dark');
const root = document.getElementById('root');

ReactDOM.render(<App />, root);
