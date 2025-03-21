import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './JSX/Library';
import Clock from './Elements/Clock';
import CommentList from './Components_Props/CommentList';
import NotificationList from './State/NotificationList';
import Accommotate from './Hooks/Accommodate';
import ConfirmButton from './Event/ConfirmButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

/* <JSX>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);
*/

/* <Elements>
const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() =>{
  root.render(
    <React.StrictMode>
      <Clock/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);
*/

/* <Components_Props>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);
*/

/* <State>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
);
*/

/* <Hooks>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Accommotate />
  </React.StrictMode>
);
*/