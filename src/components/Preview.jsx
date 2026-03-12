import React from "react";
import ReactMarkdown from "react-markdown";

const Preview = ({ file }) => {
  if (!file) return <div className="empty-state">No file selected</div>;

  // Convert all newlines to <br /> in ReactMarkdown
  const contentWithBreaks = file.content.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return <div className="preview">{contentWithBreaks}</div>;
};

export default Preview;