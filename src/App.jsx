import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Home from './components/Home'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
       <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <Experience />
      </div>
    </BrowserRouter>
  )
}

export default App
