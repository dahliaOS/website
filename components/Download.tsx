/* eslint-disable indent */ // this is here because prettier is being annoyin g
import { Alert, Button, Link } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useGithubReleases } from "../hooks/useGithubReleases";
import { Theme } from "../utils/Theme";

const Wrapper = styled.div``;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 13px;
  max-width: 950px;
  max-height: 350px;
  width: 90%;
  margin: 0 auto;
  background: ${Theme.background.backgroundColorLight};
  box-shadow: 0px 1px 7px 1px rgb(0 0 0 / 14%), 0 3px 3px -2px rgb(0 0 0 / 20%),
    0 1px 8px 0 rgb(0 0 0 / 12%);
`;

const Latest = styled.div`
  flex: 1.2;
  padding: 0 28px;
`;

const Older = styled.div`
  background: #1f1f1f;
  border-radius: 13px;
  padding: 0 16px;
  flex: 1;
  overflow: auto;
  box-shadow: 0px 1px 7px 1px rgb(0 0 0 / 14%), 0 3px 3px -2px rgb(0 0 0 / 20%),
    0 1px 8px 0 rgb(0 0 0 / 12%);
`;

const TextContainer = styled.div`
  position: relative;
  padding-bottom: 35px;
`;

const Header = styled.h1`
  margin: 17px 0 0;
  color: ${Theme.text.textColorLight};
`;

const OlderHeader = styled.h1`
  margin: 17px 0 0;
  text-align: center;
  color: ${Theme.text.textColorLight};
`;

const ReleaseName = styled.span`
  display: block;
  margin: 0 0 20px;
  color: ${Theme.text.textColor}9d;
`;

const Changelogs = styled.p`
  color: ${Theme.text.textColor};

  white-space: pre-line;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const UpdateContainer = styled.div`
  padding: 20px 0 0;
`;

const ReadMoreButton = styled(Button)`
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${Theme.text.textColor};
  padding: 5px 10px;
  border-radius: 3px;
`;

const StyledButton = styled(Button)<{ disableGradient?: boolean }>`
  padding: 6px 12px;
  border-radius: 5px;
  color: ${Theme.text.textColorLight};
  text-decoration: none;

  &:first-child {
    margin-right: 15px;

    ${({ disableGradient }) =>
      !disableGradient
        ? `
        background: linear-gradient(
          153deg,
          ${Theme.accent.accentColor} 0%,
          ${Theme.accent.accentColorLight} 100%
        );

        background-size: 400% 400;
        transition: 0.2s ease-in-out;
        `
        : null}
  }

  &:hover {
    background-position: 100% 50%;
  }
`;

const OlderUpdate = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
  margin-bottom: 6px;
  border-bottom: 1px solid ${Theme.text.textColorDark}9d;

  &:last-child {
    margin-bottom: 0;
    border-bottom: unset;
  }
`;

const OlderUpdateTextWrapper = styled.div`
  flex-grow: 1;
`;

const OlderUpdateTitle = styled.h1`
  font-size: 1.25rem;
  margin: 0;
  font-weight: 400;
  color: ${Theme.text.textColor};
`;

const ButtonContainer = styled.div`
  margin: 0;
`;

const OlderUpdateDate = styled.span`
  color: ${Theme.text.textColorDark};
`;

const OlderBtns = styled.div`
  display: inline-flex;
`;

interface IDownloadProps {
  showMore?: boolean;
}

const Download = ({ showMore }: IDownloadProps) => {
  const { releases, isError, isLoading } = useGithubReleases();

  const getDate = (date: Date) => {
    date = new Date(date);

    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    ).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      {isError ? (
        <Alert severity="error">
          An error occurred whilst fetching GitHub&apos;s API!
        </Alert>
      ) : null}

      {releases ? (
        <Card>
          <Latest>
            <TextContainer>
              <Header>Latest</Header>
              <ReleaseName>{releases[0].name}</ReleaseName>
              <Changelogs>
                {releases[0].body
                  .substring(releases[0].body.indexOf("+ "))
                  .replace(/(?:\r\n|\r|\n)/g, "\n")}
              </Changelogs>
              <Link href={releases[0].html_url} target="_blank">
                <ReadMoreButton>Read more</ReadMoreButton>
              </Link>
            </TextContainer>
            <ButtonContainer>
              {releases[0].assets.map(asset => (
                <StyledButton
                  key={asset.name}
                  href={asset.browser_download_url}
                >
                  {asset.name.includes("efi")
                    ? "Download (EFI)"
                    : "Download (Legacy)"}
                </StyledButton>
              ))}
            </ButtonContainer>
          </Latest>
          <Older>
            <TextContainer>
              <OlderHeader>Older updates</OlderHeader>
              <UpdateContainer>
                {releases.map((oldRelease, i) => {
                  if (i === 0 || i > 4) return;

                  return (
                    <OlderUpdate key={i}>
                      <OlderUpdateTextWrapper>
                        <OlderUpdateTitle>{oldRelease.name}</OlderUpdateTitle>
                        <OlderUpdateDate>
                          {getDate(oldRelease.published_at)}
                        </OlderUpdateDate>
                      </OlderUpdateTextWrapper>
                      <OlderBtns>
                        {oldRelease.assets.map(asset => (
                          <StyledButton
                            key={asset.name}
                            href={asset.browser_download_url}
                            disableGradient={!asset.name.includes("efi")}
                          >
                            {asset.name.includes("efi") ? "EFI" : "Legacy"}
                          </StyledButton>
                        ))}
                      </OlderBtns>
                    </OlderUpdate>
                  );
                })}
              </UpdateContainer>
            </TextContainer>
          </Older>
        </Card>
      ) : isLoading ? (
        <>yo</>
      ) : null}
    </>
  );
};

export default Download;
