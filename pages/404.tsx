import { Button } from "@mui/material";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Home as HomeIcon } from "@mui/icons-material";
import Head from "next/head";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) =>
    theme.type === "dark"
      ? "url('/images/bgDark.svg')"
      : "url('/images/bgLight.svg')"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  @media (max-width: 1025px) {
    padding: 0 20px;
  }
`;

const Container = styled.div`
  width: 90%;
  display: block;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2em;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.text.textColorLight};
  font-size: 2.2em;
  font-weight: 500;
  text-align: center;
`;

const SubHeader = styled.h2`
  color: ${({ theme }) => theme.text.textColor};
  font-size: 1.5em;
  font-weight: 500;
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

const Error404 = () => {
  return (
    <>
      <Head>
        <title>dahliaOS – 404</title>
        <meta property="og:title" content="dahliaOS – 404" key="title" />
        <meta property="og:description" content="404 Error."></meta>
      </Head>
      <Navbar />
      <Wrapper>
        <Container>
          <Header>Page not found</Header>
          <br />
          <SubHeader>404 Error</SubHeader>
          <br />
          <Paragraph>
            This page could not be found, it probably has not been coded yet or
            you have the wrong URL.
          </Paragraph>
          <Paragraph>Click the button below to go to the main page.</Paragraph>
          <br />
          <StyledButton href="/">
            <HomeIcon style={{ marginLeft: -5, marginRight: 10 }} />
            HOME
          </StyledButton>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Error404;
