import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global} from '@emotion/react';
import { globalStyle } from './utils/global-style'
import { App } from 'components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={globalStyle}/>
    <App />
  </React.StrictMode>
);
