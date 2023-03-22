import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLProgressElement>, HTMLProgressElement>{
    children: ReactNode,
    size?: 'small' | 'medium' | 'large',
}