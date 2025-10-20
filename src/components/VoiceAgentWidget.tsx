import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': {
        'agent-id': string;
        style?: React.CSSProperties;
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

      // Add load event listener
      newScript.onload = () => {
        console.log('ElevenLabs widget script loaded successfully');
      };
    }
  }, []);

  const agentId = process.env.REACT_APP_AGENT_ID || 'agent_7901k7vk4bx8fxdbzgewvdnvrn2z';

  return (
    <div className="voice-agent-container">
      <div className="widget-wrapper">
        <elevenlabs-convai
          agent-id={agentId}
          style={{
            width: '500px',
            height: '500px',
            minWidth: '500px',
            minHeight: '500px',
            display: 'block',
            visibility: 'visible',
            opacity: 1,
            position: 'relative',
            overflow: 'visible',
            zIndex: 10
          }}
        ></elevenlabs-convai>
      </div>
    </div>
  );
};

export default VoiceAgentWidget;