import { Principal } from './paginas/Principal'
import { Detalle } from './paginas/Detalle'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/detalle" element={<Detalle />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
