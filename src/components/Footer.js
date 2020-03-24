import React from 'react'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import {spacingUnit} from '../paletteStyles'

import styled from 'styled-components' 

import ContentCentered from './containers/ContentCentered'
import Column from './containers/Column'

const SocialIcon = styled.img`
  width: ${spacingUnit._05};
  height: ${spacingUnit._05};
`;

const StyledFooter = styled.footer`
  padding: ${spacingUnit._09} 0 0;
`;

const SocialLink = styled.a`
  padding: ${spacingUnit._03} ${spacingUnit._03} ${spacingUnit._02} ${spacingUnit._03};
  border-radius: ${spacingUnit._05};
  margin: ${spacingUnit._03};
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
              {/* <Column>
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
              </Column> */}
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