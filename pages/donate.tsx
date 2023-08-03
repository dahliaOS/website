import { SvgIcon, alpha } from "@mui/material";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  LanguageRounded as LanguageIcon,
  DnsRounded as DnsIcon,
  TerminalRounded as TerminalIcon,
  DeveloperModeRounded as DeveloperModeIcon,
  DevicesRounded as DevicesIcon,
} from "@mui/icons-material";
import Head from "next/head";
import { OpenCollectiveLogo } from "../components/Icons";
import Link from "next/link";
import { StyledButton } from "../global/button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 5rem;
  background: url("/images/background/background.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 1250px) {
    padding: 8rem 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  max-width: 800px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 2.5em;
  font-weight: 500;
  text-align: center;

  @media (max-width: 1250px) {
    font-size: 2rem;
  }
`;

const SubHeader = styled.h2`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 1.9em;
  font-weight: 400;
  text-align: left;

  @media (max-width: 1250px) {
    font-size: 1.4em;
  }
`;

const Paragraph = styled.p<{ centerText?: boolean }>`
  color: ${({ theme }) => theme.palette.text.primary};
  max-width: 80ch;
  font-size: ${({ centerText }) => (centerText ? "1.4rem" : "1.2rem")};
  text-align: ${({ centerText }) => (centerText ? "center" : "left")};

  @media (max-width: 1250px) {
    font-size: ${({ centerText }) => (centerText ? "1.2rem" : "1.1rem")};
  }
`;

const SupportItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  border-radius: 13px;
  padding: 0 24px;
  height: 45px;
  min-width: 120px;
  width: 390px;
  height: 6rem;
  text-align: left;
  gap: 24px;
  color: ${({ theme }) => theme.palette.text.light};
  background-color: ${({ theme }) => theme.palette.primary.light};
  border: 1.5px solid ${({ theme }) => alpha(theme.palette.text.primary, 0.2)};
`;

const ItemParagraph = styled.p`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 1rem;
  font-weight: 500;
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

const DonateLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: start;
  align-items: start;
`;

const Donate = () => {
  return (
    <>
      <Head>
        <title>dahliaOS – Donate</title>
        <meta property="og:title" content="dahliaOS – Donate" key="title" />
        <meta property="og:description" content="Donate to dahliaOS." />
        <meta property="description" content="Donate to dahliaOS." />
        <link rel="canonical" href="https://dahliaos.io/donate" />
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
          <DonateLink>
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
          </DonateLink>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Donate;
