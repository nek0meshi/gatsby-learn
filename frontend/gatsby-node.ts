import type { GatsbyNode } from 'gatsby';

const resolve = require('path').resolve;

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  });
};
