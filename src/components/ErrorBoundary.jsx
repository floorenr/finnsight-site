import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          maxWidth: '600px', 
          margin: '3rem auto', 
          padding: '2rem', 
          textAlign: 'center',
          backgroundColor: '#fef2f2',
          border: '2px solid #ef4444',
          borderRadius: '0.5rem'
        }}>
          <h1 style={{ color: '#dc2626' }}>Er is iets misgegaan</h1>
          <p style={{ marginBottom: '1.5rem' }}>
            We konden deze pagina niet laden. Probeer de pagina te verversen.
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Ververs pagina
          </button>
          <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
            Of <a href="mailto:hello@finnsight.nl" style={{ color: '#3b82f6' }}>neem contact op</a> als het probleem blijft.
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
