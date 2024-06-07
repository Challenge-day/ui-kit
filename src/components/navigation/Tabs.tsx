import React, { ReactElement, cloneElement, useCallback, useEffect, useMemo } from "react";
import clsx from "clsx";
import { isFragment } from "react-is";

interface TabProps {
  onPress?: (index?: number) => void;
  isActive?: boolean;
  children?: React.ReactNode;
  tabIndex?: number;
}

export const Tab: React.FC<TabProps> = ({ onPress, isActive, children, tabIndex }) => (
  <button
    onClick={() => onPress && onPress(tabIndex)}
    className={clsx("inline-flex justify-center items-center p-[5px_10px] bg-[#003cf6] rounded-[100px]", {
      "bg-[#003cf6]": isActive,
      "bg-transparent": !isActive,
    })}
  >
    {children}
  </button>
);

interface TabsProps {
  /**
   *
   * Executes an action on a single tab click
   * @param index - Index of clicked tab item.
   */
  onSingleTabPress?: (index?: number) => void;

  /**
   * Active tab index. The tab at that index would be highlighted.
   */
  activeTabIndex?: number;
  children: ReactElement<TabProps> | ReactElement<TabProps>[];
}

export const Tabs: React.FC<TabsProps> = ({ onSingleTabPress, activeTabIndex = 0, children }) => {
  const tabs = useMemo(() => (Array.isArray(children) ? Array.from(children) : Array.from([children])), [children]);

  const validateChildren = useCallback(() => {
    const valid = tabs.every((tab) => tab.type === Tab || isFragment(tab));
    return valid;
  }, [tabs]);

  useEffect(() => {
    if (!validateChildren()) throw new Error("invalid child(ren) for Tabs");
  }, [validateChildren]);

  return (
    <div className="flex justify-center items-center p-[5px_15px] rounded-[100px] gap-3">
      {tabs.map((tab, index) =>
        cloneElement(tab, {
          key: index,
          tabIndex: index,
          isActive: activeTabIndex === index,
          onPress: onSingleTabPress ? onSingleTabPress : tab.props.onPress,
        })
      )}
    </div>
  );
};
