import { useSelector } from "react-redux"
import "./Item.css"

export const Item = ({name, color, picsCount}) =>{
    const width =useSelector((state)=>state.carrouselSlice.width)
    return (
        <>
        <div style={{
            backgroundColor: color,
            color:"white",
            fontSize: "32px",
            minWidth: `${width}px`,
            maxWidth: `${width}px`,
        }}>{name}</div>
        </>
        
    )
}