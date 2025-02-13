import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Home.jsx';

const root = ReactDOM.createRoot(document.getElementById('root')); //pegando a div root
root.render(<React.StrictMode> <App /> </React.StrictMode>); //oassamos o paramatro executando o elemento

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

