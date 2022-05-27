import React, { useEffect, useRef } from "react";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  Link as MUILink,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { Menu as MenuIcon, MoreVert } from "@mui/icons-material";
import { useCallback, useState } from "react";
import styled, { css, keyframes, useTheme } from "styled-components";
import useScrollPosition from "@react-hook/window-scroll";
import { SkipNavContent, SkipNavLink } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";

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
  background: ${({ theme }) => theme.background.backgroundColorLight};
`;

const DrawerLogoContainer = styled.div`
  position: relative;
  padding-top: 160px;
  height: 160px;
  width: 230px;
  background: ${({ theme }) => theme.background.backgroundColor};
`;

const DrawerLogo = styled.img`
  position: absolute;
  height: 28px;
  bottom: 16px;
  padding-left: 20px;
`;

const Link = styled(MUILink)`
  display: block;
  font-size: 0.93em;
  padding: 16px 20px;
  color: ${({ theme }) => theme.text.textColor};
  transition: color ease-in-out 0.2s;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.text.textColorLight};
  }
`;

const Category = styled.span`
  display: block;
  font-size: 0.93em;
  padding: 16px 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text.textColorLight};
`;

const AppBarLink = styled(Link)`
  display: inline-block;
  font-size: 0.93em;
  padding: 16px 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.textColor};
  transition: color ease-in-out 0.2s;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.text.textColorLight};
  }
`;

const MenuLink = styled(Link)`
  padding: 0;
  margin: 0;
  background: unset;
  text-decoration: none;
  color: ${({ theme }) => theme.text.textColorDark};

  &:hover {
    color: initial;
  }
`;

const StyledAppBar = styled(AppBar)<{
  rootPageHasAnimation?: boolean;
  scrollPos: number;
}>`
  background: ${({ scrollPos, theme }) =>
    scrollPos > 10 ? theme.background.backgroundColorLight : "unset"};
  box-shadow: ${({ scrollPos }) =>
    scrollPos > 10
      ? "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
      : "unset"};

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

const StyledToolbar = styled(Toolbar)<{ scrollPos: number }>`
  box-shadow: ${({ scrollPos }) => (scrollPos > 10 ? "initial" : "unset")};
`;

const AppBarLogoLinkContainer = styled(Link)`
  @media (max-width: 1025px) {
    display: block;
    margin: 0 auto;
  }
`;

const AppBarLogo = styled.img`
  height: 28px;
`;

const DesktopNav = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;

  @media (max-width: 1025px) {
    display: none;
  }
`;

const Navbar = ({
  rootpagehasanimation,
}: {
  rootpagehasanimation?: boolean;
}) => {
  const [drawerState, setDrawerState] = useState(false);
  const [toggleMoreIcon, setToggleMoreIcon] = useState(false);
  const [initialPageWidth, setInitialPageWidth] = useState(0);
  const theme = useTheme();
  const ref = useRef<HTMLButtonElement | null>(null);

  /* In the future we should come up with a different solution that doesn't
   rerender this component, its not much of a problem right now but later it
   *may* become a problem 

   - Cody
   */
  const scrollPos = useScrollPosition(15);
  const toggleDrawer = useCallback(
    (open: boolean = false) => setDrawerState(open ?? !drawerState),
    [drawerState],
  );

  useEffect(() => {
    // This is used for checking if its mobile or not
    setInitialPageWidth(window.innerWidth);
  }, []);

  return (
    <Wrapper>
      <SkipNavLink
        contentId="skipNav"
        style={{
          background: theme.background.backgroundColor,
          color:
            theme.type === "dark"
              ? theme.text.textColorExtremelyLight
              : theme.text.textColorDark,
          zIndex: 9999999,
        }}
      />
      <Drawer
        anchor="left"
        open={drawerState}
        onClose={() => toggleDrawer(false)}
      >
        <DrawerLogoContainer>
          <DrawerLogo
            alt="dahliaOS logo"
            src={
              theme.type === "dark"
                ? "/images/logos/logo-white.png"
                : "/images/logos/logo-color.png"
            }
          />
        </DrawerLogoContainer>
        <Container>
          <Link href="/#features">Features</Link>
          <Link href="/#download">Download</Link>
          <Link href="/donate">Donate</Link>
          <Link href="https://web.dahliaOS.io">Demo</Link>
          <Link href="https://docs.dahliaOS.io">Documentation</Link>
          <Divider />
          <Category>Find us on</Category>
          <Link href="/discord" target="_blank">
            Discord
          </Link>
          <Link href="/github" target="_blank">
            GitHub
          </Link>
          <Link href="/reddit" target="_blank">
            Reddit
          </Link>
          <Link href="/telegram" target="_blank">
            Telegram
          </Link>
          <Link href="/facebook" target="_blank">
            Facebook
          </Link>
          <Link href="/instagram" target="_blank">
            Instagram
          </Link>
          <Link href="/twitter" target="_blank">
            Twitter
          </Link>
          <Divider />
          <Category>For developers</Category>
          <Link href="/github">Source code</Link>
          <Link href="https://github.com/orgs/dahliaos/people" target="_blank">
            Developers
          </Link>
          <Link href="/discord">Join our team</Link>
        </Container>
      </Drawer>
      <StyledAppBar
        rootPageHasAnimation={
          initialPageWidth < 1075 ? false : rootpagehasanimation
        }
        position="fixed"
        scrollPos={scrollPos}
      >
        <StyledToolbar scrollPos={scrollPos}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon
              style={
                theme.type === "dark"
                  ? undefined
                  : { color: theme.text.textColorDark }
              }
            />
          </IconButton>
          <AppBarLogoLinkContainer href="/">
            <AppBarLogo
              alt="dahliaOS logo"
              src={
                theme.type === "dark"
                  ? "/images/logos/logo-white.png"
                  : "/images/logos/logo-color.png"
              }
              draggable={false}
            />
          </AppBarLogoLinkContainer>
          <DesktopNav>
            <AppBarLink href="/#features">Features</AppBarLink>
            <AppBarLink href="/#download">Download</AppBarLink>
            <AppBarLink href="/donate">Donate</AppBarLink>
            <AppBarLink href="https://web.dahliaOS.io" target="_blank">
              Demo
            </AppBarLink>
            <AppBarLink href="https://docs.dahliaOS.io">
              Documentation
            </AppBarLink>
            <IconButton
              ref={ref}
              aria-label="nav-more"
              aria-haspopup="true"
              onClick={() => setToggleMoreIcon(true)}
            >
              <MoreVert style={{ color: theme.text.textColorLight }} />
            </IconButton>
            <Menu
              open={toggleMoreIcon}
              onClose={() => setToggleMoreIcon(false)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              anchorEl={ref.current}
              keepMounted
            >
              <MenuItem>
                <MenuLink href="/github" target="_blank">
                  Source code
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink
                  href="https://github.com/orgs/dahliaos/people"
                  target="_blank"
                >
                  Developers
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="/discord" target="_blank">
                  Join our team
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
