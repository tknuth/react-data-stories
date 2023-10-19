/** @jsxImportSource @emotion/react */
import * as React from "react";
import { styled } from "@mui/joy/styles";
import PropTypes from "prop-types";
import Grid from "@mui/joy/Grid";
import Card from "@mui/joy/Card";
import { Box, Typography } from "@mui/joy";
import { css } from "@emotion/react";
import { textAlign } from "@mui/system";

function Expectation({ value }) {
  const marginBottom = 1;
  return (
    <>
      <Grid
        item
        mb={{ xs: 0, sm: marginBottom }}
        xl={1}
        lg={1}
        md={2}
        sm={2}
        xs={12}
        sx={{ textAlign: "center" }}
      >
        <Card>{!!value ? `${value.toFixed(2) * 100}%` : "n/a"}</Card>
      </Grid>
      <Grid
        item
        mb={marginBottom}
        xl={2}
        lg={3}
        md={4}
        sm={10}
        xs={12}
        sx={{ textAlign: { sm: "left", xs: "center" } }}
      >
        <Typography>
          Dies ist ein ziemlich langer Text zur Beschreibung.
        </Typography>
      </Grid>
    </>
  );
}

export function Expectations({ value }) {
  return (
    <Grid container spacing={2} alignItems="center" m={2} sx={{ flexGrow: 1 }}>
      <Expectation value={value} />
      <Expectation value={value} />
      <Expectation value={value} />
      <Expectation value={value} />
      <Expectation value={value} />
      <Expectation value={value} />
      <Expectation value={value} />
    </Grid>
  );
}

Expectations.propTypes = {
  value: PropTypes.number,
};

Expectations.defaultProps = {
  value: null,
};
