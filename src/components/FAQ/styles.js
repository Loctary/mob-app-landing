import styled from 'styled-components';
import {
  H4 as H4Original,
  P as POriginal,
  Row as RowOriginal,
  Column as ColumnOriginal,
  Section as SectionOriginal,
} from '../../styles';

export const H4 = styled(H4Original)`
  text-align: start;
  margin-bottom: 1rem;
`;

export const P = styled(POriginal)`
  text-align: start;
  margin-bottom: 3rem;
`;

export const Row = styled(RowOriginal)`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1.5rem;
`;
export const Column = styled(ColumnOriginal)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  max-width: 50%;
  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const Section = styled(SectionOriginal)`
  padding-top: 0;
`;
