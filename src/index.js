import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"

import MainLayout from "./layouts/Main"

import "./assets/scss/black-dashboard-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper"
import BackgroundColorWrapper from "./components/BackgroundColor/BackgroundColor"

ReactDOM.render(
    <ThemeContextWrapper>
        <BackgroundColorWrapper>
            <BrowserRouter>
                <MainLayout />
            </BrowserRouter>
        </BackgroundColorWrapper>
    </ThemeContextWrapper>
    , document.getElementById("root")
);