import React, {useState} from "react"

export const MaskedData = ({
                               value,
                               mask,
                               masked = true,
                               className = ""
                           }) => {
    const [isMasked, setMasked] = useState(masked)
    return (
        <div
            className={className}
            onClick={() => setMasked(!isMasked)}
        >
            {isMasked ? mask(value) : value}
        </div>
    )
}