import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import './index.css'
function App() {
  return (
    <Router>
          <div className="min-h-screen font-sans bg-gray-50">
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Exam Result Portal</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>

    </Router>
  )
}

export default App
