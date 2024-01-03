import React, { useEffect, useState } from "react"

function Input() {

    const [name, setName] = useState("")
    const [isSent, setIsSent] = useState(false)

    // useEffect(() => {
    //     console.log(name)

    //     return ()=>{
    //         console.log("unmounting...")
    //     }
    // }, [isSent])

    console.log("input renders")

    if (isSent) {
        return <h1>Message, "{name}" sent...</h1>
    }

    const handleChnage = (e) => {
        const value = e.target.value
        if (value.length > 20) {
            alert("overflowed")
            e.target.value = name
            return
        }
        return setName(value)
    }

    return (
        <>
            <input type="text" name="name" id="name" placeholder="enter name" onChange={(e) => {
                handleChnage(e)
            }} />

            <h3>Hi, {name}</h3>

            <button onClick={() => { setIsSent(true) }}>SUBMIT</button>

        </>
    )
}

export default Input