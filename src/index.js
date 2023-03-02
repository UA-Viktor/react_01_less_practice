// import React from "react";
// import ReactDOM from "react-dom";
// import ReactDOM from "react-dom/client";


// const element = React.createElement('div', { a: 5, b: 10, children: ['Hello', ' ', 'World' ]});

// console.log(element);

// ReactDOM.render(element, document.querySelector('#root'));


const elem1 = <span>Hello</span>;
const elem2 = <span>World</span>;
const element = (
  <div>
    {elem1}
    {elem2}
  </div>
);

console.log(element);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Привет, мир!</h1>);


// ========================

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
