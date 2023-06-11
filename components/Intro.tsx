/* eslint-disable quotes */
import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { Button, useMediaQuery } from "@mui/material";
import { GetApp, LibraryBooks as LibraryBooksIcon } from "@mui/icons-material";
import darkLogotype from "../public/images/logos/darkLogotype.webp";
import LaptopMockup from "../public/images/animation/macbook.webp";
import darkMockup from "../public/images/mockups/darkmockup.webp";
import lightMockup from "../public/images/mockups/lightmockup.webp";

const mockupKeyframes = keyframes`
  0% {
    transform: scale(3.5);
  }
  100% {
    transform: scale(0.77);
    opacity: 1;
  }
`;

const animateIntroContainer = keyframes`
  0% {
    transform: translateX(200px);
  }
  100% {
    opacity: 1;
    transform: translateX(-10px);
  }
`;

const scaleBackground = keyframes`
  0% {
    transform: translate3d(0px, 0px, 0px) scale(2.9);
  }
  100% {
    transform: translate3d(35px, 20px, 0) scale(0.6);
  }
`;

const animateTerminal = keyframes`
  0% {
    transform: translate3d(-400px, -250vh, 0) scale(2.2);
  }

  100% {
    transform: translate3d(293px, -70px, 0) scale(0.8);
    opacity: 1;
  }
`;

const animateFiles = keyframes`
  0% {
    transform: translate3d(200vw, 22%, 0) scale(2.2);
  }
  100% {
    transform: translate3d(560px, 10px, 0) scale(0.75);
    opacity: 1;
  }
`;

const animateCalculator = keyframes`
  0% {
    transform: translate3d(-100vw, -178%, 0) scale(2.2);
  }
  100% {
    transform: translate3d(343px, 50px, 0) scale(0.8);
    opacity: 1;
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
  display: flex;
  flex-direction: column;
  row-gap: 1.3rem;

  &:first-of-type {
    margin-right: 50px;
  }

  @media (max-width: 1535px) {
    flex: unset;
    &:first-of-type {
      margin-right: 0;
    }
  }

  @media (max-width: 1025px) {
    row-gap: 0.5rem;
  }
`;

const IntroContainer = styled.div`
  position: relative;
  display: flex;
  opacity: 0;
  z-index: 0;
  align-items: center;
  justify-content: center;
  text-align: left;
  will-change: transform, opacity;

  animation: ${animateIntroContainer} 1s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
  animation-delay: 2s;

  @media (max-width: 1535px) {
    animation: ${animateIntroContainer} 1s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
      forwards;
    animation-delay: 0s;
    padding: 0 50px 0;
    text-align: left;
    margin-left: 20px;
  }

  @media (max-width: 1025px) {
    padding: 20px 20px 0;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 100vw;
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? 'url("/images/background/darkBackground.svg")'
      : 'url("/images/background/lightBackground.svg")'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;

  @media (max-width: 1535px) {
    flex: unset;
    flex-wrap: wrap;
    &:nth-of-type(even) {
      padding-top: -100px;
      padding-bottom: 100px;
    }
  }
`;

const MockupContainer = styled.div`
  position: relative;
  display: flex;
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
  color: ${({ theme }) => theme.palette.text.light};

  @media (max-width: 1025px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  margin: 4px 0;
  font-weight: light;
  font-size: 1.3em;
  max-width: 65ch;
  color: ${({ theme }) => theme.palette.text.primary};

  @media (max-width: 1025px) {
    font-size: 1.2rem;
  }
`;

const StyledButton = styled(Button) <{ isSecondary?: boolean }>`
  padding: 10px 20px;
  border-radius: 5px;
  gap: 10px;
  width: fit-content;
  height: fit-content;
  transition: 0.2s ease-in-out;

  ${({ isSecondary, theme }) =>
    isSecondary
      ? `
    color: ${theme.palette.text.primary};

    &:hover {
      background: ${theme.palette.primary.light};
    }`
      : `color: ${theme.palette.text.extremelyLight};
    background: ${theme.palette.secondary.light};

    &:hover {
      background: ${theme.palette.secondary.main};
    }`};
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
  animation: animateLogo 1.9s cubic-bezier(0.66, 0, 0.2, 1) 0.433s forwards;
  will-change: transform, opacity;

  @keyframes animateLogo {
    0% {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateX(-400px) scale(0);
      opacity: 0;
    }
  }

  @media (max-width: 1535px) {
    @keyframes animateLogo {
      0% {
        transform: translateX(0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateX(0) scale(0);
        opacity: 0;
      }
    }
  }
`;

const Logo = styled(Image)`
  filter: brightness(0) invert(1);
  object-fit: contain;
  width: 700px;
`;

const Mockup = styled(Image)`
  margin: 50px;
  z-index: 1;
  opacity: 0;
  animation: ${mockupKeyframes} 2.2s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
  will-change: transform, opacity;
  height: auto;
  width: 1280px;
`;

