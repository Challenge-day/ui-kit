import { Meta } from "@storybook/react";
import UIKitTaskButton from "./TaskButton";
import React from "react";

const meta: Meta<typeof UIKitTaskButton> = {
  component: UIKitTaskButton,
  title: "components/buttons/task-buttons",
};

export const TaskButton: React.FC = () => {
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
        <UIKitTaskButton style={{ width: "100%" }}>
          <span style={{ color: "#fff", textTransform: "capitalize" }}>active</span>
        </UIKitTaskButton>

        <UIKitTaskButton style={{ width: "100%" }} disabled>
          <span style={{ color: "#fff", textTransform: "capitalize" }}>disabled</span>
        </UIKitTaskButton>

        <UIKitTaskButton style={{ width: "100%" }} isPending>
          <span style={{ color: "#fff", textTransform: "capitalize" }}>pending</span>
        </UIKitTaskButton>
      </div>
    </div>
  );
};

export default meta;
