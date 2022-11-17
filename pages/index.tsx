import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import type { NextPage } from "next";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Link } from "@mui/material";
import Download from "../components/Download";
import {
  History as HistoryIcon,
  Devices as DevicesIcon,
  GitHub as GitHubIcon,
  CorporateFare as CorporateFareIcon,
  Science as ScienceIcon,
  AutoAwesome as AutoAwesomeIcon,
  Apps as AppsIcon,
} from "@mui/icons-material";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const Wrapper = styled.div``;

const Container = styled(motion.div)<{ imageOnRight?: boolean }>`
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
  display: flex;
  flex-flow: column;
  gap: 1rem;

  &:first-of-type {
    margin-right: 120px;
  }

  @media (max-width: 1025px) {
    flex: unset;
    &:first-of-type {
      margin-right: 0;
    }
  }
`;

const SectionTitle = styled.p`
  font-size: 2.8em;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.light};
`;

const Paragraph = styled.p`
  margin: 4px 0;
  font-weight: light;
  font-size: 1.3em;
  max-width: 65ch;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const SectionBtn = styled(Button)<{ distanceButton?: boolean }>`
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 0;
  gap: 10px;
  width: fit-content;

  &:first-of-type {
    color: ${({ theme }) => theme.palette.text.extremelyLight};
    background: linear-gradient(
      153deg,
      ${({ theme }) => theme.palette.secondary.light} 0%,
      ${({ theme }) => theme.palette.secondary.main} 100%
    );
    background-size: 400% 400%;
    transition: 0.2s ease-in-out;
    margin-right: ${({ distanceButton }) => (distanceButton ? "30px" : "0px")};
  }

  &:nth-of-type(even) {
    border: ${({ theme }) => theme.palette.primary.light} solid 1.5px;
    color: ${({ theme }) => theme.palette.text.primary};
    @media (max-width: 1025px) {
      &:nth-of-type(even) {
        margin: 10px -50px;
      }
    }
  }

  &:hover {
    background-position: 100% 50%;
  }
`;

const SectionBtnSecondary = styled(Button)`
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 0;
  gap: 10px;

  border: ${({ theme }) => theme.palette.primary.light} solid 1.5px;
  color: ${({ theme }) => theme.palette.text.primary};
  @media (max-width: 1025px) {
    &:nth-of-type(even) {
      margin: 10px -50px;
    }
  }

  &:hover {
    background: ${({ theme }) => theme.palette.primary.light};
  }
`;

const Header = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
  margin-bottom: 25px;
  font-size: 2.2em;
  font-weight: 500;
`;

const SectionImgContainer = styled.div<{ showOnRight?: boolean }>`
  position: relative;
  background: ${({ theme }) => theme.palette.primary.light};
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

const SectionImg = styled(Image)<{ showOnRight?: boolean }>`
  border-radius: 14px;

  ${({ showOnRight }) =>
    showOnRight ? "margin: 10px -70px" : "margin: 10px 70px"};

  @media (max-width: 1025px) {
    margin: 0;
  }
`;

const IdDiv = styled.div``;

const DownloadContainer = styled(motion.div)`
  margin: 3rem 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SectionButtonContainer = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
