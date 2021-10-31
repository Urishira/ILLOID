const path = require("path");
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
