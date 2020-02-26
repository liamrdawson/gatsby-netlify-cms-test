import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

import styled from 'styled-components' 

import ContentCentered from './containers/ContentCentered'

const UL = styled.ul`
  line-height: 1.25;
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
  li a {
      padding: 0 1rem;
      cursor: pointer;
      color: red;
  }
`;

const Image = styled.img`
  width: 1em;
  height: 1em;
`;

const Column = styled.div`
  width: 300px;
  flex: none;
  display: block;
  padding: .75rem;

`;

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
          <ContentCentered>
              <Column>
                <section>
                  <UL>
                    <li>
                      <Link to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a      
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </UL>
                </section>
              </Column>
              <Column>
                <section>
                  <UL>
                    <li>
                      <Link to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        Contact
                      </Link>
                    </li>
                  </UL>
                </section>
              </Column>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <Image src={facebook} alt="Facebook" />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <Image src={twitter} alt="Twitter" />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <Image src={instagram}  alt="Instagram" />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <Image src={vimeo} alt="Vimeo" />
                </a>
              </div>
        </ContentCentered>
      </footer>
    )
  }
}

export default Footer