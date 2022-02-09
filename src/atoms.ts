import { atom } from "recoil";

/* atom = 비눗방울, 앱 전체에 사용될 state */
export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});
