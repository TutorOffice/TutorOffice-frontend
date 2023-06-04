import App from './components/app/App';

import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
