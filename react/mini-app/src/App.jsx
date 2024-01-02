import { useEffect, useState } from 'react'
// import './App.css'
import React from 'react'
import Clock from './components/Clock'
import StopWatch from './components/StopWatch'

function App() {

  console.log("app renders")

  return (
    <>
      <div>

        <center>
          {/* <h2>YouTube</h2> */}
        </center>

        <div style={{
          marginTop: 20,
          marginLeft: 20
        }}>
          {/* <Video
            src={"https://picsum.photos/400/300"}
            title='sold first app'
            channel='CyberGod'
            views='50K'
            time='3 years ago'
          ></Video>

          <Video
            src={"https://picsum.photos/400/200"}
            title='made my first 100$'
            channel='crypto papi'
            views='120K'
            time='5 years ago'
          ></Video>

          <Video></Video> */}

          {/* {videos.map((video, index) => <Video key={index} {...video}>
            <PlayButton onPlay={() => {
              console.log("playing... -> " + video.title)
            }}
              onPause={() => {
                console.log("paused -> " + video.title)
              }}
            >Play</PlayButton>
          </Video>)} */}


          {/* <Clock></Clock> */}

          <StopWatch></StopWatch>


        </div>
      </div >

      {/* <Footer></Footer> */}
    </>
  )
}

export default App
