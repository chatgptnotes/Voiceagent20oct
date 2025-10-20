import React from 'react';
import { render, screen } from '@testing-library/react';
import VoiceAgentWidget from '../components/VoiceAgentWidget';

describe('VoiceAgentWidget Component', () => {
  test('renders widget description', () => {
    render(<VoiceAgentWidget />);
    const description = screen.getByText(/Click the microphone icon above/i);
    expect(description).toBeInTheDocument();
  });

  test('renders voice agent container', () => {
    render(<VoiceAgentWidget />);
    const container = document.querySelector('.voice-agent-container');
    expect(container).toBeInTheDocument();
  });

  test('renders widget wrapper', () => {
    render(<VoiceAgentWidget />);
    const wrapper = document.querySelector('.widget-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});