import {AdvantagesProps} from "./Advantages.props";
import CheckIcon from "./check.svg";
import {Htag} from "../Htag/Htag";
import Ptag from "../Ptag/Ptag";
import styles from "./Advantages.module.css";

export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map((advantage) => (
                <div key={advantage._id} className={styles.advantage}>
                    <CheckIcon />
                    <Htag tag='h4'>{advantage.title}</Htag>
                    <hr className={styles.line} />
                    <Ptag size='large' >{advantage.description}</Ptag>
                </div>
            ))}
        </>

    );
};