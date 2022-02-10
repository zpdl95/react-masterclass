import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log("add to do:", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: "할 일을 적어주세요" })}
          type="text"
          placeholder="Write to do"
        />
        <span>{errors.toDo?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
