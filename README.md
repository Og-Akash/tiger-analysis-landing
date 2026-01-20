# Tiger Analytics - Monorepo Walkthrough

Welcome to the Tiger Analytics project. This repository is structured as a monorepo containing both the frontend client and the Strapi headless CMS.

## 🚀 Overview

This project is a high-performance landing page and content management system built for Tiger Analytics. It features a modern frontend with dynamic animations and a flexible backend for content updates.

---

## 🛠 Tech Stack

### Frontend (`tiger-analytics-frontend`)

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript
- **State & Data**: [Apollo Client](https://www.apollographql.com/docs/react/) (GraphQL)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/)

### Backend (`tiger-analytics-strapi`)

- **Framework**: [Strapi 5](https://strapi.io/)
- **Database**: SQLite (via `better-sqlite3`)
- **API**: GraphQL
- **Editor**: CKEditor integration

---

## 📁 Project Structure

```text
tiger-analytics/
├── .git/                        # Root Git configuration (Monorepo)
├── .gitignore                    # Global ignore rules
├── tiger-analytics-frontend/     # Next.js Application
│   ├── src/
│   │   ├── app/                 # Routes and layouts
│   │   ├── components/          # UI and Navigation components
│   │   └── lib/                 # GraphQL queries and utils
│   └── public/                  # Assets and Fonts
└── tiger-analytics-strapi/       # Strapi Headless CMS
    ├── src/                     # API and Content Types
    ├── config/                  # Server and Plugin configs
    └── database/                # Local SQLite data
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js**: v18 or later (v20 recommended)
- **NPM**: v9 or later (or pnpm/yarn)

### 1. Clone & Setup

The project is configured as a single repository. After cloning, you need to install dependencies in both folders.

```bash
# Clone the repository
git clone <repository-url>
cd tiger-analytics

# Install Frontend dependencies
cd tiger-analytics-frontend
npm install

# Install Strapi dependencies
cd ../tiger-analytics-strapi
npm install
```

### 2. Environment Variables

Ensure you have `.env` files set up in both directories. You can copy the provided `.env.example` files.

- **Frontend**: Needs the backend GraphQL URL.
- **Strapi**: Needs app keys and API tokens.

### 3. Run the Project

Open two terminal windows to run both services concurrently:

**Term 1: Strapi (Backend)**

```bash
cd tiger-analytics-strapi
npm run develop
```

**Term 2: Next.js (Frontend)**

```bash
cd tiger-analytics-frontend
npm run dev
```

---

## 📌 Notable Implementation Details

### 🔄 Monorepo Consolidation

The project was recently updated to a consistent monorepo structure. Nested `.git` directories in `tiger-analytics-frontend` and `tiger-analytics-strapi` were removed to ensure a single, clean version history at the root.

### 📐 UI/UX Fixes

- **Sticky Header**: Fixed an issue where header elements would overlap with the announcement bar on initial load. The layout now dynamically calculates the announcement bar height and adjusts the header position smoothly using `motion`.
- **Dynamic Footer**: Added support for dynamic "About" templates and relevant links fetched from Strapi.

---

## 📖 Available Scripts

### Frontend

- `npm run dev`: Starts development server with Turbopack.
- `npm run build`: Generates optimized production build.
- `npm run start`: Starts production server.

### Backend

- `npm run develop`: Starts Strapi in development mode with auto-reload.
- `npm run build`: Builds the Strapi admin panel.
- `npm run start`: Starts Strapi in production mode.
