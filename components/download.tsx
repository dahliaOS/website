import React, { useState } from "react";
import { Theme, makeStyles, Button, Typography, Link } from "@material-ui/core";
import { Info as InfoIcon, ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { Skeleton, Alert } from "@material-ui/lab";
import { useDownloads } from "@/hooks/useDownloads";
import { Assets, DownloadProps } from "../types";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 13,
    maxWidth: 950,
    width: "90%",
    margin: "0 auto",
    background: theme.palette.secondary.light,
    boxShadow: theme.shadows[7],
  },
  latest: {
    flex: 1.2,
    padding: "0 28px",
  },
  text: {
    position: "relative",
    paddingBottom: 45,
  },
  title: {
    margin: "17px 0 0",
  },
  version: {
    display: "block",
    margin: "0 0 20px",
    color: theme.palette.text.secondary,
  },
  cardLink: {},
  readMore: {
    "position": "absolute!important" as any,
    "right": 0,
    "bottom": 0,
    "color": theme.palette.grey[600],
    "transition": `${theme.transitions.easing.easeInOut} 0.229s`,
    "padding": "5px 10px",
    "borderRadius": 3,

    "&:hover": {
      color: theme.palette.grey[400],
    },
  },
  btnContainer: {
    marginBottom: 20,
  },
  downloadBtns: {
    "padding": "6px 12px",
    "borderRadius": 5,
    "&:first-child": {
      background: `linear-gradient(153deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%)`,
      backgroundSize: "400% 400%",
      transition: `.2s ${theme.transitions.easing.easeInOut}`,
      marginRight: 15,
    },
    "&:hover": {
      backgroundPosition: "100% 50%",
    },
  },
  paragraph: {
    "whiteSpace": "pre-line",
    "textOverflow": "ellipsis",
    "display": "box",
    "lineClamp": 8,
    "-webkit-box-orient": "vertical",
    "overflow": "hidden",
  },
  oldUpdates: {
    background: "#1f1f1f",
    borderRadius: 13,
    padding: "0 16px",
    flex: 1,
    boxShadow: theme.shadows[3],
  },
  center: {
    textAlign: "center",
  },
  space: {
    display: "block",
    paddingTop: 5,
  },
}));

export const Download = ({ more }: DownloadProps): JSX.Element => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const { release, isError, isLoading } = useDownloads();

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <div>
      {isError && <Alert severity="error">An error occurred whilst fetching GitHub&apos;s API!</Alert>}

      {release ? (
        <div className={classes.card}>
          <div className={classes.latest}>
            <div className={classes.text}>
              <h1 className={classes.title}>Latest</h1>
              <span className={classes.version}>{release[0].name}</span>
              <Typography className={classes.paragraph}>
                {release[0].body.substring(release[0].body.indexOf("+ ")).replace(/(?:\r\n|\r|\n)/g, "\n")}
              </Typography>
              <Link href={release[0].html_url} target="_blank">
                <Button className={classes.readMore}>Read more</Button>
              </Link>
            </div>
            <div className={classes.btnContainer}>
              {release[0].assets.map((asset: Assets) => {
                return (
                  <Button
                    key={asset.name}
                    href={asset.browser_download_url}
                    className={classes.downloadBtns}
                    onClick={openModal}
                  >
                    {asset.name.includes("efi") ? "Download (EFI)" : "Download (Legacy)"}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className={classes.oldUpdates}>
            <div className={classes.text}>
              <h1 className={`${classes.title} ${classes.center}`}>Older updates</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.card}>
          <div className={classes.latest}>
            <div className={classes.text}>
              <h1 className={classes.title}>
                <Skeleton variant="rect" animation="wave" width={"23%"} height={25} />
              </h1>
              <div className={classes.space} />
              <span className={classes.version}>
                <Skeleton variant="rect" animation="wave" width={"35%"} height={15} />
              </span>
              <div className={classes.space} />
              <Skeleton variant="rect" animation="wave" width={"100%"} height={15} />
              <div className={classes.space} />
              <Skeleton variant="rect" animation="wave" width={"98%"} height={15} />
              <div className={classes.space} />
              <Skeleton variant="rect" animation="wave" width={"95%"} height={15} />
              <div className={classes.space} />
              <Skeleton variant="rect" animation="wave" width={"93%"} height={15} />
              <div className={classes.space} />
              <Skeleton variant="rect" animation="wave" width={"87%"} height={15} />
              <div className={classes.space} />
              <Skeleton variant="rect" animation="wave" width={"85%"} height={15} />
              <div className={classes.space} />
              <Skeleton variant="rect" animation="wave" width={"20%"} height={15} />
              <div className={classes.space} />
              <Link href="" target="_blank">
                <Button className={classes.readMore}>
                  <Skeleton variant="rect" animation="wave" width={"80px"} height={"28px"} />
                </Button>
              </Link>
            </div>
            <div className={classes.btnContainer}>
              <Button className={classes.downloadBtns}>
                <Skeleton variant="rect" animation="wave" width={"80px"} height={"25px"} />
              </Button>
              <Button className={classes.downloadBtns}>
                <Skeleton variant="rect" animation="wave" width={"90px"} height={"30px"} />
              </Button>
            </div>
          </div>
          <div className={classes.oldUpdates}>
            <div className={classes.text}>
              <h1 className={`${classes.title} ${classes.center}`}>Older updates</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
