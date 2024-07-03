import { Meta } from "@storybook/react";
import UIKitPrimaryButton from "./PrimaryButton";
import UIKitSecondaryButton from "./SecondaryButton";
import UIKitPrimaryButtonVariant from "./PrimaryButtonVariant";
import UIKitPaymentButton from "./PaymentButton";
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

export const PrimaryButtonVariant: React.FC = () => {
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
          borderRadius: "10px",
          padding: "12px",
        }}
      >
        <UIKitPrimaryButtonVariant style={{ width: "100%" }}>
          <span style={{ color: "#003cf6", textTransform: "capitalize" }}>active</span>
        </UIKitPrimaryButtonVariant>

        <UIKitPrimaryButtonVariant style={{ width: "100%" }} disabled>
          <span style={{ color: "#fff", textTransform: "capitalize" }}>disabled</span>
        </UIKitPrimaryButtonVariant>
      </div>
    </div>
  );
};

export const PaymentButton: React.FC = () => {
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
          borderRadius: "10px",
          padding: "12px",
        }}
      >
        <UIKitPaymentButton style={{ width: "100%" }}>
          <span style={{ color: "#fff", textTransform: "capitalize" }}>active</span>
        </UIKitPaymentButton>

        <UIKitPaymentButton style={{ width: "100%" }} disabled>
          <span style={{ color: "#fff", textTransform: "capitalize" }}>disabled</span>
        </UIKitPaymentButton>
      </div>
    </div>
  );
};

export default meta;
