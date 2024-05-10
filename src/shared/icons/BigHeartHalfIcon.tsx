import React from "react";
import { Path, Svg } from "react-native-svg";
import { IIcon } from "../interface";

interface IBigHeartHalfIcon extends IIcon {
  isReversed?: boolean;
}

const BigHeartHalfIcon = ({ isReversed, color }: IBigHeartHalfIcon) => {
  return (
    <Svg
      width="393"
      height="699"
      viewBox="0 0 393 699"
      fill="none"
      style={{ transform: [{ scaleX: isReversed ? -1 : 1 }] }}
    >
      <Path
        d="M572.323 0C535.507 0.567117 499.494 10.7451 467.92 29.5061C436.346 48.2671 410.331 74.9468 392.5 106.851C374.669 74.9468 348.654 48.2671 317.08 29.5061C285.506 10.7451 249.493 0.567117 212.677 0C153.987 2.52527 98.6918 27.9514 58.8717 70.7234C19.0515 113.495 -2.05683 170.137 0.158281 228.273C0.158281 447.641 358.366 701.007 373.602 711.757L392.5 725L411.398 711.757C426.634 701.072 784.842 447.641 784.842 228.273C787.057 170.137 765.949 113.495 726.128 70.7234C686.308 27.9514 631.013 2.52527 572.323 0Z"
        fill={color}
      />
    </Svg>
  );
};

export default BigHeartHalfIcon;
