import React from "react";
import {PersonListRow} from "./PersonListRow";

export const PersonsList = ({persons}) => {
    return (<div>
        {persons.map(person => {
                console.log(person)
                return (
                    <PersonListRow
                        key={person.id}
                        person={person}
                    />
                )
            }
        )}
    </div>)
}
