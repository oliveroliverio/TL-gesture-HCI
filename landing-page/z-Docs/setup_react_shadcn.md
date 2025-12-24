# Setup Instructions: React + Tailwind CSS + ShadCN

Follow these commands to initialize the landing page project.

## 1. Initialize Vite Project (React)

Open your terminal and navigate to the `landing-page` directory:

```bash
cd landing-page
```

Initialize a new Vite project in the current directory (`.`):

```bash
npm create vite@latest . -- --template react
# If asked to remove existing files, be careful not to delete z-Docs. 
# If it refuses to run in a non-empty directory, use a specific name and move files, 
# or just ignore the warning if 'Ignore' is an option (Vite usually allows 'Ignore').
```

Install dependencies:

```bash
npm install
```

## 2. Install Tailwind CSS

Install Tailwind and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure `tailwind.config.js`

Edit `tailwind.config.js` to add the paths to all of your template files:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add Tailwind Directives

Add the following to `src/index.css` (replace existing content):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3. Initialize ShadCN UI

Run the initialization command:

```bash
npx shadcn@latest init
```

**Recommended Configuration:**
- **Which style would you like to use?** › New York
- **Which color would you like to use as base color?** › Slate (or your preference)
- **Do you want to use CSS variables for colors?** › yes
- **Where is your global CSS file?** › src/index.css
- **Where is your tailwind.config.js located?** › tailwind.config.js
- **Configure the import alias for components:** › @/components
- **Configure the import alias for utils:** › @/lib/utils
- **Are you using React Server Components?** › no
- **Write configuration to components.json?** › yes

### Update `vite.config.js` for Aliases

To make the `@` alias work, install `path` types (if using TS) or just update config. For standard Vite React, update `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

*(Note: If you get an error about `path` not being found, install `@types/node` if using TypeScript, or simply ensure you are in a Node environment context. For vanilla JS/Vite, this works.)*

## 4. Run the Project

Start the development server:

```bash
npm run dev
```
