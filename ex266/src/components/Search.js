import {useContext} from "react";
import {MyContext} from "../MyContext";

export default function Search() {
    let [cxt, setCxt] = useContext(MyContext);
    return (
        <>
            <input onChange={(e) => {
                setCxt({key: e.target.value})
            }}/>
        </>
    )
}