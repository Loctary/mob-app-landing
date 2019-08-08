import styled from 'styled-components';
import {
  Column as ColumnOriginal,
  FeatureIcon as FeatureIconOriginal,
  P as POriginal,
  Link as LinkOriginal,
} from '../../styles';

export const Column = styled(ColumnOriginal)`
  text-align: left;
  box-sizing: border-box;
  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (max-width: 992px) {
    text-align: center;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const FeatureIcon = styled(FeatureIconOriginal)`
  font-size: 1rem;
  transition: all 0.3s ease;
  ${({ noMargin }) => `margin-right: ${noMargin ? '0' : '0.5rem'};`}
  ${({ isPink }) => `
    color: ${isPink ? '#f4c9e2' : '#959094'};
  `}
  :before {
    color: unset;
    -webkit-text-fill-color: unset;
    background: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    -webkit-text-fill-color: unset;
  }
`;

export const WrapperContact = styled.div`
  display: block;
  box-sizing: border-box;
  margin-right: 1.5rem;
  @media (min-width: 576px) {
    display: inline-block !important;
  }
`;

export const P = styled(POriginal)`
  margin-bottom: 0.5rem;
`;

export const Link = styled(LinkOriginal)`
  margin-left: 0;
`;

export const SocialIcons = styled.div`
  text-align: right;
  @media (max-width: 991px) {
    text-align: center;
    margin-top: 2rem;
  }
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  background-color: #fff;
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.05);
  width: 50px;
  height: 50px;
  display: inline-block;
  text-align: center;
  line-height: 50px;
  margin: 0 0.3rem;
  border-radius: 5px;
  color: #f4c9e2;
  cursor: pointer;
  :hover ${FeatureIcon} {
    color: #e38cb7;
  }
`;
