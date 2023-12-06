/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import './Carrousel.css';
import { Item } from './Item/Item';
import { Button } from './Button/Button';
import { itemConverter, getCurrentDimension } from './utils';

export function Carousel({
  data,
  height,
  picsCount,
  autoplay,
  speed,
  leftButtonContent,
  nextButtonContent,
  buttonColor,
  buttonTextColor,
  onNext,
  onPrev,
}) {
  const [transition, setTransition] = useState(true);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const { width } = screenSize;
  const [offSet, setOffset] = useState(-width);
  const itemWidth = width / picsCount;
  const [isDown, setIsDown] = useState(false);
  const slider = useRef();
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const updateDimension = () => {
      const currentDimensions = getCurrentDimension();
      setScreenSize(currentDimensions);
      setOffset(-currentDimensions.width);
    };
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    });
  }, [screenSize]);

  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(handleRightClick, speed);
      return (() => {
        clearInterval(intervalId);
      });
    }
  }, [offSet, speed, autoplay]);

  const handleLeftClick = () => {
    onPrev();
    if (offSet === -width) {
      setTimeout(() => {
        setTransition(false);
        setOffset(-(itemWidth * (itemConverter(data, picsCount).length - 1 - picsCount)));
      }, 300);
    }
    setOffset((currentOffset) => {
      setTransition(true);
      const newOffset = currentOffset + itemWidth;
      return Math.min(newOffset, 0);
    });
  };

  const handleRightClick = () => {
    const convertedItemsCount = itemConverter(data, picsCount).length - 1;
    onNext();
    setTransition(true);
    if (offSet === -(itemWidth * (convertedItemsCount - picsCount))) {
      setTimeout(() => {
        setTransition(false);
        setOffset(-width);
      }, 300);
    }
    setOffset((currentOffset) => {
      const newOffset = currentOffset - itemWidth;
      const maxOffset = -(itemWidth * (convertedItemsCount));
      return Math.max(newOffset, maxOffset);
    });
  };

  const onMouseDown = (e) => {
    const { offsetLeft, scrollLeft } = slider.current;
    e.preventDefault();
    setIsDown(true);
    setStartX(e.pageX - offsetLeft);
    setScrollLeft(scrollLeft);
  };
  const onMouseLeave = (e) => {
    e.preventDefault();
    setIsDown(false);
  };
  const onMouseUp = (e) => {
    e.preventDefault();
    setIsDown(false);
  };
  const onMouseMove = (e) => {
    e.preventDefault();
    if (!isDown) return;
    const x = e.pageX - slider.current.offsetLeft;
    const walk = (x - startX) * 2;
    slider.current.scrollLeft = scrollLeft - walk;

    if (scrollLeft === (itemWidth * (itemConverter(data, picsCount).length - 1 - picsCount))) {
      setTimeout(() => {
        setTransition(false);
        slider.current.scrollLeft = -width;
      }, 300);
    }
  };

  return (
    <div
      className="main-container"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <Button
        buttonContent={leftButtonContent}
        handleClick={handleLeftClick}
        color={buttonColor}
        textColor={buttonTextColor}
      />
      <div
        className="window"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        ref={slider}
      >
        <div
          className={transition ? 'all-pages-container-withTransition' : 'all-pages-container'}
          style={{
            transform: `translateX(${offSet}px)`,
          }}
        >
          {
              itemConverter(data, picsCount).map(({ name, color, img }) => (
                <Item
                  width={width}
                  key={Math.random()}
                  name={name}
                  color={color}
                  src={img}
                  picsCount={picsCount}
                />
              ))
            }
        </div>
      </div>
      <Button
        buttonContent={nextButtonContent}
        handleClick={handleRightClick}
        color={buttonColor}
        textColor={buttonTextColor}
      />
    </div>
  );
}
