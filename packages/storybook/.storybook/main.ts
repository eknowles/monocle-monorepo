const path = require("path");

import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  core: {
    builder: "webpack5",
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
  },
  stories: [
    "../../components/src/**/*.stories.mdx",
    "../../components/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  addons: [
    "@storybook/addon-postcss",
    "@storybook/addon-essentials",
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module!.rules!.find(
      (rule: any) => rule.test && !Array.isArray(rule.test) && rule.test.test(".svg"),
    );
    (fileLoaderRule as any).exclude = /\.svg$/;
    config.module!.rules!.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = config;
