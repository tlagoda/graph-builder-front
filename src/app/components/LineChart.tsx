import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface Point {
  x: number;
  y: number;
}

interface LineChartProps {
  data: Point[];
  width?: number;
  height?: number;
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  width = 500,
  height = 500,
}) => {
  const ref = useRef<SVGSVGElement | null>(null);
  const margin = { top: -30, right: 30, bottom: 40, left: -10 };


  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height);

    // Supprimer l'ancien tracé
    svg.selectAll("path").remove();
    svg.selectAll("g").remove();

    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.x) as [number, number])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y) as number])
      .range([height, 0]);

    const line = d3
      .line<Point>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    // Ajout des axes
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale).tickSizeOuter(0));

    svg
      .append("text")
      .attr(
        "transform",
        "translate(" + width / 2 + " ," + (height + margin.top + 20) + ")"
      )
      .style("text-anchor", "middle")
      .text("Time (weeks)")
      .attr("fill", "white");

    svg.append("g").call(d3.axisLeft(yScale).tickSizeOuter(0));

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("MRR ($)")
      .attr("fill", "white");
  }, [data, width, height]);

  return <svg ref={ref}></svg>;
};

export default LineChart;
