# Project Log

## 2025-12-24

### docs: add landing page folder structure proposal
- **File Created**: `landing_page_structure.md`
- **Reason**: To propose a folder structure for the separate landing page project as requested by the user.

### docs: add react setup instructions
- **File Created**: `landing-page/z-Docs/setup_react_shadcn.md`
- **Reason**: Added step-by-step terminal commands and configuration instructions for initializing the React project with Tailwind CSS and ShadCN UI as requested.

### fix: install tailwindcss v3.4.17
- **Command Run**: `npm install -D tailwindcss@3.4.17 postcss autoprefixer`
- **Reason**: Fixed `could not determine executable to run` error by downgrading from v4 alpha to stable v3.4.17.

### guided: next steps for landing page setup
- **Instructions provided to user**:
    1.  **Configure `tailwind.config.js`**:
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
    2.  **Add Tailwind Directives to `src/index.css`**:
        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```
    3.  **Initialize ShadCN**:
        ```bash
        npx shadcn@latest init
        ```
