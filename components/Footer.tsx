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
import darkLogotype from "../public/images/logos/darkLogotype.webp";
import lightLogotype from "../public/images/logos/lightLogotype.webp";

const StyledBottomNavigation = styled(BottomNavigation)`
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 5rem 12rem;
  overflow: hidden;
  background: ${({ theme }) => theme.palette.primary.main};

  @media (max-width: 1200px) {
    padding: 5rem 5rem;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4rem;

  @media (max-width: 800px) {
    gap: 3rem;
  }
`;

const FooterCategory = styled.div`
  width: max-content;
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

  @media (max-width: 800px) {
    font-size: 1.2em;
  }
`;

const FooterList = styled.ul`
  list-style: unset;
  margin: 0;
  padding: 0;
`;

const FooterItemLink = styled(Link)`
  font-size: 1.15em;
  color: ${({ theme }) => theme.palette.text.primary};
  display: block;
  transition: color ease-in-out 0.15s;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

const FooterItem = styled.li`
  list-style-type: none;
`;

const FooterLogo = styled(Image)`
  object-fit: contain;
  width: 200px;
  height: auto;
`;

const VercelDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
`;

const StyledSelect = styled(Select)`
  background: ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) => theme.palette.text.primary};
  height: 2.5rem;
  width: 9rem;
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
  font-size: 1rem;
  font-weight: 450;
  margin-right: 10px;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

const VercelLink = styled(Link)`
  text-decoration: none;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-top: 8rem;
  flex-wrap: nowrap;

  @media (max-width: 850px) {
    justify-content: center;
    flex-direction: column;
    row-gap: 2.5rem;
    margin-top: 4rem;
  }
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
            <FooterItem>
              <FooterItemLink href="/discord" target="_blank">
                Discord
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink href="/github" target="_blank">
                GitHub
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink href="/reddit" target="_blank">
                Reddit
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink href="/telegram" target="_blank">
                Telegram
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink href="/facebook" target="_blank">
                Facebook
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink href="/instagram" target="_blank">
                Instagram
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink href="/twitter" target="_blank">
                Twitter
              </FooterItemLink>
            </FooterItem>
          </FooterList>
        </FooterCategory>
        <FooterCategory>
          <FooterHeader>
            <DeveloperBoardIcon />
            Technology
          </FooterHeader>
          <FooterList>
            <FooterItem>
              <FooterItemLink
                href="https://docs.dahliaos.io/os/linux-based"
                target="_blank"
              >
                How it works
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink
                href="https://docs.dahliaos.io/pangolin/pangolin"
                target="_blank"
              >
                Pangolin
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink
                href="https://docs.dahliaos.io/os/fimage"
                target="_blank"
              >
                FImage
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink
                href="https://docs.dahliaos.io/developers/packaging"
                target="_blank"
              >
                Packaging
              </FooterItemLink>
            </FooterItem>
          </FooterList>
        </FooterCategory>
        <FooterCategory>
          <FooterHeader>
            <ArticleIcon />
            Documentation
          </FooterHeader>
          <FooterList>
            <FooterItem>
              <FooterItemLink
                href="https://docs.dahliaos.io/build/buildroot"
                target="_blank"
              >
                Compiling
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink
                href="https://docs.dahliaos.io/live-boot/x86_64"
                target="_blank"
              >
                Live booting
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink
                href="https://docs.dahliaos.io/hardware/supported-devices"
                target="_blank"
              >
                Supported devices
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink
                href="https://docs.dahliaos.io/faq"
                target="_blank"
              >
                FAQ
              </FooterItemLink>
            </FooterItem>
          </FooterList>
        </FooterCategory>
        <FooterCategory>
          <FooterHeader>
            <HandshakeIcon />
            Contribute
          </FooterHeader>
          <FooterList>
            <FooterItem>
              <FooterItemLink
                href="https://docs.dahliaos.io/contribute/roadmap"
                target="_blank"
              >
                Roadmap
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink
                href="https://docs.dahliaos.io/contribute/contribute"
                target="_blank"
              >
                Contribute
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink
                href="https://docs.dahliaos.io/contribute/code-of-conduct"
                target="_blank"
              >
                Code of Conduct
              </FooterItemLink>
            </FooterItem>
          </FooterList>
        </FooterCategory>
        <FooterCategory>
          <FooterHeader>
            <QuestionAnswerIcon />
            Contact
          </FooterHeader>
          <FooterList>
            <FooterItem>
              <FooterItemLink href="mailto:contact@dahliaos.io">
                Contact us
              </FooterItemLink>
            </FooterItem>
          </FooterList>
        </FooterCategory>
      </FooterContainer>
      <BottomContainer>
        <StyledSelect
          onChange={e => onThemeChange(e.target.value as ThemeTypes)}
          value={localStorageTheme}
          displayEmpty
        >
          <StyledMenuItem value="system">
            <ComputerIcon />
            System
          </StyledMenuItem>
          <StyledMenuItem value="dark">
            <CloudyIcon />
            Dark
          </StyledMenuItem>
          <StyledMenuItem value="light">
            <SunnyIcon />
            Light
          </StyledMenuItem>
        </StyledSelect>
        <FooterLogo
          quality={100}
          alt="dahliaOS logo"
          src={theme.palette.mode === "dark" ? darkLogotype : lightLogotype}
        />
        <VercelLink href="https://vercel.com?utm_source=dahliaOS&amp;utm_campaign=oss">
          <VercelDiv>
            <VercelText>Powered By</VercelText>
            <VercelLogo fill={theme.palette.text.primary} />
          </VercelDiv>
        </VercelLink>
      </BottomContainer>
    </StyledBottomNavigation>
  );
};

export default Footer;
