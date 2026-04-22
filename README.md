# 🚀 AI Content SaaS Platform

A full-stack AI-powered content generation platform with Next.js frontend and Node.js backend.

## 🎯 Features

- ✨ AI Script Generation (OpenAI GPT-4)
- 🎙 Voice Synthesis (ElevenLabs)
- 🎬 Video Creation (FFmpeg)
- 📊 Modern Dashboard
- 🔄 Background Job Processing
- 📈 Vercel Web Analytics

## 📁 Project Structure

```
ai-content-saas/
├── frontend/          # Next.js Dashboard with Vercel Analytics
├── backend/           # Node.js API
├── workers/           # Background Jobs
└── docker-compose.yml # Docker setup
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/ghimireashesh4-cloud/Ai-Content-Agent-Dashboard.git
cd Ai-Content-Agent-Dashboard
```

2. Install dependencies
```bash
npm run install:all
```

3. Set up environment variables
```bash
cp .env.example .env
# Add your API keys
```

4. Run the development servers
```bash
npm run dev
```

The frontend will be available at http://localhost:3000
The backend will be available at http://localhost:5000

## 📊 Vercel Analytics

This project includes Vercel Web Analytics for tracking page views and user interactions.

The Analytics component is integrated in `frontend/pages/_app.js` and will automatically track:
- Page views
- User interactions
- Performance metrics

To enable analytics in production:
1. Deploy to Vercel
2. Navigate to your project's Analytics tab
3. Click "Enable Web Analytics"

## 🐳 Docker

Run with Docker:
```bash
docker-compose up
```

## 📄 License

MIT
