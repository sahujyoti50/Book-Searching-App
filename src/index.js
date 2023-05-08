import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from 'react-router-dom';
import BestApp from "./BestApp";
ReactDOM.render(
  <BrowserRouter>
    <BestApp/>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*Features
1.by click on add user can add task.
2.Add Button is disabled when the input field is empty(validation covered)
3.By click on delete button,item is getting deleted*/
