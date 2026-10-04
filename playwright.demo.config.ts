import { defineConfig } from '@playwright/test';
import baseConfig from './playwright.config';

export default defineConfig({
  ...baseConfig,

  timeout: 60_000,

  workers: 1,

  use: {
    ...baseConfig.use,

    headless: false,

    video: 'on',
  },
});