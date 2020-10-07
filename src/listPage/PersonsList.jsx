import React from "react";
import {PersonListRow} from "./PersonListRow";

export const PersonsList = ({persons}) => {
    return (<table>
        <tr>
            <th>
                Id
            </th>
            <th>
                Имя
            </th>
            <th>
                E-mail
            </th>
            <th>
                Телефон
            </th>
            <th>
                Пароль
            </th>
        </tr>
        {persons.map(person => {
                return (
                    <PersonListRow
                        key={person.id}
                        person={person}
                    />
                )
            }
        )}
    </table>)
}
