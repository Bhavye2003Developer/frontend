import React from "react"

function PlayButton({ children, videoTitle }) {

    let playing = false

    const handleClick = () => {
        console.log(`${playing ? "paused" : "playing"} - ${videoTitle}`)
        playing = !playing
    }

    return (
        <button onClick={handleClick} style={{
            margin: 5
        }}>{children}</button>
    )
}

export default PlayButton