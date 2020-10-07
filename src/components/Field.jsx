import React from "react"

const setValue = event => event.target.value
export const Field = ({label, type = "text", value, onChange}) =>
<div className={"text-field"}>
    <span className={"text-field__label"}>{label}: </span>
    <input className={"text-field__input"} type={type} onChange={onChange} value={value}/>
</div>