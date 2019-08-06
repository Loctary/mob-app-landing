import React from 'react';
import PropTypes from 'prop-types';
// styled components
import { P, H4 } from '../../styles';
import { Card, CardBody, Column, HighlightIcon } from './styles';

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

export default HighlightCard;
