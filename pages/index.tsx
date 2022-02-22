import React from "react";
import Head from "next/head";
import styled from "styled-components";
import type { NextPage } from "next";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Button } from "@mui/material";
import { Theme } from "./utils/Theme";

const Wrapper = styled.div``;

const Container = styled.div`
  position: relative;
  display: flex;
  min-height: 90vh;
  max-width: 100vw;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
`;

const Sides = styled.div`
  flex: 45%;

  &:first-child {
    margin-right: 120px;
  }
`;

const SectionTitle = styled.h1`
  font-size: 2.8em;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-weight: light;
  font-size: 1.3em;
  max-width: 75ch;
`;

const SectionBtn = styled(Button)`
  padding: 5px 12px;
  border-radius: 5px;
  margin: 10px 0;
  color: ${Theme.text.textColorDark};

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

  &:nth-child(2) {
    margin-left: 0;
    border: ${Theme.background.backgroundColorLight} solid 2px;
  }

  &:hover {
    background-position: 100% 50%;
  }
`;

const SectionImgContainer = styled.div<{ showOnRight?: boolean }>`
  position: relative;
  background: ${Theme.background.backgroundColorLight};
  border-radius: 14px;

  ${({ showOnRight }) =>
    showOnRight ? "margin-right: -209px;" : "margin-left: -159px;"}

  box-shadow: 0px 1px 7px 1px rgb(0 0 0 / 14%), 0 3px 3px -2px rgb(0 0 0 / 20%),
    0 1px 8px 0 rgb(0 0 0 / 12%);
`;

const SectionImg = styled.img<{ showOnRight?: boolean }>`
  border-radius: 14px;
  width: 100%;

  ${({ showOnRight }) =>
    showOnRight ? "margin: 10px -70px" : "margin: 10px 70px"};
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
        <Container>
          <Sides>
            <SectionImgContainer>
              <SectionImg src="/images/mockups/darkSettings.png" />
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
            <SectionBtn>yoo</SectionBtn>
            <SectionBtn>yoo</SectionBtn>
          </Sides>
        </Container>
        {/* Wide range of supported devices */}
        <Container>
          <Sides>
            <SectionTitle>A wide range of supported devices</SectionTitle>
            <Paragraph>
              dahliaOS provides a fast and stable experience on nearly every
              computer, from a 2004 desktop tower to the latest generation of
              mobile notebooks. Our dual kernel approach allows users with
              new(er) hardware to take advantage of the Zircon Kernel, while
              maintaining support for older devices using the Linux Kernel.
            </Paragraph>
            <SectionBtn>yoo</SectionBtn>
            <SectionBtn>yoo</SectionBtn>
          </Sides>
          <Sides>
            <SectionImgContainer showOnRight>
              <SectionImg src="/images/mockups/darkFiles.png" showOnRight />
            </SectionImgContainer>
          </Sides>
        </Container>
        {/* Still not convinced? */}
        <Container>
          <Sides>
            <SectionImgContainer>
              <SectionImg src="/images/mockups/pangolin.png" />
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
        <Footer />
      </Wrapper>
    </React.Fragment>
  );
};

export default Home;
