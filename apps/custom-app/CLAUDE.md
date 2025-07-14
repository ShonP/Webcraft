# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build for production (TypeScript check + Vite build)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a React + TypeScript application built with Vite, featuring a modern component-based architecture with theming and internationalization support.

### Core Application Structure

- **App.tsx**: Main application component with routing setup, wraps everything in `SettingsProvider` and Radix UI `Theme`
- **Routing**: Uses React Router with routes for Landing (`/`), Home (`/home`), and Settings (`/settings`)
- **Theme System**: Comprehensive theming with light/dark/system modes, customizable accent colors, and border radius settings
- **Settings Architecture**: Persistent settings stored in localStorage with React Context pattern

### Key Architectural Patterns

**Settings Management**:
- `SettingsContext` provides app-wide settings access
- `useSettings` hook manages localStorage persistence and state updates
- Settings interface defined in `types/index.ts` with `IAppSettings`, `IThemeSettings`, `ILanguageSettings`
- Default settings and constants in `constants/index.ts`

**Theming**:
- Uses Radix UI Themes as base design system
- `utils/theme.ts` handles system theme detection
- Theme applied dynamically via `data-theme` attribute on document element
- Supports 26 accent colors and 5 border radius options

**Component Structure**:
- Each page/component has its own folder with `.tsx`, `.styles.ts`, and `index.ts`
- Uses Emotion for custom styling alongside Radix UI components
- TypeScript interfaces for all props and data structures

**Internationalization**:
- React i18next setup with JSON locale files
- Currently supports English, expandable for additional languages
- Translation keys follow nested structure in `locales/en.json`

### State Management

- React Context for global settings state
- Custom hooks pattern (`useSettings`, `useSettingsContext`)
- localStorage for persistence with JSON serialization
- No external state management library (Redux, Zustand, etc.)

### Styling Approach

- Radix UI Themes for consistent, accessible components
- Emotion for custom styled components
- CSS-in-JS approach with TypeScript support
- Responsive design with mobile-first approach
- Theme-aware styling that adapts to light/dark modes