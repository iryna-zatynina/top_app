import React from 'react';
import {PtagProps} from "./Ptag.props";
import cn from "classnames";
import styles from "./Ptag.module.css";

const Ptag = ({ children, size = 'medium', classname, ...props}: PtagProps):JSX.Element => {
    return (
        <p className={cn(styles.p, classname, {
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large'
            })}
            {...props}

        >
            {children}
        </p>
    );
};

export default Ptag;