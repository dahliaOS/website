import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DownloadComponent from "../components/Download";
import { Theme } from "../utils/Theme";

const Wrapper = styled.div`
  min-height: 100vh;
  margin: 120px 0;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 2.2em;
  font-weight: 500;
  margin-bottom: 25px;
  color: ${Theme.text.textColor};
`;

const Download = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Header>Download</Header>
        <DownloadComponent showMore />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Download;
