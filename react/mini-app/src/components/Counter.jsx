import React, { useState } from "react"

function Counter() {
    const [number, setNumber] = useState(0)

    console.log("inside counter")

    // render means -> re running function.

    return (

        <>
            <h1>Number: {number}</h1>
            <button onClick={() => {
                setNumber(number + 1)
                console.log("button clicked, val: " + number)
            }}>Increment</button>
        </>
    )
}

export default Counter