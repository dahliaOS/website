import {
  Article,
  Computer,
  DeveloperBoard,
  Handshake,
  PeopleAlt,
  PermMedia,
  QuestionAnswer,
  WbCloudy,
  WbSunny,
} from "@mui/icons-material";
import { BottomNavigation, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { VercelLogo } from "./Icons";
import darkLogotype from "../public/images/logos/darkLogotype.webp";
import lightLogotype from "../public/images/logos/lightLogotype.webp";
import styled from "@emotion/styled";
import { usePreferredTheme } from "../utils/hooks/usePreferredTheme";
import { useTheme } from "@emotion/react";

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
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FooterHeader = styled.p`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 1.5em;
  font-weight: 500;

  @media (max-width: 800px) {
    font-size: 1.2em;
  }
`;

const FooterList = styled.ul`
  list-style: unset;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const FooterItemLink = styled(Link)`
  font-size: 1.15em;
  color: ${({ theme }) => theme.palette.text.primary};
  display: block;
  transition: color ease-in-out 0.15s;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.palette.text.light};
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
  margin-right: 10px;
`;

const CloudyIcon = styled(WbCloudy)`
  vertical-align: middle;
  margin-right: 10px;
`;

const ComputerIcon = styled(Computer)`
  vertical-align: middle;
  margin-right: 10px;
`;

const IconSpan = styled.span`
  margin-left: 0.5rem;
  vertical-align: middle;
`;

const VercelLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1rem;
  font-weight: 450;

  &:hover {
    color: ${({ theme }) => theme.palette.text.light};
  }

  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
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

const PeopleAltIcon = styled(PeopleAlt)`
  vertical-align: middle;
  margin-right: 10px;
`;

const DeveloperBoardIcon = styled(DeveloperBoard)`
  vertical-align: middle;
  margin-right: 10px;
`;

const ArticleIcon = styled(Article)`
  vertical-align: middle;
  margin-right: 10px;
`;

const HandshakeIcon = styled(Handshake)`
  vertical-align: middle;
  margin-right: 10px;
`;

const QuestionAnswerIcon = styled(QuestionAnswer)`
  vertical-align: middle;
  margin-right: 10px;
`;

const PermMediaIcon = styled(PermMedia)`
  vertical-align: middle;
  margin-right: 10px;
`;

type ThemeTypes = "dark" | "light" | "system";

const Footer = () => {
  const [localStorageTheme, setLocalStorageTheme] = useState<ThemeTypes>();
  const theme = useTheme();
  const preferredTheme = usePreferredTheme();

  const onThemeChange = (theme: ThemeTypes) => {
    setLocalStorageTheme(theme);
    localStorage.setItem("theme", theme);

    /* This dispatches a new storage event so we can update the theme, it's a bit
     over engineered but it works. (We need this because the storage event
     only picks it up within the browser and not in context) */
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
            <PermMediaIcon />
            Resources
          </FooterHeader>
          <FooterList>
            <FooterItem>
              <FooterItemLink
                href="https://github.com/dahliaos/brand"
                target="_blank"
              >
                Brand
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink
                href="https://github.com/dahliaos/icons"
                target="_blank"
              >
                Icons
              </FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink
                href="https://github.com/dahliaos/press-kit"
                target="_blank"
              >
                Press kit
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
          value={preferredTheme}
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
          priority
          quality={100}
          alt="dahliaOS logo"
          src={theme.palette.mode === "dark" ? darkLogotype : lightLogotype}
        />
        <VercelLink
          href="https://vercel.com?utm_source=dahliaOS&amp;utm_campaign=oss"
          target="_blank"
        >
          Powered By
          <IconSpan>
            <VercelLogo />
          </IconSpan>
        </VercelLink>
      </BottomContainer>
    </StyledBottomNavigation>
  );
};

export default Footer;
