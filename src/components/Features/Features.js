import React from 'react';
// styled components
import { Section } from './styles';
import { Container, Small, SectionTitle, H3 } from '../../styles';

const Featues = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>
          <Small>HIGHLIGHTS</Small>
          <H3>Features you love</H3>
        </SectionTitle>
      </Container>
    </Section>
  );
};

export default Featues;
