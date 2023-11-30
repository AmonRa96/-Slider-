import { useState } from "react";
import classes from "./Slider.module.css";
import {  useSelector } from "react-redux";
import { Item } from "./Item/Item"

export const Slider = () => {
  const [movePoint, setMovePoint] = useState(0);
  const data = useSelector((state)=>state.sliderSlice.sliderData)


  const handleLeft = (e) => {
    e.preventDefault();
    setMovePoint(movePoint >= 256 ? movePoint - 256 : window.innerWidth - 256);
  };

  const handleRight = (e) => {
    e.preventDefault();
    setMovePoint(movePoint < window.innerWidth - 256 ? movePoint + 256 : 0);
  };
  console.log(movePoint, "left");

  return (
    <div className={classes.sliderContainer}>
      <div className={classes.buttons}>
      <button onClick={handleLeft} className={classes.prevButton}>prev</button>
      <button onClick={handleRight} className={classes.nextButton}>next</button>
      </div>      
      <div className={classes.slider}>
        <div
          className={classes.sliderLine}
          style={{          
            left: `${movePoint}px`,                  
          }}
        >   
          {
            data.map(({index,img})=>{
              return <Item key={index} img={img}/>
            })
          }      
        </div>
      </div>
    </div>
  );
};
