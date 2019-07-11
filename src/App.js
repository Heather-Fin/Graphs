import React, { Component } from "react";
import Chart from "react-apexcharts";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "radar"
        },
        xaxis: {
          categories: ['Gender', 'Race', 'Accessibility', 'Education', 'Economic Background', 'Country of Origin', 'Sexual Identity']
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70]
        }
      ]
    };
  }
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radar"
              width="600"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
