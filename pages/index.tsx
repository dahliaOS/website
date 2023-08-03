import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "@mui/material";
import DownloadComponent from "../components/Download";
import CommunityComponent from "../components/Community";
import {
  DevicesRounded as DevicesIcon,
  GitHub as GitHubIcon,
  CorporateFareRounded as CorporateFareIcon,
  ScienceRounded as ScienceIcon,
  DesktopMacRounded as DesktopMac,
  AutorenewRounded as Autorenew,
  ViewInArRounded as ViewInAr,
  ViewCompactRounded as ViewCompact,
  AppsRounded as Apps,
  ScreenshotMonitorRounded as ScreenshotMonitor,
} from "@mui/icons-material";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import graft from "../public/images/app-icons/graft.webp";
import settings from "../public/images/app-icons/settings.webp";
import fileManager from "../public/images/app-icons/fileManager.webp";
import appStore from "../public/images/app-icons/appStore.webp";
import clock from "../public/images/app-icons/clock.webp";
import welcome from "../public/images/app-icons/welcome.webp";
import terminal from "../public/images/app-icons/terminal.webp";
import calculator from "../public/images/app-icons/calculator.webp";
import activityMonitor from "../public/images/app-icons/activityMonitor.webp";
import gallery from "../public/images/app-icons/gallery.webp";
import textEditor from "../public/images/app-icons/textEditor.webp";
import logs from "../public/images/app-icons/logs.webp";
import darkOIN from "../public/images/landing/darkOIN.webp";
import lightOIN from "../public/images/landing/lightOIN.webp";
import darkPangolin from "../public/images/landing/darkPangolin.webp";
import lightPangolin from "../public/images/landing/lightPangolin.webp";
import darkSupportedDevices from "../public/images/landing/darkSupportedDevices.webp";
import lightSupportedDevices from "../public/images/landing/lightSupportedDevices.webp";
import Link from "next/link";
import { StyledButton } from "../global/button";

const Wrapper = styled.div``;

const Container = styled(motion.div) <{
  showOnRight?: boolean;
  distanceFirst?: boolean;
  isCentered?: boolean;
}>`
  position: relative;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;

  ${({ distanceFirst }) =>
    distanceFirst
      ? `margin-top: 4rem;
      @media (max-width: 1100px) {
        margin-top: 3rem;
  }`
      : null};

  ${({ isCentered }) =>
    isCentered
      ? `flex-direction: column;
      min-height: unset;
      gap: 2rem;
      margin: 5rem 0;`
      : `flex-direction: row;
      min-height: 50rem;`};

  @media (max-width: 1100px) {
    flex-direction: ${({ showOnRight }) =>
    showOnRight ? "column-reverse" : "column"};
    padding: 25px 8rem;
    ${({ isCentered }) =>
    isCentered
      ? `margin: 1rem 0;
       `
      : "min-height: 40rem;"};
  }

  @media (max-width: 950px) {
    padding: 25px 3rem;
  }
`;

const Sides = styled.div<{
  isCentered?: boolean;
}>`
  flex: 45%;
  display: flex;
  flex-flow: column;
  gap: 1.3rem;

  ${({ isCentered }) =>
    isCentered
      ? null
      : `&:first-of-type {
    margin-right: 120px;
  }`};

  @media (max-width: 1100px) {
    flex: unset;
    &:first-of-type {
      margin-right: 0;
    }
  }
`;

const SectionTitle = styled.p<{ isCentered?: boolean }>`
  font-size: 2.8em;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.light};
  text-align: ${({ isCentered }) => (isCentered ? "center" : null)};

  @media (max-width: 1100px) {
    text-align: ${({ isCentered }) => (isCentered ? "left" : null)};
  }
`;

const Paragraph = styled.p<{ isCentered?: boolean }>`
  font-weight: light;
  font-size: 1.3em;
  max-width: 65ch;
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: ${({ isCentered }) => (isCentered ? "center" : null)};

  @media (max-width: 1100px) {
    text-align: ${({ isCentered }) => (isCentered ? "left" : null)};
  }
`;

