import { defineConfig, presetIcons, presetWind } from 'unocss';

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons()
  ],
  rules: [
    ['m-1', { margin: '1px' }]
  ],
});