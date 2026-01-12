import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import './CodeReviewer.css';

function CodeReviewer() {
    const [code, setCode] = useState("");
    const [review, setReview] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        prism.highlightAll();
    }, []);

    const reviewCode = async () => {
        if (!code.trim()) {
            setError("Please enter some code to review");
            return;
        }

        setError("");
        setIsLoading(true);
        setReview("");

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/ai/get-review`,
                { code }
            );

            // Check if response data is null, empty, or indicates an API key issue
            if (!response.data || response.data.trim() === "" ||
                response.data.includes("API key") ||
                response.data.includes("quota") ||
                response.data.includes("expired")) {
                setError("⚠️ Your Gemini API key has expired or is invalid. Please contact the Admin to resolve this issue.");
                return;
            }

            setReview(response.data);
        } catch (error) {
            console.error("Error fetching review:", error);

            // Check if it's an API key related error
            if (error.response?.status === 401 || error.response?.status === 403) {
                setError("⚠️ Your Gemini API key has expired or is invalid. Please contact the Admin to resolve this issue.");
            } else if (error.response?.data?.includes("API key") ||
                error.response?.data?.includes("quota") ||
                error.response?.data?.includes("expired")) {
                setError("⚠️ Your Gemini API key has expired or is invalid. Please contact the Admin to resolve this issue.");
            } else {
                setError("❌ Failed to get code review. Please try again or contact the Admin if the issue persists.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const clearCode = () => {
        setCode("");
        setReview("");
        setError("");
    };

    return (
        <div className="code-reviewer">
            {/* Header */}
            <header className="app-header">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <span className="logo-icon">⚡</span>
                        <span className="logo-text">CodeReview<span className="gradient-text">AI</span></span>
                    </Link>
                    <div className="header-actions">
                        <button onClick={clearCode} className="btn btn-secondary btn-small">
                            Clear All
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="reviewer-main">
                <div className="reviewer-container">
                    {/* Code Editor Panel */}
                    <div className="editor-panel glass-card">
                        <div className="panel-header">
                            <h2 className="panel-title">
                                <span className="panel-icon">📝</span>
                                Your Code
                            </h2>
                            <div className="panel-info">
                                {code.length > 0 && (
                                    <span className="char-count">{code.length} characters</span>
                                )}
                            </div>
                        </div>

                        <div className="editor-wrapper">
                            <Editor
                                value={code}
                                onValueChange={setCode}
                                highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                                padding={20}
                                placeholder="// Paste your code here...
// Example:
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}"
                                style={{
                                    fontFamily: 'var(--font-code)',
                                    fontSize: 14,
                                    minHeight: "400px",
                                    height: "100%",
                                    width: "100%",
                                    background: "transparent",
                                    outline: "none",
                                }}
                                textareaClassName="code-textarea"
                            />
                        </div>

                        <div className="panel-footer">
                            <button
                                onClick={reviewCode}
                                className="btn btn-primary btn-large review-button"
                                disabled={isLoading || !code.trim()}
                            >
                                {isLoading ? (
                                    <>
                                        <span className="spinner"></span>
                                        <span>Analyzing...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>🤖 Review Code</span>
                                        <span>→</span>
                                    </>
                                )}
                            </button>
                            {error && <div className="error-message">{error}</div>}
                        </div>
                    </div>

                    {/* Review Panel */}
                    <div className="review-panel glass-card">
                        <div className="panel-header">
                            <h2 className="panel-title">
                                <span className="panel-icon">✨</span>
                                AI Review
                            </h2>
                            {review && (
                                <button
                                    onClick={() => setReview("")}
                                    className="btn btn-secondary btn-small"
                                >
                                    Clear
                                </button>
                            )}
                        </div>

                        <div className="review-content">
                            {!review && !isLoading && (
                                <div className="empty-state">
                                    <div className="empty-icon">🎯</div>
                                    <h3 className="empty-title">Ready for Review</h3>
                                    <p className="empty-description">
                                        Paste your code in the editor and click "Review Code" to get
                                        instant AI-powered feedback on code quality, bugs, and best practices.
                                    </p>
                                    <div className="empty-features">
                                        <div className="empty-feature">
                                            <span className="feature-check">✓</span>
                                            <span>Bug Detection</span>
                                        </div>
                                        <div className="empty-feature">
                                            <span className="feature-check">✓</span>
                                            <span>Performance Tips</span>
                                        </div>
                                        <div className="empty-feature">
                                            <span className="feature-check">✓</span>
                                            <span>Best Practices</span>
                                        </div>
                                        <div className="empty-feature">
                                            <span className="feature-check">✓</span>
                                            <span>Security Checks</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {isLoading && (
                                <div className="loading-state">
                                    <div className="loading-spinner"></div>
                                    <h3 className="loading-title">Analyzing Your Code...</h3>
                                    <p className="loading-description">
                                        Our AI is reviewing your code for bugs, performance issues,
                                        and best practices. This will only take a moment.
                                    </p>
                                </div>
                            )}

                            {review && (
                                <div className="markdown-body">
                                    <Markdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]}>
                                        {review}
                                    </Markdown>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CodeReviewer;
