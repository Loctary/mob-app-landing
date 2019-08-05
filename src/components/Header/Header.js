import React from 'react';
// styled components
import { HeaderStyled, ImgHolder, H1, Tagline, Container } from './styles';
import { ImgFluid } from '../../styles';
// img
import iphonex from '../../assets/img/iphonex.png';

const Header = () => {
  return (
    <HeaderStyled id="home">
      <Container>
        <H1>Mobile App Landing Page Template</H1>
        <Tagline>
          The one and only solution for any kind of mobila app landing needs. Just change the screenshots and texts and
          you are good to go.{' '}
        </Tagline>
      </Container>
      <ImgHolder>
        <ImgFluid src={iphonex} alt="phone" />
      </ImgHolder>
    </HeaderStyled>
  );
};

export default Header;
