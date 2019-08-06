import React from 'react';
// styled components
import { P, Column, Row } from './styles';
import { BoxIcon, FeatureIcon, Section, Container, ImgFluid, H2, ButtonA } from '../../styles';
// img
import dualphone from '../../assets/img/dualphone.png';

const Launch = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Column>
            <ImgFluid src={dualphone} />
          </Column>
          <Column>
            <BoxIcon>
              <FeatureIcon content="\e730" />
            </BoxIcon>
            <H2>Launch your App</H2>
            <P>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem eveniet vero maxime
              ratione
            </P>
            <ButtonA>Read more</ButtonA>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export default Launch;
