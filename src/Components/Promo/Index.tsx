'use client'

import Link from "next/link";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const promoList = [{
    id: '1',
    video: '/',
    poster: '/',
    link: '/',
    text: 'ПРОМО'
},
{
    id: '2',
    video: '/',
    link: '/',
    poster: '/',
    text: 'ЛАЙВ'
},
{
    id: '3',
    video: '/',
    poster: '/',
    link: '/',
    text: 'ПРОМО'
},
{
    id: '4',
    video: '/',
    link: '/',
    poster: '/',
    text: 'ПРОМО'
},
{
    id: '5',
    video: '/',
    poster: '/',
    link: '/',
    text: 'ПРОМО'
},
{
    id: '6',
    video: '/',
    poster: '/',
    link: '/',
    text: 'ПРОМО'
},
{
    id: '7',
    video: '/',
    poster: '/',
    link: '/',
    text: 'ПРОМО'
},
{
    id: '8',
    video: '/',
    poster: '/',
    link: '/',
    text: 'ПРОМО'
},
]

const Promo = ({ changeActiveBlock }: { changeActiveBlock: (block: string) => void }) => {
    const [isHovered, setIsHovered] = useState<string | undefined>();
    const ref = useRef<HTMLDivElement | null>(null)

    const handleMouseEnter = (id: string) => {
        setIsHovered(id);
    };

    const handleMouseLeave = () => {
        setIsHovered(undefined);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const elementRect = ref.current.getBoundingClientRect();
                const isElementVisible = elementRect.top <= 200 && elementRect.top > (-elementRect.height - 200)

                if (isElementVisible) {
                    changeActiveBlock('promo')
                }
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [changeActiveBlock]);
    return <div id='promo' ref={ref} className={styles.container}>
        <div className={styles.promoTitle}>ПРОМО И ЛАЙВЫ</div>
        <div className={styles.list}>
            {promoList.map((i, index) =>
                <Link
                    className={styles.link}
                    href={i.link}
                    key={index}
                    onMouseEnter={() => handleMouseEnter(i.id)}
                    onMouseLeave={handleMouseLeave}
                >
                    {isHovered === i.id ? <video
                        className={styles.video}
                        preload="auto"
                        no-controls
                        loop
                        muted
                        autoPlay
                        x-yandex-pip="false"
                        x-webkit-airplay="deny"
                        webkit-playsinline=""
                        playsInline
                        disableRemotePlayback
                    >
                        <source src="/promo.mp4" type="video/mp4" />
                    </video> : <Image
                        src="/pictures/members/Polina.png"
                        alt={i.id}
                        fill />}
                    <div className={styles.linkText}>{i.text}</div>
                </Link>)}
        </div>
    </div>
}

export default Promo


