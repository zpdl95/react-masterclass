import { atom, selector } from "recoil";

/* [key: string] = key가 단지 3개만 존재하는게 아니다 여러개다 라고 알려줌 */
interface ItoDoState {
  [key: string]: string[];
}

export const toDoState = atom<ItoDoState>({
  key: "toDos",
  default: {
    to_do: ["A", "B"],
    doing: ["C", "D"],
    done: ["F"],
  },
});
