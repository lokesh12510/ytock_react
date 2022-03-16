import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Skeleton from "@material-ui/lab/Skeleton";
import Paper from "@material-ui/core/Paper";
import { Divider } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FoodItem from "./FoodItem";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Grid>{children}</Grid>
        </Box>
      )}
    </div>
  );
}

const foodList = [
  {
    id: 1,
    menuType: "recommended",
    name: "Veg noodles+Chicken Gravy",
    foodType: "veg",
    foodCategory: "spicy",
    description: "Veg noodles+Chicken Gravy unlimited",
    tags: ["bestseller", "spicy"],
    price: "150.00",
    discountPrice: "200.00",
    discountPercentage: "25",
    votes: 1,
  },
  {
    id: 2,
    menuType: "Today's Special",
    name: "Juice + Gulab Jamun",
    foodType: "veg",
    foodCategory: "spicy",
    description: "Juice + Gulab Jamun unlimited",
    tags: ["bestseller", "spicy"],
    price: "110.00",
    discountPrice: "160.00",
    discountPercentage: "25",
    votes: 1,
  },
  {
    id: 3,
    menuType: "recommended",
    name: "Chicken Gravy",
    foodType: "veg",
    foodCategory: "spicy",
    description: "Chicken Gravy unlimited",
    tags: ["bestseller", "spicy"],
    price: "100.00",
    discountPrice: "150.00",
    discountPercentage: "25",
    votes: 3,
  },
];

const menuType = ["recommended", "Today's Special"];

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    margin: "1.3rem 0",
    [theme.breakpoints.up(780)]: {
      margin: "2rem 0",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  menuCard: {
    position: "sticky",
    top: 100,
    padding: 20,
    boxShadow: "0px 2px 8px #ddd",
    background: "#f7f8fa",
    border: "1px solid #e5e6e8",

    borderRadius: 10,

    "& .MuiTab-root": {
      maxWidth: "100%",
    },

    "& .MuiTab-wrapper": {
      maxWidth: "100%",
      alignItems: "start",
    },

    "& .Mui-selected": {
      color: theme.palette.primary.main,
    },
  },
  divider: {
    margin: "10px 0",
  },
  menuTitle: {
    padding: 15,
    borderRadius: "5px",
    position: "sticky",
    backgroundColor: "#fff",
    top: 90,
    zIndex: 5,
    color: "#989494",
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
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
                  <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                  >
                    <Tab label="Recommended" {...a11yProps(0)} />
                    <Tab label="Today's Special" {...a11yProps(1)} />
                  </Tabs>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item sm={8}>
            <TabPanel value={value} index={0}>
              <div className={classes.menuTitle}>
                <Typography variant="h5" component="p">
                  Recommended
                </Typography>
              </div>
              {foodList.map((item) => (
                <FoodItem data={item} />
              ))}
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
