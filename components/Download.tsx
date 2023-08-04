import { ErrorRounded as ErrorIcon } from "@mui/icons-material";
import { DialogTitle, Skeleton, DialogContent } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Paper from "@mui/material/Paper";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { useGithubReleases } from "../utils/hooks/useGithubReleases";
import { StyledButton } from "../global/button";
import {
  GetAppRounded as GetApp,
  TextSnippetRounded as TextSnippetIcon,
  VolunteerActivismRounded as VolunteerActivismIcon,
  CloseRounded as CloseIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { alpha } from "@mui/material";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 14px;
  max-width: 1250px;
  max-height: 420px;
  width: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.palette.primary.light};
  border: 1.5px solid ${({ theme }) => alpha(theme.palette.text.primary, 0.2)};

  @media (max-width: 1250px) {
    flex-direction: column;
    max-height: 60rem;
  }
`;

const Latest = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 0 28px;

  @media (max-width: 980px) {
    padding-bottom: 20px;
  }
`;

const OlderList = styled.div`
  flex: 1;
  overflow: auto;

  @media (max-width: 1250px) {
    flex-direction: column;
    max-height: 60rem;
  }

  max-height: 320px;
  margin: 12px 0;
  padding-right: 8px;

  ::-webkit-scrollbar-track {
    margin: 10px 0;
    border-radius: 8px;
  }
`;

const Older = styled.div`
  background: ${({ theme }) => theme.palette.primary.light};
  border: 1.5px solid ${({ theme }) => alpha(theme.palette.text.primary, 0.2)};
  border-radius: 12px;
  padding: 0 16px;
  margin: 8px;
`;

const TextContainer = styled.div`
  position: relative;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  margin: 17px 0 0;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const OlderHeader = styled.p`
  margin: 16px 0 0;
  text-align: left;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1.3rem;
  font-weight: 500;
`;

const VersionInfo = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1.2rem;
  font-weight: 500;
`;

const Changelogs = styled.text`
  color: ${({ theme }) => theme.palette.text.primary};

  white-space: pre-line;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const UpdateContainer = styled.div`
  padding: 8px 0 0;
`;

const ChangelogContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  right: 0;
  bottom: 0;
  padding-top: 16px;
`;

const OlderUpdate = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
    border-bottom: unset;
  }
`;

const OlderUpdateTextWrapper = styled.div`
  flex-grow: 1;
  gap: 0.15rem;
  display: flex;
  flex-direction: column;
`;

const DownloadTitle = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 0 2rem 0 0;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.primary};

  &:hover {
    color: ${({ theme }) => theme.palette.text.light};
  }

  @media (max-width: 1250px) {
    font-size: 1rem;
  }
`;

const DownloadSubtitle = styled.p`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 15px;

  @media (max-width: 1250px) {
    font-size: 0.9rem;
  }
`;

