import React, { useState } from "react";

const Sidebar = ({
  files,
  selectedFileId,
  setSelectedFileId,
  addFile,
  deleteFile,
  renameFile
}) => {
  const [editingId, setEditingId] = useState(null);

  // Generate new note name like Untitled, Untitled 1, Untitled 2
  const generateNewName = () => {
    const base = "Untitled";
    const existingNames = files.map(f => f.name);
    if (!existingNames.includes(base)) return base;
    let i = 1;
    while (existingNames.includes(`${base} ${i}`)) i++;
    return `${base} ${i}`;
  };

  const handleAddFile = () => {
    const newFile = { id: Date.now(), name: generateNewName(), content: "" };
    addFile(newFile);
  };

  return (
    <div className="sidebar">
      <button className="add-btn" onClick={handleAddFile}>+ New</button>
      <ul>
        {files.map(f => (
          <li
            key={f.id}
            className={f.id === selectedFileId ? "active" : ""}
            onClick={() => {
              if (editingId !== f.id) setSelectedFileId(f.id);
            }}
            onDoubleClick={() => setEditingId(f.id)}
          >
            <input
              type="text"
              value={f.name}
              onChange={(e) => renameFile(f.id, e.target.value)}
              onBlur={() => setEditingId(null)}
              onKeyDown={(e) => e.key === "Enter" && setEditingId(null)}
              className="file-name-input"
              readOnly={editingId !== f.id}
              style={{
                cursor: editingId === f.id ? "text" : "pointer",
                background: editingId === f.id ? "#fff" : "transparent",
              }}
            />
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                deleteFile(f.id);
              }}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;