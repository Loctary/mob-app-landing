import React from 'react';
// components
import FeatureCard from '../FeatureCard/FeatureCard';
// styled components
import { Section, Row } from './styles';
import { Container, Small, SectionTitle, H3 } from '../../styles';

const text = 'orem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque ';

const Featues = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>
          <Small>HIGHLIGHTS</Small>
          <H3>Features you love</H3>
          <Row>
            <FeatureCard text={text} content="\e71f" title="Simple" />
            <FeatureCard text={text} content="\e60f" title="Customize" />
            <FeatureCard text={text} content="\e62b" title="Secure" />
          </Row>
        </SectionTitle>
      </Container>
    </Section>
  );
};

export default Featues;
