import styled from 'styled-components';

import { P as POriginal, ImgFluid as ImgFluidOriginal, Column as ColumnOriginal } from '../../styles';

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
