import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {


  return ( 
  <nav className="navbar navbar-expand-lg bg-green">
    <div className="container-fluid">

    <div className="ms-xl-5">
      <Link to="/">
        <img src="./Isotipo-03.png" alt="logo-tmp" />
      </Link>
    </div>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="d-flex row collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav justify-content-xl-center">
          <NavLink className="col-xl-2 nav-link active" aria-current="page" to="/Datos-gratis">Datos gratis</NavLink>
          <NavLink className="col-xl-2 nav-link active" to="/servicios">Servicios</NavLink>
          <NavLink className="nav-link active" to="/contacto">Contacto</NavLink>
        </div>
      </div>
    </div>
  </nav>
)}
