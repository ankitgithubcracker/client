import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBagShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token:""
    })
    localStorage.removeItem('auth')
    toast.success("Logout Successfully")
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container>
          <Link className="navbar-brand" to="/">
            <h4>
              <FaBagShopping />
              &nbsp; E-Commerce App
            </h4>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/category">
                    Category
                  </NavLink>
                </li>
                {!auth.user ? (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/register">
                        Register
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/login">
                        Login
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink
                        onClick={handleLogOut}
                        className="nav-link"
                        to="/login"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    Cart (0)
                  </NavLink>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
