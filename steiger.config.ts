import fsd from '@feature-sliced/steiger-plugin'
import {defineConfig} from 'steiger'

export default defineConfig([
  ...fsd.configs.recommended,
  {
    // Next.js occupies app/ and pages/; FSD layers are _app and _pages
    rules: {
      'fsd/typo-in-layer-name': 'off'
    }
  },
  {
    files: ['./src/_pages/**'],
    rules: {
      'fsd/insignificant-slice': 'off'
    }
  },
  {
    files: ['./src/shared/**'],
    rules: {
      'fsd/public-api': 'off'
    }
  }
])
