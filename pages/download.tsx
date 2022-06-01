import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DownloadComponent from "../components/Download";
import { Button } from "@mui/material";
import Head from "next/head";
import { useGithubReleases } from "../hooks/useGithubReleases";

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

const Header = styled.h1`
  font-size: 2.2em;
  font-weight: 500;
  color: ${({ theme }) => theme.text.textColor};
  margin-bottom: 15px;
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

const SubHeader = styled.h2<{ isError?: boolean }>`
  color: ${({ theme }) => theme.text.textColor};
  font-size: 1.4em;
  font-weight: 400;
  margin-bottom: 25px;
`;

const Container = styled.div`
  text-align: center;
`;

const Download = () => {
  const { releases, isError, isLoading } = useGithubReleases();

  function calculateDownloads(): number | undefined {
    const totalDownloadNumber = releases?.map(allReleases => {
      const totalDownloads = allReleases.assets[0].name.includes("efi")
        ? allReleases.assets[0].download_count +
          allReleases.assets[1].download_count
        : allReleases.assets[0].download_count;
      return totalDownloads;
    });
    return totalDownloadNumber?.reduce<number>((accumulator, current) => {
      return accumulator + current;
    }, 0);
  }

  return (
    <>
      {isError ? (
        <>
          <Head>
            <title>dahliaOS – Download</title>
            <meta
              property="og:title"
              content="dahliaOS – Download"
              key="title"
            />
            <meta property="og:description" content="Download dahliaOS!"></meta>
          </Head>
          <Navbar />
          <Wrapper>
            <Container>
              <Header>Download</Header>
              <SubHeader>
                Total downloads: An error occurred whilst fetching GitHub&apos;
                API!
              </SubHeader>
            </Container>
            <DownloadComponent showMore />
            <ButtonContainer>
              <SectionBtn href="https://github.com/dahliaOS/releases/releases">
                Looking for an older release?
              </SectionBtn>
            </ButtonContainer>
          </Wrapper>
          <Footer />
        </>
      ) : null}

      {calculateDownloads()?.toString.length ? (
        <>
          <Head>
            <title>dahliaOS – Download</title>
            <meta
              property="og:title"
              content="dahliaOS – Download"
              key="title"
            />
            <meta property="og:description" content="Download dahliaOS!"></meta>
          </Head>
          <Navbar />
          <Wrapper>
            <Container>
              <Header>Download</Header>
              <SubHeader>Total downloads: {calculateDownloads()}</SubHeader>
            </Container>
            <DownloadComponent showMore />
            <ButtonContainer>
              <SectionBtn href="https://github.com/dahliaOS/releases/releases">
                Looking for an older release?
              </SectionBtn>
            </ButtonContainer>
          </Wrapper>
          <Footer />
        </>
      ) : isLoading ? (
        <>
          <Head>
            <title>dahliaOS – Download</title>
            <meta
              property="og:title"
              content="dahliaOS – Download"
              key="title"
            />
            <meta property="og:description" content="Download dahliaOS!"></meta>
          </Head>
          <Navbar />
          <Wrapper>
            <Container>
              <Header>Download</Header>
              <SubHeader>Total downloads: Loading...</SubHeader>
            </Container>
            <DownloadComponent showMore />
            <ButtonContainer>
              <SectionBtn href="https://github.com/dahliaOS/releases/releases">
                Looking for an older release?
              </SectionBtn>
            </ButtonContainer>
          </Wrapper>
          <Footer />
        </>
      ) : null}
    </>
  );
};

export default Download;
