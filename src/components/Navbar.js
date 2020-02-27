import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

import styled from 'styled-components'

const NavLink = styled(Link)`
  color: #4a4a4a;
  line-height: 1.5;
  padding: .5rem .75rem;
  position: relative;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
`;

const NavStart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: auto;
  align-items: stretch;
  text-align: center;
  @media(min-width: 1024px) {
    flex-direction: row;
  }
`;

const NavMenu = styled.div`
  display: none;
  @media(min-width: 1024px) {
    margin-right: -.75rem;
    flex-grow: 1;
    flex-shrink: 0;
    align-items: stretch;
    display: flex;
  }
`;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/*  B U R G E R  */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <NavMenu id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <NavStart>
              <NavLink to="/about">
                About
              </NavLink>
              <NavLink to="/products">
                Products
              </NavLink>
              <NavLink to="/blog">
                News & Events
              </NavLink>
              <NavLink to="/contact">
                Contact
              </NavLink>
            </NavStart>
          </NavMenu>
        </div>
      </nav>
    )
  }
}

export default Navbar
