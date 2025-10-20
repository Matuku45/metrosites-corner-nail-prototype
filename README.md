# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


💅 La Sorellas Hair, Nail & Beauty Studio – Website Prototype
Project Overview

A front-end website prototype built under the MetroSites Prototype System. It’s designed to:

Showcase the beauty, hair, and nail services of La Sorellas.

Highlight a gallery of past work.

Provide a clear booking CTA.

Communicate the studio’s story and professionalism.

Be responsive across desktop, tablet, and mobile.

Project Objective

Design a visually engaging and elegant interface.

Create responsive layouts for all device sizes.

Present a ready-to-demo prototype for client review.

Prepare the UI for eventual backend integration.

Key Sections of the Prototype
Section	Purpose
Home / Hero	Introduce the studio brand, include visuals, tagline, and CTA.
Services	Display all services with pricing and brief descriptions.
Gallery	Show previous work, styles, and studio imagery.
Booking CTA	Encourage users to book appointments online or via contact.
About	Story, mission, team, building trust.
Footer	Contact info, social links, operating hours.
Design & Technology Stack
Category	Tools & Technologies
Frontend Framework	React JS (Vite + TypeScript)
Styling	Tailwind CSS
UI Components	shadcn/ui
Animations	Framer Motion
Routing	React Router DOM
Version Control	Git & GitHub
Design Mockups	Figma / Adobe XD
Hosting / Deployment	Vercel or Netlify
Project Folder Structure
project-root/
├── public/                  # Static files (images, icons, logos)
├── src/
│   ├── assets/              # Images & custom graphics
│   ├── components/          # Reusable UI components
│   ├── pages/               # Views (Home, Services, Gallery, etc.)
│   ├── styles/              # Global/Tailwind CSS files
│   ├── routes/              # Routing configuration
│   ├── utils/               # Helper functions/constants
│   ├── App.tsx              # Main app entry
│   └── main.tsx             # Root render
├── package.json             # Dependencies & scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── README.md                # Documentation

Component Architecture
Component	Description
Navbar	Top nav bar, links to Home, Services, Gallery, Booking, About
Hero Section	Intro section with tagline and CTA
Service Cards	Modular cards for services & pricing
Gallery Grid	Display studio work & photos
Booking Form	Online appointment call-to-action
About Section	Brand story & team info
Footer	Social links, contact info, copyright
Technologies Summary

Frontend: React 18 + Vite

Styling: Tailwind CSS, responsive layouts

UI & Components: shadcn/ui + Framer Motion for animation

Routing: React Router DOM

Version Control: Git & GitHub

Design: Figma / Adobe XD

Hosting: Vercel / Netlify (for live prototype demos)

Expected Outcome

A visually elegant, brand-aligned interface.

Fully responsive and mobile-ready.

Ready for presentation/demo to clients.

Serves as a blueprint for backend integration.

Highlights MetroSites’ front-end design & development capabilities.
