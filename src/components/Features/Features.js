import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'react-tabs';
// styled components
import { Container, Small, SectionTitle, H3, H2 } from '../../styles';
import { Section, TabContent, P, PPink, ImgFluid, Tab, TabPanel, TabList, AnimatedArea } from './styles';
// img
import graphic from '../../assets/img/graphic.png';

const DemoContent = ({ title, isReverse }) => (
  <TabContent>
    <AnimatedArea isReverse={isReverse}>
      <ImgFluid src={graphic} />
      <div>
        <H2>{title}</H2>
        <PPink>Uniquely underwhelm premium outsourcing with proactive leadership skills.</PPink>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi
          nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu
          nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis
          elit. Sed condimentum neque quis ex porttitor,
        </P>
        <P>
          malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit
          vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur,
          tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate
          aliquam.
        </P>
      </div>
    </AnimatedArea>
  </TabContent>
);

DemoContent.propTypes = {
  title: PropTypes.string.isRequired,
  isReverse: PropTypes.bool,
};

DemoContent.defaultProps = {
  isReverse: false,
};

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Section>
      <Container>
        <SectionTitle>
          <Small>FEATURES</Small>
          <H3>Do more with our app</H3>
        </SectionTitle>
        <Tabs
          defaultIndex={0}
          onSelect={index => {
            console.log(index);
            return setActiveTab(index);
          }}
        >
          <TabList>
            <Tab isActive={activeTab === 0}>Communication</Tab>
            <Tab isActive={activeTab === 1}>Scheduling</Tab>
            <Tab isActive={activeTab === 2}>Messages</Tab>
            <Tab isActive={activeTab === 3}>Live Chat</Tab>
          </TabList>

          <TabPanel>
            <DemoContent title="Communicate with ease" />
          </TabPanel>
          <TabPanel>
            <DemoContent title="Scheduling when you want" isReverse />
          </TabPanel>
          <TabPanel>
            <DemoContent title="Realtime Messaging service" />
          </TabPanel>
          <TabPanel>
            <DemoContent title="Live chat when you needed" isReverse />
          </TabPanel>
        </Tabs>
      </Container>
    </Section>
  );
};

export default Features;
