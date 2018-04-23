import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
