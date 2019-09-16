import React, { useState, useEffect, useRef } from "react"
import * as d3 from "d3"

import "./style.css"

const Index = ({arr}) => {
    const [minVal, setMinVal] = useState(arr[0])
    const [numbers, setNumbers] = useState(arr)

        const bars = []
        for (let j=0; j<=numbers.length; j++) {
            bars.push(j)
        }
    const canvas = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            arr.forEach((eli, i) => {
                setNumbers(arr)
                setTimeout(() => {
                  let min = i
                  console.log("i")
                  console.log(i)
                  arr.slice(i+1).forEach((elj, j) => {
                    console.log("j")
                    console.log(j)
                    if (arr[min] > elj) {
                      min = arr.indexOf(elj)
                    }
                    
                  })
                  setMinVal(arr[min])
                  if (i !== min) {
                    let temp = arr[i];
                    arr[i] = arr[min];
                    arr[min] = temp;
                  }
                  
                }, i * 2000);
            });
        },1000)
        
        arr.length && drawBarChart(bars, numbers)
    }, )

    const drawBarChart = (bars, numbers) => {
        const margin = { top: 30, bottom: 60, right: 41, left: 30 },
        width = 500,
        height = 250;

    d3.select("svg").remove()

    // var div = d3.select(canvas.current).append("div")
    //     .attr("id", "tooltip")
    //     .attr("class", "tooltip")
    //     .style("opacity", 0);

    const svg = d3.select(canvas.current)
        .append("svg")
        .attr("width", '100%')
        .attr("height", '100%')
        .attr('viewBox', '0 0 ' + (width + margin.left + margin.right) + ' ' + (height + margin.top + margin.bottom))
        .attr('preserveAspectRatio', 'xMinYMin')

    const xscale = d3.scaleLinear()
        .domain([d3.min(bars), d3.max(bars)])
        .range([0, width]);

    const xAxis = d3.axisBottom(xscale).tickValues(bars)

    svg.append('g')
        .call(xAxis)
        .attr('id', 'x-axis')
        .attr('transform', 'translate(60, 280)');
    
    svg.append('text')
        .attr("x", 225)
        .attr("y", 320)
        .attr("fill", "yellow")
        .text("bar")
        
    const linearScale = d3.scaleLinear()
        .domain([0, d3.max(numbers)])
        .range([0, height]);

    const scaledVals = numbers.map(function (item) {
        return linearScale(item);
    });

    const yscale = d3.scaleLinear()
        .domain([0, d3.max(numbers)])
        .range([height, 0]);

    const yAxis = d3.axisLeft(yscale)

    svg.append('g')
        .call(yAxis)
        .attr('id', 'y-axis')
        .attr('transform', 'translate(60, 30)');

    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -230)
        .attr('y', 15)
        .attr("fill", "yellow")
        .text("number")
    console.log(width/numbers.length)
    svg.selectAll('rect')
        .data(scaledVals)
        .enter()
        .append('rect')
        .attr('width', ((width / numbers.length)-20))
        .attr('height', function (d) {
            return d;
        })
        .attr('fill', 'gold')
        .attr('x', function (d, i) {
            return xscale(bars[i]) + 60;
        })
        .attr('y', function (d, i) {
            return height - d + 30;
        })
        // .on("mouseover", (d, i) => {
        //     div.transition()
        //     .duration(200)
        //     .style("opacity", 0.9)
        //     div.html("Year: " + years[i] + "<br>" + "Avg Temp: " + temps[i] + "&#176;C")
        //     .style('left', (d3.event.pageX - 18) + 'px')
        //     .style('top', (d3.event.pageY - 44) + 'px')
        // })
        // .on("mouseout", function (d) {
        //     div.transition()
        //         .duration(200)
        //         .style("opacity", 0);
        // });
    }
    return (
        <div className="viz-wrapper">
            <div id="canvas" ref={canvas}></div>
        </div>
    )
}

export default Index