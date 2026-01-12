import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="gradient-orb orb-1"></div>
                    <div className="gradient-orb orb-2"></div>
                    <div className="gradient-orb orb-3"></div>
                </div>

                <nav className="navbar">
                    <div className="container">
                        <div className="nav-content">
                            <div className="logo">
                                <span className="logo-icon">⚡</span>
                                <span className="logo-text">CodeReview<span className="gradient-text">AI</span></span>
                            </div>
                            <Link to="/app" className="btn btn-primary">
                                Launch App
                            </Link>
                        </div>
                    </div>
                </nav>

                <div className="container hero-container">
                    <div className="hero-content animate-fade-in">
                        <h1 className="hero-title">
                            Elevate Your Code Quality with
                            <span className="gradient-text"> AI-Powered Reviews</span>
                        </h1>
                        <p className="hero-description">
                            Get instant, intelligent code reviews powered by advanced AI.
                            Improve code quality, catch bugs early, and learn best practices
                            in real-time.
                        </p>
                        <div className="hero-actions">
                            <Link to="/app" className="btn btn-primary btn-large">
                                <span>Start Reviewing</span>
                                <span>→</span>
                            </Link>
                            <a href="#features" className="btn btn-secondary btn-large">
                                Learn More
                            </a>
                        </div>
                        <div className="hero-stats">
                            <div className="stat">
                                <div className="stat-value gradient-text">10K+</div>
                                <div className="stat-label">Code Reviews</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value gradient-text">99.9%</div>
                                <div className="stat-label">Accuracy</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value gradient-text">5K+</div>
                                <div className="stat-label">Developers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Powerful Features for <span className="gradient-text">Modern Developers</span>
                        </h2>
                        <p className="section-description">
                            Everything you need to write better code, faster
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card glass-card animate-fade-in">
                            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                                🤖
                            </div>
                            <h3 className="feature-title">AI-Powered Analysis</h3>
                            <p className="feature-description">
                                Advanced machine learning algorithms analyze your code for bugs,
                                security vulnerabilities, and performance issues.
                            </p>
                        </div>

                        <div className="feature-card glass-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                                ⚡
                            </div>
                            <h3 className="feature-title">Instant Feedback</h3>
                            <p className="feature-description">
                                Get real-time code reviews in seconds. No waiting, no delays.
                                Just paste your code and receive instant insights.
                            </p>
                        </div>

                        <div className="feature-card glass-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                                📚
                            </div>
                            <h3 className="feature-title">Best Practices</h3>
                            <p className="feature-description">
                                Learn industry-standard coding patterns and best practices
                                with detailed explanations and suggestions.
                            </p>
                        </div>

                        <div className="feature-card glass-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
                                🔒
                            </div>
                            <h3 className="feature-title">Secure & Private</h3>
                            <p className="feature-description">
                                Your code is never stored. All reviews are processed securely
                                and deleted immediately after analysis.
                            </p>
                        </div>

                        <div className="feature-card glass-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                                🎯
                            </div>
                            <h3 className="feature-title">Multi-Language Support</h3>
                            <p className="feature-description">
                                Support for JavaScript, Python, Java, C++, and many more
                                programming languages out of the box.
                            </p>
                        </div>

                        <div className="feature-card glass-card animate-fade-in" style={{ animationDelay: '0.5s' }}>
                            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' }}>
                                📊
                            </div>
                            <h3 className="feature-title">Detailed Reports</h3>
                            <p className="feature-description">
                                Comprehensive markdown reports with syntax highlighting,
                                code examples, and actionable recommendations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            How It <span className="gradient-text">Works</span>
                        </h2>
                        <p className="section-description">
                            Three simple steps to better code
                        </p>
                    </div>

                    <div className="steps">
                        <div className="step animate-slide-in-left">
                            <div className="step-number">01</div>
                            <div className="step-content">
                                <h3 className="step-title">Paste Your Code</h3>
                                <p className="step-description">
                                    Simply paste your code into our intelligent editor with
                                    syntax highlighting and auto-formatting.
                                </p>
                            </div>
                        </div>

                        <div className="step animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                            <div className="step-number">02</div>
                            <div className="step-content">
                                <h3 className="step-title">AI Analysis</h3>
                                <p className="step-description">
                                    Our AI analyzes your code for bugs, security issues,
                                    performance optimizations, and best practices.
                                </p>
                            </div>
                        </div>

                        <div className="step animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                            <div className="step-number">03</div>
                            <div className="step-content">
                                <h3 className="step-title">Get Insights</h3>
                                <p className="step-description">
                                    Receive detailed feedback with suggestions, code examples,
                                    and explanations to improve your code.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content glass-card">
                        <h2 className="cta-title">
                            Ready to Write <span className="gradient-text">Better Code?</span>
                        </h2>
                        <p className="cta-description">
                            Join thousands of developers who are already improving their code quality with AI
                        </p>
                        <Link to="/app" className="btn btn-primary btn-large">
                            <span>Get Started Now</span>
                            <span>→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <div className="logo">
                                <span className="logo-icon">⚡</span>
                                <span className="logo-text">CodeReview<span className="gradient-text">AI</span></span>
                            </div>
                            <p className="footer-tagline">
                                Elevating code quality with artificial intelligence
                            </p>
                        </div>
                        <div className="footer-bottom">
                            <p>&copy; 2025 CodeReviewAI. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
