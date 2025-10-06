module.exports = {
  siteUrl: "https://mohallabazaar.vercel.app",
  generateRobotsTxt: true,
  additionalPaths: async () => [
    { loc: "/download", lastmod: new Date().toISOString() },
   
  ],
};
