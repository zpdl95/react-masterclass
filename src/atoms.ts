import { atom, selector } from "recoil";

export const toDoState = atom({
  key: "toDos",
  default: ["1", "2", "3", "4", "5", "6"],
});
