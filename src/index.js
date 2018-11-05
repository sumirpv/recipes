import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import './styles/index.css';

const MOUNT_ELEMENT = document.getElementById('root');

ReactDom.render(<App />, MOUNT_ELEMENT);