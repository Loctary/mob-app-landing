import React from 'react';
// styled components
import { Section, WrapperDownload, WrapperIcon, H2, P, DownloadButtons, Button, ImgStore, I } from './styles';
import { Container, BoxIcon, FeatureIcon, Small } from '../../styles';
// img
import download from '../../assets/img/download.png';
import playicon from '../../assets/img/playicon.png';

const Donload = () => {
  return (
    <Section id="download">
      <Container>
        <WrapperDownload>
          <WrapperIcon>
            <BoxIcon>
              <FeatureIcon content="\e621" />
            </BoxIcon>
          </WrapperIcon>
          <H2>Download Anywhere</H2>
          <P>
            Available for all major mobile and desktop platforms. Rapidiously visualize optimal ROI rather than
            enterprise-wide methods of empowerment.
          </P>
          <DownloadButtons>
            <Button>
              <ImgStore src={download} alt="app store icon" />
              APP STORE
            </Button>
            <Button>
              <ImgStore src={playicon} alt="google play icon" />
              GOOGLE PLAY
            </Button>
          </DownloadButtons>
          <Small>
            <I>*Works on iOS 10.0.5+, Android Kitkat and above.</I>
          </Small>
        </WrapperDownload>
      </Container>
    </Section>
  );
};

export default Donload;
