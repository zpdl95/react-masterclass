import { atom, selector } from "recoil";

export const minueState = atom({
  key: "minute",
  default: 0,
});

export const hourSelector = selector({
  key: "hour",
  get: ({ get }) => {
    const minute = get(minueState);
    return minute / 60;
  },
});
