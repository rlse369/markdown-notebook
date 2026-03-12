import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { EditorView } from "@codemirror/view";

const Editor = ({ file, updateContent }) => {
  if (!file) return <div className="empty-state">No file selected</div>;
  return (
    <div className="editor">
      <CodeMirror
        value={file.content}
        height="100%"
        extensions={[markdown()]}
        onChange={(value) => updateContent(file.id, value)}
        theme={EditorView.theme({
          "&": { color: "#1a1a1a", backgroundColor: "#fff" },
          ".cm-content": { caretColor: "#000" },
        })}
      />
    </div>
  );
};

export default Editor;