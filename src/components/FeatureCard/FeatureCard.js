import React from 'react';
// styled components
import { P, H4 } from '../../styles';
import { Card, CardBody, Column, FeatureIcon } from './styles';

const FeatureCard = ({ content, title, text }) => {
  return (
    <Column>
      <Card>
        <CardBody>
          <FeatureIcon content={content} />
          <div>
            <H4>{title}</H4>
            <P>L{text}</P>
          </div>
        </CardBody>
      </Card>
    </Column>
  );
};

export default FeatureCard;
