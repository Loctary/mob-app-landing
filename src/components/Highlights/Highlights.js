import React from 'react';
// components
import HighlightCard from '../HighlightCard/HighlightCard';
// styled components
import { Row } from './styles';
import { Section, Container, Small, SectionTitle, H3 } from '../../styles';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque ';

const Highlights = () => {
  return (
    <Section isDark>
      <Container>
        <SectionTitle>
          <Small>HIGHLIGHTS</Small>
          <H3>Features you love</H3>
          <Row>
            <HighlightCard text={text} content="\e71f" title="Simple" />
            <HighlightCard text={text} content="\e60f" title="Customize" />
            <HighlightCard text={text} content="\e62b" title="Secure" />
          </Row>
        </SectionTitle>
      </Container>
    </Section>
  );
};

export default Highlights;
