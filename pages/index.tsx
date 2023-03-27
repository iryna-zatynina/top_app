import {Button, Htag} from "../components";
import Ptag from "../components/Ptag/Ptag";
import Tag from "../components/Tag/Tag";
import {useState} from "react";
import Rating from "../components/Rating/Rating";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItem} from "../interfaces/menu.interface";


function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag='h1'>counter</Htag>
            <Button appearance='primary' arrow='right' >Text</Button>
            <Button appearance='ghost' arrow='down'>Text</Button>
            <Ptag size='small'>hello</Ptag>
            <Ptag size='medium'>hello</Ptag>
            <Ptag size='large'>hello</Ptag>
            <Ptag>hello</Ptag>
            <Tag color='green'>fff</Tag>
            <Tag color='primary' size="small">fff</Tag>
            <Rating rating={rating} isEditable setRating={setRating}></Rating>

        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[],
    firstCategory: number
}