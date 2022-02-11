import { IToDoState } from "../atoms";

function ToDo({ text }: IToDoState) {
  return (
    <li>
      <span>{text}</span>
      <button>To Do</button>
      <button>Done</button>
      <button>Doing</button>
    </li>
  );
}
export default ToDo;
