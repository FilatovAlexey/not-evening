'use client'

import styles from './styles.module.scss'
import MainLogo from "../assets/icons/main-logo.svg";
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import About from '@/Components/About';
import Promo from '@/Components/Promo/Index';
import Formats from '@/Components/Formats';
import Members from '@/Components/Members';
import Contacts from '@/Components/Contacts';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function Home() {
    const [activeBlock, setActiveBlock] = useState<string >()
    const ref = useRef<HTMLDivElement | null>(null)

    const changeActiveBlock = useCallback((block?: string) => {
        setActiveBlock(block)
    },[])

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const elementRect = ref.current.getBoundingClientRect(); 
                const isElementVisible = elementRect.top <= 0 && elementRect.top > (-elementRect.height)
                if (isElementVisible) {
                    changeActiveBlock(undefined)
                }
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [changeActiveBlock]);

    return (
        <main className={styles.main}>
            <Header activeBlock={activeBlock}/>
            <div className={styles.firstView}>
                <div ref={ref} className={styles.container}>
                    <div/>
                    <MainLogo />
                    <Footer />
                </div>
            </div>
            <About changeActiveBlock={changeActiveBlock} />
            <Promo changeActiveBlock={changeActiveBlock} />
            <Formats changeActiveBlock={changeActiveBlock} />
            <Members changeActiveBlock={changeActiveBlock} />
            <Contacts changeActiveBlock={changeActiveBlock} />
          
        </main>
    )
}
