import {Button, Htag} from "../components";
import Ptag from "../components/Ptag/Ptag";
import Tag from "../components/Tag/Tag";


export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag='h1'>Text</Htag>
            <Button appearance='primary' className='cclas' arrow='right'>Text</Button>
            <Button appearance='ghost' className='cclas' arrow='down'>Text</Button>
            <Ptag size='small'>hello</Ptag>
            <Ptag size='medium'>hello</Ptag>
            <Ptag size='large'>hello</Ptag>
            <Ptag>hello</Ptag>
            <Tag color='green'>fff</Tag>
            <Tag color='primary' size="small">fff</Tag>
        </>
    );
}
