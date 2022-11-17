import { Button } from "@mui/material";
import styled from "@emotion/styled";
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
    theme.palette.mode === "dark"
      ? "url('/images/background/darkBackground.svg')"
      : "url('/images/background/lightBackground.svg')"};
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
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2em;
  gap: 1rem;
  align-items: center;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 2.2em;
  font-weight: 500;
  text-align: center;
`;

const SubHeader = styled.h2`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1.5em;
  font-weight: 500;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const StyledButton = styled(Button)`
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 0;
  color: ${({ theme }) => theme.palette.text.extremelyLight};
  gap: 10px;
  width: fit-content;

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
          <SubHeader>404 Error</SubHeader>
          <Paragraph>
            This page could not be found, it probably has not been coded yet or
            you have the wrong URL.
          </Paragraph>
          <StyledButton href="/">
            <HomeIcon />
            HOME
          </StyledButton>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Error404;
