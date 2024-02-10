'use client'

import Link from "next/link";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

export const socialLinks = [
    {name: 'INSTAGRAM', link: '/'},
    {name: 'YOUTUBE', link: '/'},
    {name: 'ВК', link: '/'},
]

const Footer = () => {
    const {push} = useRouter()
return<div className={styles.container}>
    <div className={styles.wrapper}>
    <div className={styles.linksWrapper}>
            {socialLinks.map((link) =>
            <Link href={link.link} key={link.name}>{link.name}
            </Link>)}
        </div>
        <div className={styles.weAreTrue}>Мы настоящие</div>
        <button type='button' className={styles.book} onClick={()=>push('#contacts')}>ЗАБРОНИРОВАТЬ</button>
    </div>
</div>}

export default Footer