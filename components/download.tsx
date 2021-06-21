import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Link,
  Divider,
  Theme,
  makeStyles,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Skeleton, Alert } from "@material-ui/lab";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 400,
    margin: "0 auto",
    background: theme.palette.secondary.light,
    boxShadow: theme.shadows[10],
    marginBottom: 40,
    borderRadius: 8,
  },
  title: {
    position: "relative",
    textAlign: "center",
  },
  cardTitle: {
    display: "inline-block",
    textAlign: "center",
    fontSize: "2em",
  },
  infoIcon: {
    display: "inline-block",
    position: "absolute",
    cursor: "pointer",
    fontSize: "2em",
    right: 10,
    top: 7,
  },
  cardInfo: {
    fontSize: "1em",
    whiteSpace: "pre-line",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 7,
    "-webkit-box-orient": "vertical",
    paddingBottom: 2,
    overflow: "hidden",
  },
  cardLink: {
    display: "block",
    position: "relative",
  },
  cardMore: {
    right: 0,
    color: theme.palette.grey[600],
    position: "absolute",
    transition: `${theme.transitions.easing.easeInOut} 0.229s`,

    "&:hover": {
      color: theme.palette.grey[400],
    },
  },
  btns: {
    display: "block",
    textAlign: "center",
  },
  divider: {
    marginTop: 32,
  },
  downloadBtn: {
    color: theme.palette.primary.light,
    border: `${theme.palette.secondary.light} solid 2px`,
  },
  space: {
    display: "block",
    paddingTop: 5,
  },
  dialog: {
    maxWidth: 450,
    background: theme.palette.secondary.light,
  },
  gradientBtn: {
    padding: "5px 12px",
    borderRadius: 5,
    background: `linear-gradient(153deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%)`,
  },
  accordionContainer: {
    maxWidth: 400,
    margin: "0 auto",
  },
  accordion: {
    background: theme.palette.secondary.light,
    boxShadow: theme.shadows[9],
  },
  accordionHeader: {
    fontSize: "1.5em",
  },
  accordionDetails: {
    display: "block",
  },
  divideAccordion: {
    marginTop: 30,
  },
  accordionInfo: {
    fontSize: "1em",
    whiteSpace: "pre-line",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 4,
    "-webkit-box-orient": "vertical",
    paddingBottom: 2,
    overflow: "hidden",
  },
  accordionActions: {
    display: "block",
    textAlign: "center",
  },
  olderUpdatesTitle: {
    textAlign: "center",
    fontWeight: theme.typography.fontWeightLight,
  },
}));
interface Releases {
  [index: number]: Release;
}
interface Release {
  name: string;
  tag_name: string;
  body: string;
  assets: [
    {
      download_count: number;
      name: string;
      browser_download_url: string;
    }
  ];
  assets_url: string;
  html_url: string;
  created_at: string;
}

