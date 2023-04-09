import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";


export interface SortProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    sort: SortEnum,
    setSort: (sort: SortEnum) => vois

}

export enum SortEnum {
    Rating,
    Price
}