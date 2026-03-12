import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Editor from "./components/Editor.jsx";
import Preview from "./components/Preview.jsx";
import "./App.css";

const App = () => {
  const [files, setFiles] = useState(() => {
    const saved = localStorage.getItem("notebook-files");
    return saved
      ? JSON.parse(saved)
      : [{ id: Date.now(), name: "Untitled", content: "" }];
  });

  const [selectedFileId, setSelectedFileId] = useState(files[0]?.id || null);
  const selectedFile = files.find(f => f.id === selectedFileId);

  useEffect(() => {
    localStorage.setItem("notebook-files", JSON.stringify(files));
  }, [files]);

  const addFile = () => {
    // Generate unique name
    const base = "Untitled";
    const existingNames = files.map(f => f.name);
    let newName = base;
    if (existingNames.includes(base)) {
      let i = 1;
      while (existingNames.includes(`${base} ${i}`)) i++;
      newName = `${base} ${i}`;
    }

    const newFile = { id: Date.now(), name: newName, content: "" };
    setFiles([newFile, ...files]);
    setSelectedFileId(newFile.id);
  };

  const deleteFile = (id) => {
    const filtered = files.filter(f => f.id !== id);
    setFiles(filtered);
    if (selectedFileId === id) setSelectedFileId(filtered[0]?.id || null);
  };

  const renameFile = (id, newName) => {
    setFiles(files.map(f => (f.id === id ? { ...f, name: newName } : f)));
  };

  const updateContent = (id, content) => {
    setFiles(files.map(f => (f.id === id ? { ...f, content } : f)));
  };

  return (
    <div className="app">
      <Sidebar
        files={files}
        selectedFileId={selectedFileId}
        setSelectedFileId={setSelectedFileId}
        addFile={addFile}
        deleteFile={deleteFile}
        renameFile={renameFile}
      />
      <Editor file={selectedFile} updateContent={updateContent} />
      <Preview file={selectedFile} />
    </div>
  );
};

export default App;