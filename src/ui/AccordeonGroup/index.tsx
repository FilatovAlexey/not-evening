import { useCallback, useEffect, useMemo, useState } from 'react'

import Accordeon from './Accordeon'
import { AccordeonGroupProps } from './types'

function AccordeonGroup({
  className,
  items,
  onceOpen = false,
  callBack,
}: AccordeonGroupProps) {
  const initialAccordeonState: Array<{ id: string; open: boolean }> = useMemo(
    () =>
      items.map((item) => {
        return {
          id: item.id,
          open: item.open || false,
        }
      }),
    [items]
  )

  const [accordeonsState, setAccordeonsState] = useState(initialAccordeonState)

  const callBackClickAccordeon = useCallback(
    (id: string) => {
      setAccordeonsState((prevState) =>
        prevState.map((item) => {
          if (item.id === id) {
            if (callBack) {
              callBack({
                id: item.id,
                open: !item.open,
              })
            }

            return {
              ...item,
              open: !item.open,
            }
          }

          return {
            ...item,
            open: onceOpen ? false : item.open,
          }
        })
      )
    },
    [callBack, onceOpen]
  )

  useEffect(() => {
    setAccordeonsState(initialAccordeonState)
  }, [initialAccordeonState])

  return (
    <div className={className && className}>
      {items &&
        items.length > 0 &&
        items.map((item) => (
          <Accordeon
            {...item}
            open={
              accordeonsState.find((accord) => accord.id === item.id)?.open ||
              false
            }
            callBack={callBackClickAccordeon}
            key={item.id}
          />
        ))}
    </div>
  )
}

export default AccordeonGroup
