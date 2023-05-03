import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItem} from "../interfaces/menu.interface";
import {API} from "../helpers/api";
import MainPageComponent from "../page-components/MainPageComponent/MainPageComponent";


function Home(): JSX.Element {
    return (
        <>
            <MainPageComponent />
        </>
    );
}

export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
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