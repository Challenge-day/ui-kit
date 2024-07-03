import { Meta } from "@storybook/react";
import { Tabs as UIKitTabs, Tab as UIKitTab } from "./Tabs";
import React, { useState } from "react";

const meta: Meta<typeof UIKitTabs> = {
  component: UIKitTabs,
  title: "components/navigation",
};

export default meta;

export const Tabs: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
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
      <div
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <UIKitTabs onSingleTabPress={(index) => setActiveTabIndex(index ?? 0)} activeTabIndex={activeTabIndex}>
          {[...Array(4)].map((_, index) => (
            <UIKitTab key={index}>
              <span style={{ color: index === activeTabIndex ? "#fff" : "#434343", textTransform: "capitalize" }}>
                tab {index + 1}
              </span>
            </UIKitTab>
          ))}
        </UIKitTabs>
        {activeTabIndex === 0 && <span style={{ color: "#000" }}>Hello from tab on index 0</span>}
        {activeTabIndex === 1 && <span style={{ color: "#000" }}>Another tab</span>}
        {activeTabIndex === 2 && <span style={{ color: "#000" }}>A tab again</span>}
        {activeTabIndex === 3 && <span style={{ color: "#000" }}>Final tab</span>}
      </div>
    </div>
  );
};
