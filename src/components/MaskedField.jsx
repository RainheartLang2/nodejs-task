import React from "react"
import InputMask from "react-input-mask"

const {useCallback} = require("react");

export const MaskedField = ({
                                label,
                                type = "text",
                                value,
                                onChange,
                                mask,
                                placeholder = "",
                            }) => {
    const handleChange = useCallback((event) => onChange(event.target.value), [onChange])
    return (
        <div className={"text-field"}>
            <span className={"text-field__label"}>{label}: </span>
            <InputMask
                className={"text-field__input"}
                type={type}
                onChange={handleChange}
                value={value}
                mask={mask}
                placeholder={placeholder}
            />
        </div>
    )
}