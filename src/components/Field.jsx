import React from "react"

const {useCallback} = require("react");

export const Field = ({
                          label,
                          type = "text",
                          value,
                          onChange,
                      }) => {
    const handleChange = useCallback((event) => onChange(event.target.value), [onChange])
    return (
        <div className={"text-field"}>
        <span className={"text-field__label"}>
            {label}:
        </span>
            <input
                className={"text-field__input"}
                type={type}
                onChange={handleChange}
                value={value}
            />
        </div>
    )
}
