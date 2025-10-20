import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': {
        'agent-id': string;
        children?: React.ReactNode;
      };
    }
  }
}

const VoiceAgentWidget: React.FC = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || !document.head) return;

    // Ensure the script is loaded
    const script = document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]');
    if (!script && document.head) {
      const newScript = document.createElement('script');
      newScript.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
      newScript.async = true;
      newScript.type = 'text/javascript';

      // Additional safety check before appendChild
      if (document.head) {
        document.head.appendChild(newScript);
      }
    }
  }, []);

  const agentId = process.env.REACT_APP_AGENT_ID || 'agent_7901k7vk4bx8fxdbzgewvdnvrn2z';

  return (
    <div className="voice-agent-container">
      <div className="widget-wrapper">
        <elevenlabs-convai agent-id={agentId}></elevenlabs-convai>
      </div>
      <p className="widget-description">
        Click the microphone icon above to start a conversation with our AI voice agent.
        Experience natural speech recognition and response capabilities.
      </p>
    </div>
  );
};

export default VoiceAgentWidget;