import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
            </div>

            <div className="not-found-content">
                <div className="error-code gradient-text">404</div>
                <h1 className="error-title">Page Not Found</h1>
                <p className="error-description">
                    Oops! The page you're looking for doesn't exist.
                    It might have been moved or deleted.
                </p>
                <div className="error-actions">
                    <Link to="/" className="btn btn-primary btn-large">
                        <span>← Back to Home</span>
                    </Link>
                    <Link to="/app" className="btn btn-secondary btn-large">
                        Launch App
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
