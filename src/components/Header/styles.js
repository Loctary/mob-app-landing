import styled from 'styled-components';

import { Container as ContainerOriginal } from '../../styles';

export const HeaderStyled = styled.header`
  font-family: inherit;
  padding: 100px 0 0;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(135deg, rgba(60, 8, 118, 0.8) 0%, rgba(250, 0, 118, 0.8) 100%);
`;

export const ImgHolder = styled.div`
  height: 0;
  padding-bottom: 33%;
  overflow: hidden;
  margin-top: 1rem !important;
  @media (max-width: 1200px) {
    padding-bottom: 50%;
  }
  @media (max-width: 767px) {
    padding-bottom: 100%;
  }
`;

export const H1 = styled.h1`
  font-size: 60px;
  font-weight: 300;
  letter-spacing: -1px;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-family: inherit;
`;

export const Tagline = styled.p`
  font-family: inherit;
  font-size: 23px;
  font-weight: 300;
  color: #ffb8f6;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 767px) {
    font-size: 17px;
  }
`;

export const Container = styled(ContainerOriginal)`
  margin-top: 3rem !important;
`;
