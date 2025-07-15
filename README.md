# WebCraft

A powerful development environment with an AI-powered chat interface, live app preview, and responsive design testing tools.

## 🚀 Project Overview

WebCraft consists of three integrated applications:

- **🎯 webcraft-frontend** - Chat interface with responsive iframe viewer
- **🤖 webcraft-code-worker** - NestJS backend service for Claude Code CLI integration  
- **📱 custom-app** - Starter React application for preview and development

## ✨ Features

- **AI-Powered Chat** - Interact with Claude directly from the interface
- **Live App Preview** - See your app updates in real-time
- **Responsive Testing** - Switch between Desktop, Tablet, and Mobile viewports
- **Modern Design** - Sleek interface with smooth animations
- **Loading States** - Professional overlay during AI processing
- **Split Layout** - Chat on the left, live preview on the right

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Claude Code CLI** installed and configured

### Installing Claude Code CLI

Claude Code is Anthropic's agentic coding tool that lives in your terminal. Follow the official documentation for installation and setup:

**📖 [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code/overview)**

```bash
# Install Claude Code CLI globally
npm install -g @anthropic-ai/claude-code

# Configure with your API key
claude configure
```

For detailed setup instructions, troubleshooting, and advanced configuration, visit the [official Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code/overview).

## 🛠 Installation

This is a monorepo project. A single install command will set up all dependencies:

```bash
# Clone the repository
git clone <repository-url>
cd WebCraft

# Install all dependencies for the entire monorepo
npm install
```

This will automatically install dependencies for all three applications:
- `apps/webcraft-frontend`
- `apps/webcraft-code-worker` 
- `apps/custom-app`

## 🚀 Running the Project

You need to run all three applications simultaneously. Open **3 separate terminals**:

### Terminal 1: Backend Service (webcraft-code-worker)

```bash
cd apps/webcraft-code-worker
npm run start:dev
```

**Port:** `http://localhost:3000`
**Purpose:** Handles Claude Code CLI integration and API requests

### Terminal 2: Chat Interface (webcraft-frontend)

```bash
cd apps/webcraft-frontend
npm run dev
```

**Port:** `http://localhost:5174`
**Purpose:** Main chat interface with iframe viewer

### Terminal 3: Preview App (custom-app)

```bash
cd apps/custom-app
npm run dev
```

**Port:** `http://localhost:5173`
**Purpose:** The app being previewed in the iframe

## 🌐 Accessing the Application

Once all services are running:

1. **Open your browser** and go to `http://localhost:5174`
2. **Chat Interface** will appear on the left
3. **App Preview** will appear on the right (showing localhost:5173)
4. **Start chatting** with Claude to enhance your app!

## 🎯 How It Works

### Chat Flow
1. Type your message in the chat interface
2. Click Send or press Enter
3. Loading overlay appears on the right panel
4. Claude processes your request via the backend
5. Response appears in the chat
6. App preview updates automatically (if files were modified)

### Viewport Testing
- Click **Desktop** for responsive view
- Click **Tablet** for 768×1024px view  
- Click **Mobile** for 375×667px view

## 📱 Application Details

### webcraft-frontend
- **Framework:** React + TypeScript + Vite
- **Styling:** Emotion + Radix UI + Tailwind
- **State:** React Query for API calls
- **Features:** Chat interface, responsive iframe viewer, loading states

### webcraft-code-worker  
- **Framework:** NestJS + TypeScript
- **Features:** Claude Code CLI integration, CORS enabled, real-time output parsing
- **Endpoint:** `POST /claude` - accepts `{ prompt: string }`

### custom-app
- **Framework:** React + TypeScript + Vite
- **Features:** Starter app with theming, i18n, settings, routing
- **Purpose:** Example app for development and testing

## 🔧 Configuration

### Environment Variables

Create `.env` files if you need custom configuration:

```bash
# apps/webcraft-code-worker/.env
PORT=3000

# apps/webcraft-frontend/.env
VITE_API_URL=http://localhost:3000

# apps/custom-app/.env
PORT=5173
```

### Claude Code CLI Setup

Ensure Claude Code CLI is properly configured:

```bash
# Test Claude Code CLI
claude

```

For advanced setup options, see the [Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code/overview).

## 🐛 Troubleshooting

### Common Issues

**Port conflicts:**
- Change ports in package.json scripts if needed
- Ensure no other services are using ports 3000, 5173, 5174

**Claude Code CLI not found:**
- Follow the [official installation guide](https://docs.anthropic.com/en/docs/claude-code/overview)
- Check your PATH configuration

## 🎨 Development

### Adding New Features

1. **Frontend changes:** Edit files in `apps/webcraft-frontend/src/`
2. **Backend changes:** Edit files in `apps/webcraft-code-worker/src/`
3. **Preview app changes:** Edit files in `apps/custom-app/src/`

### Hot Reload

All applications support hot reload:
- Changes to frontend → Chat interface updates instantly
- Changes to custom-app → Preview iframe updates instantly  
- Changes to backend → Service restarts automatically

## 📖 API Reference

### Backend Endpoints

```typescript
POST /claude
Content-Type: application/json

Request:
{
  "prompt": "Your message to Claude"
}

Response:
{
  "success": boolean,
  "output": string,
  "error"?: string
}
```

