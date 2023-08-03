import "@reach/skip-nav/styles.css";

import {
  AppBar,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import {
  ArticleRounded as ArticleIcon,
  GetAppRounded as GetApp,
  Science as ScienceIcon,
  VolunteerActivismRounded as VolunteerActivismIcon,
} from "@mui/icons-material";
import { SkipNavContent, SkipNavLink } from "@reach/skip-nav";
import { css, keyframes } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import darkLogotype from "../public/images/logos/darkLogotype.webp";
import lightLogotype from "../public/images/logos/lightLogotype.webp";
import styled from "@emotion/styled";
import { useMeetsScrollPos } from "../utils/hooks/useMeetsScrollPos";
import { useTheme } from "@emotion/react";
import { alpha } from "@mui/material";

const WrapperKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-66px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div``;

const AppBarLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.93em;
  padding: 16px 35px;
  gap: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.primary};
  transition: color ease-in-out 0.2s;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.palette.text.light};
  }
`;

const StyledAppBar = styled(AppBar) <{
  rootPageHasAnimation?: boolean;
  meetsScrollPos: boolean;
}>`
  ${({ meetsScrollPos, theme }) => `
    backdrop-filter: ${meetsScrollPos ? "blur(20px)" : "unset"};
    background: ${meetsScrollPos ? theme.palette.primary.light + 99 : "unset"};
  `}

  transition: background ease-in-out 0.15s;

  ${({ rootPageHasAnimation }) =>
    rootPageHasAnimation
      ? css`
          opacity: 0;
          animation: ${WrapperKeyframes} 1s cubic-bezier(0.66, 0, 0.2, 1) 0.183s
            forwards;
          animation-delay: 2s;
        `
      : css`
          opacity: 1;
        `}
`;

const AppBarLogoLinkContainer = styled(Link)`
  margin-left: 1rem;
  @media (max-width: 1025px) {
    display: block;
    margin: 0 auto;
  }
`;

const AppBarLogo = styled(Image)`
  display: block;
  height: auto;
  width: 160px;
  object-fit: contain;
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;

  @media (max-width: 1025px) {
    display: none;
  }
`;

const Navbar = ({
  rootPageHasAnimation,
}: {
  rootPageHasAnimation?: boolean;
}) => {
  const windowIsSmall = useMediaQuery("(max-width: 1075px)");
  const theme = useTheme();
  const meetsScrollPos = useMeetsScrollPos(10);

  return (
    <Wrapper>
      <SkipNavLink
        contentId="skipNav"
        style={{
          background: theme.palette.primary.main,
          color:
            theme.palette.mode === "dark"
              ? theme.palette.text.extremelyLight
              : theme.palette.text.secondary,
          zIndex: 9999999,
        }}
      />
      <StyledAppBar
        rootPageHasAnimation={windowIsSmall ? false : rootPageHasAnimation}
        position="fixed"
        meetsScrollPos={meetsScrollPos}
        elevation={0}
        sx={{
          borderBottom: meetsScrollPos
            ? `1.5px solid  ${alpha(theme.palette.text.primary, 0.2)}`
            : "unset",
          padding: "8px 128px",
        }}
      >
        <Toolbar>
          <AppBarLogoLinkContainer href="/">
            <AppBarLogo
              priority
              quality={100}
              alt="dahliaOS logo"
              src={theme.palette.mode === "dark" ? darkLogotype : lightLogotype}
              draggable={false}
            />
          </AppBarLogoLinkContainer>
          <DesktopNav>
            <AppBarLink href="/download">
              <GetApp /> Download
            </AppBarLink>
            <AppBarLink href="/donate">
              <VolunteerActivismIcon /> Donate
            </AppBarLink>
            <AppBarLink href="https://web.dahliaOS.io" target="_blank">
              <ScienceIcon /> Demo
            </AppBarLink>
            <AppBarLink href="https://docs.dahliaos.io" target="_blank">
              <ArticleIcon /> Documentation
            </AppBarLink>
          </DesktopNav>
        </Toolbar>
      </StyledAppBar>
      <SkipNavContent id="skipNav" />
    </Wrapper>
  );
};

export default Navbar;
