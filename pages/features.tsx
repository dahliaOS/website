import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import {
  DesktopMac as DesktopMacIcon,
  Autorenew as AutorenewIcon,
  ViewInAr as ViewInArIcon,
  ViewCompact as ViewCompactIcon,
  Apps as AppsIcon,
  ScreenshotMonitor as ScreenshotMonitorIcon,
} from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 150px;
  background: ${({ theme }) =>
    theme.type === "dark"
      ? "url('/images/bgDark.svg')"
      : "url('/images/bgLight.svg')"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  @media (max-width: 1025px) {
    padding: 150px 20px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-content: flex-start;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 13px;
  max-width: 430px;
  min-height: 160px;
  width: 90%;
  margin: 0 auto;
  padding: 20px 20px;
  text-align: left;
  overflow: hidden;
  background: ${({ theme }) => theme.background.backgroundColorLight};
  box-shadow: 0px 1px 7px 1px rgb(0 0 0 / 14%), 0 3px 3px -2px rgb(0 0 0 / 20%),
    0 1px 8px 0 rgb(0 0 0 / 12%);

  @media (max-width: 980px) {
    flex-direction: column;
    text-align: center;
    max-height: unset;
    max-width: 310px;
  }
`;

const Container = styled.div`
  width: 90%;
  display: block;
  margin: 0 auto;
  font-size: 1.2em;
  padding-bottom: 150px;
  text-align: center;
  @media (max-width: 1025px) {
    padding-bottom: 60px;
  }
`;

const AppsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 460px);
  row-gap: 40px;
  justify-content: center;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.text.textColor};
  font-size: 2.2em;
  font-weight: 500;
`;

const Sides = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SubHeader = styled.h2`
  color: ${({ theme }) => theme.text.textColor};
  font-size: 1.2em;
  font-weight: 400;
`;

const CardParagraph = styled.p`
  color: ${({ theme }) => theme.text.textColor};
  font-size: 0.9em;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.text.textColor};
`;

const Icon = styled(SvgIcon)`
  color: ${({ theme }) => theme.text.textColor};
  font-size: 45px;
  margin: 0 15px;
`;

const Features = () => {
  return (
    <>
      <Head>
        <title>dahliaOS – Features</title>
        <meta property="og:title" content="dahliaOS – Features" key="title" />
        <meta
          property="og:description"
          content="A description of dahliaOS' features"
        ></meta>
      </Head>
      <Navbar />
      <Wrapper>
        <Container>
          <Header>Features</Header>
          <br />
          <Paragraph>
            dahliaOS packs many punches, we pay close attention to the quality
            of our software and we&apos;re proud to list some of the important
            features of our project below:
          </Paragraph>
          <br />
          <AppsGrid>
            <Card>
              <Icon>
                <DesktopMacIcon />
              </Icon>
              <Sides>
                <SubHeader>Modern desktop enviroment</SubHeader>
                <CardParagraph>
                  Pangolin desktop enviroment written in Flutter focused on
                  UI/UX.
                </CardParagraph>
              </Sides>
            </Card>
            <Card>
              <Icon>
                <AutorenewIcon />
              </Icon>
              <Sides>
                <SubHeader>Rolling release</SubHeader>
                <CardParagraph>
                  Frequent minor updates and patches.
                </CardParagraph>
              </Sides>
            </Card>
            <Card>
              <Icon>
                <ViewInArIcon />
              </Icon>
              <Sides>
                <SubHeader>DAP Packages</SubHeader>
                <CardParagraph>
                  Simple packaging format based on the AppImage architecture.
                </CardParagraph>
              </Sides>
            </Card>
            <Card>
              <Icon>
                <ViewCompactIcon />
              </Icon>
              <Sides>
                <SubHeader>Built-in containers</SubHeader>
                <CardParagraph>
                  Use applications from other operating systems on dahliaOS.
                </CardParagraph>
              </Sides>
            </Card>
            <Card>
              <Icon>
                <AppsIcon />
              </Icon>
              <Sides>
                <SubHeader>Native applications</SubHeader>
                <CardParagraph>
                  dahliaOS comes bundled with a set of native applications
                  written in Flutter.
                </CardParagraph>
              </Sides>
            </Card>
            <Card>
              <Icon>
                <ScreenshotMonitorIcon />
              </Icon>
              <Sides>
                <SubHeader>Custom window manager</SubHeader>
                <CardParagraph>
                  Utopia, our own window management solution that enhances the
                  experience and boosts productivity by helping you arrange your
                  windows with ease.
                </CardParagraph>
              </Sides>
            </Card>
          </AppsGrid>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Features;
