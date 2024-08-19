import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Reviews from './pages/Reviews.jsx';
import Services from './pages/Services.jsx'; 
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <Router>
        <div className="page-wrapper">
          <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about-us" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/reviews" element={<Reviews />}/>
                <Route path="/services" element={<Services />} />
              </Routes>
            </main>
          <Footer />
        </div>
    </Router>
  )
}

export default App
