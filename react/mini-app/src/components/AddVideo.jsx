import React, { useState } from "react"
import './AddVideo.css'

function AddVideo({ onAdd }) {

    const [videoInfo, setVideoInfo] = useState({
        time: "1 month ago",
        channel: "ninja party",
        verified: true,
        title: "",
        views: ""
    })

    function handleChange(e) {
        const name = e.target.name
        setVideoInfo({
            ...videoInfo, [name]: e.target.value
        })
    }

    return (
        <form>
            <input type="text" name="title" id="title" placeholder="video title" onChange={handleChange}
                value={videoInfo.title} />
            <input type="text" name="views" id="views" placeholder="video views" onChange={handleChange}
                value={videoInfo.views} />
            <button onClick={(e) => {
                e.preventDefault()
                console.log(videoInfo)
                onAdd(videoInfo)
                setVideoInfo({
                    ...videoInfo, title: "", views: ""
                })
            }}>ADD VIDEO</button>
        </form>
    )
}

export default AddVideo