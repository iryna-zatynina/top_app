import {Button, Htag} from "../components";
import Ptag from "../components/Ptag/Ptag";
import Tag from "../components/Tag/Tag";
import {useEffect, useState} from "react";
import Rating from "../components/Rating/Rating";


export default function Home(): JSX.Element {
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
