import React from 'react';
import {SidebarProps} from "./Sidebar.props";
import Menu from "../Menu/Menu";
import Logo from "../logo.svg";
import cn from "classnames";
import styles from "./Sidebar.module.css";
import Search from "../../components/Search/Search";
import Link from "next/link";

const Sidebar = ({ className, ...props }: SidebarProps):JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Link className={styles.logo} href={"/"}><Logo /></Link>
            <Search placeholder="Поиск..."/>
            <Menu />
        </div>
    );
};

export default Sidebar;