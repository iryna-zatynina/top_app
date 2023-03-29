import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import {TopLevelCategory} from "../interfaces/page.interface";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import React from "react";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сeрвисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книга', icon: <BooksIcon />, id: TopLevelCategory.Books},
    {route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products},
];