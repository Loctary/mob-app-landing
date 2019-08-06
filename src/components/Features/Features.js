import React from 'react';
// components
import FeatureCard from '../FeatureCard/FeatureCard';
// styled components
import { Section, Row } from './styles';
import { Container, Small, SectionTitle, H3 } from '../../styles';

const Featues = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>
          <Small>HIGHLIGHTS</Small>
          <H3>Features you love</H3>
          <Row>
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </Row>
        </SectionTitle>
      </Container>
    </Section>
  );
};

export default Featues;
