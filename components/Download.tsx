import ErrorIcon from "@mui/icons-material/Error";
import { Button, Link, Skeleton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Paper from "@mui/material/Paper";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { useGithubReleases } from "../utils/hooks/useGithubReleases";
import {
  GetApp,
  TextSnippet as TextSnippetIcon,
  VolunteerActivism as VolunteerActivismIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const Card = styled.div<{ isError?: boolean }>`
  display: flex;
  flex-direction: row;
  border-radius: 13px;
  max-width: ${({ isError }) => (isError ? 450 : 1100)}px;
  max-height: 400px;
  width: 90%;
  margin: 0 auto;
  background: ${({ theme }) => theme.palette.primary.light};
  box-shadow: 0px 1px 7px 1px rgb(0 0 0 / 14%), 0 3px 3px -2px rgb(0 0 0 / 20%),
    0 1px 8px 0 rgb(0 0 0 / 12%);

  @media (max-width: 1043px) {
    flex-direction: column;
    max-height: unset;
  }
`;

const Latest = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 28px;

  @media (max-width: 980px) {
    padding-bottom: 20px;
  }
`;

const Older = styled.div`
  background: ${({ theme }) => theme.palette.primary.contrastText};
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
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  margin: 17px 0 0;
  color: ${({ theme }) => theme.palette.text.light};
`;

const OlderHeader = styled.p`
  margin: 17px 0 0;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 1.2rem;
`;

const VersionInfo = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const DownloadCount = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Changelogs = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};

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
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 5px 10px;
  border-radius: 3px;
  gap: 10px;

  &:hover {
    background: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;

const ReadMoreContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: -15px;
`;

const StyledButton = styled(Button)<{ disableGradient?: boolean }>`
  padding: 7px 20px;
  border-radius: 5px;
  color: ${({ theme }) => theme.palette.text.light};
  text-decoration: none;
  gap: 10px;

  &:first-of-type {
    color: ${({ theme }) => theme.palette.text.light};
    margin-right: 0;

    &:hover {
      background-position: 100% 50%;
    }

    ${({ disableGradient, theme }) =>
      !disableGradient
        ? `
      margin-right: 15px;
        color: ${theme.palette.text.extremelyLight};
        background: linear-gradient(
          153deg,
          ${theme.palette.secondary.main} 0%,
          ${theme.palette.secondary.light} 100%
        );

        background-size: 400% 400;
        transition: 0.2s ease-in-out;
        `
        : null}
  }

  &:last-of-type {
    &:hover {
      background: ${({ theme }) => theme.palette.primary.contrastText};
    }
  }

  @media (max-width: 535px) {
    &:last-child {
      margin-top: 20px;
    }
  }
`;

const StyledSecondaryButton = styled(Button)<{ disableGradient?: boolean }>`
  padding: 7px 15px;
  border-radius: 5px;
  color: ${({ theme }) => theme.palette.text.light};
  text-decoration: none;
  gap: 10px;

  &:first-of-type {
    color: ${({ theme }) => theme.palette.text.light};
    margin-right: 0;

    &:hover {
      background-position: 100% 50%;
    }

    ${({ disableGradient, theme }) =>
      !disableGradient
        ? `
      margin-right: 15px;
        color: ${theme.palette.text.extremelyLight};
        background: linear-gradient(
          153deg,
          ${theme.palette.secondary.main} 0%,
          ${theme.palette.secondary.light} 100%
        );

        background-size: 400% 400;
        transition: 0.2s ease-in-out;
        `
        : null}
  }

  &:last-of-type {
    &:hover {
      background: ${({ theme }) => theme.palette.primary.light};
    }
  }
`;

const OlderUpdate = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
  margin-bottom: 6px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.text.secondary};

  &:last-child {
    margin-bottom: 0;
    border-bottom: unset;
  }
`;

const OlderUpdateTextWrapper = styled.div`
  flex-grow: 1;
`;

const OlderUpdateTitle = styled.p`
  font-size: 1.15rem;
  margin: 0;
  padding: 0 2rem 0 0;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const ButtonContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const OlderUpdateDate = styled.span`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const OlderBtns = styled.div`
  display: inline-flex;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    row-gap: 1rem;
    justify-content: end;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StyledErrorIcon = styled(ErrorIcon)`
  color: ${({ theme }) => theme.palette.error.light};
  width: 50px;
  height: auto;
  margin-top: 25px;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
  max-width: ch(75);
  margin-bottom: 25px;
`;

const StyledModal = styled(motion(Dialog))``;

const StyledPaper = styled(motion(Paper))`
  border-radius: 8px;
  background: ${({ theme }) => theme.palette.primary.contrastText};
  color: ${({ theme }) => theme.palette.text.light};
  padding: 20px;

  p {
    font-size: 1.05em;
    max-width: 55ch;
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

const DialogButton = styled(Button)<{ disableGradient?: boolean }>`
  padding: 7px 20px;
  border-radius: 5px;
  color: ${({ theme }) => theme.palette.text.light};
  text-decoration: none;
  gap: 10px;

  &:hover {
    background: ${({ theme }) => theme.palette.primary.main};
  }

  &:nth-of-type(2) {
    color: ${({ theme }) => theme.palette.text.light};
    margin-right: 0;

    ${({ disableGradient, theme }) =>
      !disableGradient
        ? `
      margin-right: 15px;
        color: ${theme.palette.text.extremelyLight};
        background: linear-gradient(
          153deg,
          ${theme.palette.secondary.main} 0%,
          ${theme.palette.secondary.light} 100%
        );

        background-size: 400% 400;
        transition: 0.2s ease-in-out;
        `
        : null}
  }
`;

const modalContainerAnimation = {
  initial: {
    opacity: 0,
  },
  isOpen: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const modalAnimation = {
  initial: {
    transform: "scale(0.95)",
  },
  isOpen: {
    transform: "scale(1)",
  },
  exit: {
    transform: "scale(0.95)",
  },
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

interface IDownloadProps {
  showMore?: boolean;
}

const ModalTitle = styled.p``;

const ModalParagraph = styled.p``;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Download = ({ showMore }: IDownloadProps) => {
  const { releases, isError, isLoading } = useGithubReleases();
  const [modalActive, setModalActive] = useState(false);
  const Router = useRouter();

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

  const closeModal = useCallback(() => setModalActive(false), []);
  const openModal = useCallback(() => setModalActive(true), []);

  return (
    <>
      <AnimatePresence>
        {modalActive ? (
          <StyledModal
            initial={modalContainerAnimation.initial}
            animate={modalContainerAnimation.isOpen}
            exit={modalContainerAnimation.exit}
            transition={{ duration: 0.2 }}
            open={modalActive}
            onClose={closeModal}
            PaperComponent={({ children }) => (
              <StyledPaper
                initial={modalAnimation.initial}
                animate={modalAnimation.isOpen}
                exit={modalAnimation.exit}
                transition={{ duration: 0.2 }}
              >
                {children}
              </StyledPaper>
            )}
          >
            <ModalContainer>
              <ModalTitle>Support dahliaOS</ModalTitle>
              <ModalParagraph>
                Donating to dahliaOS will help us cover the expenses and
                furtherly motivate us to continue working on bringing you new
                releases and updates. Click the Donate button below if you would
                like to learn more about donating to dahliaOS!
              </ModalParagraph>
              <DialogActions>
                <DialogButton disableGradient onClick={closeModal}>
                  <CloseIcon /> Close
                </DialogButton>
                <DialogButton
                  disableGradient={false}
                  onClick={() => Router.replace("/donate")}
                  autoFocus
                >
                  <VolunteerActivismIcon />
                  Donate
                </DialogButton>
              </DialogActions>
            </ModalContainer>
          </StyledModal>
        ) : null}
      </AnimatePresence>

      {isError ? (
        <Card isError>
          <ErrorContainer>
            <StyledErrorIcon />
            <ErrorMessage>
              An error occurred whilst fetching GitHub&apos;s API!
            </ErrorMessage>
          </ErrorContainer>
        </Card>
      ) : null}

      {releases?.length ? (
        <>
          <Card>
            <Latest>
              <TextContainer>
                <Header>Latest</Header>
                <VersionInfo>
                  {releases[0].name} ({getDate(releases[0].published_at)})
                  <br />
                  Downloads:{" "}
                  {releases[0].assets[0].download_count +
                    releases[0].assets[1].download_count}
                </VersionInfo>
                <Changelogs>
                  {releases[0].body
                    .substring(releases[0].body.indexOf("+ "))
                    .replace(/(?:\r\n|\r|\n)/g, "\n")}
                </Changelogs>
                <ReadMoreContainer>
                  <StyledLink href={releases[0].html_url} target="_blank">
                    <ReadMoreButton>
                      <TextSnippetIcon />
                      Read more
                    </ReadMoreButton>
                  </StyledLink>
                </ReadMoreContainer>
              </TextContainer>
              <ButtonContainer>
                {releases[0].assets.map(asset => (
                  <StyledButton
                    key={asset.name}
                    href={asset.browser_download_url}
                    onClick={openModal}
                  >
                    <GetApp />
                    {asset.name.includes("efi")
                      ? "Download (EFI)"
                      : "Download (Legacy)"}
                  </StyledButton>
                ))}
              </ButtonContainer>
            </Latest>
            <Older>
              <TextContainer>
                <OlderHeader>Older releases</OlderHeader>
                <UpdateContainer>
                  {releases.map((oldRelease, i) => {
                    if (i === 0 || i > 6) return;

                    return (
                      <OlderUpdate key={i}>
                        <OlderUpdateTextWrapper>
                          <OlderUpdateTitle>{oldRelease.name}</OlderUpdateTitle>
                          <DownloadCount>
                            Downloads:{" "}
                            {oldRelease.assets[0].name.includes("efi")
                              ? oldRelease.assets[0].download_count +
                                oldRelease.assets[1].download_count
                              : oldRelease.assets[0].download_count}
                          </DownloadCount>
                          <OlderUpdateDate>
                            {getDate(oldRelease.published_at)}
                          </OlderUpdateDate>
                        </OlderUpdateTextWrapper>
                        <OlderBtns>
                          {oldRelease.assets.map(asset => (
                            <StyledSecondaryButton
                              key={asset.name}
                              href={asset.browser_download_url}
                              disableGradient={!asset.name.includes("efi")}
                              onClick={openModal}
                            >
                              <GetApp />
                              {asset.name.includes("efi") ? "EFI" : "Legacy"}
                            </StyledSecondaryButton>
                          ))}
                        </OlderBtns>
                      </OlderUpdate>
                    );
                  })}
                </UpdateContainer>
              </TextContainer>
            </Older>
          </Card>
        </>
      ) : isLoading ? (
        <Card>
          <Latest>
            <TextContainer>
              <Header>
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={"25%"}
                  height={50}
                />
              </Header>
              <VersionInfo>
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={"48%"}
                  height={25}
                />
              </VersionInfo>
              <Changelogs>
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={"100%"}
                  height={20}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={"98%"}
                  height={20}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={"95%"}
                  height={20}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={"93%"}
                  height={20}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={"87%"}
                  height={20}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={"85%"}
                  height={20}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={"20%"}
                  height={20}
                />
              </Changelogs>
              <Link target="_blank">
                <ReadMoreButton>
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width={100}
                    height={55}
                  />
                </ReadMoreButton>
              </Link>
            </TextContainer>
            <ButtonContainer>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={"20%"}
                height={35}
                style={{ display: "inline-block" }}
              />
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={"20%"}
                height={35}
                style={{ display: "inline-block", marginLeft: 15 }}
              />
            </ButtonContainer>
          </Latest>
          <Older>
            <TextContainer>
              <OlderHeader>Older updates</OlderHeader>
              <UpdateContainer>
                {[...Array(5)].map((oldRelease, i) => {
                  if (i === 0 || i > 4) return;

                  return (
                    <OlderUpdate key={i}>
                      <OlderUpdateTextWrapper>
                        <OlderUpdateTitle>
                          <Skeleton
                            variant="text"
                            animation="wave"
                            width={"25%"}
                            height={25}
                          />
                        </OlderUpdateTitle>
                        <OlderUpdateDate>
                          <Skeleton
                            variant="text"
                            animation="wave"
                            width={"25%"}
                            height={20}
                          />
                        </OlderUpdateDate>
                      </OlderUpdateTextWrapper>
                      <OlderBtns>
                        <Skeleton
                          variant="rectangular"
                          animation="wave"
                          width={"20%"}
                          height={15}
                          style={{ display: "inline-block" }}
                        />
                        <Skeleton
                          variant="rectangular"
                          animation="wave"
                          width={"20%"}
                          height={15}
                          style={{ display: "inline-block", marginLeft: 15 }}
                        />
                      </OlderBtns>
                    </OlderUpdate>
                  );
                })}
              </UpdateContainer>
            </TextContainer>
          </Older>
        </Card>
      ) : null}
      {/* Will implement soon */}
      {showMore ? null : null}
    </>
  );
};

export default Download;
