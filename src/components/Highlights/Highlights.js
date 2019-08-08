import React from 'react';
import PropTypes from 'prop-types';
// styled components
import { Row, Card, CardBody, Column, HighlightIcon } from './styles';
import { Section, Container, Small, SectionTitle, P, H3, H4 } from '../../styles';

const HighlightCard = ({ content, title, text }) => {
  return (
    <Column>
      <Card>
        <CardBody>
          <HighlightIcon content={content} />
          <div>
            <H4>{title}</H4>
            <P>L{text}</P>
          </div>
        </CardBody>
      </Card>
    </Column>
  );
};

HighlightCard.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

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
