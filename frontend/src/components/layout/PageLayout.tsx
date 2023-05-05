import React from "react";
import { Grid } from "@mui/material";

interface IPageLayoutProps {
  header: React.ReactElement;
  body: React.ReactElement;
  footer: React.ReactElement;
}
function PageLayout({ header, body, footer }: IPageLayoutProps) {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item xs={12}>
        {header}
      </Grid>
      <Grid item xs={12} sx={{ height: "100%" }}>
        <Grid
          container
          direction={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ height: "100%" }}
        >
          <Grid item xs={10}>
            {body}
          </Grid>
          <Grid item xs={2} sx={{ width: "100%" }}>
            <Grid
              container
              sx={{ p: 2 }}
              justifyContent={"center"}
              alignItems={"flex-end"}
            >
              <Grid item xs={12}>
                {footer}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PageLayout;
