import { Button } from "@mui/material";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Wrapper = styled.div`
  min-height: 100vh;
  margin-top: 120px;
  color: ${({ theme }) => theme.text.textColor};
`;

const Header = styled.h1`
  font-size: 2.2em;
  font-weight: 500;
  text-align: center;
`;

const Container = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
  font-size: 1.2em;
`;

const Paragraph = styled.p``;

const StyledButton = styled(Button)`
  margin-top: 15px;
  color: ${({ theme }) => theme.text.textColorLight};
  background: linear-gradient(
    153deg,
    ${({ theme }) => theme.accent.accentColorLight} 0%,
    ${({ theme }) => theme.accent.accentColorDark} 100%
  );
`;

const Donate = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Header>Donate to dahliaOS</Header>
        <Container>
          <Paragraph>
            Thank you for your support! We use donations to keep improving our
            project and hardware support, and donations will go towards the
            following:
          </Paragraph>
          <br />
          <ul>
            <li>Website hosting</li>
            <li>Web domains</li>
            <li>Development software licenses</li>
            <li>Devices for testing and expanding hardware support</li>
          </ul>
          <br />
          <h2>Where can I donate?</h2>
          <p>
            Currently, donations can be sent through Open Collective, other services will
            be coming soon.
          </p>
          <StyledButton href="https://opencollective.com/dahliaos">
            OPENCOLLECTIVE
          </StyledButton>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Donate;
