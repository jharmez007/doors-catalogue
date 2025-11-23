
export default function ThemeProvider({ children }) {
  // placeholder for theme if you want to add dark/light toggles later
  return (
    <div className="min-h-screen antialiased">
      {children}
    </div>
  )
}
