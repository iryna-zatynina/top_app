import React from 'react';
import {Card, Htag} from "../../components";
import Search from "../../components/Search/Search";
import Link from "next/link";
import styles from "./MainPageComponent.module.css";
import {MainPageComponentProps} from './MainPageComponent.props';


const MainPageComponent = ({}: MainPageComponentProps): JSX.Element => {

    return (
        <>
            <Card className={styles.wrapper}>
                <Htag tag="h1">Учиться никогда не поздно.</Htag>
                <div className={styles.img} style={{background: "url('./purple-owl.webp')", backgroundRepeat: "no-repeat", backgroundPosition: "left", backgroundSize: "contain"}}></div>
                <Htag tag="h3">Найди свой следующий курс </Htag>
                <Search placeholder="Найди наши 500+ курсов"/>
                <Link href={'/courses'} className={styles.findLink}>Найти все курсы</Link>
            </Card>
        </>
    );
};

export default MainPageComponent;