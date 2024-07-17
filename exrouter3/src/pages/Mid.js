import Carousel from "../components/Carousel";
import ListProduct from "./ListProduct";

export default function Mid(){
    return (
        <>
            <div className="col-7">
                <div className="row">
                    <div className="col-12">
                        <Carousel></Carousel>
                    </div>
                    <div className="col-12">
                        <ListProduct></ListProduct>
                    </div>
                </div>
                <div className="row"></div>
            </div>
        </>
    )
}
