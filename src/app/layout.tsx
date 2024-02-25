import type { Metadata } from 'next'
import  localFont  from 'next/font/local'
import './globals.css'

const inter = localFont({
    src: [
      {
        path: '../assets/fonts/HalvarBreit-Md-500.ttf',
        weight: '500',
      },
      {
        path: '../assets/fonts/HalvarBreit-Bd-700.ttf',
        weight: '700',
      },
    ],
  })
  

export const metadata: Metadata = {
  title: 'ЕЩЕ НЕ ВЕЧЕР',
  description: 'Кавер группа Еще не вечер',
  keywords: 'Кавер группа еще не вечер, ЗАказать в Арзамасе, Заказать в Нижнем Новогорде'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" style={{scrollBehavior: 'smooth'}}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
