import React from 'react';
import PropTypes from 'prop-types';
// styled components
import { Section, Container, SectionTitle, H3 } from '../../styles';
import { CardWrapper, CardHead, PriceTag, Small, Sub, Ul, Li, Del, Button, ButtonWrapper, Row } from './styles';

const PricingCard = ({ isPopular, title, price, features, notFeatures }) => {
  return (
    <CardWrapper isPopular={isPopular}>
      <CardHead>
        <Small>{title}</Small>
        <PriceTag>
          ${price}
          <Sub>/m</Sub>
        </PriceTag>
        <Ul>
          {features.map((feature, index) => (
            <Li key={`${price}-${feature}-${index + 1}`}>{feature}</Li>
          ))}
          {notFeatures.map((feature, index) => (
            <Li key={`${price}-${feature}-${index + 1}`}>
              <Del>{feature}</Del>
            </Li>
          ))}
        </Ul>
        <ButtonWrapper>
          <Button>CHOOSE THIS PLAN</Button>
        </ButtonWrapper>
      </CardHead>
    </CardWrapper>
  );
};

PricingCard.propTypes = {
  isPopular: PropTypes.bool,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.instanceOf(Array),
  notFeatures: PropTypes.instanceOf(Array),
};

PricingCard.defaultProps = {
  isPopular: false,
  features: [],
  notFeatures: [],
};

const values = [
  {
    title: 'PERSONAL',
    price: 14,
    features: ['10 Projects', '5 GB Storage', 'Basic Support'],
    notFeatures: ['Collaboration', 'Reports and analytics'],
  },
  {
    title: 'FOR TEAMS',
    price: 28,
    features: ['Unlimited Projects', '100 GB Storage', 'Priority Support', 'Collaboration', 'Reports and analytics'],
  },
  {
    title: 'ENTERPRISE',
    price: 249,
    features: ['Unlimited Projects', 'Unlimited Storage', 'Collaboration', 'Reports and analytics', 'Web hooks'],
  },
];

const Pricing = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>
          <Small>PRICING</Small>
          <H3>Upgrade to Pro</H3>
          <Row>
            <PricingCard {...values[0]} />
            <PricingCard {...values[1]} isPopular />
            <PricingCard {...values[2]} />
          </Row>
        </SectionTitle>
        <Row />
      </Container>
    </Section>
  );
};

export default Pricing;
