import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DownloadComponent from "../components/Download";
import Head from "next/head";
import { useGithubReleases } from "../utils/hooks/useGithubReleases";
import { Download as DownloadIcon } from "@mui/icons-material";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 5rem;
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? "url('/images/background/darkBackground.svg')"
      : "url('/images/background/lightBackground.svg')"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  @media (max-width: 1250px) {
    padding: 8rem 3rem;
  }
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

const Paragraph = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
  max-width: 80ch;
  font-size: 1.4rem;
  text-align: center;

  @media (max-width: 1250px) {
    font-size: 1.2rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

const StyledDownloadIcon = styled(DownloadIcon)`
  vertical-align: middle;
  margin-right: 8px;
`;

const Download = () => {
  const { releases, isError, isLoading } = useGithubReleases();

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
            <meta property="og:description" content="Download dahliaOS."></meta>
          </Head>
          <Navbar />
          <Wrapper>
            <Container>
              <Header>Download</Header>
              <Paragraph>
                <StyledDownloadIcon />
                Total downloads: An error occurred whilst fetching GitHub&apos;s
                API!
              </Paragraph>
              <DownloadComponent />
            </Container>
          </Wrapper>
          <Footer />
        </>
      ) : null}

      {releases?.length ? (
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
              <Paragraph>
                <StyledDownloadIcon />
                Total downloads:{" "}
                {releases
                  ?.map(allReleases => {
                    return allReleases.assets[0].name.includes("efi")
                      ? allReleases.assets[0].download_count +
                          allReleases.assets[1].download_count
                      : allReleases.assets[0].download_count;
                  })
                  .reduce<number>((accumulator, current) => {
                    return accumulator + current;
                  }, 0)}
              </Paragraph>
              <DownloadComponent />
            </Container>
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
              <Paragraph>
                <StyledDownloadIcon />
                Total downloads: Loading...
              </Paragraph>
              <DownloadComponent />
            </Container>
          </Wrapper>
          <Footer />
        </>
      ) : null}
    </>
  );
};

export default Download;
