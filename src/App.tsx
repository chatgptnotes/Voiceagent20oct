import React from 'react';
import './App.css';
import VoiceAgentWidget from './components/VoiceAgentWidget';
import Header from './components/Header';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <section className="hero">
          <div className="container">
            <h1>Experience AI Voice Conversations</h1>
            <p>
              Interact with our advanced voice agent powered by ElevenLabs.
              Experience natural, intelligent conversations that demonstrate
              the future of AI communication.
            </p>
            <VoiceAgentWidget />
          </div>
        </section>
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;