const Background = styled.div`
  position: absolute;
  width: 1314px;
  height: 100%;
  bottom: -6px;
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? 'url("/images/animation/darkModeBackground.svg")'
      : 'url("/images/animation/lightModeBackground.svg")'};
  background-repeat: no-repeat;
  background-size: 1414px;
  background-position: center;
  will-change: transform;
  z-index: 0;
  transform: scale(2.9);
  animation: ${scaleBackground} 2.2s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
`;

const Terminal = styled.div`
  position: absolute;
  height: 323px;
  width: 571px;
  background: url("/images/animation/terminal.webp");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 1;
  opacity: 0;
  transform: translate3d(-400px, -250vh, 0) scale(2.2);
  animation: ${animateTerminal} 2.2s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
  animation-delay: 0.3s;
  will-change: transform;
`;

const Files = styled.div`
  position: absolute;
  height: 356px;
  width: 557px;
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? 'url("/images/animation/darkFiles.webp")'
      : 'url("/images/animation/lightFiles.webp")'};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 2;
  opacity: 0;
  transform: translate3d(200vw, 22%, 0) scale(2.2);
  animation: ${animateFiles} 1.8s cubic-bezier(0.66, 0, 0.2, 1) 0.133s forwards;
  animation-delay: 0.5s;
  will-change: transform, opacity;
`;

const Calculator = styled.div`
  position: absolute;
  height: 296px;
  width: 305px;
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? 'url("/images/animation/darkCalculator.webp")'
      : 'url("/images/animation/lightCalculator.webp")'};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 3;
  opacity: 0;
  transform: translate3d(-100vw, 178%, 0) scale(2.2);
  animation: ${animateCalculator} 1.8s cubic-bezier(0.66, 0, 0.2, 1) 0.133s
    forwards;
  animation-delay: 0.6s;
  will-change: transform, opacity;
`;

const Toolbar = styled.div`
  position: absolute;
  height: 100%;
  width: 1011px;
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? 'url("/images/animation/darkToolbar.svg")'
      : 'url("/images/animation/lightToolbar.svg")'};
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
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  margin-top: 4rem;

  @media (max-width: 1025px) {
    padding: 25px 50px;
    row-gap: 0.8rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 0.8rem;
  align-items: start;
  justify-content: start;

  @media (max-width: 1100px) {
    align-items: unset;
    justify-content: unset;
  }
`;

const MockupImage = styled(Image)`
  height: auto;
  width: 100%;
  object-fit: contain;
`;

const Intro = () => {
  const theme = useTheme();
  const windowIsSmall = useMediaQuery("(max-width: 1075px)");

  return (
    // Without setting a tabIndex here, this area isn't selectable.
    <Wrapper tabIndex={0}>
      {!windowIsSmall ? (
        <>
          <LogoContainer>
            <Logo
              priority
              quality={100}
              alt="dahliaOS logo"
              src={darkLogotype}
              draggable={false}
            />
          </LogoContainer>
          <Container>
            <MockupContainer>
              <Mockup
                src={LaptopMockup}
                priority
                quality={100}
                alt="Macbook mockup"
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
                <Paragraph>
                  Discover an intuitive operating system with a modern user
                  interface, efficient multitasking, advanced networking,
                  security features and respectful privacy. Powered by Linux -
                  designed to be lightweight for a fast and versatile computing
                  experience.
                </Paragraph>
                <ButtonContainer>
                  <StyledButton href="#download">
                    <GetApp />
                    DOWNLOAD
                  </StyledButton>
                  <StyledButton href="#start" isSecondary>
                    <LibraryBooksIcon />
                    ABOUT DAHLIAOS
                  </StyledButton>
                </ButtonContainer>
              </Sides>
            </IntroContainer>
          </Container>
        </>
      ) : (
        <Container>
          <MockupImageContainer>
            <MockupImage
              alt="Laptop mockup showing Pangolin running"
              src={theme.palette.mode === "dark" ? darkMockup : lightMockup}
              priority
              quality={100}
            />
            <IntroContainer>
              <Sides>
                <SectionTitle>dahliaOS</SectionTitle>
                <Paragraph>
                  Discover an intuitive operating system with a modern user
                  interface, efficient multitasking, advanced networking,
                  security features and respectful privacy. Powered by Linux -
                  designed to be lightweight for a fast and versatile computing
                  experience.
                </Paragraph>
                <ButtonContainer>
                  <StyledButton href="#download">
                    <GetApp />
                    DOWNLOAD
                  </StyledButton>
                  <StyledButton href="#start" isSecondary>
                    <LibraryBooksIcon />
                    ABOUT DAHLIAOS
                  </StyledButton>
                </ButtonContainer>
              </Sides>
            </IntroContainer>
          </MockupImageContainer>
        </Container>
      )}
    </Wrapper>
  );
};

export default Intro;
