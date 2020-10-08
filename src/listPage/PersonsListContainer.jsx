import React, {useEffect, useState} from "react"
import {PersonsList} from "./PersonsList";

export const PersonsListContainer = () => {
    const [persons, setPersons] = useState([])
    useEffect(() => {
        (function loadData() {
            fetch("/service/list", {method: "GET"})
                .then(response => response.json())
                .then(body => setPersons(body))
        })()
    }, [])
    return (
        <>
            <a href={"/index"}>
                Перейти к вводу данных
            </a>
            <PersonsList
                persons={persons}
            />
        </>
    )
}