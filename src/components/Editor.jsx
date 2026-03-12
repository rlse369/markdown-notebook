function Editor({ content, updateNote }) {

  if (!content) return <div className="panel">Select a note</div>

  return (
    <textarea
      className="panel editor"
      value={content}
      onChange={(e) => updateNote(e.target.value)}
    />
  )
}

export default Editor