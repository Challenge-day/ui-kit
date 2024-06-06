import { Meta } from "@storybook/react";
import UIKitBlockCard from "./BlockCard";
import UIKitBlueCard from "./BlueCard";
import React from "react";

const meta: Meta<typeof UIKitBlockCard> = {
  component: UIKitBlockCard,
  title: "components/cards",
};

export default meta;

export const BlockCard: React.FC = () => (
  <div style={{ width: "335px" }}>
    <UIKitBlockCard>
      <div style={{ height: "200px" }} />
      <UIKitBlueCard>
        <div style={{ height: "300px" }} />
      </UIKitBlueCard>
    </UIKitBlockCard>
  </div>
);

export const BlueCard: React.FC = () => (
  <div style={{ width: "300px" }}>
    <UIKitBlueCard>
      <div style={{ height: "300px" }} />
    </UIKitBlueCard>
  </div>
);
