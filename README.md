<p align="center">
  <img width="100%" src="https://github.com/dahliaOS/wallpapers/blob/main/Official/Desktop/SVG/Mountains%20wallpaper.svg"
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
- [Install yarn v2](https://yarnpkg.com/getting-started/install)
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
info  - Using webpack 5. Reason: no custom webpack configuration in next.config.js https://nextjs.org/docs/messages/webpack5
event - compiled successfully
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

Page                             Size     First Load JS
┌ ○ /                            4.26 kB         129 kB
├   /_app                        0 B              85 kB
├ ○ /404                         3.08 kB        88.1 kB
├ λ /api/hello                   0 B              85 kB
├ ○ /coc                         319 B           125 kB
├ ○ /donate                      313 B           125 kB
├ ○ /download                    318 B           125 kB
└ ○ /fuchsia                     314 B           125 kB
+ First Load JS shared by all    85 kB
  ├ chunks/framework.0441fa.js   42.4 kB
  ├ chunks/main.cdc763.js        19.5 kB
  ├ chunks/pages/_app.039477.js  22.2 kB
  └ chunks/webpack.189c53.js     994 B

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
info  - Using webpack 5. Reason: no custom webpack configuration in next.config.js https://nextjs
.org/docs/messages/webpack5
```

In a browser load page [localhost:3000](http://localhost:3000). You should
now be able to test the website.

## License

<p align="left">
  <img width="45%" src="https://github.com/dahliaos/brand/blob/master/Logo%20PNGs/dahliaOS%20logo%20with%20text%20(drop%20shadow).png"
</p>

Copyright @ 2019-2021 The dahliaOS Authors contact@dahliaos.io

This project is licensed under the [Apache 2.0 license](/LICENSE)
