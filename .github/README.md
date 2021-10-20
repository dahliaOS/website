<p align="center">
  <img width="100%" src="https://github.com/dahliaOS/wallpapers/blob/main/Official/Desktop/SVG/mountains.svg">
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
- [Install Docker](https://www.docker.com) and be sure you have [docker-compose](https://docs.docker.com/compose/)
- Install your favorite editors

## Website layout

TODO!

## Local testing

To locally test the website:

### Step 1. Create an .env file:

Setup `.env` file you can create your own or use `.env-example` as shown here:
```
$ cp .env-example .env
```

### Step 2. Seed the database:
```
$ APP_MODE=SEED yarn devstart
Creating network "website_default" with the default driver
Pulling mongodb (mongo:)...
latest: Pulling from library/mongo
4bbfd2c87b75: Pull complete
d2e110be24e1: Pull complete
889a7173dcfe: Pull complete
6f6a1a25f35a: Pull complete
e87b34c16538: Pull complete
7099eef4dfe4: Pull complete
29b1d79d3b5b: Pull complete
b5c178e98a5a: Pull complete
ded800e62b93: Pull complete
b09aa2e255f0: Pull complete
c7e0f50ad27a: Pull complete
dcdad63a2ffa: Pull complete
Digest: sha256:482a562bf25f42f02ce589458f72866bbe9eded5b6f8fa5b1213313f0e00bba2
Status: Downloaded newer image for mongo:latest
Creating dahliaos_mongodb ... done
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node _boot.js`
listening on port 3000
CONNECTED DATABASE
User has been seeded:
User 'ADMIN'
Password: "password"
```

Close the server using `Ctrl+c`.

### Step 3. Start the webserver:
```
$ yarn start
express-session deprecated req.secret; provide secret option server.js:49:3
listening on port 3000
```

In a browser load page [localhost:3000](http://localhost:3000). You should
now be able to test the website.

## License

<p align="left">
  <img width="45%" src="https://github.com/dahliaOS/brand/blob/master/dahliaOS/png/logotypeblacktext.png"
</p>

Copyright @ 2019-2021 The dahliaOS Authors contact@dahliaos.io

This project is licensed under the [Apache 2.0 license](/LICENSE)
