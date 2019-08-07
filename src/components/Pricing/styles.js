import styled from 'styled-components';
import { Small as SmallOriginal, Button as ButtonOrigianl, Row as RowOriginal } from '../../styles';

export const CardWrapper = styled.div`
  display: flex;
  border: 1px solid #f1eef1;
  flex-direction: column;
  margin-right: 15px;
  margin-bottom: 0;
  margin-left: 15px;
  flex: 1 0 0%;
  @media (max-width: 992px) {
    margin-bottom: 15px;
  }
  ${({ isPopular }) =>
    isPopular &&
    `
        border-top-width: 3px;
        border-color: #ce75b4 #faf6fb #FFF;
        box-shadow: 0px 12px 59px 0px rgba(36, 7, 31, 0.11);
  `}
`;

export const CardHead = styled.div`
  text-align: center;
  padding: 40px 0 20px;
  box-sizing: border-box;
`;

export const PriceTag = styled.span`
  display: block;
  font-size: 45px;
  font-weight: 300;
  color: #633991;
`;

export const Sub = styled.sub`
  bottom: 0;
  font-size: 55%;
  vertical-align: unset;
`;

export const Small = styled(SmallOriginal)`
  color: #e38cb7;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const Li = styled.li`
  border: 0;
  text-align: center;
  color: #959094;
  padding: 1.05rem 1.25rem;
`;

export const Del = styled.del`
  color: #d9d3d8;
`;

export const Button = styled(ButtonOrigianl)`
  color: #fff;
  outline: none;
  padding: 0.8rem 1rem;
  font-size: 15px;
  background-image: linear-gradient(122deg, #e54595 0%, #fd378e 100%);
  box-shadow: 0px 9px 32px 0px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  border: 0;
  cursor: pointer;
  border-radius: 3px;
  :hover {
    background-image: linear-gradient(122deg, #fd378e 0%, #e54595 100%);
    box-shadow: 0px 9px 32px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonWrapper = styled.div`
  padding: 1.75rem;
`;

export const Row = styled(RowOriginal)`
  justify-content: ;
  flex-flow: row wrap;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
