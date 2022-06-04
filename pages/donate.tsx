import { Button } from "@mui/material";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { VolunteerActivism as VolunteerActivismIcon } from "@mui/icons-material";
import Head from "next/head";

const Wrapper = styled.div`
  min-height: 100vh;
  margin-top: 150px;
  background: ${({ theme }) =>
    theme.type === "dark"
      ? "url('/images/bgDark.svg')"
      : "url('/images/bgLight.svg')"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 1025px) {
    padding: 0 0 20px 20px;
  }
`;

const Container = styled.div`
  width: 90%;
  display: block;
  max-width: 500px;
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

const List = styled.ul`
  color: ${({ theme }) => theme.text.textColor};
`;

const StyledButton = styled(Button)`
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
          <Paragraph>
            Thank you for your support! We use donations to keep improving our
            project and hardware support, and donations will go towards the
            following:
          </Paragraph>
          <br />
          <List>
            <li>Website hosting</li>
            <li>Web domains</li>
            <li>Development software licenses</li>
            <li>General development of the operating system and tools</li>
            <li>Devices for testing and expanding hardware support</li>
          </List>
          <br />
          <SubHeader>Where can I donate?</SubHeader>
          <br />
          <Paragraph>
            Currently, donations can be sent through Open Collective, other
            services will be coming soon.
          </Paragraph>
          <br />
          <StyledButton href="https://opencollective.com/dahliaos">
            <VolunteerActivismIcon
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
