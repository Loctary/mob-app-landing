import styled from 'styled-components';
import { TabPanel as TabPanelOriginal, Tab as TabOriginal, TabList as TabListOriginal } from 'react-tabs';

import { P as POriginal, ImgFluid as ImgFluidOriginal } from '../../styles';

export const ImgFluid = styled(ImgFluidOriginal)`
  align-self: flex-start;
  @media (min-width: 992px) {
    align-self: center;
    margin-right: 3rem !important;
  }
`;

export const TabContent = styled.div`
  background-color: #fff;
`;

export const AnimatedArea = styled.div`
  display: flex;
  ${({ isReverse }) => `flex-direction: column${isReverse ? '-reverse' : ''};`}
  padding: 1.5rem;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  animation: fadein 0.7s;
  @media (min-width: 992px) {
    display: flex;
    ${({ isReverse }) => `flex-direction: row${isReverse ? '-reverse' : ''};`}
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const P = styled(POriginal)`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1.8;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 400;
`;

export const PPink = styled(P)`
  color: #e38cb7;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  font-weight: 300;
`;

export const TabPanel = styled(TabPanelOriginal)`
  transition: opacity 0.15s linear;
`;

export const FlexWrapper = styled.div``;

export const Tab = styled(TabOriginal)`
  padding: 1rem 1rem;
  cursor: pointer;
  flex-basis: 25%;
  white-space: nowrap;
  text-align: center;
  ${({ isActive }) =>
    `
      border-color: ${isActive ? '#ce75b4' : '#faf6fb'} #faf6fb #FFF;
      background: ${isActive ? '#fff' : '#f5eff7'};
      border-top: ${isActive ? '3px solid #ce75b4 ' : '0'};
      // margin: ${isActive ? '2px 2px 0' : '2px'};
      // padding: ${isActive ? '1rem 1rem calc(1rem + 1px)' : '1rem'};
  `}
`;

export const TabList = styled(TabListOriginal)`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  @media (max-width: 576px) {
    flex-basis: 50%;
  }
  @media (max-width: 576px) {
    overflow-x: scroll;
  }
`;
