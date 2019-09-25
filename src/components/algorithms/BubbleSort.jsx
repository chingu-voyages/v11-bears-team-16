import React, { useEffect, useState } from 'react'
import BarsWrapper from '../algorithm-blocks/Bars'
import ButtonsWrapper from '../algorithm-blocks/ButtonsWrapper'

// TODO: source array should come from a shared component
// via array size selector
const originalArray = [5, 3, 6, 7, 2]
// FIXME: shouldn't be hardcoded
const sortedArray = [2, 3, 5, 6, 7]

const BubbleSort = () => {
  const [numbers, setNumbers] = useState([...originalArray])
  const [isRunning, setIsRunning] = useState(false)
  const [leftIndex, setLeftIndex] = useState()
  const [rightIndex, setRightIndex] = useState()

  // TODO: create reusable component with controllers
  const startAlgorithm = () => {
    setIsRunning(true)
    setLeftIndex(0)
    setRightIndex(1)
  }
  const pauseAlgorithm = () => {
    setIsRunning(false)
  }
  const resetAlgorithm = () => {
    setIsRunning(false)
    setRightIndex()
    setLeftIndex()
    setNumbers([...originalArray])
  }

  // TODO: convert to reusable fucntion
  const swap = arr => {
    let temp = arr[leftIndex]
    arr[leftIndex] = arr[rightIndex]
    arr[rightIndex] = temp
  }

  const updateIndexes = () => {
    if (rightIndex < numbers.length) {
      setLeftIndex(prevIndx => prevIndx + 1)
      setRightIndex(prevIndx => prevIndx + 1)
    } else {
      setLeftIndex(0)
      setRightIndex(1)
    }
  }

  // TODO: this should be inside a basic step() function that
  // would be shared between all algorithms
  const compareNumbers = () => {
    let arr = [...numbers]
    if (arr[leftIndex] > arr[rightIndex]) {
      swap(arr)
      setNumbers(arr)
    }
    updateIndexes()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        compareNumbers()
      }
    }, 1000)
    return () => clearInterval(interval)
  })

  useEffect(() => {
    if (
      JSON.stringify(numbers) === JSON.stringify(sortedArray) &&
      rightIndex === numbers.length - 1
    ) {
      pauseAlgorithm()
    }
  }, [numbers, rightIndex])

  return (
    <>
      <BarsWrapper arr={numbers} left={leftIndex} right={rightIndex} />
      <ButtonsWrapper start={startAlgorithm} pause={pauseAlgorithm} reset={resetAlgorithm} />
    </>
  )
}

export default BubbleSort
