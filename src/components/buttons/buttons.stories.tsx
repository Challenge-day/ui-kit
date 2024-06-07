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
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        padding: "12px",
        backgroundColor: "#e9e9e9",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <UIKitPrimaryButton style={{ width: "100%" }}>
          <span style={{ color: "#fff", textTransform: "capitalize" }}>active</span>
        </UIKitPrimaryButton>

        <UIKitPrimaryButton style={{ width: "100%" }} disabled>
          <span style={{ color: "#fff", textTransform: "capitalize" }}>disabled</span>
        </UIKitPrimaryButton>
      </div>
    </div>
  );
};

export const SecondaryButton: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        padding: "12px",
        backgroundColor: "#e9e9e9",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          backgroundColor: "#2054f4",
          borderRadius: "10px",
          padding: "12px",
        }}
      >
        <UIKitSecondaryButton style={{ width: "100%" }}>
          <span style={{ color: "#fff", textTransform: "capitalize" }}>active</span>
        </UIKitSecondaryButton>

        <UIKitSecondaryButton style={{ width: "100%" }} disabled>
          <span style={{ color: "#fff", textTransform: "capitalize" }}>disabled</span>
        </UIKitSecondaryButton>
      </div>
    </div>
  );
};

export default meta;
