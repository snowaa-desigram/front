'use client'

import {useSyncExternalStore} from 'react'
import {isDesktop} from '@shared/platform'

const releases = 'https://github.com/snowaa-desigram/desktop/releases/latest'

// Имена файлов — как их именует electron-builder (artifactName по умолчанию): см. desktop/electron-builder.yml
const installers = [
  {os: 'mac', label: 'macOS', file: 'Gram-Designer-universal.dmg', hint: 'Intel и Apple Silicon'},
  {os: 'windows', label: 'Windows', file: 'Gram-Designer-Setup.exe', hint: 'x64, установщик'},
  {os: 'linux', label: 'Linux', file: 'Gram-Designer.AppImage', hint: 'x64, AppImage'}
] as const

type Os = (typeof installers)[number]['os']

function detectOs(): Os | undefined {
  const ua = navigator.userAgent
  if (/Mac/i.test(ua)) return 'mac'
  if (/Win/i.test(ua)) return 'windows'
  if (/Linux/i.test(ua)) return 'linux'
  return undefined
}

const noSubscribe = () => () => {}

export function DownloadPage() {
  // значения только клиентские: на сервере — undefined/false, без setState в эффекте
  const current = useSyncExternalStore(noSubscribe, detectOs, () => undefined)
  const inApp = useSyncExternalStore(noSubscribe, isDesktop, () => false)

  return (
    <main className='mx-auto max-w-2xl px-4 py-16'>
      <h1 className='text-3xl font-semibold'>Gram Designer для компьютера</h1>
      <p className='mt-2 text-neutral-600'>
        То же приложение, что и в браузере, плюс окно, меню и автообновление.
      </p>
      {inApp && <p className='mt-4 text-sm text-green-700'>Вы уже в приложении.</p>}
      <ul className='mt-8 grid gap-4 sm:grid-cols-3'>
        {installers.map(i => (
          <li key={i.os}>
            <a
              href={`${releases}/download/${i.file}`}
              className={
                'block rounded-lg border p-4 hover:border-neutral-900 ' +
                (i.os === current ? 'border-neutral-900 ring-2 ring-neutral-900' : 'border-neutral-300')
              }>
              <span className='block text-lg font-medium'>{i.label}</span>
              <span className='block text-sm text-neutral-500'>{i.hint}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className='mt-8 text-sm text-neutral-500'>
        Сборки пока не подписаны: macOS и Windows покажут предупреждение при первом запуске. Все версии —{' '}
        <a href={releases} className='underline'>
          на GitHub
        </a>
        .
      </p>
    </main>
  )
}
