import { createContext } from "react"

import news1and4 from "../images/s-1450016.png"
import news1and4_2x from "../images/s-1450016@2x.png"
import news1and4_3x from "../images/s-1450016@3x.png"
import news2 from "../images/36044.png"
import news2_2x from "../images/36044@2x.png"
import news2_3x from "../images/36044@3x.png"
import news3 from "../images/s-1450014.png"
import news3_2x from "../images/s-1450014@2x.png"
import news3_3x from "../images/s-1450014@3x.png"
import blog1 from "../images/71942639-694888141028451-6361824018328190976-o.png"
import blog1_2x from "../images/71942639-694888141028451-6361824018328190976-o@2x.png"
import blog1_3x from "../images/71942639-694888141028451-6361824018328190976-o@3x.png"
import blog2 from "../images/69944108-681604079023524-2939677824442695680-o.png"
import blog2_2x from "../images/69944108-681604079023524-2939677824442695680-o@2x.png"
import blog2_3x from "../images/69944108-681604079023524-2939677824442695680-o@3x.png"
import blog3 from "../images/70388238-684886578695274-2535290551691902976-o.png"
import blog3_2x from "../images/70388238-684886578695274-2535290551691902976-o@2x.png"
import blog3_3x from "../images/70388238-684886578695274-2535290551691902976-o@3x.png"
import blackLogo from "../images/black.png"
import blackLogo_2x from "../images/black@2x.png"
import blackLogo_3x from "../images/black@3x.png"
import banner from "../images/blur.png"
import banner_2x from "../images/blur@2x.png"
import banner_3x from "../images/blur@3x.png"
import fbLogo from "../images/f-logo-rgb-blue-144.png"
import fbLogo_2x from "../images/f-logo-rgb-blue-144@2x.png"
import fbLogo_3x from "../images/f-logo-rgb-blue-144@3x.png"
import instagramLogo from "../images/instagram.png"
import instagramLogo_2x from "../images/instagram@2x.png"
import instagramLogo_3x from "../images/instagram@3x.png"
import kidWithAdhd from "../images/kid-with-adhd.png"
import kidWithAdhd_2x from "../images/kid-with-adhd@2x.png"
import kidWithAdhd_3x from "../images/kid-with-adhd@3x.png"
import kidWithAsses from "../images/kis-with-asses.png"
import kidWithAsses_2x from "../images/kis-with-asses@2x.png"
import kidWithAsses_3x from "../images/kis-with-asses@3x.png"
import wall from "../images/wall.png"
import wall_2x from "../images/wall@2x.png"
import wall_3x from "../images/wall@3x.png"
import next from "../images/next.png"
import next_2x from "../images/next@2x.png"
import next_3x from "../images/next@3x.png"
import prev from "../images/prev.png"
import prev_2x from "../images/prev@2x.png"
import prev_3x from "../images/prev@3x.png"

export const initAsset = {
  news1and4,
  news1and4_2x,
  news1and4_3x,
  news2,
  news2_2x,
  news2_3x,
  news3,
  news3_2x,
  news3_3x,
  blog1,
  blog1_2x,
  blog1_3x,
  blog2,
  blog2_2x,
  blog2_3x,
  blog3,
  blog3_2x,
  blog3_3x,
  blackLogo,
  blackLogo_2x,
  blackLogo_3x,
  banner,
  banner_2x,
  banner_3x,
  fbLogo,
  fbLogo_2x,
  fbLogo_3x,
  instagramLogo,
  instagramLogo_2x,
  instagramLogo_3x,
  kidWithAdhd,
  kidWithAdhd_2x,
  kidWithAdhd_3x,
  kidWithAsses,
  kidWithAsses_2x,
  kidWithAsses_3x,
  wall,
  wall_2x,
  wall_3x,
  next,
  next_2x,
  next_3x,
  prev,
  prev_2x,
  prev_3x,
}

export const asset = createContext(initAsset)

export const AssetProvider = asset.Provider
