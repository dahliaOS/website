import { makeStyles, Theme } from "@material-ui/core";

interface indexProps {
  isLightMode: boolean;
}

export const indexPage = makeStyles<Theme, indexProps>((theme: Theme) => ({
  half: {
    position: "relative",
    display: "flex",
    minHeight: "80vh",
    maxWidth: "100vw",
    alignItems: "center",
  },
  home: {
    alignItems: "center",
    marginTop: "-60px",
  },
  homeHeader: {
    fontSize: "3.5em",
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: "Sulphur Point, sans-serif",
    display: "block",
    marginTop: 10,
    marginBottom: 5,
  },
  homeParagraph: {
    display: "block",
    fontSize: "1.8em",
    fontWeight: theme.typography.fontWeightLight,
    maxWidth: "50ch",
    marginTop: 0,
  },
  typography: {
    flex: "50%",
    paddingLeft: 50,
  },
  left: {
    flex: "50%",
  },
  right: {
    flex: "50%",
  },
  homeHero: {
    flex: "50%",
  },
  heroImg: {
    width: "100%",
  },
  topicBtns: {
    display: "inline-block",
    margin: "15px 0 0 50px",
  },
  btnContainer: {
    display: "inline-block",
  },
  gradientBtn: {
    "padding": "8px 12px",
    "borderRadius": 5,
    "&:first-child": {
      background: `linear-gradient(153deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%)`,
      backgroundSize: "400% 400%",
      transition: `.2s ${theme.transitions.easing.easeInOut}`,
      marginRight: 15,
    },
    "&:nth-child(2)": {
      border: `${theme.palette.secondary.light} solid 2px`,
    },
    "&:hover": {
      backgroundPosition: "100% 50%",
    },
  },
  sectionTitle: {
    textAlign: "center",
    fontFamily: "Sulphur Point, sans-serif",
    fontSize: "2.8em",
    fontWeight: theme.typography.fontWeightMedium,
  },
  wave: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  alignLeft: {
    textAlign: "left",
    paddingLeft: 50,
  },
  sectionParagraph: {
    paddingLeft: 50,
    fontWeight: theme.typography.fontWeightLight,
    fontSize: "1.3em",
    maxWidth: "75ch",
  },
  moreUpdates: {
    "display": "block",
    "textAlign": "center",
    "marginBottom": 50,
    "& *": {
      verticalAlign: "middle",
      textAlign: "center",
      fontSize: "1.25em",
      display: "inline-block",
      marginLeft: 10,
    },
  },
  centerMore: {
    "color": theme.palette.grey[600],
    "transition": `${theme.transitions.easing.easeInOut} 0.229s`,
    "&:hover": {
      color: theme.palette.grey[300],
      textDecoration: "unset",
    },
  },
  imgRight: {
    "marginLeft": "37px!important",
    "borderRadius": "0px!important",
    "borderTopLeftRadius": "14px!important",
    "borderBottomLeftRadius": "14px!important",
    "justifyContent": "flex-end",
    "& img": {
      marginRight: "44px!important",
      right: "0!important",
      left: 0,
    },
  },
  roundedBox: ({ isLightMode }) => ({
    "borderRadius": 14,
    "borderTopLeftRadius": 0,
    "borderBottomLeftRadius": 0,
    "display": "flex",
    "marginLeft": -60,
    "alignItems": "center",
    "justifyItems": "start",
    "maxWidth": "100%",
    "padding": "30px 0",
    "backgroundImage": `url(${
      isLightMode ? "/img/lightModeBackground.svg) !important" : "/img/darkModeBackground.svg)"
    }`,
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center",
    "boxShadow": theme.shadows[10],
    "& *": {
      maxWidth: "100%",
      marginBottom: "-6px",
    },
    "& img": {
      position: "relative",
      width: "100%",
    },
  }),
}));
