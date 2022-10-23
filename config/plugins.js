module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_b1HAV5Vu3aaRpNZsoTdrc3Q15cnV/2aPqbEQPpE",
      apiToken: "NpKYvQpS3dDOfnZqkYOeZqd7",
      appFilter: "strapi-vercel ",
      teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});