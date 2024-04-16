import { Svg, Path, G } from "react-native-svg";

import { IIcon } from "../interface";

const ProfileIcon = ({ color }: IIcon) => {
  return (
    <Svg width="22" height="28" viewBox="0 0 22 28" fill="none">
      <Path
        d="M11 14C14.866 14 18 10.866 18 7C18 3.13401 14.866 0 11 0C7.13401 0 4 3.13401 4 7C4 10.866 7.13401 14 11 14Z"
        fill={color}
      />
      <Path
        d="M11 16.3323C5.20367 16.3387 0.506453 21.0359 0.5 26.8323C0.5 27.4766 1.02232 27.9989 1.66665 27.9989H20.3333C20.9776 27.9989 21.4999 27.4766 21.4999 26.8323C21.4935 21.0359 16.7963 16.3387 11 16.3323Z"
        fill={color}
      />
    </Svg>
  );
};

export default ProfileIcon;
