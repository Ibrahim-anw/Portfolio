import { useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          S. Ibrahim Anwar
        </a>

        <nav>
          <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}

export default Navbar
