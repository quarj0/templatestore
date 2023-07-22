import React, { Component } from 'react';
import '../styles/ErrorBoundary.css';
import '../styles/Home.css'
import Home from './Home'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="ErrorBoundary">
          <Home />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
