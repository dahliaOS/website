import { BottomNavigation, Link, MenuItem, Select } from "@mui/material";
import { WbSunny, WbCloudy, Computer } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import {
  PeopleAlt as PeopleAltIcon,
  DeveloperBoard as DeveloperBoardIcon,
  Article as ArticleIcon,
  Handshake as HandshakeIcon,
  QuestionAnswer as QuestionAnswerIcon,
} from "@mui/icons-material";

const StyledBottomNavigation = styled(BottomNavigation)`
  position: relative;
  text-align: center;
  height: auto;
  display: block;
  padding: 50px 50px;
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
    text-align: left;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const FooterList = styled.ul`
  list-style: unset;
  margin: 0;
  padding: 0;
`;

const FooterItem = styled(Link)`
  font-size: 1.15em;
  color: ${({ theme }) => theme.text.textColorDark};
  display: block;
  transition: color ease-in-out 0.15s;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.text.textColor};
  }
`;

const FooterLogo = styled.img`
  display: block;
  margin: 30px auto 0 auto;
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
    margin: 30px 0;
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
    margin: 20px 0;
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
          <FooterHeader>
            <PeopleAltIcon style={{ marginLeft: -5, marginRight: 10 }} />
            Find us on
          </FooterHeader>
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
          <FooterHeader>
            <DeveloperBoardIcon style={{ marginLeft: -5, marginRight: 10 }} />
            Technology
          </FooterHeader>
          <FooterList>
            <FooterItem
              href="https://docs.dahliaos.io/os/linux"
              target="_blank"
            >
              How it works
            </FooterItem>
            <FooterItem
              href="https://docs.dahliaos.io/pangolin/pangolin"
              target="_blank"
            >
              Pangolin
            </FooterItem>
            <FooterItem
              href="https://docs.dahliaos.io/os/fimage"
              target="_blank"
            >
              FImage
            </FooterItem>
            <FooterItem
              href="https://docs.dahliaos.io/developer/packaging"
              target="_blank"
            >
              Packaging
            </FooterItem>
            <FooterItem
              href="https://docs.dahliaos.io/developer/roadmap"
              target="_blank"
            >
              The goal
            </FooterItem>
          </FooterList>
        </FooterCategory>
        <FooterCategory>
          <FooterHeader>
            <ArticleIcon style={{ marginLeft: -5, marginRight: 10 }} />
            Documentation
          </FooterHeader>
          <FooterList>
            <FooterItem
              href="https://docs.dahliaos.io/build/buildroot"
              target="_blank"
            >
              Compiling
            </FooterItem>
            <FooterItem
              href="https://docs.dahliaos.io/install/efi"
              target="_blank"
            >
              Installing
            </FooterItem>
            <FooterItem
              href="https://docs.dahliaos.io/hardware/support"
              target="_blank"
            >
              Supported devices
            </FooterItem>
            <FooterItem href="https://docs.dahliaos.io/os/faq" target="_blank">
              FAQ
            </FooterItem>
          </FooterList>
        </FooterCategory>
        <FooterCategory>
          <FooterHeader>
            <HandshakeIcon style={{ marginLeft: -5, marginRight: 10 }} />
            Contribute
          </FooterHeader>
          <FooterList>
            <FooterItem
              href="https://docs.dahliaos.io/contribute/roadmap"
              target="_blank"
            >
              Roadmap
            </FooterItem>
            <FooterItem
              href="https://docs.dahliaos.io/contribute/contributing"
              target="_blank"
            >
              Contribute
            </FooterItem>
            <FooterItem
              href="https://docs.dahliaos.io/contribute/conduct"
              target="_blank"
            >
              Code of Conduct
            </FooterItem>
          </FooterList>
        </FooterCategory>
        <FooterCategory>
          <FooterHeader>
            <QuestionAnswerIcon style={{ marginLeft: -5, marginRight: 10 }} />
            Contact
          </FooterHeader>
          <FooterList>
            <FooterItem href="mailto:contact@dahliaos.io">
              Contact us
            </FooterItem>
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
