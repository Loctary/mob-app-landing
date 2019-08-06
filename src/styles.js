import styled from 'styled-components';

export const Wrapper = styled.div`
  //   background: green;
  height: 100vh;
  font-family: 'Rubik', sans-serif;
`;

export const Container = styled.div`
  width: calc100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 540px) {
    width: calc(100% - 30px);
  }
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-right: -15px;
  margin-left: -15px;
  @media (max-width: 540px) {
    margin-right: 0;
    margin-left: 0;
  }
`;

export const Column = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const ImgFluid = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Section = styled.section`
  padding: 80px 0;
`;

export const Small = styled.small`
  color: #998a9b;
  font-size: 80%;
  font-weight: 400;
`;

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const H3 = styled.h3`
  color: #633991;
  font-size: 33px;
  font-weight: 500;
`;

export const H4 = styled.h4`
  margin: 0;
  padding: 0;
  margin-bottom: 0.75rem;
  font-size: 20px;
  font-weight: 500;
  color: #633991;
  line-height: 1.2;
`;

export const P = styled.p`
  font-size: 14px;
  color: #959094;
  margin: 0;
  padding: 0;
`;

export const Button = styled.button`
  text-transform: none;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  font-family: inherit;
  :hover {
    background: transparent;
  }
`;
