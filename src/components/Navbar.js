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

const Logo = styled.img`
  width: 150px;
`;

const NavBarBrand = styled.div`
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 3.25rem;
`;

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  align-items: stretch;
  display: flex;
  min-height: 3.25rem;
  width: 100%;
  @media screen and (max-width: 1023px) {
    display: block;
  }

`

const Nav = styled.nav`
  background-color: white;
  min-height: 3.25rem;
  position: relative;
  z-index: 30;
  @media screen and (min-width: 1024px) {
    min-height: 3.25rem;
    align-items: stretch;
    display: flex;
  }
`;

const Burger = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }
  color: #4a4a4a;
  cursor: pointer;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
  margin-left: auto;
  span {
    background-color: currentColor;
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
  }
  span:nth-child(1) {
    top: calc(50% - 6px);
  }
  span:nth-child(2) {
    top: calc(50% - 1px);
  }
  span:nth-child(3) {
    top: calc(50% + 4px);
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
      <Nav
        role="navigation"
        aria-label="main-navigation"
      >
        <Container>
          <NavBarBrand>
            <NavLink>
              <Logo src={logo} alt="Wild Ivy"/>
            {/*  B U R G E R  */}
            </NavLink>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </NavBarBrand>
          {/* T O  D O
              Fix the isActive logic here so that we aren't relying on a className.
           */}
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
        </Container>
      </Nav>
    )
  }
}

export default Navbar
