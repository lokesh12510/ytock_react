import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ShopCard from "../../Components/ShopCard/ShopCard";
import FoodContainer from "../../Components/FoodContainer/FoodContainer";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <ShopCard />
      <FoodContainer />
      <Footer />
    </>
  );
}
