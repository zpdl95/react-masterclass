import { atom, selector } from "recoil";

/* [key: string] = key가 단지 3개만 존재하는게 아니다 여러개다 라고 알려줌 */
interface ItoDoState {
  [key: string]: string[];
}

export const toDoState = atom<ItoDoState>({
  key: "toDos",
  default: {
    "To Do": ["A", "B"],
    Doing: ["C", "D"],
    Done: ["F"],
  },
});
