import React, { useState } from "react";
import Video from "./components/Video";
import videos from "../utils/videos";
import Person from "./components/Person";
import Product from "./components/Product";

function App() {

  // const [inStock, setInStock] = useState(true)

  return (
    <>
      {videos.map((video, index) => <Video {...video} key={index}></Video>)}
      {/* <Person name={"cybergod"} age={20}></Person> */}
      {/* <Product productName={"Shampoo"} price={200} quantity={3} inStock={inStock} setInStock={setInStock}></Product> */}
    </>
  )
}

export default App;