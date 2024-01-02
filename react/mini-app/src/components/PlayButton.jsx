import React, { useState } from "react";
import './PlayButton.css'

function PlayButton({ children, onPlay, onPause }) {

    const [isPaused, setIsPaused] = useState(true)

    function handleVideoControl() {
        if (isPaused) {
            setIsPaused(false)
            return onPlay()
        }
        setIsPaused(true)
        return onPause()
    }

    return (
        <button onClick={handleVideoControl} id="play">
            {isPaused ? '▶️' : '⏸️'}
        </button>
    )
}

export default PlayButton;