import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Registration from "./components/Registration"
import Welcome from "./components/Welcome"


function App() {


  return (
    <>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace={true} />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/home" element={<Welcome />} />

      </Routes>
    
    </>
  )
}

export default App
