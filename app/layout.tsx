/* eslint-disable @next/next/no-img-element */
import type {ReactNode} from 'react'
import type {Metadata} from 'next'
import {Providers} from '@app/entry'
import {metrikaId} from '@shared/config'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gram Designer',
  description:
    'Gram Designer - веб-приложение для создания и продвинутого редактирования постов в телеграмм'
}

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
        {metrikaId > 0 && (
          <noscript>
            <div>
              <img
                src={`https://mc.yandex.ru/watch/${metrikaId}`}
                style={{position: 'absolute', left: -9999}}
                alt=''
              />
            </div>
          </noscript>
        )}
      </body>
    </html>
  )
}
