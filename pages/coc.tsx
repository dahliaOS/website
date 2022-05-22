import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import coc from "../CODE_OF_CONDUCT.md";

const Wrapper = styled.div`
  width: 90%;
  max-width: 700px;
  text-align: left;
  font-size: 1em;
  margin: 130px auto;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.text.textColor};
  font-weight: 500;
  margin-bottom: 50px;
`;

const Pre = styled.pre`
  white-space: pre-wrap;
  color: ${({ theme }) => theme.text.textColor};
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
