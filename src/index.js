import React from 'react';
import "./index.css"
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./Redux/Reducers/index"

const store=createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

