import React, { Fragment } from 'react';
// styled components
import { Container, SectionTitle, H3, Small } from '../../styles';
import { Section, H4, P, Row, Column } from './styles';

const FAQCard = () => {
  return (
    <Fragment>
      <H4>Can I try before I buy?</H4>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi
        fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.
      </P>
    </Fragment>
  );
};

const FAQ = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>
          <Small>FAQ</Small>
          <H3>Frequently Asked Questions</H3>
          <Row>
            <Column>
              <FAQCard />
              <FAQCard />
            </Column>
            <Column>
              <FAQCard />
              <FAQCard />
            </Column>
          </Row>
        </SectionTitle>
        <Row />
      </Container>
    </Section>
  );
};

export default FAQ;
