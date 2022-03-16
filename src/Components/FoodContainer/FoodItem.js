import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Skeleton from "@material-ui/lab/Skeleton";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Chip from "@material-ui/core/Chip";
const useStyles = makeStyles((theme) => ({
  root: { margin: "15px 0", padding: "0 15px" },
  foodImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  foodCard: {
    padding: 20,
    boxShadow: "0px 2px 8px #ddd",
    background: "#f7f8fa",
    border: "1px solid #e5e6e8",
    borderRadius: 10,
  },
  foodContent: {
    padding: "0px 15px",
  },
  mutedText: { color: "#716969", fontWeight: "bold" },
  actionbtns: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    "& .MuiButton-outlined": {
      padding: "5px 0px",
    },
  },
  textCenter: {
    textAlign: "center",
  },
  tag: {
    fontSize: 11,
    height: 20,
    marginInlineEnd: theme.spacing(0.5),
  },
}));

export default function FoodItem(props) {
  const classes = useStyles();

  const tag = props.data.tags.map((tag) => (
    <Chip label={tag} className={classes.tag} clickable color="primary" />
  ));

  return (
    <Grid item className={classes.root}>
      <Paper className={classes.foodCard}>
        <Grid container>
          <Grid item sm={2}>
            <img
              className={classes.foodImage}
              src="https://qa.yelkom.com/uploads/saasqa/restaurant/items/item92484382.jpg"
              alt=""
            />
          </Grid>
          <Grid item sm={8} className={classes.foodContent}>
            <Typography variant="h5" component="p">
              {props.data.name}
            </Typography>
            <Typography
              className={classes.mutedText}
              variant="caption"
              component="p"
              gutterBottom
            >
              {props.data.foodCategory}
            </Typography>
            <Typography variant="caption" component="p" gutterBottom>
              {tag}
            </Typography>

            <Typography variant="caption" component="p" gutterBottom>
              {props.data.description}
            </Typography>
          </Grid>
          <Grid item sm={2} className={classes.actionbtns}>
            <div className="price">
              <Typography variant="h6" component="p">
                $ {props.data.price}
              </Typography>
            </div>
            <div className={classes.textCenter}>
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
              >
                <Button>
                  <AddIcon />
                </Button>
                <Button disableTouchRipple>Add</Button>
                <Button>
                  <RemoveIcon />
                </Button>
              </ButtonGroup>
              <Typography variant="caption">Customizable</Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
