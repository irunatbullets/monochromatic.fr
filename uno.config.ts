import {
  defineConfig,
  presetIcons,
  presetTypography,
  transformerVariantGroup,
  transformerDirectives,
} from 'unocss'

import presetWind3 from '@unocss/preset-wind3'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetWind3(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        // ...
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
