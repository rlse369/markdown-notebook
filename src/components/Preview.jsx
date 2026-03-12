import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

function Preview({ content }) {

  if (!content) return <div className="panel">Preview</div>

  return (
    <div className="panel preview">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default Preview