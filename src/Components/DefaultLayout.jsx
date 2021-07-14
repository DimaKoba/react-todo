import React from "react";
import { Header } from "./Header";
import { Grid, Box } from "@material-ui/core";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Grid container>
        <Box p={3}>{children}</Box>
      </Grid>
    </div>
  );
};
