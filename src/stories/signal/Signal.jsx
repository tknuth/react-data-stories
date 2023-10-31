/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import PropTypes from "prop-types";
import * as React from "react";

function chooseColor(value) {
  if (value > 0.67) {
    return "success";
  } else if (value > 0.33) {
    return "warning";
  } else if (value > 0) {
    return "danger";
  } else {
    return "neutral";
  }
}

export function Signal({ value, name, description }) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        margin-bottom: 3rem;
        margin-right: 3rem;
      `}
    >
      <Card
        variant={"soft"}
        color={chooseColor(value)}
        css={css`
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
        `}
      >
        {!!value ? `${value.toFixed(2) * 100}%` : "n/a"}
      </Card>
      <div>
        <Typography level="body-md">{name}</Typography>
        <Typography level="body-xs">{description}</Typography>
      </div>
    </div>
  );
}

Signal.propTypes = {
  value: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
};

Signal.defaultProps = {
  value: null,
  name: "Name of the signal",
  description: "This is the signal's description.",
};
