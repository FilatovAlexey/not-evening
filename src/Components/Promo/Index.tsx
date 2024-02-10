'use client'

import Link from "next/link";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";

const promoList = [{
    image: '/',
    link: '/',
    text: 'ПРОМО'
},
{
    image: '/',
    link: '/',
    text: 'ЛАЙВ'
},
{
    image: '/',
    link: '/',
    text: 'ПРОМО'
},
{
    image: '/',
    link: '/',
    text: 'ПРОМО'
},
{
    image: '/',


    link: '/',
    text: 'ПРОМО'
},
{
    image: '/',
    link: '/',
    text: 'ПРОМО'
},
{
    image: '/',
    link: '/',
    text: 'ПРОМО'
},
{
    image: '/',
    link: '/',
    text: 'ПРОМО'
},
]

const Promo = ({ changeActiveBlock }: { changeActiveBlock: (block: string) => void }) => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null)

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
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
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    >
                    <video className={styles.video} preload="auto" no-controls loop playsInline muted autoPlay={isHovered} >
                        <source src="/promo.mp4" type="video/mp4"  />
                    </video>
                    <div className={styles.linkText}>{i.text}</div>
                </Link>)}
        </div>
    </div>
}

export default Promo