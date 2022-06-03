import React from "react";
import Head from "next/head";
import styled, { useTheme } from "styled-components";
import type { NextPage } from "next";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@mui/material";
import Download from "../components/Download";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  GetApp,
  History as HistoryIcon,
  Devices as DevicesIcon,
  GitHub as GitHubIcon,
  CorporateFare as CorporateFareIcon,
  Science as ScienceIcon,
  AutoAwesome as AutoAwesomeIcon,
} from "@mui/icons-material";

const Wrapper = styled.div``;

const Container = styled.div<{ imageOnRight?: boolean }>`
  position: relative;
  display: flex;
  min-height: 90vh;
  max-width: 100vw;
  align-items: center;
  justify-content: center;
  padding: 0 50px;

  @media (max-width: 1025px) {
    flex-direction: ${({ imageOnRight }) =>
      imageOnRight ? "column-reverse" : "column"};
    padding: 25px 50px;
    min-height: 60vh;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  min-height: 130px;
  align-items: center;
  justify-content: center;
  padding: 0 50px;

  @media (max-width: 1025px) {
    padding: 25px 50px;
  }
`;

const Sides = styled.div`
  flex: 45%;

  &:first-child {
    margin-right: 120px;
  }

  @media (max-width: 1025px) {
    flex: unset;
    &:first-child {
      margin-right: 0;
    }
  }
`;

const SectionTitle = styled.h1`
  font-size: 2.8em;
  font-weight: 600;
  color: ${({ theme }) => theme.text.textColorLight};
`;

const Paragraph = styled.p`
  margin: 4px 0;
  font-weight: light;
  font-size: 1.3em;
  max-width: 65ch;
  color: ${({ theme }) => theme.text.textColor};
`;

const SectionBtn = styled(Button)`
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 0;

  &:first-of-type {
    color: ${({ theme }) => theme.text.textColorExtremelyLight};
    background: linear-gradient(
      153deg,
      ${({ theme }) => theme.accent.accentColorLight} 0%,
      ${({ theme }) => theme.accent.accentColor} 100%
    );
    background-size: 400% 400%;
    transition: 0.2s ease-in-out;
  }

  &:nth-child(even) {
    border: ${({ theme }) => theme.background.backgroundColorLight} solid 1.5px;
    color: ${({ theme }) => theme.text.textColor};
    @media (max-width: 1025px) {
      &:nth-child(even) {
        margin: 10px -50px;
      }
    }
  }

  &:hover {
    background-position: 100% 50%;
  }
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.text.textColor};
  text-align: center;
  margin-bottom: 25px;
  font-size: 2.2em;
  font-weight: 500;
`;

const SectionImgContainer = styled.div<{ showOnRight?: boolean }>`
  position: relative;
  background: ${({ theme }) => theme.background.backgroundColorLight};
  border-radius: 14px;

  ${({ showOnRight }) =>
    showOnRight ? "margin-right: -209px;" : "margin-left: -159px;"}

  box-shadow: 0px 1px 7px 1px rgb(0 0 0 / 14%), 0 3px 3px -2px rgb(0 0 0 / 20%),
    0 1px 8px 0 rgb(0 0 0 / 12%);

  @media (max-width: 1025px) {
    padding: 5px;
    margin: 20px 0;
  }
`;

