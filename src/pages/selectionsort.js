import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SelectionSort from "../components/selectionsort"
import "./pages.css"

const Index = () => {
    const [inputValue, setInputValue] = useState("")
    const [arrayToSort, setArrayToSort] = useState([])
    const [isRunning, setIsRunning] = useState(false)


    const addValue = () => { 
        let newNumber = Number(inputValue)
        setArrayToSort([
            ...arrayToSort, newNumber
        ])
        setInputValue("")
    }

    const getNumbers = (numbers) => {
        const displayNumbers = []
        numbers.forEach((number, i) => {
        displayNumbers.push(<p key={i} style={{padding: `0 10px`, fontFamily: `Orbitron`}}>{number}</p>)
        })
        return displayNumbers
    }

    const setStatus = () => {
        setIsRunning(true)
    }
    console.log("running")
    console.log(isRunning)
    let sort
    if (isRunning) {
        sort = <SelectionSort arr={arrayToSort} />
    }

    return (
        <Layout>
            <div className="container">
                <div className="form">
                    <label htmlFor="input-array">Add number to sorting set
                        <input 
                            type="text"
                            value={inputValue}
                            onChange={e => {
                                e.preventDefault()
                                setInputValue(e.target.value)
                            }}
                        />
                    </label>
                    <button type="submit" onClick={addValue}>Submit Input Values</button>
                </div>
                <div className="numbers">
                    {getNumbers(arrayToSort)}
                </div>
                <button className="runstart" type="button" onClick={setStatus}>Sort Array</button>
                {sort}
            </div>      
        </Layout>
    )
}

export default Index