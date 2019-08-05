import React from 'react';
// styled components
import Container from './styles';
import { ImgFluid } from '../../styles';
// img
import logos from '../../assets/img/client-logos.png';

const ClientLogos = () => {
  return (
    <div className="client-logos">
      <Container>
        <ImgFluid src={logos} alt="client logos" />
      </Container>
    </div>
  );
};

export default ClientLogos;