const SectionImg = styled.img<{ showOnRight?: boolean }>`
  border-radius: 14px;
  width: 100%;

  ${({ showOnRight }) =>
    showOnRight ? "margin: 10px -70px" : "margin: 10px 70px"};

  @media (max-width: 1025px) {
    margin: 0;
  }
`;

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Head>
        <title>dahliaOS – Home</title>
        <meta property="og:title" content="dahliaOS" key="title" />
      </Head>
      <Wrapper>
        <Navbar rootpagehasanimation />
        <Intro />
        {/* Just the basics */}
        <AnimationOnScroll
          animateIn="animate__fadeInLeftBig"
          animateOnce={true}
        >
          <Container id="start">
            <Sides>
              <SectionImgContainer>
                <SectionImg
                  alt="dark settings modal"
                  src={
                    theme.type === "dark"
                      ? "/images/mockups/darkSettings.webp"
                      : "/images/mockups/lightSettings.webp"
                  }
                />
              </SectionImgContainer>
            </Sides>
            <Sides>
              <SectionTitle>Just the basics</SectionTitle>
              <br />
              <Paragraph>
                dahliaOS keeps things light by only including apps you need
                leaving the choice to the user on what other applications to
                install. We provide a curated marketplace for third-party
                applications so that the user can install any application they
                wish within just one click! It&apos;s also possible to install
                all of your favorite applications from other operating systems
                using Graft, our virtual machine and containers management
                application.
              </Paragraph>
              <br />
              <SectionBtn href="">
                <GetApp style={{ marginLeft: -5, marginRight: 10 }} />
                BUTTON NAME
              </SectionBtn>
            </Sides>
          </Container>
        </AnimationOnScroll>
        {/* Features */}
        <AnimationOnScroll
          animateIn="animate__fadeInRightBig"
          animateOnce={true}
        >
          <Container imageOnRight id="features">
            <Sides>
              <SectionTitle>Features</SectionTitle>
              <br />
              <Paragraph>
                One of our primary goals is to provide as many useful features
                as possible while maintaining great and painless experience to
                the user. We&apos;ve dedicated a lot of time to customizability
                so it&apos;s possible to change the look and feel of almost
                every component of the shell.
              </Paragraph>
              <br />
              <SectionBtn href="">
                <AutoAwesomeIcon style={{ marginLeft: -5, marginRight: 10 }} />
                BUTTON NAME
              </SectionBtn>
            </Sides>
            <Sides>
              <SectionImgContainer showOnRight>
                <SectionImg
                  alt="dark features modal"
                  src={
                    theme.type === "dark"
                      ? "/images/darkFeatures.webp"
                      : "/images/lightFeatures.webp"
                  }
                  showOnRight
                />
              </SectionImgContainer>
            </Sides>
          </Container>
        </AnimationOnScroll>
        {/* Wide range of supported devices */}
        <AnimationOnScroll
          animateIn="animate__fadeInLeftBig"
          animateOnce={true}
        >
          <Container>
            <Sides>
              <SectionImgContainer>
                <SectionImg
                  alt="dark files modal"
                  src={
                    theme.type === "dark"
                      ? "/images/mockups/darkFiles.webp"
                      : "/images/mockups/lightFiles.webp"
                  }
                />
              </SectionImgContainer>
            </Sides>
            <Sides>
              <SectionTitle>A wide range of supported devices</SectionTitle>
              <br />
              <Paragraph>
                dahliaOS provides a fast and stable experience on nearly every
                computer, from an old desktop tower to the latest generation of
                mobile notebooks.
              </Paragraph>
              <br />
              <SectionBtn href="https://docs.dahliaos.io/hardware/support">
                <DevicesIcon style={{ marginLeft: -5, marginRight: 10 }} />
                SUPPORTED DEVICES
              </SectionBtn>
            </Sides>
          </Container>
        </AnimationOnScroll>
        {/* Free open source software */}
        <AnimationOnScroll
          animateIn="animate__fadeInRightBig"
          animateOnce={true}
        >
          <Container imageOnRight>
            <Sides>
              <SectionTitle>Free open source software</SectionTitle>
              <br />
              <Paragraph>
                dahliaOS is and always will be open sourced and 100% free. All
                of our code and even some design work is hosted on GitHub. We
                believe transparency is important. We&apos;re also proud to say
                that since August of 2020 we&apos;re members of the Open
                Invention Network, the world&apos;s largest patent
                non-aggression community and free defensive patent pool.
              </Paragraph>
              <br />
              <SectionBtn href="https://github.com/dahliaOS">
                <GitHubIcon style={{ marginLeft: -5, marginRight: 10 }} />
                GITHUB
              </SectionBtn>
              <SectionBtn
                href="https://openinventionnetwork.com/community-alphabetical/#search:~:text=dahliaOS"
                style={{ marginLeft: 30 }}
              >
                <CorporateFareIcon
                  style={{ marginLeft: -5, marginRight: 10 }}
                />
                OPEN INVENTION NETWORK
              </SectionBtn>
            </Sides>
            <Sides>
              <SectionImgContainer showOnRight>
                <SectionImg
                  alt="open source modal"
                  src={
                    theme.type === "dark"
                      ? "/images/darkOIN.webp"
                      : "/images/lightOIN.webp"
                  }
                  showOnRight
                />
              </SectionImgContainer>
            </Sides>
          </Container>
        </AnimationOnScroll>
        {/* Demo */}
        <AnimationOnScroll
          animateIn="animate__fadeInLeftBig"
          animateOnce={true}
        >
          <Container>
            <Sides>
              <SectionImgContainer>
                <SectionImg
                  alt="dark pangolin modal"
                  src={
                    theme.type === "dark"
                      ? "/images/mockups/pangolindark.webp"
                      : "/images/mockups/pangolinlight.webp"
                  }
                />
              </SectionImgContainer>
            </Sides>
            <Sides>
              <SectionTitle>Demo</SectionTitle>
              <br />
              <Paragraph>
                We offer a web preview of the Pangolin shell so you don&apos;t
                have to install the system just to see if our shell is made for
                you. Some features are disabled on the web preview but are
                functional on the actual system itself.
              </Paragraph>
              <br />
              <SectionBtn href="https://web.dahliaos.io/">
                <ScienceIcon style={{ marginLeft: -5, marginRight: 10 }} />
                Try it out
              </SectionBtn>
            </Sides>
          </Container>
        </AnimationOnScroll>
        <br />
        <br />
        <br />
        <AnimationOnScroll animateIn="animate__fadeInUpBig" animateOnce={true}>
          <Header id="download">Download</Header>
          <Download />
          <ButtonContainer>
            <SectionBtn href="https://github.com/dahliaOS/releases/releases">
              <HistoryIcon style={{ marginLeft: -5, marginRight: 10 }} />{" "}
              Looking for an older release?
            </SectionBtn>
          </ButtonContainer>
        </AnimationOnScroll>
        <br />
        <br />
        <br />
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
