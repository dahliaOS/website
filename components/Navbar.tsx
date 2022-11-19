import { useRef } from "react";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  SvgIcon,
  Link as MUILink,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  MoreVert,
  GetApp,
  VolunteerActivism as VolunteerActivismIcon,
  Science as ScienceIcon,
  Article as ArticleIcon,
  GitHub as GitHubIcon,
  Groups as GroupIcon,
  Reddit as RedditIcon,
  Facebook as FacebookIcon,
  Telegram as TelegramIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { SkipNavContent, SkipNavLink } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import { DiscordLogo } from "./Icons";
import { useMeetsScrollPos } from "../utils/hooks/useMeetsScrollPos";
import Image from "next/image";
import darkLogotype from "../public/images/logos/darkLogotype.webp";
import lightLogotype from "../public/images/logos/lightLogotype.webp";

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

const Container = styled.div`
  background: ${({ theme }) => theme.palette.primary.light};
  width: 15rem;
  height: 100%;
`;

const DrawerLogoContainer = styled.div`
  position: relative;
  padding-top: 160px;
  background: ${({ theme }) => theme.palette.primary.main};
`;

const DrawerLogo = styled(Image)`
  position: absolute;
  bottom: 16px;
  padding-left: 20px;
  height: auto;
  width: 200px;
  object-fit: contain;
`;

const Link = styled(MUILink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  font-size: 0.93em;
  padding: 18px 20px;
  color: ${({ theme }) => theme.palette.text.primary};
  transition: color ease-in-out 0.2s;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.palette.text.light};
  }
`;

const Category = styled.span`
  display: block;
  font-size: 0.93em;
  padding: 16px 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.light};
`;

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

const MenuLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 10px;
  padding: 0;
  margin: 0;
  background: unset;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.secondary};

  &:hover {
    color: initial;
  }
`;

const StyledAppBar = styled(AppBar)<{
  rootPageHasAnimation?: boolean;
  meetsScrollPos: boolean;
}>`
  ${({ meetsScrollPos, theme }) => `
    backdrop-filter: ${meetsScrollPos ? "blur(20px)" : "unset"};
    background: ${meetsScrollPos ? theme.palette.primary.light + 90 : "unset"};
    box-shadow: ${
      meetsScrollPos
        ? "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
        : "unset"
    };
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

const StyledToolbar = styled(Toolbar)<{ meetsScrollPos: boolean }>`
  box-shadow: ${({ meetsScrollPos }) => (meetsScrollPos ? "initial" : "unset")};
`;

const AppBarLogoLinkContainer = styled(Link)`
  @media (max-width: 1025px) {
    display: block;
    margin: 0 auto;
  }
`;

const AppBarLogo = styled(Image)`
  height: auto;
  width: 150px;
  object-fit: contain;
`;

const DesktopNav = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;

  @media (max-width: 1025px) {
    display: none;
  }
`;

const StyledDrawer = styled(Drawer)``;

const Navbar = ({
  rootPageHasAnimation,
}: {
  rootPageHasAnimation?: boolean;
}) => {
  const [drawerState, setDrawerState] = useState(false);
  const [toggleMoreIcon, setToggleMoreIcon] = useState(false);
  const windowIsSmall = useMediaQuery("(max-width: 1075px)");
  const theme = useTheme();
  const ref = useRef<HTMLButtonElement | null>(null);
  const meetsScrollPos = useMeetsScrollPos(10);
  const toggleDrawer = useCallback(
    (open: boolean = false) => setDrawerState(open ?? !drawerState),
    [drawerState],
  );

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
      <StyledDrawer
        anchor="left"
        open={drawerState}
        onClose={() => toggleDrawer(false)}
      >
        <DrawerLogoContainer>
          <DrawerLogo
            priority
            quality={100}
            alt="dahliaOS logo"
            src={theme.palette.mode === "dark" ? darkLogotype : lightLogotype}
          />
        </DrawerLogoContainer>
        <Container>
          <Link href="/download">
            <GetApp />
            Download
          </Link>
          <Link href="/donate">
            <VolunteerActivismIcon />
            Donate
          </Link>
          <Link href="https://web.dahliaOS.io" target="_blank">
            <ScienceIcon />
            Demo
          </Link>
          <Link href="https://docs.dahliaos.io" target="_blank">
            <ArticleIcon />
            Documentation
          </Link>
          <Divider />
          <Category>Find us on</Category>
          <Link href="/discord" target="_blank">
            <SvgIcon component={DiscordLogo} />
            Discord
          </Link>
          <Link href="/github" target="_blank">
            <GitHubIcon />
            GitHub
          </Link>
          <Link href="/reddit" target="_blank">
            <RedditIcon />
            Reddit
          </Link>
          <Link href="/telegram" target="_blank">
            <TelegramIcon />
            Telegram
          </Link>
          <Link href="/facebook" target="_blank">
            <FacebookIcon />
            Facebook
          </Link>
          <Link href="/instagram" target="_blank">
            <InstagramIcon />
            Instagram
          </Link>
          <Link href="/twitter" target="_blank">
            <TwitterIcon />
            Twitter
          </Link>
          <Divider />
          <Category>Team</Category>
          <Link href="https://github.com/orgs/dahliaos/people" target="_blank">
            <GroupIcon />
            Developers
          </Link>
        </Container>
      </StyledDrawer>
      <StyledAppBar
        rootPageHasAnimation={windowIsSmall ? false : rootPageHasAnimation}
        position="fixed"
        meetsScrollPos={meetsScrollPos}
      >
        <StyledToolbar meetsScrollPos={meetsScrollPos}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon
              style={
                theme.palette.mode === "dark"
                  ? undefined
                  : { color: theme.palette.text.secondary }
              }
            />
          </IconButton>
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
            <IconButton
              ref={ref}
              aria-label="nav-more"
              aria-haspopup="true"
              onClick={() => setToggleMoreIcon(true)}
            >
              <MoreVert style={{ color: theme.palette.text.light }} />
            </IconButton>
            <Menu
              open={toggleMoreIcon}
              onClose={() => setToggleMoreIcon(false)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              anchorEl={ref.current}
              keepMounted
            >
              <MenuItem>
                <MenuLink
                  href="https://github.com/orgs/dahliaos/people"
                  target="_blank"
                >
                  <GroupIcon />
                  Developers
                </MenuLink>
              </MenuItem>
            </Menu>
          </DesktopNav>
        </StyledToolbar>
      </StyledAppBar>
      <SkipNavContent id="skipNav" />
    </Wrapper>
  );
};

export default Navbar;
