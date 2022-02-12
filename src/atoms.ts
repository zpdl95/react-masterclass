import { atom, selector } from "recoil";

/* enum = 열거형으로 이름이 있는 상수들의 집합을 정의할 수 있습니다 */
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDoState {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

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
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
