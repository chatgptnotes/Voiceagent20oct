import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="about" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About This Demo</h4>
            <p>
              This demonstration showcases the capabilities of ElevenLabs voice agents.
              The widget above provides a real-time example of AI-powered voice interaction.
            </p>
          </div>
          <div className="footer-section">
            <h4>Technology</h4>
            <ul>
              <li>ElevenLabs ConvAI</li>
              <li>React TypeScript</li>
              <li>Modern Web Standards</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>Real-time voice processing</li>
              <li>Natural language understanding</li>
              <li>Cross-platform compatibility</li>
              <li>Instant response generation</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Voice Agent Demo. Powered by ElevenLabs.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;