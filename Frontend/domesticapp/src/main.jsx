import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { DomesticApp } from "./DomesticApp";
import { store } from "./store";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DomesticApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
