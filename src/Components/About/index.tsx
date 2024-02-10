'use client'

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

import NNCult from "../../assets/icons/NNCult.svg";
import Macdonalds from "../../assets/icons/Macdonalds.svg";
import OMK from "../../assets/icons/OMK.svg";
import NN800 from "../../assets/icons/NN800.svg";
import RosAtom from "../../assets/icons/RosAtom.svg";
import Alfa from "../../assets/icons/Alfa.svg";
import Steamboat from "../../assets/icons/Steamboat.svg";
import Coca from "../../assets/icons/Coca.svg";
import Rostelecom from "../../assets/icons/Rostelecom.svg";
import Fair from "../../assets/icons/Fair.svg";
import Global from "../../assets/icons/Global.svg";
import NNSalon from "../../assets/icons/NNSalon.svg";
import N from "../../assets/icons/N.svg";
import Sverdlov from "../../assets/icons/Sverdlov.svg";
import Gift from "../../assets/icons/Gift.svg";
import Alfasigma from "../../assets/icons/Alfasigma.svg";

const firstLine = [
    { image: <NNCult /> },
    { image: <Macdonalds /> },
    { image: <OMK /> },
    { image: <NN800 /> },
    { image: <RosAtom /> },
]

const second = [
    { image: <Alfa /> },
    { image: <Steamboat /> },
    { image: <Coca /> },
    { image: <Rostelecom /> },
    { image: <Fair /> },
]

const third = [
    { image: <Global /> },
    { image: <NNSalon /> },
    { image: <N /> },
    { image: <Sverdlov /> },
    { image: <Gift /> },
    { image: <Alfasigma /> },
]

const About = ({ changeActiveBlock }: { changeActiveBlock: (block: string) => void }) => {
    const [circleStyle, setCircleStyle] = useState<{ width: string, height: string }>()
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (ref.current) {
            setCircleStyle({ width: `${ref.current.clientHeight + 84}px`, height: `${ref.current.clientHeight + 84}px` })

        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const elementRect = ref.current.getBoundingClientRect();
                const isElementVisible = elementRect.top <= 200 && elementRect.top > (-elementRect.height - 200)

                if (isElementVisible) {
                    changeActiveBlock('about')
                }
            }
        };
        handleScroll(); 
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [changeActiveBlock]);

    return <div id="about" className={styles.container}>
        <div ref={ref} className={styles.wrapper}>
            {circleStyle && <div style={circleStyle} className={styles.circle} />}
            Мы команда молодых профессиональных музыкантов из Нижнего Новгорода.
            Мы про танцы, шоу и настоящие эмоции.
        </div>
        <div className={styles.trustWrapper}>
            <div className={styles.trust}>НАМ ДОВЕРЯЮТ</div>
            <div className={styles.line}>
                {firstLine.map((i) => i.image)}
            </div>
            <div className={styles.secondLine}>
                {second.map((i) => i.image)}
            </div>

            <div className={styles.thirdLine}>
                {third.map((i) => i.image)}
            </div>
        </div>

    </div>
}

export default About