import styled from 'styled-components';

export const Wrapper = styled.div`
  //   background: green;
  height: 100vh;
  font-family: 'Rubik', sans-serif;
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
  @media (max-width: 992px) {
    max-width: 960px;
  }
  @media (max-width: 768px) {
    max-width: 720px;
  }
  @media (max-width: 576px) {
    max-width: 540px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Column = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 768px) {
    -ms-flex: 0 0 100%;
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
