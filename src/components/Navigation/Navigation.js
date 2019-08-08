import React, { useState } from 'react';
import PropTypes from 'prop-types';
// images
import logo from '../../assets/img/logo.png';
// styled components
import {
  NavMenu,
  NavLink,
  NavItems,
  NavButton,
  NavItemsUl,
  NavLogo,
  NavBar,
  DropDownSpan,
  DropDownButton,
} from './styles';
import { Container, Row, Column, ImgFluid } from '../../styles';
// css
import './style.css';

const Header = ({ isScrolling }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSetActive = () => setIsMenuOpen(false);
  return (
    <NavMenu isScrolling={isScrolling} isMenuOpen={isMenuOpen}>
      <Container>
        <Row>
          <Column>
            <NavBar>
              <NavLogo href="index.html">
                <ImgFluid src={logo} alt="logo" />
              </NavLogo>
              <DropDownButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <DropDownSpan menuImg={`${process.env.PUBLIC_URL}/menu.svg`} />
              </DropDownButton>
              <NavItems>
                <NavItemsUl>
                  <li>
                    <NavLink activeClass="active" to="home" spy smooth duration={1000} onClick={handleSetActive}>
                      HOME
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClass="active"
                      to="features"
                      spy
                      smooth
                      duration={1000}
                      offset={-56}
                      onClick={handleSetActive}
                    >
                      FEATURES
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClass="active"
                      to="gallery"
                      spy
                      smooth
                      duration={1000}
                      offset={-56}
                      onClick={handleSetActive}
                    >
                      GALLERY
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClass="active"
                      to="pricing"
                      spy
                      smooth
                      duration={1000}
                      offset={-56}
                      onClick={handleSetActive}
                    >
                      PRICING
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClass="active"
                      to="contact"
                      spy
                      smooth
                      duration={1000}
                      offset={-56}
                      onClick={handleSetActive}
                    >
                      CONTACT
                    </NavLink>
                  </li>
                  <li>
                    <NavButton>DOWNLOAD</NavButton>
                  </li>
                </NavItemsUl>
              </NavItems>
            </NavBar>
          </Column>
        </Row>
      </Container>
    </NavMenu>
  );
};

Header.propTypes = {
  isScrolling: PropTypes.bool.isRequired,
};

export default Header;
