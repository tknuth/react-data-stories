/** @jsxImportSource @emotion/react */
import * as React from "react";
import { styled } from "@mui/joy/styles";
import PropTypes from "prop-types";
import Grid from "@mui/joy/Grid";
import Card from "@mui/joy/Card";
import { Box, Typography } from "@mui/joy";
import { css } from "@emotion/react";
import { textAlign } from "@mui/system";

export function Searchbar({ suggestions }) {
  const [query, setQuery] = React.useState("");
  const filteredSuggestions = suggestions.filter((d) => d.includes(query));
  return (
    <div>
      <div
        css={css`
          padding: 1rem;
          position: relative;
          font-family: sans-serif;
          display: inline-block;
        `}
      >
        <input
          type="text"
          placeholder="Search ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          css={css`
            width: 500px;
            /* padding: 10px; */
            /* padding-left: 4rem; */
            border: 1px solid #ddd;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

            &:focus {
              outline: none;
              /* border-color: #aaa; */
            }
            font-size: 1rem;
            padding: 1rem 1.5rem;
          `}
        ></input>
        <div
          css={css`
            overflow: hidden;
            margin-top: -0.5rem;
            border: 1px solid #ddd;
            border-top: none;
            line-height: 2rem;
            border-radius: 0 0 8px 8px;
            outline: none;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            display: ${filteredSuggestions.length === 0 || query === ""
              ? "none"
              : "block"};
          `}
        >
          <ul
            css={css`
              max-height: 300px;
              overflow-y: auto;
              /* font-size: 1rem; */
              margin-top: 1rem;
              list-style: none;
              margin-bottom: 0rem;
              /* margin-bottom: 0rem; */
              padding-top: 0.25rem;
              padding-left: 0;
              cursor: pointer;
              /* font-family: sans-serif; */
              /* padding-top: 1.5rem; */
              padding-bottom: 0.5rem;
            `}
          >
            {suggestions
              .filter((d) => d.includes(query))
              .map((key) => (
                <li
                  css={css`
                    margin-left: 0.5rem;
                    margin-right: 0.5rem;
                    padding-left: 1rem;
                    padding-right: 0.5rem;
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                    border-radius: 8px;
                    &:hover {
                      background-color: #eee;
                    }
                  `}
                >
                  {key}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Searchbar.propTypes = {
  suggestions: PropTypes.array,
};

Searchbar.defaultProps = {
  suggestions: [
    "Apples",
    "Milk",
    "Tea",
    "Coffee",
    "Chocolate",
    "Bananas",
    "Bread",
    "Pizza",
    "Pasta",
    "Salad",
    "Ice Cream",
    "Steak",
    "Sushi",
    "Burger",
    "Soup",
    "Rice",
    "Chicken",
    "Fish",
    "Cereal",
  ],
};
