import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../../assets/images/logo.png";
import profileImg from "../../assets/images/default_profile.png";
import Grid from "@material-ui/core/Grid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import InputBase from "@material-ui/core/InputBase";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import "./Navbar.css";
import Divider from "@material-ui/core/Divider";
import Popover from "@material-ui/core/Popover";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import AuthContext from "../../Auth/AuthContext";

// Navbar-styles-start
const useStyles = makeStyles((theme) => ({
  loginbtn: {
    color: "#000",
    "& .MuiButton-startIcon": { fontSize: "30" },
  },
  locationGrid: { display: "grid", placeItems: "center" },
  white: { color: "#fff" },
  divider: { height: 28, margin: 0 },
  hdivider: { margin: "0 30px" },
  tabs: {
    minHeight: "auto",
    backgroundColor: theme.palette.secondary.main,
    padding: "5px",
    borderRadius: "30px",
    width: "fit-content",
    "& .MuiTab-root": { minWidth: "auto", minHeight: "auto", zIndex: "2" },
    "& .MuiTabs-indicator": {
      backgroundColor: "#fff",
      height: "100%",
      zIndex: "1",
      borderRadius: "30px",
    },
  },
  card: {
    minWidth: "300px",
    "& .MuiCardContent-root": { padding: 0 },
    "& .MuiListItem-gutters": { paddingLeft: "30px", paddingRight: "30px" },
  },
  navTabs: {
    minWidth: "200px",
    "& .MuiCardContent-root": { padding: 0 },
    "& .MuiListItem-root": {
      paddingTop: 2,
      paddingBottom: 2,
    },
    "& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
      transition: "all .7s",
    },
  },
  popover: {
    "& .MuiPaper-rounded": { borderRadius: "10px" },
  },
  tabsPopover: {
    "& .MuiPopover-paper": { boxShadow: "0px 2px 8px rgb(197, 197, 197)" },
    "& .MuiPaper-rounded": { borderRadius: "10px" },
  },
}));
// Navbar-styles-end