const ButtonContainer = styled.div<{ isOlderRelease?: boolean }>`
  display: flex;
  flex-direction: row;
  column-gap: 1.2rem;
  row-gap: 0.8rem;

  ${({ isOlderRelease }) =>
    isOlderRelease
      ? `justify-content: end;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }`
      : `margin-bottom: 1.5rem;
      flex-wrap: wrap;
      @media (max-width: 1100px) {
    align-items: unset;
    justify-content: unset;
  }`};
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
  gap: 1rem;
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
  background: ${({ theme }) => theme.palette.primary.light};
  padding: 10px 20px 20px 10px;
  max-width: 85%;
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

const ModalTitle = styled(DialogTitle)`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.palette.text.light};
`;

const ModalParagraph = styled(DialogContent)`
  font-size: 1.1rem;
  max-width: 55ch;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Download = () => {
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
            <ModalTitle>Support dahliaOS</ModalTitle>
            <ModalParagraph>
              Donating to dahliaOS will help us cover the expenses and furtherly
              motivate us to continue working on bringing you new releases and
              updates. Click the Donate button below if you would like to learn
              more about donating to dahliaOS!
            </ModalParagraph>
            <DialogActions>
              <StyledButton isSecondary onClick={closeModal}>
                <CloseIcon /> Close
              </StyledButton>
              <StyledButton onClick={() => Router.replace("/donate")} autoFocus>
                <VolunteerActivismIcon />
                Donate
              </StyledButton>
            </DialogActions>
          </StyledModal>
        ) : null}
      </AnimatePresence>

      {isError ? (
        <Card>
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
                <VersionInfo>{releases[0].name}</VersionInfo>
                <Changelogs>
                  {releases[0].body
                    .substring(releases[0].body.indexOf("+ "))
                    .replace(/(?:\r\n|\r|\n)/g, "\n")
                    .replace(/.*/, "")
                    .substring(1)}
                </Changelogs>
                <ChangelogContainer>
                  <StyledButton disabled isDownloadTag>
                    Version {releases[0].tag_name.split("-")[0]} •{" "}
                    {getDate(releases[0].published_at)}
                  </StyledButton>
                  <StyledButton disabled isDownloadTag>
                    {releases[0].assets[0].download_count +
                      releases[0].assets[1].download_count}{" "}
                    Downloads
                  </StyledButton>
                  <StyledLink href={releases[0].html_url} target="_blank">
                    <StyledButton isSecondary>
                      <TextSnippetIcon />
                      Changelog
                    </StyledButton>
                  </StyledLink>
                </ChangelogContainer>
              </TextContainer>
              <ButtonContainer>
                {releases[0].assets.map(asset => (
                  <StyledButton
                    key={asset.name}
                    href={asset.browser_download_url}
                    onClick={openModal}
                    isSecondary={!asset.name.includes("efi")}
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
              <OlderHeader>Previous releases</OlderHeader>
              <OlderList>
                <TextContainer>
                  <UpdateContainer>
                    {releases.map((oldRelease, i) => {
                      if (i === 0) return;
                      return (
                        <OlderUpdate key={i}>
                          <OlderUpdateTextWrapper>
                            <StyledLink
                              href={oldRelease.html_url}
                              target="_blank"
                            >
                              <DownloadTitle>{oldRelease.name}</DownloadTitle>
                            </StyledLink>
                            <DownloadSubtitle>
                              {getDate(oldRelease.published_at)} ꞏ{" "}
                              {oldRelease.assets[0].name.includes("efi")
                                ? oldRelease.assets[0].download_count +
                                  oldRelease.assets[1].download_count
                                : oldRelease.assets[0].download_count}{" "}
                              Downloads
                            </DownloadSubtitle>
                          </OlderUpdateTextWrapper>
                          <ButtonContainer isOlderRelease>
                            {oldRelease.assets.map(asset => (
                              <StyledButton
                                key={asset.name}
                                href={asset.browser_download_url}
                                isSecondary={!asset.name.includes("efi")}
                                onClick={openModal}
                              >
                                <GetApp />
                                {asset.name.includes("efi") ? "EFI" : "Legacy"}
                              </StyledButton>
                            ))}
                          </ButtonContainer>
                        </OlderUpdate>
                      );
                    })}
                  </UpdateContainer>
                </TextContainer>
              </OlderList>
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
              <Link href="" target="_blank">
                <StyledButton isSecondary>
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width={100}
                    height={55}
                  />
                </StyledButton>
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
              <OlderHeader>Previous releases</OlderHeader>
              <UpdateContainer>
                {[...Array(5)].map(i => {
                  if (i === 0) return;
                  return (
                    <OlderUpdate key={i}>
                      <OlderUpdateTextWrapper>
                        <DownloadTitle>
                          <Skeleton
                            variant="text"
                            animation="wave"
                            width={"25%"}
                            height={25}
                          />
                        </DownloadTitle>
                        <DownloadSubtitle>
                          <Skeleton
                            variant="text"
                            animation="wave"
                            width={"25%"}
                            height={20}
                          />
                        </DownloadSubtitle>
                      </OlderUpdateTextWrapper>
                      <ButtonContainer>
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
                      </ButtonContainer>
                    </OlderUpdate>
                  );
                })}
              </UpdateContainer>
            </TextContainer>
          </Older>
        </Card>
      ) : null}
    </>
  );
};

export default Download;
