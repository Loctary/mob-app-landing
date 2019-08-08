import React from 'react';
// styled components
import { P, FooterSection } from './styles';
import { Small, Link } from '../../styles';

const Footer = () => {
  return (
    <FooterSection>
      {' '}
      <P>
        <Small>
          COPYRIGHT © 2017. ALL RIGHTS RESERVED. MOBAPP TEMPLATE BY<Link>COLORLIB</Link>
        </Small>
      </P>
      <P>
        <Small>
          <Link>PRESS</Link>
          <Link>TERMS</Link>
          <Link>PRIVACY</Link>
        </Small>
      </P>
    </FooterSection>
  );
};

export default Footer;
