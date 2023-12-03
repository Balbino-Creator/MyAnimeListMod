import { Principal } from './paginas/Principal'
import { Detalles } from './paginas/Detalles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/detalles/:id" element={<Detalles />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