const SectionDivContainer = styled.div<{ showOnRight?: boolean }>`
  position: relative;
  background: ${({ theme }) => theme.palette.primary.light};
  border-radius: 14px;
  padding: 13px;

  ${({ showOnRight }) =>
    showOnRight ? "margin-right: -209px;" : "margin-left: -159px;"}

  box-shadow: 0px 1px 7px 1px rgb(0 0 0 / 14%), 0 3px 3px -2px rgb(0 0 0 / 20%),
    0 1px 8px 0 rgb(0 0 0 / 12%);

  @media (max-width: 1100px) {
    padding: 8px;
    margin: 20px 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const SectionButtonContainer = styled.div<{ isCentered?: boolean }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 0.8rem;

  ${({ isCentered }) =>
    isCentered
      ? `
  align-items: center;
  justify-content: center;`
      : `
  align-items: start;
  justify-content: start;`}

  @media (max-width: 1100px) {
    align-items: unset;
    justify-content: unset;
  }
`;

const SectionDiv = styled.div<{
  showOnRight?: boolean;
  onlyImage?: boolean;
}>`
  border-radius: 14px;
  max-width: 51rem;
  min-width: 100%;
  display: flex;
  align-items: center;

  box-shadow: 0px 1px 7px 1px rgb(0 0 0 / 14%), 0 3px 3px -2px rgb(0 0 0 / 20%),
    0 1px 8px 0 rgb(0 0 0 / 12%);

  ${({ showOnRight }) =>
    showOnRight ? "margin: 10px -70px" : "margin: 10px 70px"};

  ${({ onlyImage, theme }) =>
    onlyImage
      ? null
      : `padding: 10%;
      background: ${theme.palette.primary.contrastText};`}

  @media (max-width: 1100px) {
    margin: 0;
  }
`;

const SectionImg = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
`;

const AppDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 1100px) {
    gap: 2rem;
  }
`;

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  row-gap: 0.5rem;
`;

const AppIcon = styled(Image)`
  height: auto;
  width: 60px;
  object-fit: contain;
  filter: drop-shadow(
    ${({ theme }) =>
    theme.palette.mode === "dark"
      ? null
      : `0 0 0.2rem ${theme.palette.text.disabled}`}
  );

  &:hover {
    filter: drop-shadow(
      0 0 1rem ${({ theme }) => theme.palette.secondary.main}
    );
  }

  @media (max-width: 1100px) {
    width: 40px;
  }
`;

const AppParagraph = styled.p`
  font-weight: light;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.text.primary};

  @media (max-width: 1100px) {
    font-size: 0.9rem;
  }
`;

const FeaturesDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 1568px) {
    gap: 1.5rem;
    flex-direction: column;
  }
`;

const FeaturesDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  text-align: center;
  column-gap: 1.8rem;
  width: 45%;

  @media (max-width: 1568px) {
    width: 100%;
  }
`;

const FeaturesTitle = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.text.primary};

  @media (max-width: 1100px) {
    font-size: 1rem;
  }
`;

const FeaturesParagraph = styled.p`
  font-weight: light;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.palette.text.primary};
  max-width: 35ch;

  @media (max-width: 1100px) {
    font-size: 0.9rem;
    max-width: unset;
  }
`;

const DesktopMacIcon = styled(DesktopMac)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 3rem;

  @media (max-width: 1100px) {
    font-size: 2rem;
  }
`;

const AutorenewIcon = styled(Autorenew)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 3rem;

  @media (max-width: 1100px) {
    font-size: 2rem;
  }
`;

const ViewInArIcon = styled(ViewInAr)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 3rem;

  @media (max-width: 1100px) {
    font-size: 2rem;
  }
`;

const ViewCompactIcon = styled(ViewCompact)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 3rem;

  @media (max-width: 1100px) {
    font-size: 2rem;
  }
`;

