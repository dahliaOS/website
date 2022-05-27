import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DownloadComponent from "../components/Download";
import { Button } from "@mui/material";
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
`;

const Header = styled.h1`
  text-align: center;
  font-size: 2.2em;
  font-weight: 500;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.text.textColor};
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 130px;
  align-items: center;
  justify-content: center;
  padding: 0 50px;

  @media (max-width: 1025px) {
    padding: 25px 50px;
  }
`;

const SectionBtn = styled(Button)`
  padding: 7px 20px;
  border-radius: 5px;
  margin: 10px 0;
  color: ${({ theme }) => theme.text.textColorExtremelyLight};

  &:first-of-type {
    background: linear-gradient(
      153deg,
      ${({ theme }) => theme.accent.accentColorLight} 0%,
      ${({ theme }) => theme.accent.accentColor} 100%
    );
    background-size: 400% 400%;
    transition: 0.2s ease-in-out;
    margin-right: 15;
  }

  &:nth-child(even) {
    margin-left: 10px;
    border: ${({ theme }) => theme.background.backgroundColorLight} solid 1.5px;
    border-radius: 5px;
  }

  &:hover {
    background-position: 100% 50%;
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
        <ButtonContainer>
          <SectionBtn href="https://github.com/dahliaOS/releases/releases">
            Looking for an older release?
          </SectionBtn>
        </ButtonContainer>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Download;
