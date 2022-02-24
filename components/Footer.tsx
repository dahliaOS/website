import { BottomNavigation, Link } from "@mui/material";
import React from "react";
import styled, { useTheme } from "styled-components";

const StyledBottomNavigation = styled(BottomNavigation)`
  position: relative;
  height: auto;
  display: block;
  padding: 50px 40px;
  overflow: hidden;
  background: ${({ theme }) => theme.background.backgroundColorDark};
`;

const FooterContainer = styled.div`
  display: flex;

  @media (max-width: 1025px) {
    flex-wrap: wrap;
  }
`;

const FooterCategory = styled.div`
  flex-grow: 1;

  @media (max-width: 1025px) {
    padding: 10px;
  }
`;

const FooterHeader = styled.h1`
  color: ${({ theme }) => theme.text.textColorLight};
  fontsize: 1.5em;
  font-weight: medium;
  margin-bottom: 0.5em;
`;

const FooterList = styled.ul`
  list-style: unset;
  margin: 0;
  padding: 0;
`;

const FooterItem = styled(Link)`
  fontsize: 1.15em;
  color: ${({ theme }) => theme.text.textColor};
  display: block;
  transition: color ease-in-out 0.15s;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.text.textColorDark};
  }
`;

const FooterLogo = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 50px;
  height: 30px;
`;

const VercelLogo = styled.img`
  position: absolute;
  right: 30px;
  bottom: 30px;
  height: 40px;

  @media (max-width: 670px) {
    position: unset;
    display: flex;
    width: 100%;
    align-self: center;
  }
`;

const Footer = () => {
  const theme = useTheme();

  return (
    <StyledBottomNavigation>
      <FooterContainer>
        <FooterCategory>
          <FooterHeader>Find us on</FooterHeader>
          <FooterList>
            <FooterItem href="/discord" target="_blank">
              Discord
            </FooterItem>
            <FooterItem href="/github" target="_blank">
              GitHub
            </FooterItem>
            <FooterItem href="/reddit" target="_blank">
              Reddit
            </FooterItem>
            <FooterItem href="/telegram" target="_blank">
              Telegram
            </FooterItem>
            <FooterItem href="/facebook" target="_blank">
              Facebook
            </FooterItem>
            <FooterItem href="/instagram" target="_blank">
              Instagram
            </FooterItem>
            <FooterItem href="/twitter" target="_blank">
              Twitter
            </FooterItem>
          </FooterList>
        </FooterCategory>
        <FooterCategory>
          <FooterHeader>Technology</FooterHeader>
          <FooterList>
            <FooterItem href="#">How it works</FooterItem>
            <FooterItem href="#">The goal</FooterItem>
            <FooterItem href="#">Design</FooterItem>
            <FooterItem href="#">UI Modularity</FooterItem>
          </FooterList>
        </FooterCategory>
        <FooterCategory>
          <FooterHeader>Documentation</FooterHeader>
          <FooterList>
            <FooterItem href="#">Compiling</FooterItem>
            <FooterItem href="#">Installing</FooterItem>
            <FooterItem href="#">Running</FooterItem>
            <FooterItem href="#">Supported devices</FooterItem>
            <FooterItem href="#">Linux vs. Zircon</FooterItem>
          </FooterList>
        </FooterCategory>
        <FooterCategory>
          <FooterHeader>FAQ</FooterHeader>
          <FooterList>
            <FooterItem href="#">Q&A</FooterItem>
            <FooterItem href="#">Contact us</FooterItem>
          </FooterList>
        </FooterCategory>
      </FooterContainer>

      <FooterLogo
        alt="dahliaOS logo"
        src={
          theme.type === "dark"
            ? "/images/logos/logo-white.png"
            : "/images/logos/logo-color.png"
        }
      />
      <br />
      <a href="https://vercel.com?utm_source=dahliaOS&amp;utm_campaign=oss">
        <VercelLogo
          alt="Vercel Logo"
          src="/images/logos/powered-by-vercel.svg"
        />
      </a>
    </StyledBottomNavigation>
  );
};

export default Footer;
