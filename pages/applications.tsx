import { Button, Link } from "@mui/material";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GitHub as GitHubIcon } from "@mui/icons-material";
import Head from "next/head";

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

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-content: flex-start;
  gap: 10px;
  border-radius: 13px;
  max-width: 300px;
  max-height: 300px;
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
    max-height: unset;
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
  grid-template-columns: repeat(auto-fill, 300px);
  row-gap: 40px;
  column-gap: 10px;
  justify-content: center;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.text.textColorLight};
  font-size: 2.2em;
  font-weight: 500;
`;

const SubHeader = styled.h2`
  color: ${({ theme }) => theme.text.textColorLight};
  font-size: 1.2em;
  font-weight: 400;
`;

const CardParagraph = styled.p`
  color: ${({ theme }) => theme.text.textColor};
  font-size: 0.9em;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.text.textColor};
`;

const StyledButton = styled(Button)`
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: auto;
  min-width: 100%;

  color: ${({ theme }) => theme.text.textColorExtremelyLight};
  background: linear-gradient(
    153deg,
    ${({ theme }) => theme.accent.accentColorLight} 0%,
    ${({ theme }) => theme.accent.accentColor} 100%
  );
  background-size: 400% 400%;
  transition: 0.2s ease-in-out;

  &:hover {
    background-position: 100% 50%;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppIcon = styled.img`
  width: auto;
  height: 100%;
`;

const Applications = () => {
  return (
    <>
      <Head>
        <title>dahliaOS – Applications</title>
        <meta
          property="og:title"
          content="dahliaOS – Applications"
          key="title"
        />
        <meta
          property="og:description"
          content="A list of dahliaOS applications."
        ></meta>
      </Head>
      <Navbar />
      <Wrapper>
        <Container>
          <Header>Applications</Header>
          <br />
          <Paragraph>
            Most dahliaOS applications are cross-platform but all of them are
            written in Flutter.
          </Paragraph>
          <Paragraph>
            dahliaOS comes in a minimal package with the following native
            pre-installed applications:
          </Paragraph>
          <br />
          <AppsGrid>
            <Card>
              <Center>
                <AppIcon
                  alt="graft application icon"
                  src={"/images/app-icons/graft.webp"}
                />
              </Center>
              <SubHeader>Graft</SubHeader>
              <CardParagraph>
                Graft is an application for managing virtual machines and
                containers on dahliaOS.
              </CardParagraph>
              <StyledLink
                href="https://github.com/dahliaOS/graft"
                target="_blank"
              >
                <StyledButton>
                  <GitHubIcon style={{ marginLeft: -5, marginRight: 10 }} />
                  Source
                </StyledButton>
              </StyledLink>
            </Card>
            <Card>
              <Center>
                <AppIcon
                  alt="settings application icon"
                  src={"/images/app-icons/settings.webp"}
                />
              </Center>
              <SubHeader>Settings</SubHeader>
              <CardParagraph>
                Settings is an application for setting up your enviroment in
                dahliaOS and customization.
              </CardParagraph>
              <StyledLink
                href="https://github.com/dahliaOS/pangolin_desktop/tree/main/lib/components/settings"
                target="_blank"
              >
                <StyledButton>
                  <GitHubIcon style={{ marginLeft: -5, marginRight: 10 }} />
                  Source
                </StyledButton>
              </StyledLink>
            </Card>
            <Card>
              <Center>
                <AppIcon
                  alt="files application icon"
                  src={"/images/app-icons/files.webp"}
                />
              </Center>
              <SubHeader>Files</SubHeader>
              <CardParagraph>
                Files is an application for viewing and managing your files and
                folders.
              </CardParagraph>
              <StyledLink
                href="https://github.com/dahliaOS/files"
                target="_blank"
              >
                <StyledButton>
                  <GitHubIcon style={{ marginLeft: -5, marginRight: 10 }} />
                  Source
                </StyledButton>
              </StyledLink>
            </Card>
            <Card>
              <Center>
                <AppIcon
                  alt="app store application icon"
                  src={"/images/app-icons/store.webp"}
                />
              </Center>
              <SubHeader>App store</SubHeader>
              <CardParagraph>
                App store is an application that provides a curated marketplace
                for third-party applications.
              </CardParagraph>
              <StyledLink
                href="https://github.com/dahliaOS/app_store"
                target="_blank"
              >
                <StyledButton>
                  <GitHubIcon style={{ marginLeft: -5, marginRight: 10 }} />
                  Source
                </StyledButton>
              </StyledLink>
            </Card>
            <Card>
              <Center>
                <AppIcon
                  alt="clock application icon"
                  src={"/images/app-icons/clock.webp"}
                />
              </Center>
              <SubHeader>Clock</SubHeader>
              <CardParagraph>
                Clock is an application for viewing the time, setting alarms and
                timers.
              </CardParagraph>
              <StyledLink
                href="https://github.com/dahliaOS/clock"
                target="_blank"
              >
                <StyledButton>
                  <GitHubIcon style={{ marginLeft: -5, marginRight: 10 }} />
                  Source
                </StyledButton>
              </StyledLink>
            </Card>
            <Card>
              <Center>
                <AppIcon
                  alt="welcome application icon"
                  src={"/images/app-icons/welcome.webp"}
                />
              </Center>
              <SubHeader>Welcome</SubHeader>
              <CardParagraph>
                Welcome is an application for getting started with dahliaOS.
              </CardParagraph>
              <StyledLink
                href="https://github.com/dahliaOS/welcome"
                target="_blank"
              >
                <StyledButton>
                  <GitHubIcon style={{ marginLeft: -5, marginRight: 10 }} />
                  Source
                </StyledButton>
              </StyledLink>
            </Card>
            <Card>
              <Center>
                <AppIcon
                  alt="terminal application icon"
                  src={"/images/app-icons/terminal.webp"}
                />
              </Center>
              <SubHeader>Terminal</SubHeader>
              <CardParagraph>
                Terminal is an application for interacting with the shell.
              </CardParagraph>
              <StyledLink
                href="https://github.com/dahliaOS/terminal"
                target="_blank"
              >
                <StyledButton>
                  <GitHubIcon style={{ marginLeft: -5, marginRight: 10 }} />
                  Source
                </StyledButton>
              </StyledLink>
            </Card>
            <Card>
              <Center>
                <AppIcon
                  alt="calculator application icon"
                  src={"/images/app-icons/calculator.webp"}
                />
              </Center>
              <SubHeader>Calculator</SubHeader>
              <CardParagraph>
                Calculator is an application for performing basic calculations.
              </CardParagraph>
              <StyledLink
                href="https://github.com/dahliaOS/calculator"
                target="_blank"
              >
                <StyledButton>
                  <GitHubIcon style={{ marginLeft: -5, marginRight: 10 }} />
                  Source
                </StyledButton>
              </StyledLink>
            </Card>
            <Card>
              <Center>
                <AppIcon
                  alt="task manager application icon"
                  src={"/images/app-icons/task.webp"}
                />
              </Center>
              <SubHeader>Task manager</SubHeader>
              <CardParagraph>
                Task manager is an application for managing system processes and
                resources.
              </CardParagraph>
              <StyledLink
                href="https://github.com/dahliaOS/task_manager"
                target="_blank"
              >
                <StyledButton>
                  <GitHubIcon style={{ marginLeft: -5, marginRight: 10 }} />
                  Source
                </StyledButton>
              </StyledLink>
            </Card>
            <Card>
              <Center>
                <AppIcon
                  alt="media application icon"
                  src={"/images/app-icons/photos.webp"}
                />
              </Center>
              <SubHeader>Media</SubHeader>
              <CardParagraph>
                Media is an application for managing albums, viewing photos and
                videos.
              </CardParagraph>
              <StyledLink
                href="https://github.com/dahliaOS/media"
                target="_blank"
              >
                <StyledButton>
                  <GitHubIcon style={{ marginLeft: -5, marginRight: 10 }} />
                  Source
                </StyledButton>
              </StyledLink>
            </Card>
            <Card>
              <Center>
                <AppIcon
                  alt="text editor application icon"
                  src={"/images/app-icons/notes.webp"}
                />
              </Center>
              <SubHeader>Text editor</SubHeader>
              <CardParagraph>
                Text editor is an application for creating and editing text
                documents.
              </CardParagraph>
              <StyledLink
                href="https://github.com/dahliaOS/text_editor"
                target="_blank"
              >
                <StyledButton>
                  <GitHubIcon style={{ marginLeft: -5, marginRight: 10 }} />
                  Source
                </StyledButton>
              </StyledLink>
            </Card>
            <Card>
              <Center>
                <AppIcon
                  alt="logs application icon"
                  src={"/images/app-icons/logs.webp"}
                />
              </Center>
              <SubHeader>System logs</SubHeader>
              <CardParagraph>
                System logs is an application for viewing system logs useful for
                debugging and solving problems.
              </CardParagraph>
              <StyledLink
                href="https://github.com/dahliaOS/system_logs"
                target="_blank"
              >
                <StyledButton>
                  <GitHubIcon style={{ marginLeft: -5, marginRight: 10 }} />
                  Source
                </StyledButton>
              </StyledLink>
            </Card>
          </AppsGrid>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Applications;
