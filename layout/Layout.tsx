import React, {FunctionComponent, KeyboardEventHandler, useRef, useState} from 'react';
import {LayoutProps} from "./Layout.props";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import styles from './Layout.module.css';
import {AppContextProvider, IAppContext} from "../context/app.context";
import {Up} from "../components/Up/Up";
import cn from "classnames";


const Layout = ({ children }: LayoutProps):JSX.Element => {
    const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    const skipContentAction = (key) => {
        if (key.code === 'Space' || key.code === 'Enter') {
            key.preventDefault();
            bodyRef.current.focus();
        }
        setIsSkipLinkDisplayed(false);
    };


    return (
        <div className={styles.wrapper}>
            <a
                onFocus={() => setIsSkipLinkDisplayed(true)}
                tabIndex={0}
                className={cn(styles.skipLink, {
                    [styles.displayed]: isSkipLinkDisplayed
                })}
                onKeyDown={skipContentAction}
            >Сразу к содержанию</a>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <main className={styles.body} ref={bodyRef} tabIndex={0} role='main'>
                {children}
            </main>
            <Footer className={styles.footer}/>
            <Up />
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </ AppContextProvider>
        );
    };
};