// Единственное место, откуда фронт видит window.desktop (eslint запрещает прямое обращение вне shared/platform).
import type {DesktopBridge} from './desktop'

export type {DesktopBridge}

/** Мост к десктоп-приложению; undefined в браузере и при SSR. */
export function getDesktop(): DesktopBridge | undefined {
  return typeof window === 'undefined' ? undefined : window.desktop
}

export function isDesktop(): boolean {
  return getDesktop() !== undefined
}

/** Ссылка наружу: в приложении — системный браузер, в вебе — новая вкладка. */
export function openExternal(url: string): void {
  const desktop = getDesktop()
  if (desktop) void desktop.openExternal(url)
  else window.open(url, '_blank', 'noopener')
}
