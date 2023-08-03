import styled from "@emotion/styled";
import { SvgIcon, alpha } from "@mui/material";
import { StyledButton } from "../global/button";
import {
    GitHub,
    Reddit,
    Telegram,
    Instagram,
    Twitter,
} from "@mui/icons-material";
import { DiscordLogo } from "./Icons";

const Card = styled.div`
  border-radius: 14px;
  max-width: 1250px;
  max-height: 420px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
  background: ${({ theme }) => theme.palette.primary.light};
  border: 1.5px solid ${({ theme }) => alpha(theme.palette.text.primary, 0.2)};

  @media (max-width: 1250px) {
    flex-direction: column;
    max-height: 60rem;
  }
`;

const CommunityButton = styled(StyledButton) <{}>`
  border-radius: 8px;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.text.primary};
  flex: auto;
  padding: 16px;
  margin: 0 8px;
  width: 140px;

  &:hover {
    background: ${({ theme }) => alpha(theme.palette.text.primary, 0.1)};
  }
`;

const List = styled.div<{}>`
  text-align: center;
`;

const Download = () => {
    return (
        <>
            <Card>
                <h1>Join the Community!</h1>
                <div style={{ height: "3rem" }} />
                <List>
                    <CommunityButton>
                        <GitHub />
                        Github
                    </CommunityButton>
                    <CommunityButton>
                        <SvgIcon component={DiscordLogo} />
                        Discord
                    </CommunityButton>
                    <CommunityButton>
                        <Reddit />
                        Reddit
                    </CommunityButton>
                    <CommunityButton>
                        <Telegram />
                        Telegram
                    </CommunityButton>
                    <CommunityButton>
                        <Instagram />
                        Instagram
                    </CommunityButton>
                    <CommunityButton>
                        <Twitter />
                        Twitter
                    </CommunityButton>
                </List>
            </Card>
        </>
    );
};

export default Download;
