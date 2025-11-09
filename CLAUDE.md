# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EarnFlow Store is a Next.js 14 application that serves as a web-based distribution platform for the EarnFlow APK file. This application provides a modern, Google Play Store-like interface for users to download and install the EarnFlow Android app directly, bypassing the Google Play Store.

## Architecture

The application uses a hybrid architecture approach:

- **Next.js 14 App Router**: Modern React framework with server-side rendering capabilities
- **Static HTML Integration**: The main page (`src/app/page.tsx`) renders an iframe that displays a static HTML file (`public/index.html`) containing the complete Google Play Store interface
- **Component-Based Structure**: While the primary content is served via the static HTML file, the project maintains a typical React component structure for extensibility

## Development Commands

### Core Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build production application
npm start           # Start production server
npm run lint        # Run ESLint for code quality checks
```

### Development Workflow
- The development server runs on port 3000 by default
- TypeScript strict mode is enabled - ensure all types are properly defined
- ESLint is configured with Next.js recommended rules

## Key Technical Details

### APK Distribution
- **APK Location**: `public/earnflow.apk` (served from root: `/earnflow.apk`)
- **Download Method**: Direct file serving through Next.js static asset handling
- **File Size**: EarnFlow APK is approximately 5.2MB
- **Download URL**: `http://localhost:3001/earnflow.apk` (development) or `/earnflow.apk` (production)

### Path Aliases
- `@/*` maps to `./src/*` for cleaner imports
- Example: `import Component from '@/components/Component'`

### Styling System
- **Framework**: Tailwind CSS v3.3.0
- **Custom Theme**: Google Play Store color palette defined in `tailwind.config.js`
- **Global Styles**: Custom CSS in `src/app/globals.css`

### Static Asset Configuration
- Images are unoptimized in Next.js config for better APK serving performance
- Asset prefix is handled for production/deployment environments

## Project Structure Notes

### Current Implementation
The application currently uses a minimalist approach:

1. **Main Page**: Simple iframe wrapper (`src/app/page.tsx`) that loads the static HTML
2. **Static Content**: Complete Google Play Store interface in `public/index.html` (1.1MB file containing the full UI)
3. **APK File**: Directly served from `public/earnflow.apk`

### Extensibility
The component directory structure exists but is not currently utilized in the main implementation. Future development could migrate static HTML content to React components for better maintainability.

## Configuration Files

- **TypeScript**: Strict mode enabled with ESNext target and modern module resolution
- **Next.js**: SWC minification enabled, images unoptimized for APK serving
- **Tailwind**: Custom Google brand colors, standard content paths
- **PostCSS**: Standard configuration with Autoprefixer

## SEO and Metadata

Comprehensive metadata configuration in `src/app/layout.tsx`:
- Open Graph tags for social sharing
- Twitter Card optimization
- Custom favicon and preconnect optimization
- SEO-friendly title and description

## Static Asset Path Issues - FIXED

The application had path resolution issues for static assets in the HTML file. These have been resolved:

1. **APK Download Path**: Fixed from `"public/earnflow.apk"` to `"/earnflow.apk"`
2. **Favicon Path**: Fixed from `"images/favicon_v3.ico"` to `"/images/favicon_v3.ico"`
3. **Next.js Public Files**: Static assets in `public/` are served from root, not with `public/` prefix

## Image Loading Issues - FIXED

The application previously had issues with images not loading from the static HTML file due to Next.js blocking external domains. This has been resolved by:

1. **Next.js Configuration**: Added allowed domains in `next.config.js`:
   - Google domains: `play.google.com`, `www.gstatic.com`, `lh3.googleusercontent.com`
   - Font domains: `fonts.googleapis.com`, `fonts.gstatic.com`
   - Remote patterns for all Google subdomains

2. **Security Headers**: Added Content Security Policy in `layout.tsx` to allow external resources
3. **Iframe Configuration**: Enhanced iframe sandbox attributes for better compatibility
4. **Preconnect Headers**: Added preconnect links for faster resource loading

## Deployment Considerations

- Compatible with Vercel, Netlify, and other Node.js hosting platforms
- Static build capability for CDN deployment
- APK file requires proper MIME type configuration on some hosting platforms
- Consider enabling gzip compression for APK delivery
- **Note**: Server may run on port 3001 if port 3000 is occupied