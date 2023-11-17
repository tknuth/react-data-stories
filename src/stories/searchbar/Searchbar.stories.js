import { Searchbar } from "./Searchbar";

export default {
  title: "Example/Searchbar",
  component: Searchbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const LoggedIn = {
  args: {
    value: 0.983,
  },
};

export const LoggedOut = { args: { value: null } };
