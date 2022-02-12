import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDoState, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDoState) {
  const setToDos = useSetRecoilState(toDoState);

  /* typescript에서 event의 type을 지정하는 방법 */
  /* React.EventName<HTMLElementName> */
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name };
      return oldToDos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
    </li>
  );
}
export default ToDo;
// function ToDo({ text, category }: IToDoState) {
//   const onClick = (newCategory: IToDoState["category"]) => {};
//   return (
//     <li>
//       <span>{text}</span>
//       {category !== "TO_DO" && (
//         <button onClick={() => onClick("TO_DO")}>To Do</button>
//       )}
//       {category !== "DONE" && (
//         <button onClick={() => onClick("DONE")}>Done</button>
//       )}
//       {category !== "DOING" && (
//         <button onClick={() => onClick("DOING")}>Doing</button>
//       )}
//     </li>
//   );
// }
// export default ToDo;
