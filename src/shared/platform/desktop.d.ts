// Контракт моста Electron ↔ фронт (openspec/specs/desktop-bridge). Источник — desktop/src/shared/bridge.ts,
// тест desktop/tests/bridge-contract.test.ts сверяет интерфейсы; менять — в обоих местах.
export interface DesktopBridge {
  readonly platform: 'darwin' | 'win32' | 'linux'
  /** Версия приложения (package.json). */
  readonly version: string
  /** Открыть ссылку в системном браузере. */
  openExternal(url: string): Promise<void>
  /** Подписка на deep-links gram-designer://…; возвращает отписку. */
  onDeepLink(handler: (url: string) => void): () => void
}

declare global {
  interface Window {
    desktop?: DesktopBridge
  }
}
