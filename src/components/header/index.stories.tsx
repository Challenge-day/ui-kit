import { Meta } from "@storybook/react";
import UIKitHeader from "./Header";
import React from "react";

const meta: Meta<typeof UIKitHeader> = {
  component: UIKitHeader,
  title: "components/header",
};

export default meta;

export const Header: React.FC = () => (
  <div
    style={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "#e9e9e9",
    }}
  >
    <div style={{ width: "300px" }}>
      <UIKitHeader style={{ width: "100%" }}>
        <span style={{ color: "#fff", textTransform: "capitalize" }}>header</span>
        <h2 style={{ color: "#fff", textTransform: "capitalize" }}>header</h2>
        <span style={{ color: "#fff", textTransform: "capitalize" }}>header</span>
      </UIKitHeader>
    </div>
  </div>
);
