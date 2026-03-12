function FileList({ notes, active, setActive, createNote, deleteNote }) {

  return (
    <div className="panel filelist">

      <button onClick={createNote}>New Note</button>

      {Object.keys(notes).map(name => (
        <div
          key={name}
          className={active === name ? "active" : ""}
        >
          <span onClick={() => setActive(name)}>
            {name}
          </span>

          <button onClick={() => deleteNote(name)}>
            x
          </button>
        </div>
      ))}

    </div>
  )
}

export default FileList