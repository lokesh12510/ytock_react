import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Skeleton from "@material-ui/lab/Skeleton";
import Paper from "@material-ui/core/Paper";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles((theme) => ({
  shopContainer: {
    margin: "1.3rem 0",
    [theme.breakpoints.up(780)]: {
      margin: "2rem 0",
    },

    "& .MuiPaper-root": {
      boxShadow: "0px 2px 8px #ddd",
    },
    "& .MuiPaper-rounded": {
      borderRadius: 15,
      overflow: "hidden",
    },
  },
  shopImage: {
    width: "100%",
    height: "100%",
    minHeight: "240px",
    transform: "none",
  },
  storeContentContainer: {
    "& .MuiGrid-item": { padding: "7px 0" },
    padding: ".7rem",
    [theme.breakpoints.up(780)]: {
      padding: "1.4rem",
    },
    // "& .storeLocationGrid": {
    //   paddingTop: 0,
    //   paddingBottom: 0,
    // },
  },
  storeTitle: {
    fontWeight: 500,
    [theme.breakpoints.down(780)]: {
      fontSize: "1.3rem",
    },
  },
  storeLocation: {
    "& .MuiSvgIcon-root": {
      verticalAlign: "text-top",
    },
  },
  storeContent: {
    "& .MuiSvgIcon-root": {
      verticalAlign: "text-bottom",
      marginInlineEnd: 5,
      fontSize: 20,
    },
  },

  storeDetails: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 10,
    padding: 15,
    "& .MuiSvgIcon-root": {
      verticalAlign: "text-bottom",
      marginInlineEnd: 5,
      fontSize: 20,
    },
    "& .deliverTime": {
      marginInlineEnd: 5,
    },
    "& .MuiGrid-item": {
      marginLeft: 8,
      marginRight: 8,
    },
  },
  storeImageContainer: {
    width: "calc(100% - 1px)",
  },
  storeImages: {
    padding: 5,
    flexWrap: "nowrap!important",
    overflow: "auto",
    display: "flex",

    "& .shopImg": {
      width: 50,
      height: 50,
      borderRadius: 7,
      objectFit: "cover",
      margin: "0 5px",
    },
  },
  shopPolicy: {
    fontSize: "1rem",
    textAlign: "end",
    "& .MuiSvgIcon-fontSizeSmall": {
      fontSize: "1rem",
      verticalAlign: "middle",
    },
  },
  successIcon: {
    color: "green",
  },
  errorIcon: {
    color: "red",
  },
}));

export default function ShopCard() {
  const classes = useStyles();

  return (
    <div className={classes.shopContainer}>
      <Container>
        <Paper>
          <Grid container>
            {/* Store-Image-start  */}
            <Grid item xs={12} sm={4} className={classes.shopImageGrid}>
              <Skeleton className={classes.shopImage} />
            </Grid>
            {/* Store-Image-end */}

            {/* Store-Content-start*/}
            <Grid item xs={12} sm={8}>
              <div className={classes.storeContentContainer}>
                <div container direction="column">
                  <Grid item sm={12}>
                    {/* Store-Title */}
                    <Typography className={classes.storeTitle} variant="h4">
                      Aanandhaas Restaurant
                    </Typography>
                    {/* Store-Title */}
                  </Grid>
                  {/* Store-location */}
                  <Grid item className="storeLocationGrid">
                    <div className={classes.storeLocation}>
                      <div className={classes.storeContent}>
                        <Grid container alignItems="center">
                          <Grid item sm={7}>
                            <div container alignItems="start">
                              <Typography variant="p" gutterBottom>
                                <LocationOnIcon color="primary" />
                              </Typography>

                              <Typography variant="p" gutterBottom>
                                #5/10, Balaji Mahal 73e, Seven Wells Street,
                                Coimbatore
                              </Typography>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={5}>
                            <Grid container alignItems="start">
                              <Typography variant="p" gutterBottom>
                                <CallIcon color="primary" />
                              </Typography>

                              <Typography variant="p" gutterBottom>
                                +91 8098174100
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </Grid>
                  {/* Store-location */}

                  {/* Store-details */}
                  <Grid item>
                    <div className={classes.storeDetails}>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Grid item>
                          <Typography variant="p" component="p" gutterBottom>
                            <QueryBuilderIcon color="primary" />
                            ₹100
                          </Typography>
                          <Typography
                            variant="caption"
                            component="p"
                            gutterBottom
                          >
                            Min order
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="p" component="p" gutterBottom>
                            <QueryBuilderIcon color="primary" />
                            9am - 8pm
                          </Typography>
                          <Typography
                            variant="caption"
                            component="p"
                            gutterBottom
                          >
                            Preferable Time
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="p" component="p" gutterBottom>
                            <QueryBuilderIcon color="primary" />
                            Order food online
                          </Typography>
                          <Typography
                            variant="caption"
                            component="p"
                            gutterBottom
                          >
                            <Typography
                              color="primary"
                              variant="p"
                              gutterBottom
                              className="deliverTime"
                            >
                              18 mins
                            </Typography>
                            to deliver on your location
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="p" component="p" gutterBottom>
                            <QueryBuilderIcon color="primary" />
                            Pickup your order
                          </Typography>
                          <Typography
                            variant="caption"
                            component="p"
                            gutterBottom
                          >
                            Delivery available in your location
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  {/* Store-details */}
                  <Grid item sm={12}>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Grid
                        item
                        sm={12}
                        lg={6}
                        className={classes.storeImageContainer}
                      >
                        <div item className={classes.storeImages}>
                          <img
                            className="shopImg"
                            src="https://live.ytock.com/uploads/live/restaurant/banner/restaurant1511950072.png"
                            alt=""
                          />
                          <img
                            className="shopImg"
                            src="https://live.ytock.com/uploads/live/restaurant/banner/restaurant1511950072.png"
                            alt=""
                          />

                          <img
                            className="shopImg"
                            src="https://live.ytock.com/uploads/live/restaurant/banner/restaurant1511950072.png"
                            alt=""
                          />
                          <img
                            className="shopImg"
                            src="https://live.ytock.com/uploads/live/restaurant/banner/restaurant1511950072.png"
                            alt=""
                          />
                        </div>
                      </Grid>
                      <Grid item sm={12} lg={6}>
                        <div className={classes.shopPolicy}>
                          <Typography variant="p" component="p" gutterBottom>
                            <QueryBuilderIcon
                              fontSize="small"
                              color="primary"
                            />{" "}
                            Pre order option :{" "}
                            <CheckIcon
                              fontSize="small"
                              className={classes.successIcon}
                            />{" "}
                            Yes
                          </Typography>
                          <Typography variant="p" component="p" gutterBottom>
                            <HighlightOffIcon
                              fontSize="small"
                              color="primary"
                            />{" "}
                            Cancellation Policy :{" "}
                            <CloseIcon
                              fontSize="small"
                              className={classes.errorIcon}
                            />{" "}
                            Yes
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
            {/* Store-Content-end*/}
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
