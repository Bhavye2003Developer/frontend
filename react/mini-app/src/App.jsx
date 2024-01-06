import { useEffect, useState } from 'react'
import React from 'react'
import videosData from '../data/videos.json'
import AddVideo from './components/AddVideo'
import VideoList from './components/VideoList'

function App() {

  const [videos, setVideos] = useState(videosData)

  console.log("app renders")

  function addVideo(video) {
    setVideos([...videos, { src: "https://picsum.photos/400/307", ...video }])
  }

  return (
    <>
      <div>

        <center>
          <h2>YouTube</h2>
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

          <AddVideo onAdd={addVideo}></AddVideo>
          <VideoList videos={videos}></VideoList>



          {/* <Clock></Clock> */}

          {/* <StopWatch></StopWatch> */}


          {/* <Input></Input> */}


        </div>
      </div >

      {/* <Footer></Footer> */}
    </>
  )
}

export default App
