import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import coc from "../CONTRIBUTING.md";
import { Theme } from "../utils/Theme";

const Wrapper = styled.div`
  width: 90%;
  max-width: 700px;
  text-align: left;
  font-size: 1em;
  margin: 130px auto;
`;

const Header = styled.h1`
  color: ${Theme.text.textColor};
  font-weight: 500;
  margin-bottom: 50px;
`;

const Pre = styled.pre`
  white-space: pre-wrap;
  color: ${Theme.text.textColor};
`;

const Coc = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Header>Code of Conduct</Header>
        <Pre>{coc}</Pre>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Coc;
