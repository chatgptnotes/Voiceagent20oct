import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>🎙️ Voice Agent Demo</h2>
        </div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;