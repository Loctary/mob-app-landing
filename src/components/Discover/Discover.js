import React from 'react';
// styled components
import { Section, Container, Row, FeatureIcon, H2, ButtonA } from '../../styles';
import { BoxIcon, P, Column, ImgFluid } from './styles';
// img
import perspective from '../../assets/img/perspective.png';

const Discover = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Column>
            <BoxIcon>
              <FeatureIcon content="\e621" />
            </BoxIcon>
            <H2>Discover our app</H2>
            <P>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem eveniet vero maxime
              ratione{' '}
            </P>
            <ButtonA href="#">READ MORE</ButtonA>
          </Column>
        </Row>
        <ImgFluid src={perspective} />
      </Container>
    </Section>
  );
};

export default Discover;
