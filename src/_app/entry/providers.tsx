'use client'

import type {ReactNode} from 'react'
import {Devtools} from './devtools'
import {Metrika} from './metrika'
import {QueryProvider} from './query-provider'

export function Providers({children}: {children: ReactNode}) {
  return (
    <QueryProvider>
      {children}
      <Metrika />
      <Devtools />
    </QueryProvider>
  )
}
