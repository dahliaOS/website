import React, { useRef } from "react";
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
import styled, { css, keyframes } from "styled-components";
import { Theme } from "../utils/Theme";

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

const Wrapper = styled.div<{ rootPageHasAnimation?: boolean }>``;

const Container = styled.div``;

const DrawerLogoContainer = styled.div`
  position: relative;
  padding-top: 160px;
  height: 160px;
  width: 230px;
  background: ${Theme.background};
`;

const DrawerLogo = styled.img`
  position: absolute;
  height: 28px;
  bottom: 16px;
  padding-left: 40px;
`;

const Link = styled(MUILink)`
  display: block;
  font-size: 0.93em;
  padding: 16px 40px;
  color: ${Theme.secondaryBackground};
  transition: color ease-in-out 0.2s;

  &:hover {
    text-decoration: none;
    color: ${Theme.secondaryBackground}9d;
  }
`;

const AppBarLink = styled(Link)`
  display: inline-block;
  font-size: 0.93em;
  padding: 16px 40px;
  color: ${Theme.secondaryBackground};
  transition: color ease-in-out 0.2s;

  &:hover {
    text-decoration: none;
    color: ${Theme.secondaryBackground}9d;
  }
`;

const MenuLink = styled(Link)`
  padding: 0;
  margin: 0;
  background: unset;
  text-decoration: none;
`;

const Logo = styled.img``;

const StyledAppBar = styled(AppBar)<{ rootPageHasAnimation?: boolean }>`
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

const AppBarLogo = styled.img`
  height: 28px;
  filter: brightness(0) invert(1);
`;

const DesktopNav = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

const Navbar = ({
  rootPageHasAnimation,
}: {
  rootPageHasAnimation?: boolean;
}) => {
  const [drawerState, setDrawerState] = useState(false);
  const [toggleMoreIcon, setToggleMoreIcon] = useState(false);
  const ref = useRef<HTMLButtonElement | null>(null);

  const toggleDrawer = useCallback(
    (open: boolean = false) => setDrawerState(open ?? !drawerState),
    [drawerState],
  );

  return (
    <Wrapper rootPageHasAnimation={rootPageHasAnimation}>
      <Drawer
        anchor="left"
        open={drawerState}
        onClose={() => toggleDrawer(false)}
      >
        <DrawerLogoContainer>
          <DrawerLogo src={"/images/logos/logo-white.png"} />
        </DrawerLogoContainer>
        <Container>
          <Link href="/#features">Features</Link>
          <Link href="#">News</Link>
          <Link href="/download">Download</Link>
          <Link href="mailto:contact@dahliaOS.io">Contact</Link>
          <Link href="https://github.com/orgs/dahliaos/people" target="_blank">
            Developers
          </Link>
          <Link href="https://docs.dahliaOS.io">Documentation</Link>
          <Divider />
        </Container>
      </Drawer>
      <StyledAppBar
        rootPageHasAnimation={rootPageHasAnimation}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link>
            <AppBarLogo src="/images/logos/logo-color.png" draggable={false} />
          </Link>
          <DesktopNav>
            <Container>
              <AppBarLink href="/#features">Features</AppBarLink>
              <AppBarLink href="#">News</AppBarLink>
              <AppBarLink href="/download">Download</AppBarLink>
              <AppBarLink href="https://web.dahliaOS.io" target="_blank">
                Demo
              </AppBarLink>
              <AppBarLink
                href="https://github.com/orgs/dahliaos/people"
                target="_blank"
              >
                Developers
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
                <MoreVert />
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
                    Source Code
                  </MenuLink>
                </MenuItem>
                <MenuItem disabled>Screenshots</MenuItem>
              </Menu>
            </Container>
          </DesktopNav>
        </Toolbar>
      </StyledAppBar>
    </Wrapper>
  );
};

export default Navbar;
