import React from "react";
import Head from "next/head";
import styled from "styled-components";
import type { NextPage } from "next";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@mui/material";
import { Theme } from "../utils/Theme";
import Download from "../components/Download";

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
  color: ${Theme.text.textColorLight};
`;

const Paragraph = styled.p`
  font-weight: light;
  font-size: 1.3em;
  max-width: 75ch;
  color: ${Theme.text.textColor};
`;

const SectionBtn = styled(Button)`
  padding: 5px 12px;
  border-radius: 5px;
  margin: 10px 0;
  color: ${Theme.text.textColorLight};

  &:first-of-type {
    background: linear-gradient(
      153deg,
      ${Theme.accent.accentColorLight} 0%,
      ${Theme.accent.accentColor} 100%
    );
    background-size: 400% 400%;
    transition: 0.2s ease-in-out;
    margin-right: 15;
  }

  &:nth-child(even) {
    margin-left: 10px;
    border: ${Theme.background.backgroundColorLight} solid 1.5px;
    border-radius: 5px;
  }

  &:hover {
    background-position: 100% 50%;
  }
`;

const Header = styled.h1`
  color: ${Theme.text.textColor};
  text-align: center;
  margin-bottom: 25px;
  font-size: 2.2em;
  font-weight: 500;
`;

const SectionImgContainer = styled.div<{ showOnRight?: boolean }>`
  position: relative;
  background: ${Theme.background.backgroundColorLight};
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
  return (
    <React.Fragment>
      <Head>
        <title>dahliaOS – Home</title>
        <meta property="og:title" content="dahliaOS" key="title" />
      </Head>
      <Wrapper>
        <Navbar rootPageHasAnimation />
        <Intro />
        {/* Just the Basics */}
        <Container id="features">
          <Sides>
            <SectionImgContainer>
              <SectionImg src="/images/mockups/darkSettings.webp" />
            </SectionImgContainer>
          </Sides>
          <Sides>
            <SectionTitle>Just The Basics</SectionTitle>
            <Paragraph>
              dahliaOS keeps things light by only including apps you need, and
              you can add all of your favorites from other operating systems
              using the Containers app. dahliaOS also provides a curated
              marketplace for third-party native Flutter applications, so you
              can use nearly every application within one system!
            </Paragraph>
            <SectionBtn href="https://github.com/dahliaOS/pangolin_desktop/tree/master_archive/lib/applications">
              BROWSE APPS
            </SectionBtn>
          </Sides>
        </Container>
        {/* Wide range of supported devices */}
        <Container imageOnRight>
          <Sides>
            <SectionTitle>A wide range of supported devices</SectionTitle>
            <Paragraph>
              dahliaOS provides a fast and stable experience on nearly every
              computer, from a 2004 desktop tower to the latest generation of
              mobile notebooks. Our dual kernel approach allows users with
              new(er) hardware to take advantage of the Zircon Kernel, while
              maintaining support for older devices using the Linux Kernel.
            </Paragraph>
            <SectionBtn href="https://docs.dahliaos.io/hardware/support">
              VIEW SUPPORTED DEVICES
            </SectionBtn>
          </Sides>
          <Sides>
            <SectionImgContainer showOnRight>
              <SectionImg src="/images/mockups/darkFiles.webp" showOnRight />
            </SectionImgContainer>
          </Sides>
        </Container>
        {/* Still not convinced? */}
        <Container>
          <Sides>
            <SectionImgContainer>
              <SectionImg src="/images/mockups/pangolin.webp" />
            </SectionImgContainer>
          </Sides>
          <Sides>
            <SectionTitle>Still not convinced?</SectionTitle>
            <Paragraph>
              We offer an online preview of dahliaOS right at your finger tips!
              Explore, create, and more with dahliaOS&apos; web preview to get a
              taste of what it is like!
            </Paragraph>
            <SectionBtn href="https://web.dahliaos.io/">Try it out!</SectionBtn>
          </Sides>
        </Container>
        <br />
        <br />
        <br />
        <Header>Download</Header>
        <Download />
        <br />
        <br />
        <br />
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