export default function Navbar() {
  const classes = useStyles();

  const ctx = useContext(AuthContext);

  // Handle-mobile-location-dropdown-start
  const [hide, setHide] = React.useState(false);

  const handleHide = () => {
    setHide(!hide);
  };
  // Handle-mobile-location-dropdown-end

  // Handle-tab-switch-start
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Handle-tab-switch-end

  // Handle-location-select-dropdown-start
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // Handle-location-select-dropdown-end

  // Handle-navTabs-click-start
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  // Handle-navTabs-click-end

  // Navbar-tab-switch-component-start
  const TabButtons = (
    <Tabs
      value={value}
      className={classes.tabs}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Delivery" />
      <Tab label="Takeaway" />
    </Tabs>
  );
  // Navbar-tab-switch-component-end

  return (
    <AppBar
      position="sticky"
      color={classes.white}
      className={hide ? "appbar show" : "appbar"}
    >
      <Container>
        <div className="navs">
          <Toolbar className="toolbar">
            {/* Navbar-left-side-content-start */}
            <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {/* Logo-image-start */}
              <Grid item sm={6} md={2}>
                <img src={Logo} className="logo" alt="ytock logo" />
              </Grid>
              {/* Logo-image-end */}

              {/* Navbar-Location-container-start */}
              <Grid
                item
                xs={12}
                sm={12}
                md={7}
                className={hide ? "grow hide" : "grow"}
              >
                <Paper className="navLocationContainer">
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs={1} sm={1} className={classes.locationGrid}>
                      <LocationOnIcon
                        className="locationIcon"
                        color="primary"
                      />
                    </Grid>

                    <Grid
                      item
                      className="relative location"
                      xs={9}
                      sm={4}
                      md={6}
                    >
                      <label className="locationLabel">
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                        >
                          Delivery To
                        </Typography>
                      </label>
                      <InputBase
                        aria-describedby={id}
                        onClick={handleClick}
                        placeholder="Search your location"
                        inputProps={{ "aria-label": "search google maps" }}
                        autoComplete="off"
                        className="locationInput"
                      />
                      {/* Navbar-location-dropdown-start */}
                      {/* <Popover
                        elevation={5}
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        className={classes.popover}
                        disableEnforceFocus={true}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                      >
                        <Card className={classes.card}>
                          <CardContent>
                            <List
                              component="nav"
                              aria-label="main mailbox folders"
                            >
                              <ListItem button>
                                <ListItemIcon>
                                  <MyLocationIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText>
                                  <Typography
                                    variant="subtitle1"
                                    color="primary"
                                    gutterBottom
                                  >
                                    Detect current location
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                  >
                                    Using GPS
                                  </Typography>
                                </ListItemText>
                              </ListItem>
                              <Divider className={classes.hdivider} />
                              <ListItem button>
                                <ListItemIcon>
                                  <AddIcon
                                    fontSize="large"
                                    color="primary"
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  color="primary"
                                  primary="Add Address"
                                />
                              </ListItem>
                            </List>
                          </CardContent>
                        </Card>
                      </Popover> */}

                      {/* Navbar-location-dropdown-start */}
                    </Grid>
                    {/* Navbar-Location-container-start */}

                    <div className="d-sm-none">
                      <Divider
                        className={classes.divider}
                        orientation="vertical"
                      />
                    </div>
                    {/* Navbar-switch-start */}
                    <Grid item className="relative actionbtns">
                      {TabButtons}
                    </Grid>
                    {/* Navbar-switch-end */}
                  </Grid>
                </Paper>
              </Grid>
              {/* Navbar-left-side-content-end */}

              {/* Navbar-right-side-content-start */}
              <Grid item>
                {/* Mobile-location-toggle-button-start */}
                <IconButton
                  className="mobileLocationToggle"
                  onClick={handleHide}
                >
                  <LocationOnIcon className="locationIcon " color="primary" />
                </IconButton>
                {/* Mobile-location-toggle-button-end */}

                {!ctx.isLoggedIn && (
                  <Button
                    href="#text-buttons"
                    className={classes.loginbtn}
                    startIcon={<AccountCircle />}
                  >
                    <span className="hide350">Login/ SignUp</span>
                  </Button>
                )}
                {/* if logged In ->true start*/}
                {ctx.isLoggedIn && (
                  <>
                    <Button
                      href="#text-buttons"
                      aria-describedby={id}
                      onClick={handleClick}
                      className={classes.loginbtn}
                      // startIcon={<MenuIcon />}
                    >
                      <img
                        src={profileImg}
                        className="profileImg"
                        alt="Lokesh"
                        title="Lokesh"
                      />
                      <span className="hide350 username">Lokesh</span>
                    </Button>
                    {/* Account-tabs-dropdown-start */}
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      className={classes.tabsPopover}
                      disableEnforceFocus={true}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <Card className={classes.navTabs}>
                        <CardContent>
                          <List component="nav" aria-label="Nav tabs">
                            <ListItem
                              button
                              selected={selectedIndex === 0}
                              onClick={(event) => handleListItemClick(event, 0)}
                            >
                              <ListItemText>Account</ListItemText>
                            </ListItem>
                            <ListItem
                              button
                              selected={selectedIndex === 1}
                              onClick={(event) => handleListItemClick(event, 1)}
                            >
                              <ListItemText>Food Orders</ListItemText>
                            </ListItem>
                            <ListItem button>
                              <ListItemText>Payments</ListItemText>
                            </ListItem>
                            <ListItem button>
                              <ListItemText>Offers</ListItemText>
                            </ListItem>
                            <ListItem button>
                              <ListItemText>Wallet</ListItemText>
                            </ListItem>
                            <ListItem button>
                              <ListItemText>Notifications</ListItemText>
                            </ListItem>
                            <ListItem button>
                              <ListItemText>Rewards</ListItemText>
                            </ListItem>
                            <ListItem button>
                              <ListItemText>Share Our Love</ListItemText>
                            </ListItem>
                            <ListItem button>
                              <ListItemText>Refer A Friend</ListItemText>
                            </ListItem>
                          </List>
                        </CardContent>
                      </Card>
                    </Popover>
                    {/* Account-tabs-dropdown-start */}
                  </>
                )}
                {/* if logged In ->true end*/}
              </Grid>
              {/* Navbar-right-side-content-end */}
            </Grid>
          </Toolbar>
          {/* Mobile-switch-button-start */}
          <div
            className={hide ? "mobile_tabButtons hide" : "mobile_tabButtons"}
          >
            {TabButtons}
          </div>
          {/* Mobile-switch-button-end */}
        </div>
      </Container>
    </AppBar>
  );
}
