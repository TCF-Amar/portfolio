import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'
import { Link, NavLink, useLocation } from 'react-router-dom'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'home', path: '/' },
    { name: "resume", path: '/resume' },
    { name: 'works', path: '/works' },
    { name: 'contact', path: '/contact' }
  ]

  return (
    <motion.header

      className={`fixed top-0 left-0 right-0    flex justify-center flex-col items-center z-50 transition-all duration-300  ${isScrolled
        ? 'bg-[#1D232A]/80 backdrop-blur-lg  py-4'
        : 'bg-transparent py-4'
        }`}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='bg-gradient-to-r from-transparent via-[#00ff99] to-transparent h-[2px]'
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className='w-full text-white  flex items-center justify-between max-w-7xl mx-auto px-2 md:px-8'
      >
        <Link
          to='/'
          className='group flex items-center  hover:opacity-80 transition-all duration-300'
        >
          <motion.img
            src={logo}
            alt="Logo"
            className='h-12 w-auto'
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.span
            className='font-bold text-xl bg-clip-text '
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Amarjeet<span className='text-[#00ff99]'>.</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:block'>
          <ul className='flex gap-4 capitalize items-center'>
            {navLinks.map(link => (
              <motion.li
                key={link.name}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-[12px] font-medium transition-all duration-200 ${isActive
                      ? 'text-[#00ff99]'
                      : 'text-gray-400 hover:text-[#00ff99]'
                    }`
                  }
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#00ff99]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label='Toggle mobile menu'
        >
          <div className='w-6 h-5 relative flex flex-col justify-between'>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </div>
        </motion.button>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden w-full bg-[#1D232A]/95 backdrop-blur-lg capitalize'
          >
            <motion.ul
              className='flex flex-col gap-4 p-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-lg font-medium transition-colors duration-200 ${isActive
                        ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent'
                        : 'text-gray-400 hover:text-white'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='bg-gradient-to-r from-transparent via-[#00ff99] to-transparent h-[2px]'
      />
    </motion.header>
  )
}

export default Header