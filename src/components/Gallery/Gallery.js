import React, { memo } from 'react';
import styled from 'styled-components';
import OwlCarousel from 'react-owl-carousel';
// styled components
import { Section, Container, Small, SectionTitle, H3, ImgFluid, Row } from '../../styles';
// img
import screen1 from '../../assets/img/screen1.jpg';
import screen2 from '../../assets/img/screen2.jpg';
import screen3 from '../../assets/img/screen3.jpg';

const ContainerMargin = styled(Container)`
  padding: 0 15px;
  box-sizing: border-box;
`;

const responsiveConfig = {
  0: {
    items: 1,
  },
  450: {
    items: 2,
  },
  768: {
    items: 3,
  },
};

const Screenshots = () => {
  return (
    <Section isDark id="gallery">
      <ContainerMargin>
        <SectionTitle>
          <Small>GALLERY</Small>
          <H3>App Screenshots</H3>
        </SectionTitle>
        <Row>
          <OwlCarousel margin={10} responsive={responsiveConfig} center autoplay loop>
            <ImgFluid src={screen1} alt="screen 1" />
            <ImgFluid src={screen2} alt="screen 2" />
            <ImgFluid src={screen3} alt="screen 3" />
            <ImgFluid src={screen1} alt="screen 1" />
          </OwlCarousel>
        </Row>
      </ContainerMargin>
    </Section>
  );
};

export default memo(Screenshots);
