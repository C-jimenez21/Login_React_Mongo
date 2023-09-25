import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FormLogin from './components/FormLogin.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FormLogin></FormLogin>
  </React.StrictMode>,
)
