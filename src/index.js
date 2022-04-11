import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App callback={() => console.log("Blog rendered")} />);
