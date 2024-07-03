import { Meta } from "@storybook/react";
import UIKitInput from "./Input";
import React from "react";

const meta: Meta<typeof UIKitInput> = {
  component: UIKitInput,
  title: "components/inputs",
};

export const Input: React.FC = () => {
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
        <UIKitInput style={{ width: "100%" }} placeholder="Normal. Focus to see effect." />
        <UIKitInput style={{ width: "100%" }} placeholder="Errored" hasErrors />
        <UIKitInput style={{ width: "100%" }} placeholder="Link." isLinkField />
      </div>
    </div>
  );
};

export default meta;
