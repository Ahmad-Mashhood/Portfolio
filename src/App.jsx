import React from 'react'
import { ThemeProvider } from './components/theme-provider'
import Portfolio from './components/Portfolio'

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}
