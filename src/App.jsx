import Login from "./Auth/Login"
import Register from "./Auth/Register"
import Navbar from "./Layout/Navbar"
import { BrowserRouter, Routes,Route } from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Navbar />} />
        <Route path ="/login" element={<Login />} />
        <Route path ="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
