import React, { useEffect } from "react"
import { useState } from "react"

function Clock() {

    console.log("clock renders")

    const [time, setTime] = useState("")
    const [minute, setMinute] = useState(1)

    if (minute == 60) {
        console.log("1 minute passed")
        setMinute(1)
    }

    setTimeout(() => {
        const d = new Date();
        // d is "Sun Oct 13 2013 20:32:01 GMT+0530 (India Standard Time)"
        let datetext = d.toTimeString();
        // datestring is "20:32:01 GMT+0530 (India Standard Time)"
        // Split with ' ' and we get: ["20:32:01", "GMT+0530", "(India", "Standard", "Time)"]
        // Take the first value from array :)
        datetext = datetext.split(' ')[0];

        setTime(datetext)
        setMinute(minute + 1)
    }, 1000)

    console.log(`Minute: ${minute}`)


    return (
        <>
            <h1>{time}</h1>
        </>
    )

}


export default Clock