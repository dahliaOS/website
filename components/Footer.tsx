import { BottomNavigation, Link, MenuItem, Select } from "@mui/material";
import { WbSunny, WbCloudy, Computer } from "@mui/icons-material";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import {
  PeopleAlt as PeopleAltIcon,
  DeveloperBoard as DeveloperBoardIcon,
  Article as ArticleIcon,
  Handshake as HandshakeIcon,
  QuestionAnswer as QuestionAnswerIcon,
} from "@mui/icons-material";
import { VercelLogo } from "./Icons";
import Image from "next/image";

const StyledBottomNavigation = styled(BottomNavigation)`
  position: relative;
  height: auto;
  display: block;
  padding: 50px;
  overflow: hidden;
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1025px) {
    flex-wrap: wrap;
    text-align: left;
  }
`;

const FooterCategory = styled.div`
  width: max-content;

  @media (max-width: 1025px) {
    padding: 10px;
  }
`;

const FooterHeader = styled.h1`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 1.5em;
  font-weight: medium;
  margin-bottom: 0.5em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const FooterList = styled.ul`
  list-style: unset;
  margin: 0;
  padding: 0;
`;

const FooterItem = styled(Link)`
  font-size: 1.15em;
  color: ${({ theme }) => theme.palette.text.secondary};
  display: block;
  transition: color ease-in-out 0.15s;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

const FooterLogo = styled(Image)`
  display: block;
  margin: 30px auto 0 auto;
`;

const VercelDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 45px;
  bottom: 30px;
  height: 40px;

  @media (max-width: 670px) {
    position: unset;
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
    position: relative;
    left: unset;
    bottom: unset;
    display: flex;
    width: 100%;
    align-self: center;
    margin: 20px 0;
  }
  background: ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) => theme.palette.text.primary};
`;

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.background.default};
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

const VercelText = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1.1em;
  font-weight: 450;
  margin-right: 10px;
`;

const VercelLink = styled(Link)`
  text-decoration: none;
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
            <PeopleAltIcon />
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
            <DeveloperBoardIcon />
            Technology
          </FooterHeader>
          <FooterList>
            <FooterItem
              href="https://docs.dahliaos.io/os/linux-based"
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
              href="https://docs.dahliaos.io/developers/packaging"
              target="_blank"
            >
              Packaging
            </FooterItem>
          </FooterList>
        </FooterCategory>
        <FooterCategory>
          <FooterHeader>
            <ArticleIcon />
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
              href="https://docs.dahliaos.io/live-boot/x86_64"
              target="_blank"
            >
              Live booting
            </FooterItem>
            <FooterItem
              href="https://docs.dahliaos.io/hardware/supported-devices"
              target="_blank"
            >
              Supported devices
            </FooterItem>
            <FooterItem href="https://docs.dahliaos.io/faq" target="_blank">
              FAQ
            </FooterItem>
          </FooterList>
        </FooterCategory>
        <FooterCategory>
          <FooterHeader>
            <HandshakeIcon />
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
              href="https://docs.dahliaos.io/contribute/contribute"
              target="_blank"
            >
              Contribute
            </FooterItem>
            <FooterItem
              href="https://docs.dahliaos.io/contribute/code-of-conduct"
              target="_blank"
            >
              Code of Conduct
            </FooterItem>
          </FooterList>
        </FooterCategory>
        <FooterCategory>
          <FooterHeader>
            <QuestionAnswerIcon />
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
        quality={100}
        alt="dahliaOS logo"
        width={150}
        height={30}
        src={
          theme.palette.mode === "dark"
            ? "/images/logos/logotype-dark.png"
            : "/images/logos/logotype-light.png"
        }
      />
      <VercelLink href="https://vercel.com?utm_source=dahliaOS&amp;utm_campaign=oss">
        <VercelDiv>
          <VercelText>Powered By</VercelText>
          <VercelLogo fill={theme.palette.text.primary} />
        </VercelDiv>
      </VercelLink>
    </StyledBottomNavigation>
  );
};

export default Footer;
