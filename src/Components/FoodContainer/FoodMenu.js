import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Skeleton from "@material-ui/lab/Skeleton";
import Paper from "@material-ui/core/Paper";
import { Divider } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import FoodMenu from "./FoodMenu";

const useStyles = makeStyles((theme) => ({
  foodContainer: {
    margin: "1.3rem 0",
    [theme.breakpoints.up(780)]: {
      margin: "2rem 0",
    },
    "& .MuiPaper-root": {
      boxShadow: "0px 2px 8px #ddd",
      background: "#f7f8fa",
      border: "1px solid #e5e6e8",
    },
    "& .MuiPaper-rounded": {
      borderRadius: 10,
    },
  },
  menuCard: {
    padding: 20,
  },
  divider: {
    margin: "10px 0",
  },
}));

export default function FoodContainer() {
  const classes = useStyles();
  return (
    <div className={classes.foodContainer}>
      <Container>
        <FoodMenu />
        {/* <Grid>
          <Grid item sm={4}>
            <Paper className={classes.menuCard}>
              <Grid>
                <Grid item className={classes.cardTitle}>
                  <Typography variant="h6"> MENU </Typography>
                </Grid>
                <Grid className="d-sm-none">
                  <Divider
                    className={classes.divider}
                    orientation="horizontal"
                  />
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item sm={8}></Grid>
        </Grid> */}
      </Container>
    </div>
  );
}
