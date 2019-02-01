import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
// Ref : https://developers.google.com/chart/interactive/docs/gallery/histogram
const chartEvents = [
  {
    eventName: "select",
    callback({ chartWrapper }) {
      console.log("Selected ", chartWrapper.getChart().getSelection());
    }
  }
];

//const data = [
//  ["age", "weight"],
//  [8, 12],
//  [4, 5.5],
//  [11, 14],
//  [4, 5],
//  [3, 3.5],
//  [6.5, 7]
//];
 
const options = {
  title: "Years vs. Salary comparison",
  hAxis: { title: "Years", viewWindow: { min: 0, max: 10 } },
  vAxis: { title: "Salary", viewWindow: { min: 0, max: 100 } },
  legend: "none"
};
class ChartPage extends React.Component {
  //constructor(props) {
   //     super(props);
   // }

  render() {
    return (
      <Chart
      chartType="ScatterChart"
      data={this.props.listDataFromParent}
      options={options}
      graphID="ScatterChart"
      width="100%"
      height="400px"
      chartEvents={chartEvents}
    />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ChartPage />, rootElement);
export default ChartPage;
