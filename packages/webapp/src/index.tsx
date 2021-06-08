import ReactDOM from 'react-dom';
import { setAppElement } from 'react-modal';
import '@monocle/common/index.css';
import App from './components/App';

document.documentElement.classList.add('dark');
const root = document.getElementById('root');

// react modal
setAppElement('#root');

ReactDOM.render(<App />, root);
