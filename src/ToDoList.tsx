import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [value, setValue] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     setValue(e.currentTarget.value);
//   };
//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setValue("");
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={value}
//           type="text"
//           placeholder="Write to do"
//         />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

interface IForm {
  email: string;
  password: string;
  password_validation: string;
}

export default ToDoList;
function ToDoList() {
  /* register = value, onChange()등 input에 필요한 prop을 다 가지고 있음 */
  /* watch = register에 있는 value값을 추적함 */
  /* handleSubmit = 제출의 제어와 검증이 성공했을때 실패했을때의 함수를 실행함 */
  /* formState = form의 상태에 대해 알려줌 */
  /* useForm({defaultValues:})을 사용함으로써 기본값을 정해줄 수 있음 */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: { email: "@gmail.com" },
  });
  const onValid = (data: IForm) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      {/* handleSubmit() = 이 함수는 일단 실행을 시켜야 한다 그리고 input검증이 끝나면 결과값을 준다 */}
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: "이메일은 꼭 필요합니다.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[a-z]+.com$/,
              message: "잘못된 형식입니다.",
            },
          })}
          type="email"
          placeholder="Write your email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "You need to longer password",
            },
          })}
          type="password"
          placeholder="Write your password"
        />
        <input
          {...register("password_validation", {
            required: "It is same to password",
          })}
          type="password"
          placeholder="Write your password again"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
