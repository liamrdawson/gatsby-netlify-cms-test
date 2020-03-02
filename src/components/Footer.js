import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

import styled from 'styled-components' 

import ContentCentered from './containers/ContentCentered'
import Column from './containers/Column'

const List = styled.ul`
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

const SocialIcon = styled.img`
  width: 1em;
  height: 1em;
`;

const StyledFooter = styled.footer`
  background-color: black;
  padding: 3rem 0 0;
`;

const SocialLink = styled.a`
  padding: .5em .5em .3em .5em;
  border-radius: 1em;
  background-color: white;
  margin: .5em;
  vertical-align: middle;
  display: inline;
`;

const ContentCenteredFooter = styled(ContentCentered)`
  flex-direction: column;
`;

const Footer = class extends React.Component {
  render() {
    return (
      <StyledFooter>
          <ContentCenteredFooter>
              <Column>
                <section>
                  <List>
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
                  </List>
                </section>
              </Column>
              <Column>
                <section>
                  <List>
                    <li>
                      <Link to="/blog">
                        Latest Events
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        Contact
                      </Link>
                    </li>
                  </List>
                </section>
              </Column>
              <Column>
                <SocialLink>
                  <SocialIcon src={facebook} alt="Facebook" />
                </SocialLink>
                <SocialLink>
                  <SocialIcon src={twitter} alt="Twitter" />
                </SocialLink>
                <SocialLink>
                  <SocialIcon src={instagram}  alt="Instagram" />
                </SocialLink>
                <SocialLink>
                  <SocialIcon src={vimeo} alt="Vimeo" />
                </SocialLink>
              </Column>
        </ContentCenteredFooter>
      </StyledFooter>
    )
  }
}

export default Footer