import React, {useEffect, useState, KeyboardEvent, ForwardedRef, forwardRef} from 'react';
import {RatingProps} from "./Rating.props";
import StarIcon from "./star.svg";
import styles from "./Rating.module.css";
import cn from "classnames";

const Rating = forwardRef(({ isEditable = false, rating, setRating, error, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>):JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedRating = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={(): void => changeDisplay(i + 1)}
                    onMouseLeave={(): void => changeDisplay(rating)}
                    onClick={(): void => onClick(i + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>): void => isEditable && handleSpace(i + 1, e)}
                    />
                </span>
            );
        });
        setRatingArray(updatedRating);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };

    return (
        <div className={cn(styles.ratingWrapper, {
            [styles.error] : error
        })} ref={ref} {...props}>
            {ratingArray.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>

    );
});

export default Rating;