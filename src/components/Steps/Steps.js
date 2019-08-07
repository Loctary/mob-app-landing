import React from 'react';
import PropTypes from 'prop-types';
// styled components
import { Column, Ul, Li, CircleIcon } from './styles';
import { Section, Container, Row, ImgFluid, H5, P } from '../../styles';
// img
import iphonex from '../../assets/img/iphonex.png';

const StepCard = ({ index, title, text }) => {
  return (
    <Li>
      <CircleIcon>{index}</CircleIcon>
      <div>
        <H5>{title}</H5>
        <P>{text}</P>
      </div>
    </Li>
  );
};

StepCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Steps = () => {
  const content = [
    {
      title: 'Create an Account',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem',
    },
    {
      title: 'Share with friends',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem',
    },
    {
      title: 'Enjoy your life',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem',
    },
  ];
  return (
    <Section isDark>
      <Container>
        <Row>
          <Column isBigger>
            <Ul>
              {content.map((item, index) => (
                <StepCard
                  key={`stepCard#${index + 1}`}
                  index={index + 1}
                  title={content[index].title}
                  text={content[index].text}
                />
              ))}
            </Ul>
          </Column>
          <Column>
            <ImgFluid src={iphonex} alt="iphone" />
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export default Steps;
