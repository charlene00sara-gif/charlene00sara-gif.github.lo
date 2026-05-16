import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home',     path: '/'         },
  { label: 'About',    path: '/about'    },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact',  path: '/contact'  },
]

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__brand font-en">CHARLENE</NavLink>
      <ul className="navbar__center">
        {NAV_LINKS.map(({ label, path }) => (
          <li key={path}>
            <NavLink
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <span className="material-symbols-outlined navbar__icon">terminal</span>
    </nav>
  )
}
