import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Post from "./pages/Post"
import Profile from "./pages/Profile"
import Create from "./pages/Create"

function App() {

  return (
    <>
     <Router>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/create" element={<Create/>}/>
     </Routes>
     </Router>
    </>
  )
}

export default App
