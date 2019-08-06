import styled from 'styled-components';

import { P as POriginal, ImgFluid as ImgFluidOriginal, Column as ColumnOriginal } from '../../styles';

export const BoxIcon = styled.div`
  box-shadow: 0px 0px 43px 0px rgba(0, 0, 0, 0.14);
  box-sizing: border-box;
  padding: 10px;
  width: 70px;
  border-radius: 3px;
  margin-bottom: 1.5rem;
  background-color: #fff;
  text-align: center;
`;

export const P = styled(POriginal)`
  margin-bottom: 1.5rem !important;
`;

export const Column = styled(ColumnOriginal)`
  @media (min-width: 992px) {
    margin-left: 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const ImgFluid = styled(ImgFluidOriginal)`
  @media (min-width: 992px) {
    margin-top: -150px;
  }
`;
