import { DefaultTheme } from "styled-components";

/* DefaultTheme이라고 type을 정해줌으로써 내부의 변수들을 자동완성 시켜줄 수 있다 */
export const lightTheme: DefaultTheme = {
  textColor: "black",
  bgColor: "white",
};

export const darkTheme: DefaultTheme = {
  textColor: "white",
  bgColor: "black",
};
