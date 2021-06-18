module.exports = {
  async redirects() {
    return [
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
    ];
  },
};
