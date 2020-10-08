import React from "react"
import {MaskableData} from "../components/MaskableData"
import {maskMail, maskPassword, maskPhone} from "../common/MaskUtils";

export const PersonListRow = ({person}) => {
    return (
        <tr className={"person-list-row"}>
            <td>
                <div className={"person-list-row__data"}>
                    {person.id}
                </div>
            </td>
            <td>
                <div className={"person-list-row__data"}>
                    {person.name}
                </div>
            </td>
            <td>
                <MaskableData
                    className={"person-list-row__data masked-data"}
                    value={person.mail}
                    mask={maskMail}
                />
            </td>
            <td>
                <MaskableData
                    className={"person-list-row__data masked-data"}
                    value={person.phone}
                    mask={maskPhone}
                />
            </td>
            <td>
                <MaskableData
                    className={"person-list-row__data masked-data"}
                    value={person.password}
                    mask={maskPassword}
                />
            </td>
        </tr>
    )
}