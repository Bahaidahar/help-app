import React from "react";
import { Path, Svg } from "react-native-svg";
import { IIcon } from "../interface";

const EyeIcon = ({ color }: IIcon) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M2.54961 13.4056C2.2778 13.0326 2.1419 12.8462 2.04835 12.4854C1.98388 12.2367 1.98388 11.7633 2.04835 11.5146C2.1419 11.1538 2.2778 10.9674 2.54961 10.5944C4.03902 8.55068 7.30262 5 12 5C16.6974 5 19.961 8.55068 21.4504 10.5944C21.7222 10.9674 21.8581 11.1538 21.9516 11.5146C22.0161 11.7633 22.0161 12.2367 21.9516 12.4854C21.8581 12.8462 21.7222 13.0326 21.4504 13.4056C19.961 15.4493 16.6974 19 12 19C7.30262 19 4.03902 15.4493 2.54961 13.4056Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default EyeIcon;
