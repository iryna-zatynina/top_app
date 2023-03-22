import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode,
    size?: 'small' | 'medium',
    href?: string,
    color: 'ghost' | 'red' | 'primary' | 'grey' | 'green',
}