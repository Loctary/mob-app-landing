import styled from 'styled-components';
import { P as POriginal, Row as RowOriginal, Column as ColumnOriginal } from '../../styles';

export const P = styled(POriginal)`
  margin-bottom: 1.5rem !important;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const Row = styled(RowOriginal)`
  display: flex;
  flex-wrap: nowrap;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Column = styled(ColumnOriginal)`
  flex-basis: 50%;
  max-width: 50%;
  box-sizing: border-box;
  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
