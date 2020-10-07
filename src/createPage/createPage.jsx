import ReactDOM from "react-dom"
import React from "react"
import {PersonalDataForm} from "./PersonalDataForm"
import "./styles.css"

ReactDOM.render(
    <React.StrictMode>
        <PersonalDataForm/>
    </React.StrictMode>,
    document.getElementById('app')
)