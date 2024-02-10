import { AccordeonProps } from './Accordeon/types'

export type AccordeonGroupProps = {
  /**
   * Определить стиль для контейнера
   */
  className?: string
  /**
   * Определить аккордеоны
   */
  items: AccordeonProps[]
  /**
   * Определить что бы аккродеон был открыт лишь единажды
   */
  onceOpen?: boolean
  /**
   * Определить коллбэк
   */
  callBack?: (state: { id: string; open: boolean }) => void
}
