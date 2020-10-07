import ReactDOM from "react-dom"
import React from "react"
import "./styles.css"
import {PersonsListContainer} from "./PersonsListContainer";

ReactDOM.render(
    <React.StrictMode>
        <PersonsListContainer/>
    </React.StrictMode>,
    document.getElementById('app')
)