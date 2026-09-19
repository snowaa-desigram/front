'use client'

import {TanStackDevtools} from '@tanstack/react-devtools'
import {ReactQueryDevtoolsPanel} from '@tanstack/react-query-devtools'

/**
 * Единая панель TanStack Devtools (кнопка в углу). Плагины добавляются в массив:
 * сюда же встанут Router/Form/Table и свои (например, состояние sync из local-first).
 * Грузится только в dev через ./devtools.tsx — в prod-бандл не попадает.
 */
export function DevtoolsPanel() {
  return (
    <TanStackDevtools
      config={{position: 'bottom-right'}}
      plugins={[{name: 'TanStack Query', render: <ReactQueryDevtoolsPanel />}]}
    />
  )
}