`;

const variantRight: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 30, duration: 1 },
  },
  hidden: { x: -300, opacity: 0 },
};

const variantLeft: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 30, duration: 1 },
  },
  hidden: { x: 300, opacity: 0 },
};

const downloadVariant: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 30, duration: 1 },
  },
  hidden: { y: 300, opacity: 0 },
};

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Head>
        <title>dahliaOS</title>
        <meta property="og:title" content="dahliaOS" key="title" />
      </Head>
      <Wrapper tabIndex={0}>
        <Navbar rootPageHasAnimation />
        <Intro />

        {/* Just the basics */}
        <Container
          id="start"
          variants={variantRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Sides>
            <SectionImgContainer>
              <SectionImg
                width={1200}
                height={600}
                priority
                quality={100}
                layout="intrinsic"
                alt="dark settings modal"
                src={
                  theme.palette.mode === "dark"
                    ? "/images/mockups/darkSettings.webp"
                    : "/images/mockups/lightSettings.webp"
                }
              />
            </SectionImgContainer>
          </Sides>
          <Sides>
            <SectionTitle>Just the basics</SectionTitle>
            <Paragraph>
              dahliaOS keeps things light by only including apps you need
              leaving the choice to the user on what other applications to
              install. We provide a curated marketplace for third-party
              applications so that the user can install any application they
              wish within just one click! It&apos;s also possible to install all
              of your favorite applications from other operating systems using
              Graft, our virtual machine and containers management application.
            </Paragraph>
            <SectionBtn href="/applications">
              <AppsIcon />
              APPLICATIONS
            </SectionBtn>
          </Sides>
        </Container>
        {/* Features */}
        <IdDiv id="features" />
        <Container
          imageOnRight
          variants={variantLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Sides>
            <SectionTitle>Features</SectionTitle>
            <Paragraph>
              One of our primary goals is to provide as many useful features as
              possible while maintaining a great and painless experience for the
              user. We&apos;ve dedicated a lot of time to customizability so
              it&apos;s possible to change the look and feel of almost every
              component of the shell. Learn more about dahliaOS&apos; features
              by clicking the button below!
            </Paragraph>
            <SectionBtn href="/features">
              <AutoAwesomeIcon />
              FEATURES
            </SectionBtn>
          </Sides>
          <Sides>
            <SectionImgContainer showOnRight>
              <SectionImg
                width={1200}
                height={600}
                priority
                quality={100}
                layout="intrinsic"
                alt="dark features modal"
                src={
                  theme.palette.mode === "dark"
                    ? "/images/darkFeatures.webp"
                    : "/images/lightFeatures.webp"
                }
                showOnRight
              />
            </SectionImgContainer>
          </Sides>
        </Container>
        {/* Wide range of supported devices */}
        <Container
          variants={variantRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Sides>
            <SectionImgContainer>
              <SectionImg
                width={1200}
                height={600}
                priority
                quality={100}
                layout="intrinsic"
                alt="dark files modal"
                src={
                  theme.palette.mode === "dark"
                    ? "/images/mockups/darkFiles.webp"
                    : "/images/mockups/lightFiles.webp"
                }
              />
            </SectionImgContainer>
          </Sides>
          <Sides>
            <SectionTitle>A wide range of supported devices</SectionTitle>
            <Paragraph>
              dahliaOS provides a fast and stable experience on nearly every
              computer, from an old desktop tower to the latest generation of
              mobile notebooks.
            </Paragraph>
            <StyledLink
              href="https://docs.dahliaos.io/hardware/supported-devices"
              target="_blank"
            >
              <SectionBtn>
                <DevicesIcon />
                SUPPORTED DEVICES
              </SectionBtn>
            </StyledLink>
          </Sides>
        </Container>
        {/* Free open source software */}
        <Container
          imageOnRight
          variants={variantLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Sides>
            <SectionTitle>Free open source software</SectionTitle>
            <Paragraph>
              dahliaOS is and always will be open sourced and 100% free. All of
              our code and even some design work is hosted on GitHub. We believe
              transparency is important. We&apos;re also proud to say that since
              August of 2020 we&apos;re members of the Open Invention Network,
              the world&apos;s largest patent non-aggression community and free
              defensive patent pool.
            </Paragraph>
            <SectionButtonContainer>
              <StyledLink href="/github" target="_blank">
                <SectionBtn distanceButton>
                  <GitHubIcon />
                  GITHUB
                </SectionBtn>
              </StyledLink>
              <StyledLink
                href="https://openinventionnetwork.com/community-alphabetical/#:~:text=d42%20Secure%20Systems-,dahliaOS,-Daimler"
                target="_blank"
              >
                <SectionBtnSecondary>
                  <CorporateFareIcon />
                  OPEN INVENTION NETWORK
                </SectionBtnSecondary>
              </StyledLink>
            </SectionButtonContainer>
          </Sides>
          <Sides>
            <SectionImgContainer showOnRight>
              <SectionImg
                width={1200}
                height={600}
                priority
                quality={100}
                layout="intrinsic"
                alt="open source modal"
                src={
                  theme.palette.mode === "dark"
                    ? "/images/darkOIN.webp"
                    : "/images/lightOIN.webp"
                }
                showOnRight
              />
            </SectionImgContainer>
          </Sides>
        </Container>
        {/* Demo */}
        <Container
          variants={variantRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Sides>
            <SectionImgContainer>
              <SectionImg
                width={1200}
                height={600}
                priority
                quality={100}
                layout="intrinsic"
                alt="dark pangolin modal"
                src={
                  theme.palette.mode === "dark"
                    ? "/images/mockups/pangolindark.webp"
                    : "/images/mockups/pangolinlight.webp"
                }
              />
            </SectionImgContainer>
          </Sides>
          <Sides>
            <SectionTitle>Demo</SectionTitle>
            <Paragraph>
              We offer a web preview of the Pangolin shell so you don&apos;t
              have to install the system just to see if our shell is made for
              you. Some features are disabled on the web preview but are
              functional on the actual system itself.
            </Paragraph>
            <StyledLink href="https://web.dahliaos.io/" target="_blank">
              <SectionBtn>
                <ScienceIcon />
                Try it out
              </SectionBtn>
            </StyledLink>
          </Sides>
        </Container>
        <DownloadContainer
          id="download"
          variants={downloadVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Header>Download</Header>
          <Download />
          <ButtonContainer>
            <StyledLink
              href="https://github.com/dahliaOS/releases/releases"
              target="_blank"
            >
              <SectionBtn>
                <HistoryIcon /> Looking for an older release?
              </SectionBtn>
            </StyledLink>
          </ButtonContainer>
        </DownloadContainer>
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
