import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 524,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}
