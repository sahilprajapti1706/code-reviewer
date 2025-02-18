import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark.css";
import axios from "axios"
import './App.css'

function App() {
  const [code, setCode] = useState("")
  const [review, setReview] = useState("")

  useEffect(() => {
    prism.highlightAll();
  }, [])

  const reviewCode = async () => {
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", { code })
      setReview(response.data)
    } catch (error) {
      console.error("Error fetching review:", error);
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
              border: "1px solid #ddd",
              // borderRadius: "5px",
              height: "100%",
              width: "100%"
            }}
          />
        </div>
        <div onClick={reviewCode} className="review">Review Code</div>
      </div>

      <div className="right">
        <div className="markdown-body">
          <Markdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]}>
            {review}
          </Markdown>
        </div>
      </div>
    </main>
  )
}

export default App
