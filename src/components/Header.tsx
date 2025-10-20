import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>
            <span className="material-icons">mic</span>
            Voice Agent
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;