import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { SignIn,SignUp } from '@clerk/clerk-react'
function App() {
 

  return (
    <Router>
      <Routes>
        
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>

   
  )
}

export default App
