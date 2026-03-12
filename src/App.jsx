import { useState, useEffect } from "react"
import FileList from "./components/FileList"
import Editor from "./components/Editor"
import Preview from "./components/Preview"
import "./App.css"

function App() {

  const [notes, setNotes] = useState({})
  const [active, setActive] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem("notes")
    if (saved) setNotes(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const createNote = () => {
    const name = `note-${Date.now()}.md`
    setNotes({ ...notes, [name]: "# New Note" })
    setActive(name)
  }

  const updateNote = (content) => {
    setNotes({ ...notes, [active]: content })
  }

  const deleteNote = (name) => {
    const newNotes = { ...notes }
    delete newNotes[name]
    setNotes(newNotes)
    setActive(null)
  }

  return (
    <div className="layout">

      <FileList
        notes={notes}
        active={active}
        setActive={setActive}
        createNote={createNote}
        deleteNote={deleteNote}
      />

      <Editor
        content={notes[active]}
        updateNote={updateNote}
      />

      <Preview content={notes[active]} />

    </div>
  )
}

export default App