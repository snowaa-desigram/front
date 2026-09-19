'use client'

import dynamic from 'next/dynamic'

// dynamic + ssr:false: панель рендерится только в браузере; условие по NODE_ENV вырезает импорт из prod-бандла
const DevtoolsPanel = dynamic(() => import('./devtools-panel').then(m => m.DevtoolsPanel), {
  ssr: false
})

export function Devtools() {
  if (process.env.NODE_ENV !== 'development') return null

  return <DevtoolsPanel />
}
