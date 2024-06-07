import "../src/styles/index.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  tags: ["auto-docs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
