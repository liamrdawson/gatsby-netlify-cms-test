import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import styled from 'styled-components'
import brandStyles from '../paletteStyles'


const NavLink = styled(Link)`
  line-height: 1.5;
  padding: .5rem .75rem;
  margin: 0;
  position: relative;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
`;

const NavEnd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  margin-right: auto;
  align-items: stretch;
  text-align: center;
  @media(min-width: 1024px) {
    flex-direction: row;
  }
`;

const NavMenu = styled.div`
  display: ${({open}) => open ? 'block' : 'none'};
  @media(min-width: 1024px) {
    flex-grow: 1;
    flex-shrink: 0;
    align-items: stretch;
    display: flex;
  }
`;

const Logo = styled.img`
  height: 2rem;
  @media screen and (min-width: 1023px) {
    min-height: 4rem;
  }
`;

const NavBarBrand = styled.div`
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 2rem;
  @media screen and (min-width: 1023px) {
    min-height: 4rem;
  }
`;

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  align-items: stretch;
  display: flex;
  min-height: 3rem;
  width: 100%;
  @media screen and (max-width: 1023px) {
    display: block;
    min-height: 4rem;
  }
`

const Nav = styled.nav`
  height: 3rem;
  position: relative;
  z-index: 30;
  @media screen and (min-width: 1024px) {
    min-height: 4rem;
    align-items: stretch;
    display: flex;
  }
`;

const Burger = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
    height: 4rem;
    width: 4rem;
  }
  cursor: pointer;
  display: block;
  height: 3rem;
  position: relative;
  width: 3rem;
  margin-left: auto;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  span {
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    background-color: ${brandStyles.colorBackgroundDark};
    transition-property:  opacity, transform;
    transition-timing-function: ease-out;
    width: 16px;
    :first-child {
      top: ${({open}) => open ? 'calc(50% - 1px);' : 'calc(50% - 6px)'};
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      top: calc(50% - 1px);
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      top: ${({open}) => open ? 'calc(50% - 1px)' : 'calc(50% + 4px)'};
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
}
`;


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
      <Nav role="navigation" aria-label="main-navigation">
        <Container>
          <NavBarBrand>
            <NavLink>
              <Logo src={logo} alt="Wild Ivy"/>
            </NavLink>
            <Burger open={open} onClick={() => setOpen(!open)}  data-target="navMenu">
              <span />
              <span />
              <span />
            </Burger>
          </NavBarBrand>
          <NavMenu id="navMenu" open={open} onClick={() => setOpen(!open)}>
            <NavEnd>
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
            </NavEnd>
          </NavMenu>
        </Container>
      </Nav>
    )

}

export default Navbar
