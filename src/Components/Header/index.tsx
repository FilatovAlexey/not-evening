'use client'

import classnames from "classnames";

import styles from "./styles.module.scss";
import useDetectedDevice from "@/hooks/useDetectedDevice";

import Menu from "../../assets/icons/menu.svg";
import Accordeon from "@/ui/AccordeonGroup/Accordeon";
import { useState } from "react";

const links = [
    { name: 'О НАС', link: '#about' },
    { name: 'ПРОМО', link: '#promo' },
    { name: 'ФОРМАТЫ', link: '#formats' },
    { name: 'УЧАСТНИКИ', link: '#members' },
    { name: 'КОНТАКТЫ', link: '#contacts' },
]

const Header = ({ activeBlock }: { activeBlock?: string }) => {
    const { isTablet } = useDetectedDevice()
    const [open, setOpen] = useState(false)

    return <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.linksWrapper}>
                <Accordeon
                    id='menu'
                    open={open}
                    className={styles.label}
                    label={<div
                        onClick={() => setOpen((prev) => !prev)}
                        className={styles.menu}>
                        <Menu />
                    </div>
                    }
                >
                    <div className={styles.accLinksWrapper}>
                        {links.map((link) =>
                            <a
                                href={link.link}
                                key={link.name}
                                className={classnames(activeBlock && link.link.includes(activeBlock) && styles.active)}
                            >
                                {link.name}
                            </a>
                        )}
                    </div>
                </Accordeon>
                <div className={classnames(styles.accLinksWrapper, styles.desktop)}>
                    {links.map((link) =>
                        <a
                            href={link.link}
                            key={link.name}
                            className={classnames(activeBlock && link.link.includes(activeBlock) && styles.active)}
                        >
                            {link.name}
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
}

export default Header