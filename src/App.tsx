// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from './components/ui/sonner'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
