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
        plotOptions: {
          radar: {
            polygons: {
              //Graph colors
              strokeColors: '#e8e8e8',
              connectorColors: '#e8e8e8',
              fill: {
                colors: undefined
              }
            }
          }
        },
        colors: ['#a66efa', '#ee538b', '#6ea6ff'],
        markers: {
          size: 0
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.5
        },
        xaxis: {
          categories: ['Gender', 'Race', 'Accessibility', 'Education', 'Economic Background', 'Country of Origin', 'Sexual Identity']
        },
        yaxis: {
          show: false
        }
      },
      series: [
        {
          name: "IBM Average",
          data: [30, 40, 45, 50, 49, 150, 70],
        },
        {
          name: "Your Team",
          data: [10, 80, 90, 35, 80, 10, 5],
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
