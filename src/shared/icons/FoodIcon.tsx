import { Svg, G, Path } from "react-native-svg";
import { IIcon } from "../interface";
const FoodIcon = ({ color }: IIcon) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_302_1146)">
        <Path
          d="M22 10C21.9553 11.9004 21.4825 13.7663 20.6168 15.4587C19.7511 17.1512 18.5148 18.6265 17 19.775V23C17 23.2652 16.8946 23.5196 16.7071 23.7071C16.5196 23.8946 16.2652 24 16 24C15.7348 24 15.4804 23.8946 15.2929 23.7071C15.1054 23.5196 15 23.2652 15 23V2C14.991 1.62426 15.0937 1.25431 15.295 0.936929C15.4963 0.619551 15.7873 0.369011 16.131 0.217C16.5258 0.0563652 16.9589 0.0142302 17.3773 0.0957442C17.7957 0.177258 18.1813 0.378891 18.487 0.676C20.8064 3.22095 22.0634 6.5573 22 10ZM11 0C10.7348 0 10.4804 0.105357 10.2929 0.292893C10.1054 0.48043 10 0.734784 10 1V7C9.99744 7.61826 9.80392 8.22063 9.44591 8.7247C9.08791 9.22877 8.58291 9.60992 8 9.816V1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0C6.73478 0 6.48043 0.105357 6.29289 0.292893C6.10536 0.48043 6 0.734784 6 1V9.816C5.41709 9.60992 4.91209 9.22877 4.55409 8.7247C4.19608 8.22063 4.00256 7.61826 4 7V1C4 0.734784 3.89464 0.48043 3.70711 0.292893C3.51957 0.105357 3.26522 0 3 0C2.73478 0 2.48043 0.105357 2.29289 0.292893C2.10536 0.48043 2 0.734784 2 1V7C2.00145 8.1522 2.40009 9.26868 3.12872 10.1613C3.85735 11.0538 4.87141 11.6679 6 11.9V23C6 23.2652 6.10536 23.5196 6.29289 23.7071C6.48043 23.8946 6.73478 24 7 24C7.26522 24 7.51957 23.8946 7.70711 23.7071C7.89464 23.5196 8 23.2652 8 23V11.9C9.12859 11.6679 10.1427 11.0538 10.8713 10.1613C11.5999 9.26868 11.9985 8.1522 12 7V1C12 0.734784 11.8946 0.48043 11.7071 0.292893C11.5196 0.105357 11.2652 0 11 0V0Z"
          fill={color}
        />
      </G>
    </Svg>
  );
};

export default FoodIcon;