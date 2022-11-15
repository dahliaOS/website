/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  async redirects() {
    return [
      {
        source: "/downloads",
        destination: "/download",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.com/invite/7qVbJHR",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/dahliaOS",
        permanent: true,
      },
      {
        source: "/reddit",
        destination: "https://www.reddit.com/r/DahliaOS/",
        permanent: true,
      },
      {
        source: "/telegram",
        destination: "https://t.me/dahliaos",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://www.facebook.com/dahliaos.io/",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/dahliaos.io/",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/dahliaos_io",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "https://docs.dahliaos.io/",
        permanent: true,
      },
      {
        source: "/support",
        destination: "https://discord.com/invite/7qVbJHR",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "https://blog.dahliaos.io",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
