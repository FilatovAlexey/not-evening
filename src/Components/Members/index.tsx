import Image from "next/image";

import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";

const members = [
    { photo: '/pictures/members/Polina.png', name: 'Полина Перцева', calling: 'Вокал' },
    { photo: '/pictures/members/Anton.png', name: 'Антон Карлин', calling: 'Гитара, Вокал' },
    { photo: '/pictures/members/Polina.png', name: 'Полина Перцева', calling: 'Вокал' },
    { photo: '/pictures/members/Anton.png', name: 'Полина Перцева', calling: 'Вокал' },
    { photo: '/pictures/members/Polina.png', name: 'Полина Перцева', calling: 'Вокал' },
    { photo: '/pictures/members/Polina.png', name: 'Полина Перцева', calling: 'Вокал' },
]

const Members = ({ changeActiveBlock }: { changeActiveBlock: (block: string) => void }) => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const elementRect = ref.current.getBoundingClientRect(); 
                const isElementVisible = elementRect.top <= 200 && elementRect.top > (-elementRect.height - 200)
                if (isElementVisible) {
                    changeActiveBlock('members')
                }
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [changeActiveBlock]);

    return <div id='members' ref={ref} className={styles.container}>
        <div className={styles.membersTitle}>УЧАСТНИКИ</div>
        <div className={styles.membersWrapper}>
            {members.map((item) => <div key={item.name} className={styles.image}>
                <Image src={item.photo}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'cover' }} 
                    />
                    <div className={styles.nameWrapper}>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.calling}>{item.calling}</div>
                    </div>
            </div>)}
        </div>
    </div>
}

export default Members