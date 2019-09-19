import React, { useEffect, useState } from "react";
import { animated, config, useSpring } from "react-spring";

import "./BubbleSort.scss";

// const AnimatedBar = ({ index, color, size }) => {
//   const [position, setPosition] = useState(index);

//   const animations = useSpring({
//     x: position,
//     config: config.wobbly
//   });

//   useEffect(() => {
//     setPosition(index);
//   }, [index]);

//   const transform = animations.x.interpolate(v => `translateX(${v * 30}px)`);

//   return (
//     <animated.div style={{ transform }}>
//       <Bar color={color} size={size} />
//     </animated.div>
//   );
// };

const Bar = ({
  setCurrentIndex,
  currentIndex,
  numbers,
  number,
  size,
  index
}) => {
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);

  useEffect(() => {
    if (numbers[index] > numbers[index + 1]) {
      setSlideRight(true);
    }
    if (numbers[index] < numbers[index - 1]) {
      setSlideLeft(true);
    }
  });

  const barStyle =
    "bar " +
    (currentIndex === index && slideRight ? "right " : "") +
    (currentIndex + 1 === index && slideLeft ? "left " : "");

  return (
    <div style={{ height: `${size * 30}px` }} className={barStyle}>
      {size}
    </div>
  );
};

const Bars = ({ numbers, currentIndex, setCurrentIndex }) => {
  return (
    <div className="bars">
      {numbers.map((number, i) => {
        return (
          <Bar
            numbers={numbers}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            number={number}
            key={number}
            size={number}
            index={i}
          />
        );
      })}
    </div>
  );
};

const BubbleSort = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numbers = [9, 3];

  return (
    <>
      <Bars
        numbers={numbers}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
};

export default BubbleSort;
