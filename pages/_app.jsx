import * as React from "react"
import NextApp from "next/app"
import { CacheProvider, Global } from "@emotion/core"

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from "emotion"

import { GlobalStyle } from "../styles/global"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <CacheProvider value={cache}>
        <Component {...pageProps} />

        <Global styles={GlobalStyle} />
      </CacheProvider>
    )
  }
}
