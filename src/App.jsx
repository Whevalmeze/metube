import "../output.css"
import Homepage from './pages/Homepage'
import AuthPage from "./pages/AuthPage.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
          <Route  path="/" element={<Homepage/>} />
          <Route  path="/sign-in" element={<AuthPage/>} />
      </Routes>   
    </Router>
  )
}

export default App;
