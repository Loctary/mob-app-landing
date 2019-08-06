import React from 'react';
// styled components
import { Row, P, H4 } from '../../styles';
import { Card, CardBody, Column, FeatureIcon } from './styles';

const FeatureCard = () => {
  return (
    <Column>
      <Card>
        <CardBody>
          <FeatureIcon />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <H4>Simple</H4>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </P>
          </div>
        </CardBody>
      </Card>
    </Column>
  );
};

export default FeatureCard;
