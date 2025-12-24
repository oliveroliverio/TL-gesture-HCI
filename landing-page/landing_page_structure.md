# Landing Page Folder Structure Proposal

## Overview
To keep the landing page separate from your main application while maintaining a clean repository, we recommend creating a dedicated `landing-page` directory. This acts as a self-contained "monorepo" style package.

## Proposed Structure

```text
TL-gesture-HCI/
├── landing-page/                  # 📍 Dedicated folder for the website
│   ├── index.html                 # Entry point
│   ├── package.json               # Dependencies (Vite, etc.)
│   ├── vite.config.js             # Build configuration
│   ├── public/                    # Static assets (favicon, robots.txt)
│   └── src/                       # Source code
│       ├── assets/                # Images, videos, icons
│       │   ├── images/
│       │   └── icons/
│       ├── css/                   # Vanilla CSS Design System
│       │   ├── index.css          # Main entry (imports others)
│       │   ├── variables.css      # Colors, typographytokens
│       │   ├── reset.css          # CSS Reset
│       │   └── components.css     # specific component styles
│       └── js/                    # JavaScript Logic
│           ├── main.js            # Main script
│           ├── animations.js      # GSAP or custom animations
│           └── ui.js              # UI interactions
└── ... (Main App Files)
```

## Technology Choices
- **Vite**: For a fast development server and optimized production build.
- **Vanilla CSS**: As requested, for maximum control and performance without framework overhead.
- **Vanilla JS**: Lightweight logic for a high-performance landing page.

## Next Steps
If you approve this structure, I will:
1. Initialize the `landing-page` directory.
2. Set up the basic file structure.
3. Configure Vite for local development.
