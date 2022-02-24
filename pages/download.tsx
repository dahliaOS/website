import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DownloadComponent from "../components/Download";
import { Link } from "@mui/material";
import Head from "next/head";

const Wrapper = styled.div`
  min-height: 100vh;
  margin: 120px 0;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 2.2em;
  font-weight: 500;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.text.textColor};
`;

const Span = styled.span`
  font-size: 1.25em;
  margin-top: 20px;
  text-align: center;
  display: block;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.accent.accentColor};
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accent.accentColor}9d;
  }
`;

const Download = () => {
  return (
    <>
      <Head>
        <title>dahliaOS – Download</title>
        <meta property="og:title" content="dahliaOS – Download" key="title" />
        <meta property="og:description" content="Download dahliaOS!"></meta>
      </Head>
      <Navbar />
      <Wrapper>
        <Header>Download</Header>
        <DownloadComponent showMore />
        <StyledLink href="https://github.com/dahliaOS/releases/releases">
          <Span>Looking for an older update?</Span>
        </StyledLink>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Download;
