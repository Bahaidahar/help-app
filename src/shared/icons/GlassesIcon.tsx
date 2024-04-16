import { G, Path, Svg } from "react-native-svg";
import { IIcon } from "../interface";

const GlassesIcon = ({ color }: IIcon) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_302_1157)">
        <Path
          d="M20 0C18.9391 0 17.9217 0.421427 17.1716 1.17157C16.4214 1.92172 16 2.93913 16 4C16 4.26522 16.1054 4.51957 16.2929 4.70711C16.4804 4.89464 16.7348 5 17 5C17.2652 5 17.5196 4.89464 17.7071 4.70711C17.8946 4.51957 18 4.26522 18 4C18 3.46957 18.2107 2.96086 18.5858 2.58579C18.9609 2.21071 19.4696 2 20 2C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V15.026C21.1396 14.3642 20.0855 14.0037 19 14C18.1812 14.0004 17.375 14.2018 16.6523 14.5866C15.9296 14.9714 15.3124 15.5279 14.855 16.207C14.484 15.8251 14.0402 15.5215 13.5498 15.3141C13.0594 15.1068 12.5324 15 12 15C11.4676 15 10.9406 15.1068 10.4502 15.3141C9.95977 15.5215 9.51595 15.8251 9.145 16.207C8.68762 15.5279 8.07045 14.9714 7.34771 14.5866C6.62498 14.2018 5.8188 14.0004 5 14C3.91453 14.0037 2.86039 14.3642 2 15.026V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2C4.53043 2 5.03914 2.21071 5.41421 2.58579C5.78929 2.96086 6 3.46957 6 4C6 4.26522 6.10536 4.51957 6.29289 4.70711C6.48043 4.89464 6.73478 5 7 5C7.26522 5 7.51957 4.89464 7.70711 4.70711C7.89464 4.51957 8 4.26522 8 4C8 2.93913 7.57857 1.92172 6.82843 1.17157C6.07828 0.421427 5.06087 0 4 0C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 19C0 20.3261 0.526784 21.5979 1.46447 22.5355C2.40215 23.4732 3.67392 24 5 24C6.32608 24 7.59785 23.4732 8.53553 22.5355C9.47322 21.5979 10 20.3261 10 19C10 18.4696 10.2107 17.9609 10.5858 17.5858C10.9609 17.2107 11.4696 17 12 17C12.5304 17 13.0391 17.2107 13.4142 17.5858C13.7893 17.9609 14 18.4696 14 19C14 20.3261 14.5268 21.5979 15.4645 22.5355C16.4021 23.4732 17.6739 24 19 24C20.3261 24 21.5979 23.4732 22.5355 22.5355C23.4732 21.5979 24 20.3261 24 19V4C24 2.93913 23.5786 1.92172 22.8284 1.17157C22.0783 0.421427 21.0609 0 20 0V0Z"
          fill={color}
        />
      </G>
    </Svg>
  );
};

export default GlassesIcon;
