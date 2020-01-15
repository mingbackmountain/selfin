import { css } from "styled-components"

import KBPlanetEarth from "./KBPlanetEarth.ttf"

import MitrLight from "./Mitr-Light.ttf"
import MitrMedium from "./Mitr-Medium.ttf"
import MitrRegular from "./Mitr-Regular.ttf"

import SukhumvitSetBold from "./SukhumvitSet-Bold.ttf"
import SukhumvitSetLight from "./SukhumvitSet-Light.ttf"
import SukhumvitSetMedium from "./SukhumvitSet-Medium.ttf"
import SukhumvitSetSemiBold from "./SukhumvitSet-SemiBold.ttf"

export default css`
  /* KBPlanet font */
  @font-face {
    font-family: "KBPlanetEarth";
    src: url(${KBPlanetEarth}) format("truetype");
    font-weight: 400;
  }

  /* Mitr fonts */
  @font-face {
    font-family: "Mitr";
    src: url(${MitrLight}) format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: "Mitr";
    src: url(${MitrRegular}) format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: "Mitr";
    src: url(${MitrMedium}) format("truetype");
    font-weight: 500;
  }

  /* SukhumvitSet fonts */
  @font-face {
    font-family: "SukhumvitSet";
    src: url(${SukhumvitSetLight}) format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: "SukhumvitSet";
    src: url(${SukhumvitSetMedium}) format("truetype");
    font-weight: 500;
  }

  @font-face {
    font-family: "SukhumvitSet";
    src: url(${SukhumvitSetSemiBold}) format("truetype");
    font-weight: 600;
  }

  @font-face {
    font-family: "SukhumvitSet";
    src: url(${SukhumvitSetBold}) format("truetype");
    font-weight: 700;
  }
`
