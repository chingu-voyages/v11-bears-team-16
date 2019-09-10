import React, { useState, useEffect } from "react";

import "./BinarySearch.scss";

const BinarySearch = ({ sortedList }) => {
  const mid = Math.floor((sortedList.length - 1) / 2);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(sortedList.length - 1);
  const [midIndex, setMidIndex] = useState(mid);
  const [selectedNumber, setSelectedNumber] = useState(sortedList[mid]);
  const [isRunning, setIsRunning] = useState(false);

  const numberToFind = 6;
  const [leftTransparent, setLeftTransparent] = useState(-Infinity);
  const [rightTransparent, setRightTransparent] = useState(Infinity);

  useEffect(() => {
    setTimeout(() => {
      if (isRunning) {
        let newLeftIndex = leftIndex;
        let newRightIndex = rightIndex;

        // FIXME: Fix for edge cases.
        if (numberToFind > selectedNumber) {
          setLeftTransparent(midIndex);
          newLeftIndex = midIndex + 1;
          setLeftIndex(newLeftIndex);
        } else if (numberToFind < selectedNumber) {
          setRightTransparent(midIndex);
          newRightIndex = midIndex - 1;
          setRightIndex(newRightIndex);
        } else {
          setLeftTransparent(midIndex - 1);
          setRightTransparent(midIndex + 1);
          setIsRunning(false);
        }
        if (selectedNumber != numberToFind) {
          setSelectedNumber(() => {
            const mid = Math.floor((newRightIndex + newLeftIndex) / 2);
            setMidIndex(mid);
            return sortedList[mid];
          });
        }
      }
    }, 3000);
  }, [selectedNumber, isRunning]);

  const actionButtonClickHandler = () => {
    setIsRunning(!isRunning);
  };

  const restartButtonClickHandler = () => {
    const mid = Math.floor((sortedList.length - 1) / 2);
    setLeftIndex(0);
    setRightIndex(sortedList.length - 1);
    setMidIndex(mid);
    setSelectedNumber(sortedList[mid]);
    setIsRunning(true);
    setLeftTransparent(-Infinity);
    setRightTransparent(Infinity);
  };

  return (
    <>
      <div>Search for {numberToFind}</div>
      {selectedNumber !== numberToFind && !isRunning ? (
        <button onClick={actionButtonClickHandler}>
          {isRunning ? "Pause" : "Start"}
        </button>
      ) : null}
      <button onClick={restartButtonClickHandler}>Restart</button>
      <div className="container">
        {sortedList.map((el, i) => {
          const cellStyles = ["list"];
          if (el === selectedNumber) cellStyles.push("selected");
          if (i <= leftTransparent || i >= rightTransparent)
            cellStyles.push("transparent");
          return (
            <div key={i} className={cellStyles.join(" ")}>
              {el}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BinarySearch;
