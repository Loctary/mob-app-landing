import styled from 'styled-components';
import { H5 as H5Original, P as POrigianl, Row as RowOriginal } from '../../styles';

export const Img = styled.img`
  width: 110px !important;
  margin: 30px auto !important;
  border-radius: 50% !important;
  box-shadow: 0px 9px 32px 0px rgba(0, 0, 0, 0.07);
`;

export const H5 = styled(H5Original)`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const PPink = styled(POrigianl)`
  color: #e38cb7;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const TestimoniaSingle = styled.div`
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Row = styled(RowOriginal)`
  margin: 0;
`;
