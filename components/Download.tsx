import ErrorIcon from "@mui/icons-material/Error";
import { Button, DialogTitle, Skeleton, DialogContent } from "@mui/material";
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
import Link from "next/link";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 14px;
  max-width: 1250px;
  max-height: 420px;
  width: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.palette.primary.light};
  box-shadow: 0px 1px 7px 1px rgb(0 0 0 / 14%), 0 3px 3px -2px rgb(0 0 0 / 20%),
    0 1px 8px 0 rgb(0 0 0 / 12%);

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
  font-size: 1.3rem;
`;

const VersionInfo = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const DownloadCountOlder = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};

  @media (max-width: 1250px) {
    font-size: 0.9rem;
  }
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

const ChangelogContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: -15px;
`;

const StyledButton = styled(Button)<{
  isSecondary?: boolean;
  isOlderRelease?: boolean;
  isDialogAction?: boolean;
}>`
  padding: 8px 15px;
  border-radius: 5px;
  gap: 10px;
  width: fit-content;
  height: fit-content;
  transition: 0.2s ease-in-out;

  ${({ isSecondary, theme }) =>
    isSecondary
      ? `
    color: ${theme.palette.text.primary};

    &:hover {
      background: ${theme.palette.primary.contrastText};
    }`
      : `color: ${theme.palette.text.extremelyLight};
    background: ${theme.palette.secondary.light};

    &:hover {
      background: ${theme.palette.secondary.main};
    }`};

  ${({ isOlderRelease, theme }) =>
    isOlderRelease
      ? `
    &:hover {
      background: ${theme.palette.primary.light};
    }`
      : null};

  ${({ isDialogAction, theme }) =>
    isDialogAction
      ? `margin-right: 1rem;
    &:hover {
      background: ${theme.palette.primary.light};
    }`
      : null};
`;

const OlderUpdate = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 6px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.text.secondary};

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

const OlderUpdateTitle = styled.p`
  font-size: 1.15rem;
  margin: 0;
  padding: 0 2rem 0 0;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.text.primary};

  &:hover {
    color: ${({ theme }) => theme.palette.text.light};
  }

  @media (max-width: 1250px) {
    font-size: 1rem;
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

const OlderUpdateDate = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 1rem;

  @media (max-width: 1250px) {
    font-size: 0.9rem;
  }
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
  background: ${({ theme }) => theme.palette.primary.contrastText};
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

const DownloadCount = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
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
              <StyledButton isSecondary isDialogAction onClick={closeModal}>
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
                <VersionInfo>
                  {releases[0].name} ({getDate(releases[0].published_at)})
                  <DownloadCount>
                    Downloads:{" "}
                    {releases[0].assets[0].download_count +
                      releases[0].assets[1].download_count}
                  </DownloadCount>
                </VersionInfo>
                <Changelogs>
                  {releases[0].body
                    .substring(releases[0].body.indexOf("+ "))
                    .replace(/(?:\r\n|\r|\n)/g, "\n")}
                </Changelogs>
                <ChangelogContainer>
                  <StyledLink href={releases[0].html_url} target="_blank">
                    <StyledButton isSecondary>
                      <TextSnippetIcon />
                      Full changelog
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
              <TextContainer>
                <OlderHeader>Older releases</OlderHeader>
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
                            <OlderUpdateTitle>
                              {oldRelease.name}
                            </OlderUpdateTitle>
                          </StyledLink>
                          <DownloadCountOlder>
                            Downloads:{" "}
                            {oldRelease.assets[0].name.includes("efi")
                              ? oldRelease.assets[0].download_count +
                                oldRelease.assets[1].download_count
                              : oldRelease.assets[0].download_count}
                          </DownloadCountOlder>
                          <OlderUpdateDate>
                            {getDate(oldRelease.published_at)}
                          </OlderUpdateDate>
                        </OlderUpdateTextWrapper>
                        <ButtonContainer isOlderRelease>
                          {oldRelease.assets.map(asset => (
                            <StyledButton
                              key={asset.name}
                              href={asset.browser_download_url}
                              isSecondary={!asset.name.includes("efi")}
                              isOlderRelease={!asset.name.includes("efi")}
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
              <OlderHeader>Older releases</OlderHeader>
              <UpdateContainer>
                {[...Array(5)].map((oldRelease, i) => {
                  if (i === 0) return;
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
