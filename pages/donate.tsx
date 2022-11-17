import { Button, SvgIcon, Link } from "@mui/material";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Language as LanguageIcon,
  Dns as DnsIcon,
  Terminal as TerminalIcon,
  DeveloperMode as DeveloperModeIcon,
  Devices as DevicesIcon,
} from "@mui/icons-material";
import Head from "next/head";
import { OpenCollectiveLogo } from "../components/Icons";

const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 150px;
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? "url('/images/background/darkBackground.svg')"
      : "url('/images/background/lightBackground.svg')"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  @media (max-width: 1025px) {
    padding: 150px 20px;
  }
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
  font-size: 1.2em;
  flex-direction: column;
  gap: 2rem;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 2.2em;
  font-weight: 500;
  text-align: center;
`;

const SubHeader = styled.h2`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 1.4em;
  font-weight: 400;
  text-align: left;
`;

const Paragraph = styled.p<{ centerText?: boolean }>`
  color: ${({ theme }) => theme.palette.text.primary};
  max-width: 80ch;
  margin: 0 auto;
  text-align: ${({ centerText }) => (centerText ? "center" : "left")};
`;

const StyledButton = styled(Button)`
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 0;
  color: ${({ theme }) => theme.palette.text.extremelyLight};
  gap: 10px;

  background: linear-gradient(
    153deg,
    ${({ theme }) => theme.palette.secondary.light} 0%,
    ${({ theme }) => theme.palette.secondary.main} 100%
  );
  background-size: 400% 400%;
  transition: 0.2s ease-in-out;

  &:hover {
    background-position: 100% 50%;
  }
`;

const SupportItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  padding: 10px 15px;
  height: 50px;
  min-width: 120px;
  text-align: center;
  gap: 10px;
  color: ${({ theme }) => theme.palette.text.extremelyLight};
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#262626" : "#B2B2B2"};
`;

const ItemParagraph = styled.p`
  color: ${({ theme }) => theme.palette.text.extremelyLight};
  font-size: 0.8em;
  font-weight: 400;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const DownloadLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Donate = () => {
  return (
    <>
      <Head>
        <title>dahliaOS – Donate</title>
        <meta property="og:title" content="dahliaOS – Donate" key="title" />
        <meta property="og:description" content="Donate to dahliaOS."></meta>
      </Head>
      <Navbar />
      <Wrapper>
        <Container>
          <Header>Donate to dahliaOS</Header>
          <Paragraph centerText>
            Thank you for your support! We use donations to keep improving our
            project and hardware support, and donations will go towards the
            following:
          </Paragraph>
          <ItemsContainer>
            <SupportItem>
              <DnsIcon />
              <ItemParagraph>Website hosting</ItemParagraph>
            </SupportItem>
            <SupportItem>
              <TerminalIcon />
              <ItemParagraph>Development software licenses</ItemParagraph>
            </SupportItem>
            <SupportItem>
              <DeveloperModeIcon />
              <ItemParagraph>
                General development of the operating system and tools
              </ItemParagraph>
            </SupportItem>
            <SupportItem>
              <LanguageIcon />
              <ItemParagraph>Website domains</ItemParagraph>
            </SupportItem>
            <SupportItem>
              <DevicesIcon />
              <ItemParagraph>
                Devices for testing and expanding hardware support
              </ItemParagraph>
            </SupportItem>
          </ItemsContainer>
          <DownloadLink>
            <SubHeader>Where can I donate?</SubHeader>
            <Paragraph>
              Currently, donations can be sent through Open Collective, other
              services will be coming soon.
            </Paragraph>
            <StyledLink
              href="https://opencollective.com/dahliaos"
              target="_blank"
            >
              <StyledButton>
                <SvgIcon component={OpenCollectiveLogo} />
                OPEN COLLECTIVE
              </StyledButton>
            </StyledLink>
          </DownloadLink>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Donate;
