import React from 'react';
import classes from './EventView.module.css';

const EventView = () => (
  <div className={classes.EventView}>
    <div className={classes.container}>
      <div className={classes.containerHeader}>
        <img
          src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F62348591%2F86410149381%2F1%2Foriginal.20190515-191350?w=800&auto=compress&rect=0%2C5%2C3674%2C1837&s=f32cc108fbf603aa9fb121502f767332"
          alt="not found"
          className={classes.containerImage}
        />
        <div className={classes.containerOwner}>
          <div className={classes.containerOwnerDate}>Jun 19</div>
          <div className={classes.containerOwnerTitle}>
            2019 NYC Bacon and Beer Classicd
          </div>
          <div className={classes.containerOwnerName}>By Cristihan A.</div>
          <button type="button" className={classes.subscribe}>
            Inscribirse
          </button>
        </div>
      </div>
      <div className={classes.containerBody}>
        <div className={classes.description}>
          <div className={classes.sectionTitle}>Description</div>
          Join us for Bacon and Beer like never before. On June 8th, we’re
          turning the Brooklyn Mirage into an indulgent tropical paradise filled
          with decadent bacon dishes, free-flowing craft beer, and awesome live
          performances. It’s room after room of summer deliciousness with
          surprises at every turn. Ride a bacon seesaw, swing from a hammock,
          ride a mechanical bull, judge a celebrity chef cook-off and wander a
          carnival of bacon goodness. This isn’t just an all-inclusive food and
          beer festival; this is the ultimate summer kick-off party. Don’t miss
          it. Over 50 local restaurants will be serving bold bacon-inspired
          dishes, and the best local breweries will be pouring over 100 top
          craft varietals. Indulge in dishes like unlimited bacon man 'n cheese,
          pork banh mi, and chocolate covered bacon and wash it all down with
          unlimited pours from the best east coast brewers.
        </div>
        <div className={classes.dateDetails}>
          <div className={classes.contentSection}>
            <div className={classes.sectionTitle}>Fecha</div>
            <div className={classes.text}>Sat, June 8, 2019</div>
          </div>
          <div className={classes.contentSection}>
            <div className={classes.sectionTitle}>Direccion</div>
            <div className={classes.text}>
              The Brooklyn Mirage 140 Stewart Avenue Brooklyn, NY 11237 United
              States
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EventView;
