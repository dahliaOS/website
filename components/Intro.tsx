/* eslint-disable quotes */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled, { keyframes, useTheme } from "styled-components";
import { Button } from "@mui/material";
import { GetApp, LibraryBooks as LibraryBooksIcon } from "@mui/icons-material";

import darkMockup from "../public/images/mockups/darkmockup.webp";
import lightMockup from "../public/images/mockups/lightmockup.webp";

const MockupKeyframes = (mockupScale = 3.5) => keyframes`
  0% {
    transform: scale(${mockupScale});
  }
  100% {
    transform: scale(0.77);
  }
`;

const ScaleLogo = keyframes`
  0% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(-400px) scale(0);
    opacity: 0;
  }
`;

const animateContainer = keyframes`
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  100% {
    opacity: 1;
    transform: translateX(-10px);
  }
`;

const ScaleBackground = (backgroundScale = 2.9) => keyframes`
  0% {
    transform: translate3d(0px, 0px, 0px) scale(${backgroundScale});
  }
  100% {
    transform: translate3d(35px, 20px, 0) scale(0.6);
  }
`;

const animateTerminal = (adjustTransform = -250) => keyframes`
  0% {
    transform: translate3d(-400px, ${adjustTransform}vh, 0) scale(2.2);
  }
  100% {
    transform: translate3d(293px, -70px, 0) scale(0.8);
  }
`;

const animateFiles = (adjustTransform = "22%") => keyframes`
  0% {
    transform: translate3d(-100vw, ${adjustTransform}, 0) scale(2.2);
  }
  100% {
    transform: translate3d(560px, 10px, 0) scale(0.75);
  }
`;

const animateCalculator = (adjustTransform = "-178%") => keyframes`
  0% {
    transform: translate3d(-100vw, ${adjustTransform}, 0) scale(2.2);
  }
  100% {
    transform: translate3d(343px, 50px, 0) scale(0.8);
  }
`;

const animateToolbar = () => keyframes`
  0% {
    transform: translate3d(185px, 312px, 0);
    opacity:0;
  }
  100% {
    transform: translate3d(185px, 216px, 0) scale(0.77);
    opacity: 1;
  }
`;

const Sides = styled.div`
  flex: 45%;

  &:first-child {
    margin-right: 50px;
  }

  @media (max-width: 1025px) {
    flex: unset;
    &:first-child {
      margin-right: 0;
    }
  }
`;

const IntroContainer = styled.div`
  position: relative;
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;
  text-align: left;
  will-change: transform, opacity;

  animation: ${animateContainer} 1s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
  animation-delay: 2s;

  @media (max-width: 1025px) {
    animation: ${animateContainer} 1s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
      forwards;
    animation-delay: 0;
    margin-left: 0;
    padding: 10px 50px 0;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  max-width: 100vw;
  background: ${({ theme }) =>
    theme.type === "dark"
      ? 'url("/images/bgDark.svg")'
      : 'url("/images/bgLight.svg")'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;

  @media (max-width: 1400px) {
    flex: unset;
    flex-wrap: wrap;
    &:nth-child(even) {
      padding-top: -100px;
      padding-bottom: 100px;
    }
  }
`;

const MockupContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  padding-top: 50px;
  margin-left: -110px;
  margin-right: -130px;
  align-items: center;
  justify-content: left;
  overflow: visible;
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

const Wrapper = styled.div`
  position: relative;
  max-width: 100vw;
  overflow-x: hidden;
  z-index: 1;
`;

const LogoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  animation: ${ScaleLogo} 1.9s cubic-bezier(0.66, 0, 0.2, 1) 0.433s forwards;
  will-change: transform, opacity;
`;

const Logo = styled.img`
  filter: brightness(0) invert(1);
`;

const Mockup = styled.img`
  margin: 50px;
  height: auto;
  width: 1280px;
  z-index: 1;
  animation: ${MockupKeyframes()} 2.2s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
  will-change: transform;
`;

const Background = styled.div`
  position: absolute;
  width: 1314px;
  height: 100%;
  bottom: -6px;
  background: ${({ theme }) =>
    theme.type === "dark"
      ? 'url("/images/darkModeBackground.svg")'
      : 'url("/images/lightModeBackground.svg")'};
  background-repeat: no-repeat;
  background-size: 1414px;
  background-position: center;
  will-change: transform;
  z-index: 0;
  transform: scale(2.2);
  animation: ${ScaleBackground()} 2.2s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
`;

const Terminal = styled.div`
  position: absolute;
  height: 323px;
  width: 571px;
  background: url("/images/terminal.webp");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 1;
  transform: translate3d(-400px, -250vh, 0) scale(2.2);
  animation: ${animateTerminal()} 2.2s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
  animation-delay: 0.3s;
  will-change: transform;
