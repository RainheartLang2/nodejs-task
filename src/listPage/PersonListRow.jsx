import React from "react"
import {MaskedData} from "../components/MaskedData"

export const PersonListRow = ({person}) => {
    return (
        <div className={"person-list-row"}>
            <div className={"person-list-row__data"}>
                {person.id}
            </div>
            <div className={"person-list-row__data"}>
                {person.name}
            </div>
            <MaskedData
                className={"person-list-row__data"}
                value={person.mail}
                mask={value => "****"}
            />
            <MaskedData
                className={"person-list-row__data"}
                value={person.phone}
                mask={value => "****"}
            />
            <MaskedData
                className={"person-list-row__data"}
                value={person.password}
                mask={value => "****"}
            />
        </div>
    )
}