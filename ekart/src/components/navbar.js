import React from 'react';

class Navbar extends React.Component {
  state = {};
  
  render() {
    return(
      <nav className="navbar navbar-expand-lg modern-navbar fade-in-up">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span className="me-2" style={{fontSize: '2rem'}}>🛒</span>
            <span>eKart</span>
          </a>
          
          <div className="d-flex align-items-center">
            <div className="navbar-text me-3">
              <span className="badge bg-primary rounded-pill" style={{
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                fontSize: '0.9rem',
                padding: '8px 16px'
              }}>
                🛍️ Shopping Made Easy
              </span>
            </div>
            
            <button className="btn btn-outline-primary d-md-inline d-none" style={{
              borderRadius: '25px',
              padding: '8px 20px',
              borderColor: '#667eea',
              color: '#667eea'
            }}>
              <i className="fas fa-user"></i> Account
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
