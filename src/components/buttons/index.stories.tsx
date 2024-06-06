import { Meta } from "@storybook/react";
import UIKitPrimaryButton from "./PrimaryButton";
import UIKitSecondaryButton from "./SecondaryButton";
import React from "react";

const meta: Meta<typeof UIKitPrimaryButton> = {
  component: UIKitPrimaryButton,
  title: "components/buttons",
};

export const PrimaryButton: React.FC = () => {
  return (
    <div style={{ width: "200px", display: "flex", flexDirection: "column", gap: "12px" }}>
      <UIKitPrimaryButton>
        <span style={{ color: "#fff", textTransform: "capitalize" }}>active</span>
      </UIKitPrimaryButton>

      <UIKitPrimaryButton disabled>
        <span style={{ color: "#fff", textTransform: "capitalize" }}>disabled</span>
      </UIKitPrimaryButton>
    </div>
  );
};

export const SecondaryButton: React.FC = () => {
  return (
    <div style={{ width: "200px", display: "flex", flexDirection: "column", gap: "12px", backgroundColor: "#2054f4" }}>
      <UIKitSecondaryButton>
        <span style={{ color: "#fff", textTransform: "capitalize" }}>active</span>
      </UIKitSecondaryButton>

      <UIKitSecondaryButton disabled>
        <span style={{ color: "#fff", textTransform: "capitalize" }}>disabled</span>
      </UIKitSecondaryButton>
    </div>
  );
};

export default meta;
