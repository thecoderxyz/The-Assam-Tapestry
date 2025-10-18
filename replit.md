# Echoes of Eternity: An Assam Saga

## Overview

An interactive narrative game exploring Assam's cultural and historical heritage through time travel. Players take on the role of a "Time Weaver" who journeys through different eras of Assamese history, making choices that shape the story. The game features a React-based frontend with 3D graphics, sound integration, and a chapter-based storytelling system focused on significant historical periods including the Ahom Kingdom, musical heritage, and modern cultural evolution.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Core Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**State Management**: Zustand for global state with separate stores for different concerns:
- Game phase management (ready/playing/ended states)
- Story progression tracking (chapters, stages, player choices)
- Audio/music playback control
- Achievement system
- Save/load game functionality

**Rationale**: Zustand provides a lightweight, hook-based state management solution without the boilerplate of Redux. Separate stores maintain clear separation of concerns while allowing cross-store communication when needed.

**3D Graphics**: Three.js via React Three Fiber for rendering 3D backgrounds and scene elements. Each chapter has distinct visual themes represented through procedurally generated 3D objects.

**UI Components**: Radix UI primitives styled with Tailwind CSS for a consistent, accessible component library. Custom game-specific components built on top including story boxes, achievement panels, and music controls.

**Routing**: Single-page application without traditional routing - game states managed through phase transitions in the global store.

### Audio System

**Sound Engine**: Tone.js for procedural sound generation and effects. Provides:
- Synthesized sound effects for user interactions
- Melodic elements for story moments
- War horns and cultural atmosphere sounds

**Music Playback**: Native HTML5 Audio API for background music with volume controls and play/pause functionality.

**Rationale**: Separating procedural sounds (Tone.js) from music playback (Audio API) provides flexibility - procedural sounds can be generated on-the-fly while music files can be larger, pre-recorded tracks. Both systems respect user mute preferences.

### Story System

**Data Structure**: Chapter-based narrative with stages containing:
- Story text
- Visual scene descriptors
- Sound cues
- Multiple choice options with branching paths

**Story Navigation**: Players progress through stages by making choices. Each choice leads to a new stage, potentially in a different chapter. The system tracks all choices made for achievement checking.

**Save System**: LocalStorage-based game state persistence allowing players to save progress and continue later. Saves include current chapter/stage and choice history.

### Achievement System

**Achievement Tracking**: Predefined achievements unlocked based on:
- Story progression milestones
- Specific choice combinations
- Completion of narrative arcs

**Persistence**: Achievements stored separately in LocalStorage with unlock timestamps.

### Backend Architecture

**Server Framework**: Express.js with TypeScript serving both API routes and static assets.

**Development Mode**: Vite development server integrated via middleware for hot module replacement and fast refresh during development.

**Production Mode**: Pre-built static assets served from dist/public directory with server-side API routes under /api prefix.

**Storage Interface**: Abstract storage interface (IStorage) currently implemented with in-memory storage (MemStorage). Designed to be replaceable with database-backed storage without changing application code.

**Rationale**: The storage abstraction allows starting development quickly with in-memory data while maintaining a clear path to add PostgreSQL persistence later. The separation of concerns between storage interface and implementation makes this transition straightforward.

### Build System

**Frontend Build**: Vite bundles React application with:
- TypeScript compilation
- CSS processing (Tailwind + PostCSS)
- Asset optimization
- GLSL shader support for 3D graphics

**Backend Build**: esbuild compiles TypeScript server code to ESM format with external dependencies.

**Development Workflow**: Single `npm run dev` command starts both Vite dev server (with HMR) and Express server in development mode.

## External Dependencies

### Database

**Drizzle ORM**: Type-safe database client configured for PostgreSQL with:
- Schema definitions in shared/schema.ts
- Migration support via drizzle-kit
- Connection to Neon serverless PostgreSQL via DATABASE_URL environment variable

**Current State**: Database schema defined but not actively used - application currently uses in-memory storage. Schema includes basic user table with username/password fields.

**Future Integration**: The storage interface is designed to swap MemStorage for a Drizzle-based implementation when database persistence is needed.

### Third-Party Services

**Neon Database**: Serverless PostgreSQL database service accessed via @neondatabase/serverless driver. Configured but not required for current functionality.

**Font Services**: Google Fonts CDN for Tiro Bangla and Lora font families providing cultural authenticity.

### UI Libraries

**Radix UI**: Comprehensive set of unstyled, accessible UI primitives including dialogs, dropdowns, tooltips, accordions, and form components.

**Tailwind CSS**: Utility-first CSS framework with custom theme configuration for colors, spacing, and design tokens.

**Class Variance Authority**: Type-safe variant management for component styling.

### 3D Graphics Stack

**Three.js**: Core 3D rendering library.

**React Three Fiber**: React renderer for Three.js providing declarative 3D scene composition.

**React Three Drei**: Helper components and abstractions for common Three.js patterns.

**React Three Postprocessing**: Post-processing effects for enhanced visual quality.

**GLSL Support**: Vite plugin for importing GLSL shaders as modules.

### Audio Libraries

**Tone.js**: Web Audio API framework for creating and scheduling sounds with musical timing.

### Development Tools

**TypeScript**: Type safety across frontend and backend with shared types.

**ESBuild**: Fast bundler for production server build.

**TSX**: TypeScript execution for development server.

**Replit Integration**: Runtime error overlay plugin for development debugging.