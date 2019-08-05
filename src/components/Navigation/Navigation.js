import React from 'react';
import PropTypes from 'prop-types';
// images
import logo from '../../assets/img/logo.png';
// styles
import { NavMenu, NavLink, NavItems, NavButton, NavItemsUl, NavLogo, NavBar } from './styles';
import { Container, Row, Column, ImgFluid } from '../../styles';

const Header = ({ isScrolling }) => {
  return (
    <NavMenu isScrolling={isScrolling}>
      <Container>
        <Row>
          <Column>
            <NavBar>
              <NavLogo href="index.html">
                <ImgFluid src={logo} alt="logo" />
              </NavLogo>
              <button type="button" style={{ display: 'none' }} className="navbar-toggler" />
              <NavItems className="navbar-collapse">
                <NavItemsUl>
                  <li>
                    <NavLink href="#home">HOME</NavLink>
                  </li>
                  <li>
                    <NavLink href="#features">FEATURES</NavLink>
                  </li>
                  <li>
                    <NavLink href="#gallery">GALLERY</NavLink>
                  </li>
                  <li>
                    <NavLink href="#pricing">PRICING</NavLink>
                  </li>
                  <li>
                    <NavLink href="#contact">CONTACT</NavLink>
                  </li>
                  <li>
                    <NavButton href="#">DOWNLOAD</NavButton>
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
