import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProductDetail from './pages/ProductDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
