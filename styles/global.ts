import { css } from "@emotion/core"

export const GlobalStyle = css`
  /* KBPlanet font */
  @font-face {
    font-family: "KBPlanetEarth";
    src: url("/fonts/KBPlanetEarth.ttf") format("truetype");
    font-weight: 400;
  }

  /* Mitr fonts */
  @font-face {
    font-family: "Mitr";
    src: url("/fonts/Mitr-Light.ttf") format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: "Mitr";
    src: url("/fonts/Mitr-Regular.ttf") format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: "Mitr";
    src: url("/fonts/Mitr-Medium.ttf") format("truetype");
    font-weight: 500;
  }

  /* SukhumvitSet fonts */
  @font-face {
    font-family: "SukhumvitSet";
    src: url("/fonts/SukhumvitSet-Light.ttf") format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: "SukhumvitSet";
    src: url("/fonts/SukhumvitSet-Medium.ttf") format("truetype");
    font-weight: 500;
  }

  @font-face {
    font-family: "SukhumvitSet";
    src: url("/fonts/SukhumvitSet-SemiBold.ttf") format("truetype");
    font-weight: 600;
  }

  @font-face {
    font-family: "SukhumvitSet";
    src: url("/fonts/SukhumvitSet-Bold.ttf") format("truetype");
    font-weight: 700;
  }

  * {
    box-sizing: border-box;
    font-family: "SukhumvitSet", Arial, Helvetica, sans-serif;
  }

  html,
  body {
    margin: 0;
  }
`
