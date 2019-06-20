import React from 'react';

import classes from './StatisticsView.module.css';
import ChartJs from '../../../components/Chart/Chart';

const data = {
  labels: ['numero de eventos', 'media de participantes por evento'],
  datasets: [
    {
      data: [10, 50],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const data2 = {
  labels: [
    'usuarios registrados',
    'media de participantes por evento',
    '% de genero',
  ],
  datasets: [
    {
      data: [10, 50, 30],
      backgroundColor: ['#f29b43', '#36A2EB', '#c994d4'],
      hoverBackgroundColor: ['#f29b43', '#36A2EB', '#c994d4'],
    },
  ],
};

const StatisticsView = () => (
  <div className={classes.statistic}>
    <div className={classes.totals}>
      <div>
        <div className={classes.totals_title}>Usuarios Registrados</div>
        <div className={classes.totals_number}>1324564</div>
      </div>
      <div>
        <div className={classes.totals_title}>Eventos Creados</div>
        <div className={classes.totals_number}>50</div>
      </div>
    </div>
    <div className={classes.totals}></div>
    <div className={classes.eventsByCategories}>
      <ChartJs type="pie" data={data} />
      <ChartJs type="bar" data={data2} />
    </div>
  </div>
);

export default StatisticsView;
