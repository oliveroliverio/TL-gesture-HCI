# Project Log

## 2025-12-24

### docs: add landing page folder structure proposal
- **File Created**: `landing_page_structure.md`
- **Reason**: To propose a folder structure for the separate landing page project as requested by the user.

### docs: add react setup instructions
> [!CAUTION]
> **Bug Fix Update**: The original instructions missed the required import alias configuration for ShadCN.
> To fix the `No import alias found` error, you must:
> 1. Create `jsconfig.json` with path mappings.
> 2. Update `vite.config.js` to handle the alias.
> *(See details in "fix: configure import aliases for shadcn" entry below)*

- **File Created**: `landing-page/z-Docs/setup_react_shadcn.md`
- **Reason**: Added step-by-step terminal commands and configuration instructions for initializing the React project with Tailwind CSS and ShadCN UI as requested.

### fix: install tailwindcss v3.4.17
- **Command Run**: `npm install -D tailwindcss@3.4.17 postcss autoprefixer`
- **Reason**: Fixed `could not determine executable to run` error by downgrading from v4 alpha to stable v3.4.17.

### guided: next steps for landing page setup
- **Instructions provided to user**:
    1.  **Configure `tailwind.config.js`**
    2.  **Add Tailwind Directives to `src/index.css`**
    3.  **Initialize ShadCN**

### fix: configure import aliases for shadcn
> [!CAUTION]
> **Implementation Note**: The `vite.config.js` update in this step may have failed to apply in some instances.
> A follow-up fix was required to ensure `vite.config.js` correctly included the alias configuration.
> *(See "fix: correct vite.config.js alias" below)*

- **Files Modified**: `jsconfig.json` (created), `vite.config.js` (updated)
- **Reason**: Fixed `No import alias found` error during ShadCN initialization.
- **Implementation**:
    - **`jsconfig.json`**:
      ```json
      {
        "compilerOptions": {
          "paths": {
            "@/*": ["./src/*"]
          }
        }
      }
      ```
    - **`vite.config.js`**: Added alias resolution:
      ```javascript
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
      ```

### guided: next steps for basic landing page
- **Objective**: Create a basic landing page with a banner and essential parts.
- **Plan**:
    1.  **Clean up `App.jsx`**: Remove default Vite boilerplate.
    2.  **Create Components**:
        - `Navbar`: with logo and links.
        - `Hero`: with banner image and CTA.
        - `Features`: section to highlight key benefits.
        - `Footer`: simple footer.
    3.  **Assemble**: Put them together in `App.jsx`.

### fix: install missing UI components
- **Action**: Install `button` component via ShadCN CLI.
- **Reason**: `Hero.jsx` imports `Button`, but the component wasn't installed, causing a build error.
- **Command**: `npx shadcn@latest add button`

### fix: correct vite.config.js alias
- **Files Modified**: `landing-page/vite.config.js`
- **Action**: Overwrote `vite.config.js` with correct configuration.
- **Reason**: Initial attempt to update allow configuration failed to apply, causing module resolution errors (`Failed to resolve import "@/components/ui/button"`). Confirmed that `alias` key is now present in `resolve` object.
