import styled from 'styled-components';

export const Wrapper = styled.div`
  //   background: green;
  height: 100vh;
  font-family: 'Rubik', sans-serif;
`;

export const Container = styled.div`
  width: 100%;
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
  ${({ isDark }) => `background: ${isDark ? '#faf6fb' : '#fff'};`}
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

export const H2 = styled.h2`
  font-size: 45px;
  font-weight: 300;
  color: #633991;
  letter-spacing: -1px;
  margin-bottom: 1rem;
`;

export const H3 = styled.h3`
  color: #633991;
  font-size: 33px;
  font-weight: 500;
  margin-top: 0;
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

export const H5 = styled.h5`
  margin-top: 0;
  font-size: 28px;
  font-weight: 300;
  color: #633991;
  margin-bottom: 0.7rem;
`;

export const P = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
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

export const ButtonA = styled.a`
  border-radius: 3px;
  background-image: linear-gradient(122deg, #e54595 0%, #fd378e 100%);
  box-shadow: 0px 9px 32px 0px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  padding: 0.6rem 2rem;
  border: 0;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 12px;
  color: #fff;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  line-height: 1.5;
  border-radius: 3px;
  :hover {
    background-image: linear-gradient(122deg, #fd378e 0%, #e54595 100%);
    box-shadow: 0px 9px 32px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const FeatureIcon = styled.span`
  font-family: 'themify';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  font-size: 3em;
  box-sizing: border-box;
  :before {
    content: "\\e71f";
    ${({ content }) => content && `content: "${content}";`}
    color: #fc73b4;
    background: linear-gradient(to bottom, #9477b4 0%, #fc73b4 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    border-box;
  }
`;

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

export const Link = styled.a`
  margin: 0.5rem;
  color: #e38cb7;
  text-decoration: none;
  cursor: pointer !important;
  :hover {
    text-decoration: underline;
  }
`;
