import { useEffect, useRef, useState } from "react";
import "./Carrousel.css";
import { useDispatch, useSelector } from "react-redux";
import { setItems, setWidth } from "../store/carrouselSlice";
import { Item } from "./Item/Item";
import { data } from "../data";



export  const  Carousel = ({picsCount,autoplay,speed}) =>{

  const firstNumItems = data.slice(0,picsCount);
  const lastNumItems = data.slice(data.length-picsCount,data.length);
  const items = [...lastNumItems,...data,...firstNumItems]


 const width = useSelector(state=>state.carrouselSlice.width);
 const dispatch = useDispatch()

 const [offSet,setOffset] = useState(-width*picsCount);
 const [transition,setTransition] = useState(true); 
 const windowRef = useRef(null);



useEffect(()=>{

  dispatch(setItems(items));

},[])

 useEffect(()=>{   
  if(autoplay){
    let intervalId = setInterval(handleRightClick,speed)
    return(() => {
        clearInterval(intervalId)
    })
  }
     
 },[transition,offSet])
 console.log(transition,"transition")

const handleLeftClick = () =>{
  if(offSet===-width*picsCount){    
    setTimeout( ()=>{
     setTransition(false);
     setOffset(-(width*(items.length-1-picsCount)));
   },300)
  }
setOffset((currentOffset)=>{
  setTransition(true);
    const newOffset = currentOffset + width;
    return Math.min(newOffset, 0)
})

}

const handleRightClick = () =>{
  setTransition(true)

  if(offSet ===-(width*(items.length-1-picsCount))){
     setTimeout(()=>{
      setTransition(false);      
      setOffset(-width*picsCount);   
    },300)
   

  }  
  setOffset((currentOffset)=>{
    const newOffset = currentOffset - width;
    const maxOffset = -(width*(items.length-1)) 
    return Math.max(newOffset, maxOffset) 
  })
}

const moveMouse = (e) =>{
  e.preventDefault();
  console.log("ggggg")
}

    return (        
        <div className="main-container" 
             style={{
              width:`${picsCount*width}px`
             }}
        >
          <button className="button" onClick={handleLeftClick}>prev</button>

          <div className="window" ref={windowRef} onClick={moveMouse}>            
            <div className={transition?"all-pages-container-withTransition":"all-pages-container"}
                 style={{
                    transform: `translateX(${offSet}px)`
                 }}
            > 
              {
              items.map(({name,color})=>{
                return <Item key={Math.random()} name={name} color={color} picsCount={picsCount}/>
              })
            }     
              </div>           
          </div>
          <button className="button" onClick={handleRightClick}>next</button>

        </div>               
    )
}

