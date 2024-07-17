import {useContext} from "react";
import {MyContext} from "../MyContext";

export default function B() {
    let [cxt, setCxt] = useContext(MyContext);
    return (
        <>
            {cxt.name}
            <button onClick={() => setCxt({name: 'Haha', age: 25})}>Change Context</button>
        </>

    )
}