import React, { ImgHTMLAttributes } from "react";
import clsx from "clsx";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Whether the image should be fully rounded
   */
  isFullyRounded?: boolean;

  /**
   * Image size. Defaults to medium
   */
  size?: "min" | "medium" | "max";
}

const Avatar: React.FC<AvatarProps> = ({ isFullyRounded, size = "medium", ...props }) => (
  <div className="avatar">
    <div
      className={clsx({
        "w-12": size === "min",
        "w-16": size === "medium",
        "w-24": size === "max",
        "rounded-lg": !isFullyRounded,
        "rounded-full": isFullyRounded,
      })}
    >
      <img {...props} />
    </div>
  </div>
);

export default Avatar;