export const Download = (props: any) => {
  const classes = useStyles();
  const [release, setRelease] = useState<Releases | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  useEffect(() => {
    void fetch("https://api.github.com/repos/dahliaOS/releases/releases")
      .then(async (res) => {
        const releases = await res.json();

        if (res.status >= 400) throw new Error(releases);

        return releases as Releases;
      })
      .then(setRelease)
      .catch(setError);
  }, []);

  return (
    <div>
      <Card className={classes.root}>
        {error ? (
          <Alert severity='error'>
            An error occurred whilst fetching GitHub's API!
          </Alert>
        ) : (
          <div>
            <Dialog
              classes={{ paper: classes.dialog }}
              open={modal}
              onClose={closeModal}
            >
              <DialogTitle>Support dahliaOS</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Donating to dahliaOS will help us purchase devices for testing
                  and cover web hosting fees, so we can continue work on our
                  amazing software!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeModal}>No thanks</Button>
                <Button className={classes.gradientBtn} onClick={closeModal}>
                  Donate
                </Button>
              </DialogActions>
            </Dialog>
            <CardContent>
              <div className={classes.title}>
                <Typography className={classes.cardTitle}>Latest</Typography>
                <Tooltip title={release ? release[0].name : "Loading..."}>
                  <InfoIcon className={classes.infoIcon} />
                </Tooltip>
              </div>
              {release ? (
                <div>
                  <span>Whats new:</span>
                  <div className={classes.space} />
                  <div className={classes.space} />
                  <Typography className={classes.cardInfo}>
                    {/* This long regex basically takes '+ ' and slices it and puts a
                new line on it */}
                    {release[0].body
                      .substring(release[0].body.indexOf("+ "))
                      .replace(/(?:\r\n|\r|\n)/g, "\n")}
                  </Typography>
                </div>
              ) : (
                <div>
                  <Skeleton
                    variant='rect'
                    animation='wave'
                    width={"15%"}
                    height={15}
                  />
                  <div className={classes.space} />
                  <Skeleton
                    variant='rect'
                    animation='wave'
                    width={"100%"}
                    height={15}
                  />
                  <div className={classes.space} />
                  <Skeleton
                    variant='rect'
                    animation='wave'
                    width={"98%"}
                    height={15}
                  />
                  <div className={classes.space} />
                  <Skeleton
                    variant='rect'
                    animation='wave'
                    width={"95%"}
                    height={15}
                  />
                  <div className={classes.space} />
                  <Skeleton
                    variant='rect'
                    animation='wave'
                    width={"85%"}
                    height={15}
                  />
                  <div className={classes.space} />
                  <Skeleton
                    variant='rect'
                    animation='wave'
                    width={"20%"}
                    height={15}
                  />
                  <div className={classes.space} />
                </div>
              )}
              <div className={classes.space} />
              {release ? (
                <Link
                  href={release[0].html_url}
                  target='_blank'
                  className={classes.cardLink}
                >
                  <Button className={classes.cardMore}>Read more</Button>
                </Link>
              ) : (
                <Link href='' className={classes.cardLink}>
                  <Button className={classes.cardMore}>
                    <Skeleton
                      variant='rect'
                      animation='wave'
                      width={"60px"}
                      height={"25px"}
                    />
                  </Button>
                </Link>
              )}
            </CardContent>
            <Divider className={classes.divider} />
            <CardActions className={classes.btns}>
              {release ? (
                <div>
                  {release[0].assets.map((asset) => (
                    <Button
                      key={asset.name}
                      href={asset.browser_download_url}
                      className={classes.downloadBtn}
                      onClick={openModal}
                    >
                      {asset.name.includes("efi")
                        ? "Download (EFI)"
                        : "Download (Legacy)"}
                    </Button>
                  ))}
                </div>
              ) : (
                <div>
                  <Button className={classes.downloadBtn}>
                    <Skeleton
                      variant='rect'
                      animation='wave'
                      width={"90px"}
                      height={"25px"}
                    />
                  </Button>
                  <Button className={classes.downloadBtn}>
                    <Skeleton
                      variant='rect'
                      animation='wave'
                      width={"90px"}
                      height={"25px"}
                    />
                  </Button>
                </div>
              )}
            </CardActions>
          </div>
        )}
      </Card>
      {props.more ? (
        <div className={classes.accordionContainer}>
          <h1 className={classes.olderUpdatesTitle}>Older updates</h1>
          {release ? (
            <div>
              {/* @ts-expect-error thinks map doesn't exist on release */}
              {release.map((oldRelease: Release, i: number) => {
                if (i === 0 || i > 10) return;

                return (
                  <Accordion key={i} className={classes.accordion}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.accordionHeader}>
                        {oldRelease.tag_name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                      <div>
                        <span>Whats new:</span>
                        <div className={classes.space} />
                        <div className={classes.space} />
                        <Typography className={classes.accordionInfo}>
                          {/* This long regex basically takes '+ ' and slices it and puts a
                new line on it */}
                          {oldRelease.body
                            .substring(oldRelease.body.indexOf("+ "))
                            .replace(/(?:\r\n|\r|\n)/g, "\n")}
                        </Typography>
                      </div>
                      <Link
                        href={oldRelease.html_url}
                        className={classes.cardLink}
                        target='_blank'
                      >
                        <Button className={classes.cardMore}>Read more</Button>
                      </Link>
                    </AccordionDetails>
                    <Divider className={classes.divideAccordion} />
                    <AccordionActions className={classes.accordionActions}>
                      {oldRelease.assets.map((asset) => (
                        <Button
                          key={asset.name}
                          href={asset.browser_download_url}
                          className={classes.downloadBtn}
                          onClick={openModal}
                        >
                          {asset.name.includes("efi")
                            ? "Download (EFI)"
                            : "Download (Legacy)"}
                        </Button>
                      ))}
                    </AccordionActions>
                  </Accordion>
                );
              })}
            </div>
          ) : (
            <div>
              {[...Array(10)].map((e, i) => (
                <Accordion key={i} className={classes.accordion}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.accordionHeader}>
                      <Skeleton
                        variant='rect'
                        animation='wave'
                        width={130}
                        height={30}
                      />
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <div>
                      <Skeleton
                        variant='rect'
                        animation='wave'
                        width={"100%"}
                        height={15}
                      />
                      <div className={classes.space} />
                      <Skeleton
                        variant='rect'
                        animation='wave'
                        width={"100%"}
                        height={15}
                      />
                      <div className={classes.space} />
                      <Skeleton
                        variant='rect'
                        animation='wave'
                        width={"98%"}
                        height={15}
                      />
                      <div className={classes.space} />
                      <Skeleton
                        variant='rect'
                        animation='wave'
                        width={"95%"}
                        height={15}
                      />
                      <div className={classes.space} />
                      <Skeleton
                        variant='rect'
                        animation='wave'
                        width={"85%"}
                        height={15}
                      />
                      <div className={classes.space} />
                      <Skeleton
                        variant='rect'
                        animation='wave'
                        width={"20%"}
                        height={15}
                      />
                      <div className={classes.space} />
                    </div>
                    <Link href='' className={classes.cardLink}>
                      <Button className={classes.cardMore}>
                        <Skeleton
                          variant='rect'
                          animation='wave'
                          width={"60px"}
                          height={"25px"}
                        />
                      </Button>
                    </Link>
                  </AccordionDetails>
                  <Divider className={classes.divideAccordion} />
                  <AccordionActions className={classes.accordionActions}>
                    <div>
                      <Button className={classes.downloadBtn}>
                        <Skeleton
                          variant='rect'
                          animation='wave'
                          width={"90px"}
                          height={"25px"}
                        />
                      </Button>
                      <Button className={classes.downloadBtn}>
                        <Skeleton
                          variant='rect'
                          animation='wave'
                          width={"90px"}
                          height={"25px"}
                        />
                      </Button>
                    </div>
                  </AccordionActions>
                </Accordion>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};
