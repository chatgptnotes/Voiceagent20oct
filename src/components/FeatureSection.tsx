import React from 'react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: '🗣️',
      title: 'Natural Speech',
      description: 'Experience human-like conversations with advanced speech synthesis and recognition.'
    },
    {
      icon: '🧠',
      title: 'AI Intelligence',
      description: 'Powered by cutting-edge AI models that understand context and provide intelligent responses.'
    },
    {
      icon: '⚡',
      title: 'Real-time Processing',
      description: 'Lightning-fast response times for seamless, interactive conversations.'
    },
    {
      icon: '🌐',
      title: 'Universal Access',
      description: 'Works across all modern browsers and devices for maximum accessibility.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Voice Agent Capabilities</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="demo-section" id="demo">
          <h3>Try These Conversation Starters:</h3>
          <div className="conversation-examples">
            <div className="example">"Hello, how are you today?"</div>
            <div className="example">"Can you tell me about your capabilities?"</div>
            <div className="example">"What's the weather like?"</div>
            <div className="example">"Help me with a creative writing task"</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;