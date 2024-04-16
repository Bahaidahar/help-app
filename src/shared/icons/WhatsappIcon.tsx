import { Path, Svg } from "react-native-svg";
import { IIcon } from "../interface";

const WhatsappIcon = ({ color }: IIcon) => {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 0C6.2678 0 0 6.2678 0 14C0 16.646 0.735 19.124 2.0132 21.2352L0.7644 25.48C0.692698 25.7237 0.68798 25.9822 0.750742 26.2284C0.813503 26.4746 0.941426 26.6993 1.12106 26.8789C1.3007 27.0586 1.52541 27.1865 1.77158 27.2492C2.01775 27.312 2.27628 27.3073 2.52 27.2356L6.7648 25.9868C8.94694 27.3071 11.4495 28.0035 14 28C21.7322 28 28 21.7322 28 14C28 6.2678 21.7322 0 14 0ZM10.8332 17.1682C13.6654 19.999 16.3688 20.3728 17.3236 20.4078C18.7754 20.461 20.1894 19.3522 20.7396 18.0656C20.8091 17.9055 20.8343 17.7298 20.8126 17.5566C20.7909 17.3835 20.7232 17.2194 20.6164 17.0814C19.8492 16.1014 18.8118 15.3972 17.7982 14.6972C17.5866 14.5509 17.3265 14.4922 17.0725 14.5334C16.8186 14.5746 16.5904 14.7126 16.436 14.9184L15.596 16.1994C15.5518 16.2683 15.483 16.3176 15.4036 16.3374C15.3242 16.3572 15.2403 16.3459 15.169 16.3058C14.5992 15.9796 13.769 15.4252 13.1726 14.8288C12.5762 14.2324 12.0554 13.44 11.7628 12.9066C11.7265 12.8388 11.716 12.7602 11.7333 12.6853C11.7505 12.6104 11.7943 12.5443 11.8566 12.4992L13.1502 11.5388C13.3348 11.3783 13.4539 11.1555 13.4849 10.9128C13.5159 10.6701 13.4566 10.4245 13.3182 10.2228C12.691 9.3044 11.9602 8.1368 10.9004 7.3626C10.7636 7.26348 10.6034 7.20168 10.4355 7.18327C10.2676 7.16486 10.0978 7.19047 9.9428 7.2576C8.6548 7.8092 7.5404 9.2232 7.5936 10.6778C7.6286 11.6326 8.0024 14.336 10.8332 17.1682Z"
        fill="white"
      />
    </Svg>
  );
};

export default WhatsappIcon;
