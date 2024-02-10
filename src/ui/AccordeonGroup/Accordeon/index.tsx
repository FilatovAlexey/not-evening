import { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'

import { AccordeonProps } from './types'
import styles from './styles.module.scss'

function Accordeon({
    className,
    classNameContainer,
    classNameLabel,
    classNameLabelActive,
    id,
    open = false,
    label,
    children,
    maxHeight = 1000,
    direction = 'down',
    callBack,
}: AccordeonProps) {
    const [heightContent, setHeightContent] = useState(0)

    const onClickButton = useCallback(() => {
        if (callBack) {
            callBack(id)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(() => {
        if (open) {
            setHeightContent(maxHeight)
        } else {
            setHeightContent(0)
        }
    }, [maxHeight, open])

    return (
        <div
            className={classNames(
                styles.allWrapper,
                classNameContainer && classNameContainer
            )}
        >
            {direction === 'up' && (
                <div
                    className={classNames(
                        styles.content,
                        open && styles['content--open']
                    )}
                    style={{ maxHeight: heightContent }}
                >
                    {children}
                </div>
            )}
            <button
                type="button"
                className={classNames(
                    styles.container,
                    className && className,
                    open && classNameLabelActive
                )}
                onClick={onClickButton}
            >
                <div
                    className={classNames(styles.label, classNameLabel && classNameLabel)}
                >
                    {label}
                </div>
            </button>
            {direction === 'down' && (
                <div
                    className={classNames(
                        styles.content,
                        open && styles['content--open']
                    )}
                    style={{ maxHeight: heightContent }}
                >
                    {children}
                </div>
            )}
        </div>
    )
}

export default Accordeon
