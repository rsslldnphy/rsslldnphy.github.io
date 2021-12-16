module.exports = {
  babel: {
    plugins:
      // babel-plugin-lodash only works when building a production
      // bundle for some reason, and breaks everything when included and
      // running `craco start`. spent ages trying to the bottom of it
      // but got nowhere so just removing it in development, where it's
      // not needed anyway as the bundle size isn't an issue
      process.env.NODE_ENV === "production" ? ["babel-plugin-lodash"] : [],
  },
};
