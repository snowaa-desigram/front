'use client'

import {usePathname, useSearchParams} from 'next/navigation'
import {Suspense, useEffect, useRef} from 'react'
import {MetrikaCounter, ym} from 'react-metrika'
import {metrikaId} from '@shared/config'

const options: YaMetrika2Options = {
  // App Router = History API: автопросмотр выключаем и шлём hit сами на каждую смену URL (рекомендация Яндекса)
  defer: true,
  ssr: true,
  webvisor: true,
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  ecommerce: 'dataLayer'
}

// useSearchParams требует Suspense — иначе Next выкидывает страницу в client-side rendering
function MetrikaHit() {
  const pathname = usePathname()
  const search = useSearchParams().toString()
  const url = search ? `${pathname}?${search}` : pathname
  const previousUrl = useRef<string>(undefined)

  useEffect(() => {
    if (previousUrl.current === url) return

    ym(metrikaId, 'hit', url, {referer: previousUrl.current ?? document.referrer})
    previousUrl.current = url
  }, [url])

  return null
}

export function Metrika() {
  if (!metrikaId) return null

  return (
    <>
      <MetrikaCounter id={metrikaId} options={options} />
      <Suspense fallback={null}>
        <MetrikaHit />
      </Suspense>
    </>
  )
}
