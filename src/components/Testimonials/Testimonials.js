import React, { memo } from 'react';
import OwlCarousel from 'react-owl-carousel';
// styled components
import { Section, Container, Small, SectionTitle, H3, P } from '../../styles';
import { Img, H5, PPink, TestimoniaSingle, Row } from './styles';
// img
import client from '../../assets/img/client.png';

const TestimonialItem = () => {
  return (
    <TestimoniaSingle>
      <Img src={client} alt="client" />
      <P>
        Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas
        through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric
        partnerships.
      </P>
      <H5>Crystal Gordon</H5>
      <PPink>United States</PPink>
    </TestimoniaSingle>
  );
};

const Testimonials = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>
          <Small>Testimonials</Small>
          <H3>What our Customers Says</H3>
        </SectionTitle>
        <Row>
          <OwlCarousel className="owl-theme" margin={10} nav items={1} dots={false}>
            {[...Array(3)].map((_, index) => (
              <TestimonialItem key={`owl.item#${index + 1}`} />
            ))}
          </OwlCarousel>
        </Row>
      </Container>
    </Section>
  );
};

export default memo(Testimonials);
