import { TopPageComponentProps } from './TopPageComponent.props';
import {HhData, Htag, Tag, Advantages} from "../../components";
import styles from './TopPageComponent.module.css';
import {TopLevelCategory} from "../../interfaces/page.interface";
import Ptag from "../../components/Ptag/Ptag";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    console.log(page);
    return (
        <>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='grey' size='medium'>{products.length}</Tag>}
                <span>sorting</span>
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hh}>
                    <Htag tag='h2'>Вакансии - {page.category}</Htag>
                    <Tag color='red' size='medium'>hh.ru</Tag>
            </div>
            {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 &&
                <>
                    <Htag tag='h2' >Преимущества</Htag>
                    <Advantages advantages={page.advantages} />
                </>
            }
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}} />}
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map((t) => <Tag color='primary' key={t}>{t}</Tag>)}

        </>
    );
};