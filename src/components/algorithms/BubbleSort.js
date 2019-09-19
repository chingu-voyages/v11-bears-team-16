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
  setNumbers,
  numbers,
  number,
  setEndIndex,
  size,
  index
}) => {
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);

  useEffect(() => {
    console.log(index, "INDEX BEFORE useEffectChecks");
    if (numbers[index] > numbers[index + 1]) {
      console.log("slideRight");
      setSlideRight(true);
      // setNumbers()
      //
      // update numbers array here.
    }

    if (numbers[index] < numbers[index - 1]) {
      console.log("slideLeft");
      setSlideLeft(true);
      const swappedNumbers = numbers;
      console.log(swappedNumbers, "SNSN");
      [swappedNumbers[index], swappedNumbers[index - 1]] = [
        swappedNumbers[index - 1],
        swappedNumbers[index]
      ];
      setTimeout(() => {
        setNumbers(swappedNumbers);
        // setEndIndex(ei => ei - 1);
      }, 2000);
    }
  });

  // give each number a pseudo index which is their visual index even if it is not their array index.

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

const Bars = ({
  numbers,
  currentIndex,
  setCurrentIndex,
  setNumbers,
  setEndIndex
}) => {
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
            setNumbers={setNumbers}
            setEndIndex={setEndIndex}
          />
        );
      })}
    </div>
  );
};

const BubbleSort = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numbers, setNumbers] = useState([4, 9, 3]);
  const [endIndex, setEndIndex] = useState(numbers.length - 1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (currentIndex < endIndex) {
      console.log(currentIndex, "hummmm");

      setCurrentIndex(ci => ci + 1);
    } else {
      console.log(currentIndex, "hummmm");

      setCurrentIndex(0);
    }
  }, [numbers]);

  const startButtonClickHandler = () => {
    console.log(numbers, currentIndex);
  };

  return (
    <>
      <button onClick={startButtonClickHandler}>Start</button>
      <Bars
        numbers={numbers}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        setNumbers={setNumbers}
        setEndIndex={setEndIndex}
      />
    </>
  );
};

export default BubbleSort;
