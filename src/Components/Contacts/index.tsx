'use client'

import Link from "next/link";
import Image from "next/image";
import QR from "../../assets/icons/QR.svg";
import { socialLinks } from "../Footer";

import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";

const Contacts = ({ changeActiveBlock }: { changeActiveBlock: (block: string) => void }) => {

    useEffect(() => {
        const handleScroll = () => {
            const isElementVisible = window.innerHeight + window.scrollY >= document.body.offsetHeight
            if (isElementVisible) {
                changeActiveBlock('contacts')
            }

        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [changeActiveBlock]);

    return <div id='contacts' className={styles.container}>
        <div className={styles.contactsTitle}>КОНТАКТЫ</div>
        <QR className={styles.qr} />
        <div className={styles.contactsWrapper}>
            <div className={styles.linksWrapper}>
                {socialLinks.map((link) =>
                    <Link key={link.name} href={link.link} className={styles.link}>
                        {link.name}
                    </Link>)}
            </div>
            <div className={styles.contactWrapper}>
                <div className={styles.imageWrapper}>
                    <Image src={'/pictures/members/Luntik.jpeg'}
                        alt={'Контакт'}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div>
                    <div className={styles.name}>Андрей Хмельников</div>
                    <div className={styles.director}>Концертный директор</div>
                    <div className={styles.phone}>+7 950 621-38-61</div>
                </div>
            </div>
        </div>
    </div>
}

export default Contacts