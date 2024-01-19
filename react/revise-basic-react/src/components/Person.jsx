import React, { useState } from "react"

function Person({ name, age }) {

    const [personAge, setPersonAge] = useState(age)

    return (
        <>
            <h1>Hey, {name}. I will increase your age</h1>
            <h2>Your current age: {personAge}</h2>
            <button onClick={() => {
                setPersonAge(personAge + 1)
            }}>Next Year</button>
        </>
    )
}

export default Person