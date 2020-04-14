import React from "react";
import { Card, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading.....";
  }
  const recoveredPercentage = (
    (recovered.value / confirmed.value) *
    100
  ).toFixed(2);
  const deathsPercentage = ((deaths.value / confirmed.value) * 100).toFixed(2);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textPrimary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of active cases of COVID-19
          </Typography>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <Typography color="textSecondary" gutterBottom>
            Recovered
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={recovered.value}
              duration={2.5}
              separator=","
            />
            <span className={styles.recoveredperent}>
              ( {recoveredPercentage}% )
            </span>
          </Typography>
          <Typography color="textPrimary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of recovered cases from COVID-19
          </Typography>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <Typography color="textSecondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
            />
            <span className={styles.deathsperent}>( {deathsPercentage}% )</span>
          </Typography>

          <Typography color="textPrimary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of deaths caused by COVID-19
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
