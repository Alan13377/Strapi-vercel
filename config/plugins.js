module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        process.env.VER_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VER_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: process.env.VER_DEPLOY_PLUGIN_APP_FILTER,
     
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});