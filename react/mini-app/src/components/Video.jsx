import React from "react"

function Video({
    src = "https://placehold.co/150x100",
    title = "video title",
    channel = "channel name",
    views = "10K",
    time = "1 year ago",
    verified = false,
    children
}) {
    return (
        <div style={{
            display: "inline-block",
            margin: 60,
            width: 311.98
        }}>
            <img
                src={src}
                alt="video image"
                width={311.98}
                height={175.48}
                style={{
                    margin: 0,
                    padding: 0
                }} /><br /><br />

            <center>
                <div style={{
                    display: "inline-block",
                    textAlign: "left",
                    marginRight: 50
                }}>
                    <b style={{
                        margin: 0,
                        padding: 0
                    }}>{title.length > 30 ? `${title.slice(0, 20)}...` : title}</b>
                    <p style={{
                        margin: 0,
                        marginTop: 10,
                        padding: 0
                    }}>⛌  {channel} {verified ? '✅' : ''}</p>
                    <p style={{
                        margin: 0,
                        marginTop: 5,
                        padding: 0
                    }}>{views} views · {time}</p>
                </div>
                {children}
            </center>

        </div>
    )
}

export default Video