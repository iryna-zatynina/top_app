import {withLayout} from "../layout/Layout";
import {Htag} from "../components";

export function Error500(): JSX.Element {
    return (
        <>
            <Htag tag="h2">Ошибка 500</Htag>
        </>
    );
}

export default withLayout(Error500);