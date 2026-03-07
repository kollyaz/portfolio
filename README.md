# Frontend Developer Portfolio

A modern, responsive, and visually striking personal portfolio built with React and Tailwind CSS. The portfolio showcases my technical skills, featured projects, and provides a way for visitors to get in touch.

## Features

- **Modern UI/UX**: Designed with a sleek, dark-themed glassmorphism aesthetic.
- **Responsive Design**: Fully responsive layout that looks great on across mobile, tablet, and desktop devices.
- **Interactive Elements**: Smooth scrolling, hover effects, and micro-animations using Framer Motion.
- **Projects Showcase**: An elegant grid to display featured projects along with their tech stack, live demo, and source code links.
- **Skills Section**: A comprehensive overview of my technical expertise, beautifully arranged in a grid.
- **Floating Navigation**: A custom, interactive floating dot navigation bar for quick access to different sections.
- **SEO Optimized**: Includes meta tags and Open Graph tags for rich social media sharing previews.

## Tech Stack

This project was built entirely with JavaScript.

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Emotion (CSS-in-JS) & Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Linting**: ESLint

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (or yarn/pnpm)

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/your-username/portfolio.git
   ```
2. Navigate to the project directory
   ```sh
   cd portfolio
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```

## Deployment

The project is optimized for production and can easily be deployed to platforms like Vercel, Netlify, or GitHub Pages.

To build the project for production:
```sh
npm run build
```
This will generate an optimized, minified bundle in the `dist/` directory.

## Customization

You can easily adapt this portfolio to your own needs:
- Update the text and social links in `src/components/sections/Hero.jsx` and `Contact.jsx`.
- Modify the project list in `src/components/sections/Projects.jsx`.
- Update your technical skills in `src/components/sections/Skills.jsx`.
- Adjust theme colors, fonts, and spacing in `src/styles/theme.js`.
- Replace the `public/favicon.svg` and `public/portfolio-preview.png` with your own assets.

## License

Distributed under the MIT License. See `LICENSE` for more information.
