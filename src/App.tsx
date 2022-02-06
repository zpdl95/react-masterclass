import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  /* event를 사용할때 type을 React.FormEvent이라고 특정이벤트를 지정해 줘야 한다 */
  /* 어떤 종류의 Element가 해당 event를 발생시키는지 특정지어야 함 = <HTMLInputElement> */
  /* 리액트(React)에서 form(FormEvent)에서 온 이벤트인데
    input(<HTMLInputElement>)이 발생시킨 이벤트이다. 라고 type을 작성해야 함 */
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={value}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
