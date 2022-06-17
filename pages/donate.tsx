import { Button, SvgIcon } from "@mui/material";
import styled from "styled-components";
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
import OpenCollectiveLogo from "/public/images/logos/opencollective-logomark.svg";

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

const Container = styled.div`
  width: 90%;
  display: block;
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
  font-size: 1.2em;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.text.textColor};
  font-size: 2.2em;
  font-weight: 500;
  text-align: center;
`;

const SubHeader = styled.h2`
  color: ${({ theme }) => theme.text.textColor};
  font-size: 1.4em;
  font-weight: 400;
  text-align: left;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.text.textColor};
`;

const StyledButton = styled(Button)`
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 0;
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

const SupportItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  padding: 10px 15px;
  max-height: 60px;
  overflow: hidden;
  color: ${({ theme }) => theme.text.textColorExtremelyLight};
  background-color: ${({ theme }) =>
    theme.type === "dark" ? "#262626" : "#B2B2B2"};
  background-size: 400% 400%;
  transition: 0.2s ease-in-out;

  @media (max-width: 980px) {
    max-height: unset;
  }
`;

const SupportItemLarge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  padding: 10px 15px;
  max-height: 60px;
  grid-column: auto / span 2;

  overflow: hidden;
  color: ${({ theme }) => theme.text.textColorExtremelyLight};
  background-color: ${({ theme }) =>
    theme.type === "dark" ? "#262626" : "#B2B2B2"};
  background-size: 400% 400%;
  transition: 0.2s ease-in-out;

  @media (max-width: 980px) {
    max-height: unset;
  }
`;

const ItemParagraph = styled.p`
  color: ${({ theme }) => theme.text.textColorExtremelyLight};
  font-size: 0.8em;
  font-weight: 400;
`;

const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
  grid-gap: 1em 1em;
  grid-auto-flow: row dense;
  justify-content: left;
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
          <br />
          <Paragraph style={{ textAlign: "center" }}>
            Thank you for your support! We use donations to keep improving our
            project and hardware support, and donations will go towards the
            following:
          </Paragraph>
          <br />
          <SupportGrid>
            <SupportItem>
              <DnsIcon style={{ marginRight: 10 }} />
              <ItemParagraph>Website hosting</ItemParagraph>
            </SupportItem>
            <SupportItemLarge>
              <TerminalIcon style={{ marginRight: 10 }} />
              <ItemParagraph>Development software licenses</ItemParagraph>
            </SupportItemLarge>
            <SupportItemLarge>
              <DeveloperModeIcon style={{ marginRight: 10 }} />
              <ItemParagraph>
                General development of the operating system and tools
              </ItemParagraph>
            </SupportItemLarge>
            <SupportItem>
              <LanguageIcon style={{ marginRight: 10 }} />
              <ItemParagraph>Website domains</ItemParagraph>
            </SupportItem>
            <SupportItemLarge>
              <DevicesIcon style={{ marginRight: 10 }} />
              <ItemParagraph>
                Devices for testing and expanding hardware support
              </ItemParagraph>
            </SupportItemLarge>
          </SupportGrid>
          <br />
          <SubHeader>Where can I donate?</SubHeader>
          <br />
          <Paragraph>
            Currently, donations can be sent through Open Collective, other
            services will be coming soon.
          </Paragraph>
          <br />
          <StyledButton
            href="https://opencollective.com/dahliaos"
            target="_blank"
          >
            <SvgIcon
              component={OpenCollectiveLogo}
              style={{ marginLeft: -5, marginRight: 10 }}
            />
            OPEN COLLECTIVE
          </StyledButton>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Donate;