const AppsIcon = styled(Apps)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 3rem;

  @media (max-width: 1100px) {
    font-size: 2rem;
  }
`;

const ScreenshotMonitorIcon = styled(ScreenshotMonitor)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 3rem;

  @media (max-width: 1100px) {
    font-size: 2rem;
  }
`;

const FeaturesTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 0.4rem;
`;

const LinkSpan = styled.span`
  text-decoration: underline;
`;

const variantRight: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 30, duration: 1 },
  },
  hidden: { x: -200, opacity: 0 },
};

const variantLeft: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 30, duration: 1 },
  },
  hidden: { x: 200, opacity: 0 },
};

const downloadVariant: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 30, duration: 1 },
  },
  hidden: { y: 200, opacity: 0 },
};

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Head>
        <title>dahliaOS</title>
        <meta property="og:title" content="dahliaOS" key="title" />
        <link rel="canonical" href="https://dahliaos.io" />
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
          distanceFirst
        >
          <Sides>
            <SectionDivContainer>
              <SectionDiv>
                <AppDivContainer>
                  <AppDiv>
                    <Link
                      href="https://github.com/dahliaOS/graft"
                      target="_blank"
                    >
                      <AppIcon
                        priority
                        quality={100}
                        alt="graft application icon"
                        src={graft}
                      />
                    </Link>
                    <AppParagraph>Graft</AppParagraph>
                  </AppDiv>
                  <AppDiv>
                    <Link
                      href="https://github.com/dahliaOS/pangolin_desktop/tree/main/lib/components/settings"
                      target="_blank"
                    >
                      <AppIcon
                        priority
                        quality={100}
                        alt="settings application icon"
                        src={settings}
                      />
                    </Link>
                    <AppParagraph>Settings</AppParagraph>
                  </AppDiv>
                  <AppDiv>
                    <Link
                      href="https://github.com/dahliaOS/files"
                      target="_blank"
                    >
                      <AppIcon
                        priority
                        quality={100}
                        alt="file manager application icon"
                        src={fileManager}
                      />
                    </Link>
                    <AppParagraph>File Manager</AppParagraph>
                  </AppDiv>
                  <AppDiv>
                    <Link
                      href="https://github.com/dahliaOS/app_store"
                      target="_blank"
                    >
                      <AppIcon
                        priority
                        quality={100}
                        alt="app store application icon"
                        src={appStore}
                      />
                    </Link>
                    <AppParagraph>App Store</AppParagraph>
                  </AppDiv>
                  <AppDiv>
                    <Link
                      href="https://github.com/dahliaOS/clock"
                      target="_blank"
                    >
                      <AppIcon
                        priority
                        quality={100}
                        alt="clock application icon"
                        src={clock}
                      />
                    </Link>
                    <AppParagraph>Clock</AppParagraph>
                  </AppDiv>
                  <AppDiv>
                    <Link
                      href="https://github.com/dahliaOS/welcome"
                      target="_blank"
                    >
                      <AppIcon
                        priority
                        quality={100}
                        alt="welcome application icon"
                        src={welcome}
                      />
                    </Link>
                    <AppParagraph>Welcome</AppParagraph>
                  </AppDiv>
                  <AppDiv>
                    <Link
                      href="https://github.com/dahliaOS/terminal"
                      target="_blank"
                    >
                      <AppIcon
                        priority
                        quality={100}
                        alt="terminal application icon"
                        src={terminal}
                      />
                    </Link>
                    <AppParagraph>Terminal</AppParagraph>
                  </AppDiv>
                  <AppDiv>
                    <Link
                      href="https://github.com/dahliaOS/calculator"
                      target="_blank"
                    >
                      <AppIcon
                        priority
                        quality={100}
                        alt="calculator application icon"
                        src={calculator}
                      />
                    </Link>
                    <AppParagraph>Calculator</AppParagraph>
                  </AppDiv>
                  <AppDiv>
                    <Link
                      href="https://github.com/dahliaOS/task_manager"
                      target="_blank"
                    >
                      <AppIcon
                        priority
                        quality={100}
                        alt="activity monitor application icon"
                        src={activityMonitor}
                      />
                    </Link>
                    <AppParagraph>Activity Monitor</AppParagraph>
                  </AppDiv>
                  <AppDiv>
                    <Link
                      href="https://github.com/dahliaOS/media"
                      target="_blank"
                    >
                      <AppIcon
                        priority
                        quality={100}
                        alt="gallery application icon"
                        src={gallery}
                      />
                    </Link>
                    <AppParagraph>Gallery</AppParagraph>
                  </AppDiv>
                  <AppDiv>
                    <Link
                      href="https://github.com/dahliaOS/text_editor"
                      target="_blank"
                    >
                      <AppIcon
                        priority
                        quality={100}
                        alt="text editor application icon"
                        src={textEditor}
                      />
                    </Link>
                    <AppParagraph>Text Editor</AppParagraph>
                  </AppDiv>
                  <AppDiv>
                    <Link
                      href="https://github.com/dahliaOS/system_logs"
                      target="_blank"
                    >
                      <AppIcon
                        priority
                        quality={100}
                        alt="logs application icon"
                        src={logs}
                      />
                    </Link>
                    <AppParagraph>Logs</AppParagraph>
                  </AppDiv>
                </AppDivContainer>
              </SectionDiv>
            </SectionDivContainer>
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
          </Sides>
        </Container>
        {/* Features */}
        <Container
          showOnRight
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
              component of the shell.
            </Paragraph>
          </Sides>
          <Sides>
            <SectionDivContainer showOnRight>
              <SectionDiv showOnRight>
                <FeaturesDivContainer>
                  <FeaturesDiv>
                    <DesktopMacIcon />
                    <FeaturesTextContainer>
                      <FeaturesTitle>Modern desktop enviroment</FeaturesTitle>
                      <FeaturesParagraph>
                        Pangolin desktop enviroment written in Flutter focused
                        on UI/UX.
                      </FeaturesParagraph>
                    </FeaturesTextContainer>
                  </FeaturesDiv>
                  <FeaturesDiv>
                    <AutorenewIcon />
                    <FeaturesTextContainer>
                      <FeaturesTitle>Rolling release</FeaturesTitle>
                      <FeaturesParagraph>
                        Frequent minor updates and patches.
                      </FeaturesParagraph>
                    </FeaturesTextContainer>
                  </FeaturesDiv>
                  <FeaturesDiv>
                    <ViewInArIcon />
                    <FeaturesTextContainer>
                      <FeaturesTitle>DAP Packages</FeaturesTitle>
                      <FeaturesParagraph>
                        Simple packaging format based on the AppImage
                        architecture.
                      </FeaturesParagraph>
                    </FeaturesTextContainer>
                  </FeaturesDiv>
                  <FeaturesDiv>
                    <ViewCompactIcon />
                    <FeaturesTextContainer>
                      <FeaturesTitle>Built-in containers</FeaturesTitle>
                      <FeaturesParagraph>
                        Use applications from other operating systems on
                        dahliaOS.
                      </FeaturesParagraph>
                    </FeaturesTextContainer>
                  </FeaturesDiv>
                  <FeaturesDiv>
                    <AppsIcon />
                    <FeaturesTextContainer>
                      <FeaturesTitle>Native applications</FeaturesTitle>
                      <FeaturesParagraph>
                        dahliaOS comes bundled with a set of native applications
                        written in Flutter.
                      </FeaturesParagraph>
                    </FeaturesTextContainer>
                  </FeaturesDiv>
                  <FeaturesDiv>
                    <ScreenshotMonitorIcon />
                    <FeaturesTextContainer>
                      <FeaturesTitle>Custom window manager</FeaturesTitle>
                      <FeaturesParagraph>
                        Utopia, our WM solution that enhances the experience and
                        boosts productivity by helping you arrange your windows
                        with ease.
                      </FeaturesParagraph>
                    </FeaturesTextContainer>
                  </FeaturesDiv>
                </FeaturesDivContainer>
              </SectionDiv>
            </SectionDivContainer>
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
            <SectionDivContainer>
              <SectionDiv onlyImage>
                <SectionImg
                  priority
                  quality={100}
                  src={
                    theme.palette.mode === "dark"
                      ? darkSupportedDevices
                      : lightSupportedDevices
                  }
                  alt={"wide range of support dahliaos devices"}
                />
              </SectionDiv>
            </SectionDivContainer>
          </Sides>
          <Sides>
            <SectionTitle>A wide range of supported hardware</SectionTitle>
            <Paragraph>
              dahliaOS provides a fast and stable experience on nearly every
              computer, from an old desktop tower to the latest generation of
              mobile notebooks.
            </Paragraph>
            <StyledLink
              href="https://docs.dahliaos.io/hardware/supported-hardware"
              target="_blank"
            >
              <StyledButton>
                <DevicesIcon />
                SUPPORTED HARDWARE
              </StyledButton>
            </StyledLink>
          </Sides>
        </Container>
        {/* Free open source software */}
        <Container
          showOnRight
          variants={variantLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Sides>
            <SectionTitle>Free open source software</SectionTitle>
            <Paragraph>
              dahliaOS is and always will be open sourced and 100% free. All of
              our code and even some design work is hosted on GitHub licensed
              under the{" "}
              <LinkSpan>
                <StyledLink
                  href={"https://www.apache.org/licenses/LICENSE-2.0"}
                  target="_blank"
                >
                  Apache 2.0 license
                </StyledLink>
              </LinkSpan>
              . We believe transparency is important. We&apos;re also proud to
              say that since August of 2020 we&apos;re members of the Open
              Invention Network, the world&apos;s largest patent non-aggression
              community and free defensive patent pool.
            </Paragraph>
            <SectionButtonContainer>
              <StyledLink href="/github" target="_blank">
                <StyledButton>
                  <GitHubIcon />
                  GITHUB
                </StyledButton>
              </StyledLink>
              <StyledLink
                href="https://openinventionnetwork.com/community-alphabetical/#:~:text=d42%20Secure%20Systems-,dahliaOS,-Daimler"
                target="_blank"
              >
                <StyledButton isSecondary>
                  <CorporateFareIcon />
                  OPEN INVENTION NETWORK
                </StyledButton>
              </StyledLink>
            </SectionButtonContainer>
          </Sides>
          <Sides>
            <SectionDivContainer showOnRight>
              <SectionDiv showOnRight onlyImage>
                <SectionImg
                  priority
                  quality={100}
                  src={theme.palette.mode === "dark" ? darkOIN : lightOIN}
                  alt={"wide range of support dahliaos devices"}
                />
              </SectionDiv>
            </SectionDivContainer>
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
            <SectionDivContainer>
              <SectionDiv onlyImage>
                <SectionImg
                  priority
                  quality={100}
                  src={
                    theme.palette.mode === "dark" ? darkPangolin : lightPangolin
                  }
                  alt={"pangolin desktop enviroment"}
                />
              </SectionDiv>
            </SectionDivContainer>
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
              <StyledButton>
                <ScienceIcon />
                Try it out
              </StyledButton>
            </StyledLink>
          </Sides>
        </Container>
        {/* Download */}
        <Container
          id="download"
          variants={downloadVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          isCentered
        >
          <Sides isCentered>
            <SectionTitle isCentered>Download</SectionTitle>
            <Paragraph isCentered>
              Below in the download component are all dahliaOS downloads, we
              offer both Legacy and EFI images.
            </Paragraph>
          </Sides>
          <DownloadComponent />
        </Container>
        {/* Community */}
        <CommunityComponent />
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
