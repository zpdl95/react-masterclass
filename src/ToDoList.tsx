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
export default ToDoList;
function ToDoList() {
  /* register = value, onChange()등 input에 필요한 prop을 다 가지고 있음 */
  /* watch = register에 있는 value값을 추적함 */
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input
          {...register("email")}
          type="email"
          placeholder="Write your email"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Write your password"
        />
        <input
          {...register("password_validation")}
          type="password"
          placeholder="Write your password again"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
