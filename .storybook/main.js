const path = require('path');
module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/vue3",
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async config => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    config.resolve.fallback['path'] = require.resolve('path-browserify');


    return config;
  },

}