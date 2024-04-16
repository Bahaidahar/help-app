import { Svg, Path, G } from "react-native-svg";

import { IIcon } from "../interface";

const FavoritesIcon = ({ color }: IIcon) => {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <G clipPath="url(#clip0_221_628)">
        <Path
          d="M3.32387 27.475C3.96093 27.7473 4.66525 27.8212 5.34495 27.6872C6.02466 27.5531 6.64819 27.2174 7.13421 26.7237L14 19.8952L20.8659 26.7237C21.186 27.0485 21.5674 27.3066 21.9879 27.483C22.4085 27.6594 22.8598 27.7507 23.3159 27.7515C23.7846 27.7501 24.2485 27.6562 24.6809 27.475C25.3231 27.2151 25.8721 26.7675 26.2561 26.1908C26.6401 25.6141 26.8413 24.935 26.8334 24.2422V5.83333C26.8315 4.28681 26.2163 2.80415 25.1228 1.71059C24.0292 0.617029 22.5466 0.0018525 21 0L7.00004 0C5.45351 0.0018525 3.97086 0.617029 2.8773 1.71059C1.78374 2.80415 1.16856 4.28681 1.16671 5.83333V24.2422C1.15918 24.9355 1.36105 25.615 1.74591 26.1918C2.13078 26.7686 2.68074 27.2158 3.32387 27.475Z"
          fill={color}
        />
      </G>
    </Svg>
  );
};

export default FavoritesIcon;
