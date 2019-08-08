import React from 'react';
// styled components
import { Section, Container, Row } from '../../styles';
import { Column, FeatureIcon, WrapperContact, P, Link, SocialIcons, SocialIcon } from './styles';

const Contact = () => {
  return (
    <Section isDark id="contact">
      <Container>
        <Row>
          <Column>
            <P>
              <FeatureIcon content="\e693" />
              1485 Pacific St, Brooklyn, NY 11216 USA
            </P>
            <WrapperContact>
              <P>
                <FeatureIcon content="\e75a" />
                <Link href="mailto:support@mobileapp.com">support@mobileapp.com</Link>
              </P>
            </WrapperContact>
            <WrapperContact>
              <P>
                <FeatureIcon content="\e719" />
                <Link href="tel:51836362800">518-3636-2800</Link>
              </P>
            </WrapperContact>
          </Column>
          <Column>
            <SocialIcons>
              <SocialIcons>
                <SocialIcon>
                  <FeatureIcon isPink content="\e741" noMargin />
                </SocialIcon>
                <SocialIcon>
                  <FeatureIcon isPink content="\e74b" noMargin />
                </SocialIcon>
                <SocialIcon>
                  <FeatureIcon isPink content="\e73d" noMargin />
                </SocialIcon>
              </SocialIcons>
            </SocialIcons>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export default Contact;
