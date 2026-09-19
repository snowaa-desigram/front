export const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? ''
// 0 — счётчик не подключается (локалка/CI). Задаётся при сборке образа (METRIKA_ID в .env → NEXT_PUBLIC_METRIKA_ID)
export const metrikaId = Number(process.env.NEXT_PUBLIC_METRIKA_ID) || 0
