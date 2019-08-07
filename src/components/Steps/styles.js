import styled from 'styled-components';

import { Column as CoulmnOriginal, ImgFluid as ImgFluidOriginal } from '../../styles';

export const Column = styled(CoulmnOriginal)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  ${({ isBigger }) =>
    `
        flex: 0 0 ${isBigger ? '66.666667%' : '33.333333%'};
        max-width: ${isBigger ? '66.666667%' : '33.333333%'};
  `}

  @media (min-width: 768px) {
    ${({ isBigger }) =>
      `
        flex: 0 0 ${isBigger ? '66.666667%' : '33.333333%'};
        max-width: ${isBigger ? '66.666667%' : '33.333333%'};
    `}
  }
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const ColumnLeft = styled(Column)`
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
`;

export const ColumnRight = styled(Column)`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
`;

export const Ul = styled.ul`
  padding-left: 0;
  list-style: none;
  margin-top: 0;
  margin-bottom: 1rem;
  box-sizing: border-box;
  li:not(:last-child) {
    border-bottom: 1px solid #f8e3f0;
  }
`;

export const CircleIcon = styled.div`
  flex: 0 0 100px;
  box-sizing: border-box;
  margin-right: 1.5rem;
  box-shadow: 0px 9px 32px 0px rgba(0, 0, 0, 0.07);
  padding: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  background-color: #fff;
  color: #f5378e;
  font-size: 48px;
  text-align: center;
  line-height: 80px;
  font-weight: 300;
  transition: all 0.3s ease;
  @media (max-width: 992px) {
    flex: 0 0 70px;
    width: 70px;
    height: 70px;
    font-size: 28px;
    line-height: 50px;
  }
`;

export const Li = styled.li`
  padding: 15px 0;
  display: flex;
  align-items: flex-start;
  :hover ${CircleIcon} {
    background-image: linear-gradient(122deg, #e6388e 0%, #fb378e 100%);
    box-shadow: 0px 9px 32px 0px rgba(0, 0, 0, 0.09);
    color: #fff;
  }
`;
