<p align="center">
  <img width="100%" src="https://github.com/dahliaOS/wallpapers/blob/main/Official/Desktop/SVG/mountains.svg" />
</p>

<p align="center">
<a href="https://dahliaos.io">Website</a> ●
<a href="https://discord.gg/7qVbJHR">Discord</a> ●
<a href="https://github.com/dahliaos/releases/releases">Releases</a> ●
<a href="https://paypal.me/officialdahliaos">Donate</a> ●
<a href="https://docs.dahliaos.io">Documentation</a>

# dahliaOS Website

![Website](https://img.shields.io/website?url=https%3A%2F%2Fdahliaos.io)
![GitHub](https://img.shields.io/github/license/dahliaos/pangolin-desktop?color=brightgreen)

- **Official, one and only website for the dahliaOS project**
- Find it by clicking [here!](https://dahliaos.io)

## Contribute

If you're interested in contributing to the project, please refer to [CONTRIBUTING.md](../CONTRIBUTING.md)

## Install dev tools

- [Install node js and npm](https://nodejs.org/en/download/package-manager/)
- [Install yarn v2 (recommended opposed to npm)](https://yarnpkg.com/getting-started/install)
- Install your favorite editors

## Local testing

To locally test the website:

### Step 1. Install dependencies:

Install node modules required to run the website:

```
$ yarn
```

or

```
$ npm i
```

### Step 2. Dev-start the NextJS server:

```
$ yarn dev
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
info  - Disabled SWC as replacement for Babel because of custom Babel configuration ".babelrc" https://nextjs.org/docs/messages/swc-disabled
info  - Using external babel configuration from /Users/loosk/Documents/GitHub/website/.babelrc
event - compiled client and server successfully in 4.5s (970 modules)
```

NextJS dev server has hot reloading, so no need to restart the instance when its running!

### Step 3. Build:

After doing your contributions, test your changes for sure by building

```
$ yarn build
info  - Using webpack 5. Reason: no custom webpack configuration in next.config.js https://nextjs
.org/docs/messages/webpack5
info  - Checking validity of types
info  - Creating an optimized production build
info  - Compiled successfully
info  - Collecting page data
info  - Generating static pages (7/7)
info  - Finalizing page optimization

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)

Done in 44.71s.
```

### Step 4. Start:

```
$ yarn start
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

In a browser load page [localhost:3000](http://localhost:3000). You should
now be able to test the website.

## License

<p align="left">
  <img width="40%" src="https://raw.githubusercontent.com/dahliaOS/brand/master/dahliaOS/svg/logotypeblacktext.svg#gh-light-mode-only"
<p>
<p align="left">
  <img width="40%" src="https://raw.githubusercontent.com/dahliaOS/brand/master/dahliaOS/svg/logotypewhitetext.svg#gh-dark-mode-only"
<p>

Copyright @ 2019-2022 - The dahliaOS Authors - contact@dahliaos.io

This project is licensed under the [Apache 2.0 license](/LICENSE)

