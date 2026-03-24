# 🦸‍♂️ HERO.IO - App Discovery Platform

![HERO.IO Logo](src/assets/logo.png)

## 🌟 Overview

HERO.IO is a modern, responsive web application that serves as an app discovery and installation platform. Built with React and Vite, it provides users with a seamless experience to browse, search, and install applications with detailed reviews, ratings, and statistics.

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-blue?style=for-the-badge&logo=netlify)](https://mr3-hero-io.netlify.app/)

## 📁 Project Structure

```
mr3-hero-io/
├── public/
│   ├── Application.json          # App data and metadata
│   └── netlify.toml              # Netlify deployment configuration
├── src/
│   ├── assets/
│   │   └── reference-design/
│   │       └── mr3-hero-io.fig   # Figma design reference
│   ├── context/                  # React context providers
│   ├── hooks/                    # Custom React hooks
│   ├── layouts/
│   │   └── HomeLayout.jsx        # Main layout component
│   ├── pages/
│   │   ├── Apps/
│   │   │   └── Apps.jsx          # All apps listing page
│   │   ├── Extra/
│   │   │   ├── AboutUs.jsx       # About us page
│   │   │   ├── ContactUs.jsx     # Contact page
│   │   │   └── Terms&Condition.jsx # Terms and conditions
│   │   ├── Home/
│   │   │   ├── Banner.jsx        # Hero banner component
│   │   │   ├── Home.jsx          # Home page
│   │   │   ├── Stats.jsx         # Statistics section
│   │   │   └── TrendingApps.jsx  # Trending apps display
│   │   └── Installation/
│   │       └── Installation.jsx  # Installation guide page
│   ├── router/
│   │   └── router.jsx            # React Router configuration
│   ├── shared/
│   │   ├── AppDetails.jsx        # App details component
│   │   ├── Card.jsx              # Reusable card component
│   │   ├── Error.jsx             # Error page component
│   │   ├── Footer.jsx            # Footer component
│   │   ├── Loading.jsx           # Loading animation component
│   │   └── Navbar.jsx            # Navigation bar component
│   └── utility/
│       └── Utility.js            # Utility functions
├── index.html                    # Main HTML file
├── package.json                  # Project dependencies and scripts
├── vite.config.js                # Vite configuration
└── README.md                     # Project documentation
```


## 📊 Data Structure

The application uses a JSON-based data structure for app information:

```json
{
  "id": "number",
  "image": "string",
  "title": "string",
  "companyName": "string",
  "description": "string",
  "size": "number",
  "reviews": "number",
  "ratingAvg": "number",
  "downloads": "number",
  "ratings": [
    { "name": "1 star", "count": "number" },
    { "name": "2 star", "count": "number" },
    { "name": "3 star", "count": "number" },
    { "name": "4 star", "count": "number" },
    { "name": "5 star", "count": "number" }
  ]
}
```


## 🛠️ Technologies Used

### Frontend Framework

- **React 19.2.4** - Modern JavaScript library for building user interfaces
- **Vite 8.0.1** - Fast build tool and development server

### Styling & UI

- **Tailwind CSS 4.2.2** - Utility-first CSS framework
- **DaisyUI 5.5.19** - Component library for Tailwind CSS
- **Inter Font** - Google Fonts for typography

### Routing & State Management

- **React Router 7.13.1** - Declarative routing for React

### Data Visualization

- **Recharts 3.8.0** - Composable charting library built on React components

### Animations & Interactions

- **AOS (Animate On Scroll) 2.3.4** - Library for animating elements on scroll
- **Lottie React 2.4.1** - React component for Lottie animations
- **React Countup 6.5.3** - React component for animated counting

### Icons & Notifications

- **React Icons 5.6.0** - Popular icon library for React
- **React Toastify 11.0.5** - Toast notifications for React

### Development Tools

- **ESLint 9.39.4** - JavaScript linting utility
- **TypeScript Types** - Type definitions for React and related libraries

## 🚀 Features

### Core Functionality

- **Responsive Design** - Optimized for all device sizes
- **App Discovery** - Browse and search through app catalog
- **Detailed App Pages** - Comprehensive app information with reviews and ratings
- **Live Search** - Real-time app filtering with case-insensitive search
- **App Installation** - Install/uninstall apps with localStorage persistence
- **Review Charts** - Visual representation of app ratings using Recharts

### User Experience

- **Loading Animations** - Smooth loading states during navigation and search
- **Toast Notifications** - User feedback for actions like installation
- **Error Handling** - Custom error pages for invalid routes
- **Smooth Animations** - AOS-powered scroll animations

### Navigation

- **SPA Routing** - Client-side routing with React Router
- **Active Route Indication** - Visual feedback for current page
- **Mobile-Friendly Menu** - Responsive navigation for all devices


## 👨‍💻 Author

**Shad**

- **GitHub**: [shad910](https://github.com/shad910)
- **Project Repository**: [mr3-hero-io](https://github.com/shad910/mr3-hero-io)

## 📄 License

This project is developed as part of an assignment and is intended for educational purposes.