import React, {useEffect, useState} from "react"
import {PersonsList} from "./PersonsList";

export const PersonsListContainer = () => {
    const [persons, setPersons] = useState([])
    useEffect(() => {
        (async function loadData() {
            fetch("/service/list", {
                method: "GET",
            }).then(async response => {
                const body = await response.json()
                setPersons(body)
            })
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