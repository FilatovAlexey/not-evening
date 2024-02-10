import { PropsWithChildren, ReactNode } from 'react'



export type AccordeonProps = PropsWithChildren & {
  /**
   * Определить стиль кнопки
   */
  className?: string
  /**
   * Определить стиль для контейнера
   */
  classNameContainer?: string
  /**
   * Определить стиль для лейбла
   */
  classNameLabel?: string
  /**
   * Определить стиль для активного лейбла
   */
  classNameLabelActive?: string
  /**
   * Определить стиль для иконки
   */
  classNameIcon?: string
  /**
   * Определить id
   */
  id: string
  /**
   * Определить состояние аккордеона
   */
  open?: boolean
  /**
   * Определить лейбл
   */
  label: string | ReactNode
  /**
   * Определить максимальную высоту
   */
  maxHeight?: number
  /**
   * Определить направление
   */
  direction?: 'down' | 'up'
  /**
   * Определить наличие стрелки
   */
  showRotateArrow?: boolean
  /**
   * Определить коллбэк для уплавления состоянием
   */
  callBack?: (id: string) => void
}
