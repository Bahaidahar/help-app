import { G, Path, Svg } from "react-native-svg";
import { IIcon } from "../interface";

const MedicalIcon = ({ color }: IIcon) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_302_1187)">
        <Path
          d="M12 24C10.9391 24 9.92172 23.5786 9.17157 22.8284C8.42143 22.0783 8 21.0609 8 20V16H4C2.93913 16 1.92172 15.5786 1.17157 14.8284C0.421427 14.0783 0 13.0609 0 12C0 10.9391 0.421427 9.92172 1.17157 9.17157C1.92172 8.42143 2.93913 8 4 8H8V4C8 2.93913 8.42143 1.92172 9.17157 1.17157C9.92172 0.421427 10.9391 0 12 0C13.0609 0 14.0783 0.421427 14.8284 1.17157C15.5786 1.92172 16 2.93913 16 4V8H20C21.0609 8 22.0783 8.42143 22.8284 9.17157C23.5786 9.92172 24 10.9391 24 12C24 13.0609 23.5786 14.0783 22.8284 14.8284C22.0783 15.5786 21.0609 16 20 16H16V20C16 21.0609 15.5786 22.0783 14.8284 22.8284C14.0783 23.5786 13.0609 24 12 24Z"
          fill={color}
        />
      </G>
    </Svg>
  );
};

export default MedicalIcon;
