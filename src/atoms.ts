import { atom } from "recoil";

export interface IToDoState {
  text: string;
  id: number;
  category: "DONE" | "DOING" | "TO_DO";
}

export const toDoState = atom<IToDoState[]>({
  key: "toDos",
  default: [],
});
