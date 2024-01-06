import React, { useState } from "react"

function Nations() {

    const [nations, setNations] = useState([
        { name: 'India', value: 'IN' },
        { name: 'Pak', value: 'PK' },
        { name: 'Bangladesh', value: 'BG' },
    ])

    const [nation, setNation] = useState({ name: "", value: "" })

    return (
        <>
            <label>Choose nation: </label>

            <select name="nations" id="nation-select" onChange={(e) => {
                console.log(e.target.value)
            }}>
                <option value="">select nation</option>

                {nations.map((nation, index) => <option value={nation.value} key={index}>{nation.name}</option>)}
            </select><br /><br /><br /><br /><br /><br />

            <input type="text" name="name" id="name" placeholder="enter name of nation" onChange={(e) => {
                setNation({ ...nation, name: e.target.value })
            }} />
            <input type="text" name="value" id="value" placeholder="enter value of nation" onChange={(e) => {
                setNation({ ...nation, value: e.target.value })
            }} />
            <button onClick={() => {
                if (nation.name && nation.value) {
                    setNations([...nations, nation])
                }
            }}>ADD</button>
        </>
    )
}

export default Nations