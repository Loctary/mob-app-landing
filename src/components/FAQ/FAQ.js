import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// styled components
import { Container, SectionTitle, H3, Small } from '../../styles';
import { Section, H4, P, Row, Column } from './styles';

const FAQCard = ({ title, text }) => {
  return (
    <Fragment>
      <H4>{title}</H4>
      <P>{text}</P>
    </Fragment>
  );
};

FAQCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.';

const FAQ = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>
          <Small>FAQ</Small>
          <H3>Frequently Asked Questions</H3>
          <Row>
            <Column>
              <FAQCard title="Can I try before I buy?" text={text} />
              <FAQCard title="What payment methods do you accept?" text={text} />
            </Column>
            <Column>
              <FAQCard title="Can I change my plan later?" text={text} />
              <FAQCard title="Do you have a contract?" text={text} />
            </Column>
          </Row>
        </SectionTitle>
        <Row />
      </Container>
    </Section>
  );
};

export default FAQ;
