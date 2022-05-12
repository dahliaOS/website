import { BottomNavigation, Link, MenuItem, Select } from "@mui/material";
import { WbSunny, WbCloudy, Computer } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";

const StyledBottomNavigation = styled(BottomNavigation)`
  position: relative;
  height: auto;
  display: block;
  padding: 50px 40px;
  overflow: hidden;
  background: ${({ theme }) =>
    theme.type === "dark"
      ? theme.background.backgroundColorDark
      : theme.background.backgroundColorLight};
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
  font-size: 1.5em;
  font-weight: medium;
  margin-bottom: 0.5em;
`;

const FooterList = styled.ul`
  list-style: unset;
  margin: 0;
  padding: 0;
`;

const FooterItem = styled(Link)`
  font-size: 1.15em;
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
  right: 45px;
  bottom: 30px;
  height: 40px;

  @media (max-width: 670px) {
    position: unset;
    display: flex;
    width: 100%;
    align-self: center;
  }
`;

const StyledSelect = styled(Select)`
  position: absolute;
  left: 45px;
  bottom: 30px;
  height: 40px;

  @media (max-width: 670px) {
    position: unset;
    display: flex;
    width: 100%;
    align-self: center;
  }
  background: ${({ theme }) => theme.background.backgroundColorLight};
  color: ${({ theme }) => theme.text.textColor};
`;

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
`;

const SunnyIcon = styled(WbSunny)`
  vertical-align: middle;
  margin-right: 5px;
`;

const CloudyIcon = styled(WbCloudy)`
  vertical-align: middle;
  margin-right: 5px;
`;

const ComputerIcon = styled(Computer)`
  vertical-align: middle;
  margin-right: 8px;
`;

type ThemeTypes = "dark" | "light" | "system";

const Footer = () => {
  const [localStorageTheme, setLocalStorageTheme] = useState<ThemeTypes>();
  const theme = useTheme();

  const onThemeChange = (theme: ThemeTypes) => {
    setLocalStorageTheme(theme);
    localStorage.setItem("theme", theme);

    /* This dispatches a new storage event so we can update the theme, its a bit
     over engineered, but it works (we need this because the storage event
     only picks it up within the browser not in context) */
    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    setLocalStorageTheme(
      (localStorage.getItem("theme") as ThemeTypes) ?? "system",
    );
  }, []);

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
            <FooterItem href="https://docs.dahliaos.io/os/linux">
              How it works
            </FooterItem>
            <FooterItem href="#">The goal</FooterItem>
            <FooterItem href="#">Design</FooterItem>
            <FooterItem href="#">UI Modularity</FooterItem>
          </FooterList>
        </FooterCategory>
        <FooterCategory>
          <FooterHeader>Documentation</FooterHeader>
          <FooterList>
            <FooterItem href="https://docs.dahliaos.io/os/linux">
              Compiling
            </FooterItem>
            <FooterItem href="https://docs.dahliaos.io/install/efi">
              Installing
            </FooterItem>
            <FooterItem href="https://docs.dahliaos.io/install/efi">
              Running
            </FooterItem>
            <FooterItem href="https://docs.dahliaos.io/hardware/support">
              Supported devices
            </FooterItem>
            <FooterItem href="#">Linux vs. Zircon</FooterItem>
          </FooterList>
        </FooterCategory>
        <FooterCategory>
          <FooterHeader>FAQ</FooterHeader>
          <FooterList>
            <FooterItem href="https://docs.dahliaos.io/os/faq">FAQ</FooterItem>
            <FooterItem href="#">Q&A</FooterItem>
            <FooterItem href="#">Contact us</FooterItem>
          </FooterList>
        </FooterCategory>
      </FooterContainer>
      <StyledSelect value={localStorageTheme} displayEmpty>
        {/* We're setting onClicks here because onChange for the parent element didnt work for some reason */}
        <StyledMenuItem onClick={() => onThemeChange("system")} value="system">
          <ComputerIcon />
          System
        </StyledMenuItem>
        <StyledMenuItem onClick={() => onThemeChange("dark")} value="dark">
          <CloudyIcon />
          Dark
        </StyledMenuItem>
        <StyledMenuItem onClick={() => onThemeChange("light")} value="light">
          <SunnyIcon />
          Light
        </StyledMenuItem>
      </StyledSelect>

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
