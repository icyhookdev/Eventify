import React from 'react';

import classes from './StatisticsView.module.css';
import ChartJs from '../../../components/Chart/Chart';

const data = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
    </div>
  </div>
);

export default StatisticsView;
