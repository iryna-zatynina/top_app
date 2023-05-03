import React, {useState} from 'react';
import {SearchProps} from "./Search.props";
import cn from "classnames";
import styles from "./Search.module.css";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import SearchIcon from "./search.svg";
import {useRouter} from "next/router";

const Search = ({placeholder, className, ...props}: SearchProps):JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            goToSearch();
        }
    };

    return (
        <form className={cn(styles.search, className)} {...props} role="search">
            <Input
                className={styles.input}
                placeholder={placeholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                appearance='primary'
                className={styles.button}
                onClick={goToSearch}
                area-lable="Искать по сайту"
            >
                <SearchIcon />
            </Button>
        </form>
    );
};

export default Search;