/** @jsxImportSource @emotion/react */
import { Box, Card } from "@mui/joy";
import PropTypes from "prop-types";
import * as React from "react";
import { VegaLite } from "react-vega";
import { css } from "@emotion/react";

const barData = {
  table: [
    { a: "A", b: 28 },
    { a: "B", b: 55 },
    { a: "C", b: 43 },
    { a: "D", b: 91 },
    { a: "E", b: 81 },
    { a: "F", b: 53 },
    { a: "G", b: 19 },
    { a: "H", b: 87 },
    { a: "I", b: 52 },
  ],
};

const spec = {
  width: "container",
  height: 200,
  mark: { type: "bar", color: "#2196f3" },
  background: null,
  encoding: {
    x: { field: "a", type: "ordinal", axis: null },
    y: { field: "b", type: "quantitative", axis: null },
  },
  view: { stroke: null },
  data: { name: "table" },
};

export function Histogram(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <VegaLite spec={spec} data={barData} actions={false} />
    </Box>
  );
}

Histogram.propTypes = {
  value: PropTypes.number,
};

Histogram.defaultProps = {
  value: null,
};
