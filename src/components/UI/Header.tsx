import { useState } from 'react'
import { Button } from './Button'
import NavbarLinks from './NavbarLinks'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header >
      <nav className= "bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
        <div className= "app-container flex justify-between items-center h-16">
          {/* logo */}
          <a href="#" className="text-2xl font-bold gradient-text">Product Store<span className="inline-block h-1 w-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"></span></a>
          <NavbarLinks classNameDiv='hidden md:flex items-center space-x-8' classNameNavItem='nav-item' classNameBtnItem='nav-btn'/>
          <Button
            className='md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none'
            onClick={()=> setMobileMenuOpen(prev => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </Button>
        </div>
        <div className={`
          md:hidden bg-white shadow-lg rounded-b-lg overflow-hidden
          transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? 'max-h-64 opacity-100 py-3 px-2' : 'max-h-0 opacity-0 py-0 px-2 pointer-events-none'}
        `}>
          <NavbarLinks classNameDiv='space-y-1' classNameNavItem='mobile-nav-item' classNameBtnItem='mobile-nav-btn'/>
        </div>
      </nav>
    </header>
  )
}

export default Header