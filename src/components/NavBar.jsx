import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {


  return (
    <nav className="navbar">
      <div className="navbar-links">
      <Link to="/">
        <img src="./Isotipo-02.png" alt="logo-tmp" />
      </Link>
        <div className="navbar-links_routes">
          <ul>
            <NavLink to="/Datos-gratis">Datos gratis</NavLink>
            <NavLink to="/servicios">Servicios</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}
