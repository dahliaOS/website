import { Button } from "@mui/material";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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

const Container = styled.div`
  width: 90%;
  display: block;
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
  font-size: 1.2em;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.text.textColorLight};
  font-size: 2.2em;
  font-weight: 500;
  text-align: center;
`;

const SubHeader = styled.h2`
  color: ${({ theme }) => theme.text.textColorLight};
  font-size: 1.4em;
  font-weight: 400;
  text-align: left;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.text.textColor};
`;

const List = styled.ul`
  color: ${({ theme }) => theme.text.textColor};
`;

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
        <Container>
          <Header>Donate to dahliaOS</Header>
          <br />
          <Paragraph>
            Thank you for your support! We use donations to keep improving our
            project and hardware support, and donations will go towards the
            following:
          </Paragraph>
          <br />
          <List>
            <li>Website hosting</li>
            <li>Web domains</li>
            <li>Development software licenses</li>
            <li>Devices for testing and expanding hardware support</li>
          </List>
          <br />
          <SubHeader>Where can I donate?</SubHeader>
          <br />
          <Paragraph>
            Currently, donations can be sent through Open Collective, other
            services will be coming soon.
          </Paragraph>
          <br />
          <StyledButton href="https://opencollective.com/dahliaos">
            OPEN COLLECTIVE
          </StyledButton>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Donate;
