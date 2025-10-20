# Voice Agent Demo

A single-page React website demonstrating advanced voice agent capabilities with an embedded AI conversation widget.

## Features

- 🎙️ **Interactive Voice Agent**: Real-time AI voice conversations
- 🗣️ **Natural Speech**: Human-like speech synthesis and recognition
- 🧠 **AI Intelligence**: Context-aware responses powered by advanced AI
- ⚡ **Real-time Processing**: Lightning-fast response times
- 🌐 **Universal Access**: Works across all modern browsers and devices
- 📱 **Responsive Design**: Optimized for desktop and mobile

## Quick Start

### Prerequisites

- Node.js 16+ and npm
- Voice AI service account with conversation agent

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chatgptnotes/Voiceagent20oct.git
cd Voiceagent20oct
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your voice AI service credentials
```

4. Start development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Environment Variables

Create a `.env` file in the root directory:

```env
# Voice AI Service Configuration
REACT_APP_AGENT_ID=your_agent_id_here
REACT_APP_ELEVENLABS_API_KEY=your_api_key_here
```

### Getting Voice AI Credentials

1. **Agent ID**: Get from your voice AI service dashboard
2. **API Key**: Available in your account settings

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run lint` - Check code quality
- `npm run lint:fix` - Auto-fix linting issues
- `npm run type-check` - TypeScript type checking

## Build & Deploy

### Production Build

```bash
npm run build
```

Creates optimized production build in `dist/` directory.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set environment variables in Vercel dashboard

### Environment Variables for Deployment

Set these in your deployment platform:

- `REACT_APP_AGENT_ID` - Your voice AI agent ID
- `REACT_APP_ELEVENLABS_API_KEY` - Your voice AI service API key

## Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── VoiceAgentWidget.tsx  # ElevenLabs widget
│   ├── FeatureSection.tsx    # Features showcase
│   └── Footer.tsx       # Footer with info
├── __tests__/           # Test files
├── App.tsx              # Main app component
├── App.css              # App styling
├── index.tsx            # Entry point
└── index.css            # Global styles
```

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Webpack 5
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint
- **Voice AI**: Advanced Conversation Widget

## Usage Examples

### Try These Conversation Starters

- "Hello, how are you today?"
- "Can you tell me about your capabilities?"
- "What's the weather like?"
- "Help me with a creative writing task"

## FAQ

### Q: The voice widget isn't loading
**A:** Ensure your `REACT_APP_AGENT_ID` is correct and the ElevenLabs script is loading properly.

### Q: No sound from the agent
**A:** Check browser permissions for microphone access and ensure audio is not muted.

### Q: Build fails
**A:** Run `npm run type-check` to identify TypeScript issues and `npm run lint` for code quality issues.

### Q: Tests are failing
**A:** Ensure all dependencies are installed with `npm install` and run `npm test` for detailed error messages.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT License - feel free to use this project for your own voice agent demonstrations.

## Support

For issues related to:
- **Voice AI Service**: Check your voice AI provider's documentation
- **React/TypeScript**: See official documentation
- **This project**: Open an issue in the GitHub repository