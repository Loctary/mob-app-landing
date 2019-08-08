import styled from 'styled-components';
import { Section as SectionOriginal, H2 as H2Original, P as POriginal, Button as ButtonOriginal } from '../../styles';

export const Section = styled(SectionOriginal)`
  background-image: linear-gradient(135deg, rgba(60, 8, 118, 0.8) 0%, rgba(250, 0, 118, 0.8) 100%);
`;

export const WrapperDownload = styled.div`
  text-align: center;
  margin: 3rem 0;
`;

export const WrapperIcon = styled.div`
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  transform: scale(0.85);
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: center;
`;

export const H2 = styled(H2Original)`
  color: #fff;
`;

export const P = styled(POriginal)`
  font-size: 16px;
  font-weight: 300;
  color: #ffb8f6;
  max-width: 650px;
  margin: 0 auto;
`;

export const DownloadButtons = styled.div`
  margin: 1.5rem 0;
`;

export const Button = styled(ButtonOriginal)`
  min-width: 170px;
  cursor: pointer;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 9px 32px 0px rgba(0, 0, 0, 0.26);
  font-size: 14px;
  font-weight: 500;
  color: #633991;
  margin: 0.5rem;
  padding: 0.7rem 1.6rem;
  line-height: 1.8;
  :hover {
    color: #111;
    background-color: #e2e6ea;
    border-color: #dae0e5;
  }
`;

export const ImgStore = styled.img`
  margin-right: 0.4rem;
  vertical-align: text-bottom;
  box-sizing: border-box;
`;

export const I = styled.i`
  color: #e38cb7;
`;
