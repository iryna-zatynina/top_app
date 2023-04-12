import {DetailedHTMLProps, HTMLAttributes} from "react";


export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    sort: SortEnum,
    setSort: (sort: SortEnum) => vois

}

export enum SortEnum {
    Rating,
    Price
}