`;

const Files = styled.div`
  position: absolute;
  height: 356px;
  width: 557px;
  background: ${({ theme }) =>
    theme.type === "dark"
      ? 'url("/images/darkFiles.webp")'
      : 'url("/images/lightFiles.webp")'};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 2;
  transform: translate3d(-100vw, 22%, 0) scale(2.2);
  animation: ${animateFiles()} 1.8s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
  animation-delay: 0.5s;
  will-change: transform;
`;

const Calculator = styled.div`
  position: absolute;
  height: 296px;
  width: 305px;
  background: ${({ theme }) =>
    theme.type === "dark"
      ? 'url("/images/darkCalculator.webp")'
      : 'url("/images/lightCalculator.webp")'};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 3;
  transform: translate3d(-100vw, 178%, 0) scale(2.2);
  animation: ${animateCalculator()} 1.8s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
  animation-delay: 0.6s;
  will-change: transform;
`;

const Toolbar = styled.div`
  position: absolute;
  height: 100%;
  width: 1011px;
  background: ${({ theme }) =>
    theme.type === "dark"
      ? 'url("/images/darkToolbar.svg")'
      : 'url("/images/lightToolbar.svg")'};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 0;
  opacity: 0;
  transform: translateY(312px);
  animation: ${animateToolbar} 1s cubic-bezier(0.66, 0, 0.2, 1) 0.133s forwards;
  animation-delay: 1.85s;
  will-change: transform, opacity;
`;

const MockupImageContainer = styled.div`
  padding: 25px;
  margin-top: 80px;
`;

const Intro = () => {
  const [windowSize, setWindowSize] = useState<number>(0);
  const theme = useTheme();

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    // without setting a tabindex here, this area isn't selectable.
    <Wrapper tabIndex={0}>
      {windowSize >= 1075 ? (
        <>
          <LogoContainer>
            <Logo
              alt="dahliaOS logo"
              src={"/images/logos/logo-color.png"}
              draggable={false}
            />
          </LogoContainer>
          <Container>
            <MockupContainer>
              <Mockup
                alt="Macbook mockup"
                src={"/images/mockups/macbook.webp"}
                draggable={false}
              />
              <Background draggable={false} />
              <Calculator draggable={false} />
              <Terminal draggable={false} />
              <Files draggable={false} />
              <Toolbar draggable={false} />
            </MockupContainer>
            <IntroContainer>
              <Sides>
                <SectionTitle>dahliaOS</SectionTitle>
                <br />
                <Paragraph>
                  dahliaOS is a modern, secure, lightweight and responsive
                  operating system, combining the best of GNU/Linux and Fuchsia
                  OS. We are developing a privacy-respecting, fast, secure and
                  lightweight operating system, our goal is to establish a new
                  standard for the desktop platform.
                </Paragraph>
                <br />
                <SectionBtn href="#download" style={{ marginRight: 30 }}>
                  <GetApp style={{ marginLeft: -5, marginRight: 10 }} />
                  DOWNLOAD
                </SectionBtn>
                <SectionBtn href="#start" style={{ marginLeft: 0 }}>
                  <LibraryBooksIcon
                    style={{ marginLeft: -5, marginRight: 10 }}
                  />
                  LEARN MORE
                </SectionBtn>
              </Sides>
            </IntroContainer>
          </Container>
        </>
      ) : (
        <Container>
          <MockupImageContainer>
            <Image
              alt="Dark mockup"
              src={theme.type === "dark" ? darkMockup : lightMockup}
              width={1280}
              height={720}
              layout="responsive"
            />
            <br />
            <IntroContainer>
              <Sides>
                <SectionTitle>dahliaOS</SectionTitle>
                <br />
                <Paragraph>
                  dahliaOS is a modern, secure, lightweight and responsive
                  operating system, combining the best of GNU/Linux and Fuchsia
                  OS. We are developing a privacy-respecting, fast, secure and
                  lightweight operating system, our goal is to establish a new
                  standard for the desktop platform.
                </Paragraph>
                <br />
                <SectionBtn href="#download" style={{ marginRight: 12 }}>
                  <GetApp />
                  DOWNLOAD
                </SectionBtn>
                <SectionBtn href="#start" style={{ marginLeft: 0 }}>
                  <LibraryBooksIcon />
                  LEARN MORE
                </SectionBtn>
              </Sides>
            </IntroContainer>
          </MockupImageContainer>
        </Container>
      )}
    </Wrapper>
  );
};

export default Intro;
