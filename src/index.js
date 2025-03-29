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
import LandingPage from './Conditional_Rendering/LandingPage';
import AttendanceBook from './List_and_Keys/AttendanceBook';
import SignUp from './Forms/SignUp';
import Calculator from './Shared_State/Calculator';
import ProfileCard from './Composition_Inheritance/ProfileCard';
import DarkOrLight from './Context/DarkOrLight';

// Context
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkOrLight />
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

/* <Event>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>
);
*/

/* <Conditional_Rendering>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
 */

/* <List_and_Keys>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AttendanceBook />
  </React.StrictMode>
);
 */

/*// Forms
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);
*/

/*// Shared_State
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
*/

/*// Composition_Inheritance
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>
);
 */