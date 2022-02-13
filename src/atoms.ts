import { atom, selector } from "recoil";

export const minueState = atom({
  key: "minute",
  default: 0,
});

/* selector = 마치 중계기 같은 역할을 한다 */
export const hourSelector = selector<number>({
  key: "hour",
  get: ({ get }) => {
    const minute = get(minueState);
    return minute / 60;
  },
  set: ({ set }, newValue) => {
    const minute = Number(newValue) * 60;
    set(minueState, minute);
  },
});
