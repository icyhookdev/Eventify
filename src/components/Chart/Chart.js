import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import classes from './Chart.module.css';

const ChartJs = ({ type, data, title }) => (
  // const chartData = {
  //   labels: [
  //     `${moment(new Date()).format(`MMM ${day - 4}`)}`,
  //     `${moment(new Date()).format(`MMM ${day - 3}`)}`,
  //     `${moment(new Date()).format(`MMM ${day - 2}`)}`,
  //     `${moment(new Date()).format(`MMM ${day - 1}`)}`,
  //     `${moment(new Date()).format(`MMM ${day}`)}`,
  //   ],
  //   datasets: [
  //     {
  //       label: 'Population',
  //       data: [10, 20, 40, 80, 20, 1],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.6)',
  //         'rgba(54, 162, 235, 0.6)',
  //         'rgba(255, 206, 86, 0.6)',
  //         'rgba(75, 192, 192, 0.6)',
  //         'rgba(153, 102, 255, 0.6)',
  //         'rgba(255, 159, 64, 0.6)',
  //         'rgba(255, 99, 132, 0.6)',
  //       ],
  //     },
  //   ],
  // };

  <div className={classes.Chart}>
    {type === 'pie' && (
      <Pie
        data={data}
        width={100}
        height={200}
        options={{ maintainAspectRatio: false }}
      />
    )}
    {type === 'line' && (
      <Line
        data={data}
        width={100}
        height={200}
        options={{ maintainAspectRatio: false, fontSize: 25 }}
      />
    )}
    {type === 'bar' && (
      <Bar
        data={data}
        width={100}
        height={200}
        options={{ maintainAspectRatio: false }}
      />
    )}
  </div>
);
export default ChartJs;
