import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IToDoState {
  text: string;
  id: number;
  category: "DONE" | "DOING" | "TO_DO";
}

const toDoState = atom<IToDoState[]>({
  key: "toDos",
  default: [],
});

interface IForm {
  toDo: string;
}

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: "할 일을 적어주세요" })}
          type="text"
          placeholder="Write to do"
        />
        <span>{errors.toDo?.message}</span>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
