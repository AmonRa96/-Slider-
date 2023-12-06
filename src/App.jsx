import { Carousel } from "./carrousel/Carrousel";
import { data } from "./data";

export const App = () =>{
    const settings = {
        data:data,
        height:300,
        picsCount:3,
        autoplay:false,
        speed:4000,
        leftButtonContent:"prev",
        nextButtonContent:"next",
        buttonColor:"blue",
        buttonTextColor:"white",
        onNext: ()=>console.log("next"),
        onPrev: ()=>console.log("prev"),

    }
    return (
        <Carousel {...settings} />    )
}