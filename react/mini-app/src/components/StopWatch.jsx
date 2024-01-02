import React, { useEffect, useState } from "react"

function StopWatch() {

    console.log("stopwatch renders")

    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)


    useEffect(() => {
        let timeId
        if (start) {
            timeId = setTimeout(() => {
                console.log("timeout completed")
                setTime(time + 1)
            }, 1000)
        }

        // cleanup before next render
        return () => {
            clearTimeout(timeId)
        }
    })

    console.log(`time: ${time}`)

    return (
        <>
            <center>
                <h1>{time}</h1><br /><br />
                <button onClick={() => {
                    if (start) {
                        return setStart(false)
                    }
                    setStart(true)
                }}>{start ? "PAUSE" : "START"}</button>

                <button onClick={() => {
                    setTime(0)
                    setStart(false)
                }}>RESET</button>
            </center>
        </>
    )

}

export default StopWatch