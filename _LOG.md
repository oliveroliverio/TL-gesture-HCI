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

### guided: next steps for enhanced landing page
- **Objective**: Add `Features` section and refactor `Footer`.
- **Instructions provided to user**:
    1.  **Install Card Component**:
        ```bash
        npx shadcn@latest add card
        ```
    2.  **Create `src/components/Features.jsx`**:
        ```jsx
        import React from 'react';
        import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

        export function Features() {
          const features = [
            { title: "Touchless Control", desc: "Navigate your computer without touching functionality." },
            { title: "Custom Gestures", desc: "Map specific hand movements to any shortcut." },
            { title: "Lightning Fast", desc: "Optimized for M-series chips for zero latency." }
          ];

          return (
            <section id="features" className="py-24 px-8 bg-muted/50">
              <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
                {features.map((f, i) => (
                  <Card key={i} className="bg-background">
                    <CardHeader>
                      <CardTitle>{f.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{f.desc}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          );
        }
        ```
    3.  **Create `src/components/Footer.jsx`**:
        ```jsx
        import React from 'react';

        export function Footer() {
          return (
            <footer className="py-8 text-center text-sm text-muted-foreground border-t mt-12 bg-background">
              <p>&copy; 2024 GestureHCI Project. Open Source.</p>
            </footer>
          );
        }
        ```
    4.  **Update `src/App.jsx`**:
        ```jsx
        import { Navbar } from "./components/Navbar"
        import { Hero } from "./components/Hero"
        import { Features } from "./components/Features"
        import { Footer } from "./components/Footer"

        function App() {
          return (
            <div className="min-h-screen bg-background text-foreground font-sans antialiased">
              <Navbar />
              <main>
                <Hero />
                <Features />
              </main>
              <Footer />
            </div>
          )
        }

        export default App
        ```
