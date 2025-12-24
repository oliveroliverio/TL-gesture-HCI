import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t mt-12">
        <p>&copy; 2024 GestureHCI Project. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App