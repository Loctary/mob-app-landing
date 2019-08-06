import styled from 'styled-components';

import { Column as ColumnOriginal, FeatureIcon as FeatureIconOriginal } from '../../styles';

export const Card = styled.div`
  border: 0;
  border-radius: 3px;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.04);
  background: #fff;
  :before {
    content: '';
    position: absolute;
    width: 3px;
    color: #fc73b4;
    background: linear-gradient(to bottom, #9477b4 0%, #fc73b4 100%);
    top: 0;
    bottom: 0;
    left: 15px;
    @media (max-width: 992px) {
      height: calc(100% - 2rem);
    }
  }
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
  display: flex;
  align-items: flex-start;
  text-align: start;
  @media (max-width: 991px) {
    margin-bottom: 2rem;
  }
`;

export const Column = styled(ColumnOriginal)`
  box-sizing: border-box;
  padding: 0 15px;
  flex: 0 0 33%;
  max-width: 33%;
  transition: all 0.3s ease;
  @media (min-width: 768px) {
    flex: 0 0 33%;
    max-width: 33%;
  }
  @media (max-width: 992px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
  :hover {
    transform: translateY(-5px);
  }
`;

export const HighlightIcon = styled(FeatureIconOriginal)`
  margin-right: 1rem !important;
`;
