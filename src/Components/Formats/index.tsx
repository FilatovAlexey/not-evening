'use client'

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { AccordeonProps } from "@/ui/AccordeonGroup/Accordeon/types";
import AccordeonGroup from "@/ui/AccordeonGroup";

const formats = [
    {
        title: 'ДРАЙВ И ЭМОЦИИ',
        description: '«Стандартные 3 по 30» — для нас никогда не бывают обычными. Любое выступление — это в первую очень атмосфера концерта, это искренние эмоции, шоу и много танцев на сцене и за её пределами',
        image: '/pictures/drive.jpeg'
    },
    {
        title: 'ТАНЦЕВАЛЬНОЕ ШОУ',
        description: 'Программа премиум класса, которая объединяет в себе энергетику живого звучания и пластику, драйв и мощь профессионального современного танцевального искусства.',
        image: '/pictures/dance.png'
    },
    {
        title: 'СТРУННЫЙ КВАРТЕТ',
        description: 'Эталонное звучание классического квартета (две скрипки, альт и виолончель) с поп или даже рок звучанием от «Ещё не вечер» — поразит даже самого искушённого зрителя.',
        image: '/pictures/quatro.jpeg'
    },
    {
        title: 'АКУСТИКА',
        description: 'Городской квартирник или просто ламповый вечер в кругу близких и друзей — отличный повод достать перкуссию, акустическую гитару и послушать любимые, греющие душу, песни. Здесь не про танцы, а чаще всего про внутренний мир.',
        image: '/pictures/akk.png'
    },
    {
        title: 'ТРИБЬЮТ ЛЕНИНГРАДА',
        description: '«Как ах*енно просто и просто ах*енно» — кричат гости на танцполе после 30 минут любимых хитов известнейшей группировки «Ленинград».',
        image: '/pictures/leningrad.jpeg'
    },
    {
        title: 'РОК-ХИТЫ',
        description: 'Когда душа требует потяжелее — мы не в силах противостоять. Лучшие из лучших: Ария, Linkin Park, RCHP и другие. Эти песни знает каждый.',
        image: '/pictures/rock.png'
    },

]


const Formats = ({ changeActiveBlock }: { changeActiveBlock: (block: string) => void }) => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const elementRect = ref.current.getBoundingClientRect();
                const isElementVisible = elementRect.top <= 200 && elementRect.top > (-elementRect.height - 200)
                if (isElementVisible) {
                    changeActiveBlock('formats')
                }
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [changeActiveBlock]);

    const accordeonItems: AccordeonProps[] = useMemo(
        () =>

            formats.map((item, index) => ({
                classNameLabelActive: styles['active'],
                id: String(`${item.title}--${index}`),
                labelVariant: 'labelLarge',
                label: item.title,
                children: (
                    <div className={styles.content} >
                        <div className={styles.desc}>{item.description}</div>
                        <div className={styles.imageWrapper}>
                            <div className={styles.image}>
                                <Image src={item.image}
                                    alt={item.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                ),
            }))
        ,
        []
    )
    return <div id='formats' ref={ref} className={styles.container}>
        <div className={styles.formatTitle}>ФОРМАТЫ</div>
        <div>
            <AccordeonGroup items={accordeonItems} />
        </div>
    </div>
}

export default Formats