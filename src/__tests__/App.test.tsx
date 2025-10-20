import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock the VoiceAgentWidget component since it depends on external script
jest.mock('../components/VoiceAgentWidget', () => {
  return function MockVoiceAgentWidget() {
    return <div data-testid="voice-agent-widget">Voice Agent Widget</div>;
  };
});

describe('App Component', () => {
  test('renders main heading', () => {
    render(<App />);
    const heading = screen.getByText(/Experience AI Voice Conversations/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders voice agent widget', () => {
    render(<App />);
    const widget = screen.getByTestId('voice-agent-widget');
    expect(widget).toBeInTheDocument();
  });

  test('renders features section', () => {
    render(<App />);
    const featuresHeading = screen.getByText(/Voice Agent Capabilities/i);
    expect(featuresHeading).toBeInTheDocument();
  });

  test('renders conversation examples', () => {
    render(<App />);
    const exampleText = screen.getByText(/Try These Conversation Starters/i);
    expect(exampleText).toBeInTheDocument();
  });
});