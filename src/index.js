import React from 'react';
import ReactDOM from 'react-dom';
import '@zendeskgarden/react-forms/dist/styles.css';
import '@zendeskgarden/react-grid/dist/styles.css';
import '@zendeskgarden/react-tabs/dist/styles.css';
import '@zendeskgarden/react-dropdowns/dist/styles.css';
import '@zendeskgarden/react-buttons/dist/styles.css';
import '@zendeskgarden/react-tooltips/dist/styles.css';

import './index.css';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ThemeProvider><App /></ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
