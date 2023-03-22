import React from 'react';
import {TagProps} from "./Tag.props";
import cn from "classnames";
import styles from "./Tag.module.css";

const Tag = ({ children, size = 'small', color = 'ghost', href, classname, ...props}: TagProps):JSX.Element => {
    return (
        <div className={cn(styles.tag, classname, {
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.ghost]: color === 'ghost',
            [styles.primary]: color === 'primary',
            [styles.red]: color === 'red',
            [styles.grey]: color === 'grey',
            [styles.green]: color === 'green',
            })}
            {...props}
        >
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
};

export default Tag;