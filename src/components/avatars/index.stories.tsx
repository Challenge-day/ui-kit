import { Meta } from "@storybook/react";
import UIKitAvatar from "./Avatar";
import React from "react";

const meta: Meta<typeof UIKitAvatar> = {
  component: UIKitAvatar,
  title: "components/avatars",
};

export const Avatar: React.FC = () => {
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
        <UIKitAvatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        <UIKitAvatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" isFullyRounded />
        <UIKitAvatar
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          isFullyRounded
          size="min"
        />
        <UIKitAvatar
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          isFullyRounded
          size="max"
        />
      </div>
    </div>
  );
};

export default meta;
