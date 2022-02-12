import { atom, selector } from "recoil";

export interface IToDoState {
  text: string;
  id: number;
  category: "DONE" | "DOING" | "TO_DO";
}

export const toDoState = atom<IToDoState[]>({
  key: "toDos",
  default: [],
});

/* selector = atom의 output을 변형시킴 */
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    /* recoilValue를 가져오는 get함수 */
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
});
