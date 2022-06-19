module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source:
          "https://api-ap-northeast-1.graphcms.com/v2/ckxrf0w9z0zgj01z9a5hk59j4/master",
        destination:
          "https://api-ap-northeast-1.graphcms.com/v2/ckxrf0w9z0zgj01z9a5hk59j4/master",
      },
    ];
  },
};
