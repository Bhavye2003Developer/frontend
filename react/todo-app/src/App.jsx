import { useState } from 'react'
// import './App.css'
import React from 'react'

function App() {

  console.log("app re-renders")

  const [notes, setNotes] = useState([])

  function addNote(note) {
    // @ts-ignore
    setNotes([...notes, note])
  }


  function markNoteCompleted(index) {
    const allNotes = notes.slice(0)
    allNotes.forEach((_, noteIndex) => {
      if (noteIndex == index) {
        allNotes[noteIndex].completed = true
      }
    })
    // @ts-ignore
    setNotes(allNotes)
  }


  function congratulate() {

    let allCompleted = true
    for (let note in notes) {
      // @ts-ignore
      if (note.completed == false) {
        allCompleted = false;
        break;
      }
    }

    setTimeout(() => {
      if (allCompleted) {
        alert("Congratulations, You have completed all your notes")
      }
    }, 500)
  }

  return (
    <>
      <center>
        <div style={{
          marginTop: 100
        }}>
          {/* <Button></Button> */}

          {/* <Counter></Counter> */}


          <input type="text" name="note" id="note" placeholder='enter note...' style={{
            marginRight: 10
          }} />
          <button type="submit" id='add-note' onClick={() => {
            // @ts-ignore
            const note = document.getElementById("note")
            // @ts-ignore
            if (note.value) {
              // @ts-ignore
              addNote({
                // @ts-ignore
                note: note.value,
                completed: false
              })
              // @ts-ignore
              note.value = ""
              return
            }

            alert("Please enter note first")

          }}>Add note</button>

        </div>
      </center>

      <div style={{
        marginLeft: 560,
        marginTop: 100
      }}>

        {notes.length > 0 ?
          <ul style={{
            listStyleType: "none"
          }}>
            {notes.map((note, index) =>
              <Task index={index}
                note={note}
                key={index}
                markNoteCompleted={markNoteCompleted}
                congratulate={congratulate}
              ></Task>
            )
            }
          </ul>
          : <p style={{
            marginLeft: 100
          }}>No note found</p>}

      </div>
    </>
  )
}



function Task({ index, note, markNoteCompleted, congratulate }) {
  return (
    <li key={index} style={{
      marginBottom: 20
    }}>{note.
      // @ts-ignore
      note}    {note.completed ?
        "  -----  completed" :
        <input type="checkbox" id="horns" name="horns" onClick={() => {
          markNoteCompleted(index)
          congratulate()
        }} />}</li>
  )
}


function Button() {

  console.log("button re-renders")

  const [count, setCount] = useState(0)
  return <button onClick={() => {
    setCount(count + 1)
  }}>counter {count}</button>
}

export default App