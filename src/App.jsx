import React from 'react'
import Header from './components/Header'
import { Route,  Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import { Toaster } from 'react-hot-toast'
import Works from './pages/Works'
import Clock from './components/Clock'
import myResume from './assets/Resume.pdf'

function App() {
  return (
    <div className='font-[JetBrains_Mono] container mx-auto '>
      <Header />
      <main className=' w-full md:w-[90%] lg:w-[80%] xl:[70%] mx-auto  '>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/resume' element={<Resume />} />
          {/* <Route path='/resume/myResume' element={myResume} /> */}
          <Route path='/works' element={<Works/> } />
          <Route path='/contact' element={<Contact />} />
          <Route path='/clock' element={<Clock />} />
          <Route path='*' element={<Dashboard />} />

          
        </Routes>
      </main>

     
      <Toaster/>
    </div>
  )
}

export default App
