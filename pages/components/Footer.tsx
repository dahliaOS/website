import { BottomNavigation, Link } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledBottomNavigation = styled(BottomNavigation)`
  height: auto;
  display: flex;
  padding: 16px 40px;
`;

const FooterContainer = styled.div`
  display: block;
`;

const FooterCategory = styled.div`
  flex-grow: 1;
`;

const FooterHeader = styled.h1`
  color: #acacac;
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
  color: #acacac;
  display: block;
  transition: color ease-in-out 0.2s;
  &:hover: {
    text-decoration: none;
    color: #acacac9d;
  }
`;

const FooterLogo = styled.img`
  display: block;
  margin: 0 auto;
  height: 30px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <StyledBottomNavigation>
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
      </StyledBottomNavigation>
      <FooterLogo src="/images/logos/logo-white.png" />
      <a href="https://vercel.com?utm_source=dahliaOS&amp;utm_campaign=oss">
        <FooterLogo src="/images/logos/powered-by-vercel.svg" />
      </a>
    </FooterContainer>
  );
};

export default Footer;
