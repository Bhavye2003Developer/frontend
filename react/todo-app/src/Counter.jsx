import React from "react";
import { useState } from "react";

function Counter() {

    console.log("counter re-renders")

    const [color, setColor] = useState("red")

    return <>
        <select name="color" id="color-select" onClick={(e) => {

            const selectBox = e.target
            // @ts-ignore
            var colorValue = selectBox.options[selectBox.selectedIndex].value;

            setColor(colorValue == "no-color" ? "red" : colorValue)
        }}>
            <option value="no-color">select color</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>


        <Timer color={color}></Timer>

    </>
}


function Timer({ color = "red" }) {
    const [timer, setTimer] = useState(0)

    console.log("timer re-renders")
    setTimeout(() => {
        setTimer(timer + 1)
    }, 1000)

    return <h1 style={{ color }}>
        {timer}
    </h1>
}



export default Counter