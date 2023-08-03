import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { HomeRounded as HomeIcon } from "@mui/icons-material";
import Head from "next/head";
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

const Paragraph = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
  max-width: 80ch;
  font-size: 1.4rem;
  text-align: center;

  @media (max-width: 1250px) {
    font-size: 1.2rem;
  }
`;

const Error404 = () => {
  return (
    <>
      <Head>
        <title>dahliaOS – 404</title>
        <meta property="og:title" content="dahliaOS – 404" key="title" />
        <meta property="og:description" content="404 Error."></meta>
        <meta property="description" content="404 Error." />
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
