import React from "react";
import { makeStyles, Theme, useMediaQuery } from "@material-ui/core";

interface IntroProps {
  backgroundScale: number;
  hardwareScale: number;
  terminalTransform: string;
  calculatorTransform: string;
  notepadTransform: string;
  isDarkMode: boolean;
}

export const styles = makeStyles<Theme, IntroProps>((theme: Theme) => ({
  "hero": {
    zIndex: 1,
    position: "relative",
    maxWidth: "100vw",
    overflowX: "hidden",
  },
  "logoContainer": {
    position: "absolute",
    zIndex: 1,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "$scaleLogo 1.9s cubic-bezier(0.66, 0, 0.2, 1) 0.433s forwards",
  },
  "logo": {
    filter: "brightness(0) invert(1)",
  },
  "hardwareContainer": {
    position: "relative",
    display: "flex",
    minHeight: "100vh",
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  "hardware": ({ hardwareScale }) => ({
    margin: 50,
    zIndex: 1,
    transform: `scale(${hardwareScale})`,
    height: "auto",
    width: 1280,
    animation: "$scaleHardware 2.2s cubic-bezier(0.66, 0, 0.2, 1) 0.133s forwards",
  }),
  "background": ({ backgroundScale, isDarkMode }) => ({
    position: "absolute",
    width: 1314,
    zIndex: 0,
    transform: `scale(${backgroundScale})`,
    height: "calc(100% + 1px)",
    bottom: -7,
    backgroundImage: `url(${isDarkMode ? "/img/darkModeBackground.svg)!important" : "/img/lightModeBackground.svg)"}`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 1314,
    backgroundPosition: "center",
    animation: "$scaleBackground 2.2s cubic-bezier(0.66, 0, 0.2, 1) 0.133s forwards",
  }),
  "terminal": ({ terminalTransform }) => ({
    position: "absolute",
    height: 323,
    width: 571,
    zIndex: 1,
    transform: terminalTransform,
    background: "url(/img/terminal.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    animation: "$animateTerminal 2.2s cubic-bezier(0.66, 0, 0.2, 1) 0.133s forwards",
    animationDelay: "0.3s",
  }),
  "notepad": ({ notepadTransform }) => ({
    position: "absolute",
    height: 356,
    width: 557,
    zIndex: 2,
    transform: notepadTransform,
    background: "url(/img/textEditor.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    animation: "$animateNotepad 1.8s cubic-bezier(0.66, 0, 0.2, 1) 0.133s forwards",
    animationDelay: "0.5s",
  }),
  "calculator": ({ calculatorTransform }) => ({
    position: "absolute",
    height: 296,
    width: 305,
    zIndex: 3,
    transform: calculatorTransform,
    background: "url(/img/calculator.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    animation: "$animateCalculator 1.8s cubic-bezier(0.66, 0, 0.2, 1) 0.133s forwards",
    animationDelay: "0.6s",
  }),
  "toolbar": ({ isDarkMode }) => ({
    position: "absolute",
    height: "100%",
    width: 1011,
    zIndex: 0,
    backgroundImage: `url(${isDarkMode ? "/img/darkToolbar.svg) !important" : "/img/lightToolbar.svg)"}`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    transform: "translateY(312px)",
    animation: "$animateToolbar 1s cubic-bezier(0.66, 0, 0.2, 1) 0.133s forwards",
    opacity: 0,
    animationDelay: "1.85s",
  }),

  /* Animations */
  "@keyframes scaleHardware": {
    "0%": {
      transform: ({ hardwareScale }) => `scale(${hardwareScale})`,
    },
    "100%": {
      transform: ({ hardwareScale }) => "scale(1)",
    },
  },
  "@keyframes scaleLogo": {
    "0%": {
      transform: "scale(1)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(0)",
      opacity: 0,
    },
  },
  "@keyframes scaleBackground": {
    "0%": {
      transform: ({ backgroundScale }) => `scale(${backgroundScale})`,
    },
    "100%": {
      transform: ({ backgroundScale }) => "scale(0.766)",
    },
  },
  "@keyframes animateTerminal": {
    "0%": {
      transform: ({ terminalTransform }) => terminalTransform,
    },
    "100%": {
      transform: ({ terminalTransform }) => "translate3d(-143px, -81px, 0) scale(1)",
    },
  },
  "@keyframes animateNotepad": {
    "0%": {
      transform: ({ notepadTransform }) => notepadTransform,
    },
    "100%": {
      transform: ({ notepadTransform }) => "translate3d(190px, 20px, 0) scale(1)",
    },
  },
  "@keyframes animateCalculator": {
    "0%": {
      transform: ({ calculatorTransform }) => calculatorTransform,
    },
    "100%": {
      transform: ({ calculatorTransform }) => "translate3d(-253px, 104px, 0) scale(1)",
    },
  },
  "@keyframes animateToolbar": {
    "0%": {
      transform: ({ isDarkMode }) => "translateY(312px)",
      opacity: ({ isDarkMode }) => 0,
    },
    "100%": {
      transform: ({ isDarkMode }) => "translateY(281px)",
      opacity: ({ isDarkMode }) => 1,
    },
  },
}));

export const Intro = (): JSX.Element => {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)", { noSsr: true });
  console.log("BRUH", isDarkMode);
  const props: IntroProps = {
    backgroundScale: 2.4,
    hardwareScale: 3,
    terminalTransform: "translate3d(-400px, -250vh, 0) scale(2.2)",
    calculatorTransform: "translate3d(-150vw, -178%, 0) scale(2.8)",
    notepadTransform: "translate3d(200vw, 22%, 0) scale(2.5)",
    isDarkMode,
  };

  if (useMediaQuery("(max-height:300px)")) props["terminalTransform"] = "translate3d(-400px, -400vh, 0) scale(2.2)";

  if (useMediaQuery("(min-height: 1800px), (min-width: 2680px)")) {
    (props["backgroundScale"] = 4), (props["hardwareScale"] = 4.95);
  }

  const classes = styles(props);

  return (
    <div className={classes.hero}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src="/img/logo-color.png" />
      </div>
      <div className={classes.hardwareContainer}>
        <img className={classes.hardware} src="https://ucarecdn.com/076c51ad-faeb-4131-84fe-2a3d26ab4681/" />
        <div className={classes.background}></div>
        <div className={classes.terminal}></div>
        <div className={classes.notepad}></div>
        <div className={classes.calculator}></div>
        <div className={classes.toolbar}></div>
      </div>
    </div>
  );
};
