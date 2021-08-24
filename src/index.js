import React from "react";
import ReactDOM from "react-dom";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import ContactReducer from "./Redux/Reducer/ContactReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
const store = createStore(ContactReducer, composeWithDevTools());
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
