import React, {useContext, KeyboardEvent, useState} from 'react';
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import styles from './Menu.module.css';
import cn from "classnames";
import Link from "next/link";
import {useRouter} from "next/router";
import {firstLevelMenu} from "../../helpers/helpers";
import {motion} from "framer-motion";


const Menu = ():JSX.Element => {
    const {menu,  setMenu, firstCategory} = useContext(AppContext);
    const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
    const router = useRouter();

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: {
            marginBottom: 0
        }
    };


    const variantsChildren = {
        visible: {
            opacity: 1,
            height: "min-content"
        },
        hidden: {
            opacity: 0,
            height: 0
        }
    };

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory === secondCategory) {
                setAnnounce(m.isOpened ? 'closed' : 'opened');
               m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };

    const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
        if (key.code === 'Space' || key.code === 'Enter') {
            key.preventDefault();
            openSecondLevel(secondCategory);
        }
    };

    const buildFirstLevel = () => {
        return (
            <ul className={styles.firstLevelList}>
                {firstLevelMenu.map(m => (
                    <li key={m.route} aria-expanded={m.id ===firstCategory}>
                        <Link href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id ===firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </Link>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </li>
                ))}
            </ul>
        );
    };
    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <ul className={styles.secondBlock}>
                {menu.map(menu => {
                    if (menu.pages.map(p =>  p.alias).includes(router.asPath.split('/')[2])) {
                        menu.isOpened = true;
                    }
                    return (
                        <li key={menu._id.secondCategory}>
                            <button
                                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, menu._id.secondCategory)}
                                className={styles.secondLevel}
                                onClick={() => openSecondLevel(menu._id.secondCategory)}
                                aria-expanded={menu.isOpened}
                            >
                                {menu._id.secondCategory}
                            </button>
                            <motion.ul
                                layout
                                variants={variants}
                                initial={menu.isOpened ? 'visible' : 'hidden'}
                                animate={menu.isOpened ? 'visible' : 'hidden'}
                                className={styles.secondLevelBlock}
                            >
                                {buildThirdLevel(menu.pages, menuItem.route, menu.isOpened ?? false)}
                            </motion.ul>
                        </li>
                    );
                })}
            </ul>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
        return (
            pages.map(p => (
                <motion.li key={p._id} variants={variantsChildren}>
                    <Link
                        tabIndex={isOpened ? 0 : -1}
                        href={`/${route}/${p.alias}`}
                        className={cn(styles.thirdLevel, {
                            [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
                        })}
                        aria-current={`/${route}/${p.alias}` === router.asPath ? 'page' : false}
                    >
                        {p.category}
                    </Link>
                </motion.li>
            ))
        );
    };

    return (
        <nav role='navigation'>
            {announce && <span role="log" className="visuallyHidden">{announce === 'opened' ? 'развернуто' : 'свернуто'}</span>}
            {buildFirstLevel()}
        </nav>
    );
};

export default Menu;