import React from "react"
import PlayButton from "./PlayButton"
import Video from "./Video"

function VideoList({ videos }) {

    return (
        <>
            {videos.map((video, index) => <Video key={index} {...video}>
                <PlayButton onPlay={() => {
                    console.log("playing... -> " + video.title)
                }}
                    onPause={() => {
                        console.log("paused -> " + video.title)
                    }}
                >Play</PlayButton>
            </Video>)}
        </>
    )

}

export default VideoList