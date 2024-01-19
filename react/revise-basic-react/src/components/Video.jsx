import React from "react"
import PlayButton from "./PlayButton"

function Video({ title, image = "https://picsum.photos/400/300", channelName = "NeuxBoys", verified = false, views, time }) {

    return (
        <div style={{
            display: "inline-block",
            margin: 10,
            width: 356.55,
            height: 320.5
        }}>
            <img src={image} style={{
                width: 356.55,
                height: 200.99,
                borderRadius: 20,
            }}></img>
            <div style={{
                height: 99.98,
                padding: 0
            }}>
                <a><img src="https://yt3.ggpht.com/ekmTQw2_hSgWfjXI5ZhgFLP2MqCFQ6sKunnH_aYzWKVLloogJGlm1b9z0rQWsaElv_oz7vV7sw=s68-c-k-c0x00ffffff-no-rj" style={{
                    width: 35.99,
                    height: 35.99,
                    borderRadius: 50
                }}></img></a>
                <div style={{
                    width: 308.56,
                    height: 99.98,
                    marginLeft: 3,
                    display: "inline-block",
                    position: 'absolute'
                }}>
                    <b style={{
                        fontSize: 16,
                        fontFamily: "sans-serif"
                    }}>
                        {title.length >= 68 ? `${title.slice(0, 67)}...` : title}
                    </b>
                    <p style={{
                        padding: 0,
                        margin: 0,
                        color: "#A7A7A7"
                    }}>
                        {channelName}
                        {verified && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/YT_Official_Verified_Checkmark_Circle.svg/2048px-YT_Official_Verified_Checkmark_Circle.svg.png" width={13.99} style={{
                            marginLeft: 5,
                        }}></img>}
                        <br />
                        {views} views · {time} ago
                    </p>
                    <PlayButton videoTitle={title}>PLAY</PlayButton>
                </div>
            </div>
        </div>
    )
}

export default Video