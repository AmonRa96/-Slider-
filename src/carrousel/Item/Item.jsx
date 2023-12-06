export const Item = ({ width,name, color, picsCount,src }) =>{
    return (
        <>
        <div style={{
            backgroundColor: color,
            color:"white",
            fontSize: "32px",
            minWidth: `${width/picsCount}px`,
            maxWidth: `${width/picsCount}px`,
        }}>{src?<img alt="icon" src={require(`../assets/${src}`)}
        style={{
            minWidth: `${width/picsCount}px`,
            maxWidth: `${width/picsCount}px`,
            height: `100%`
            }}/>:name}</div>
        
        </>
        
    )
}