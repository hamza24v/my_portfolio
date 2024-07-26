import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
