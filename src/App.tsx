import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Toaster } from './components/ui/toaster'

function App() {
  return (
    <>
    <Toaster />
    {/* Router Setup */}  
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
