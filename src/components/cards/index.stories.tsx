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
  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e9e9e9",
      padding: "10px",
      minHeight: "100vh",
    }}
  >
    <div style={{ width: "335px" }}>
      <UIKitBlockCard>
        <div style={{ height: "200px" }} />
        <UIKitBlueCard>
          <div style={{ height: "300px" }} />
        </UIKitBlueCard>
      </UIKitBlockCard>
    </div>
  </div>
);

export const BlueCard: React.FC = () => (
  <div style={{ width: "300px" }}>
    <UIKitBlueCard>
      <div style={{ height: "300px" }} />
    </UIKitBlueCard>
  </div>
);
