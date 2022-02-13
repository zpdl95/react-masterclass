import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minueState } from "./atoms";

function App() {
  const [minute, setMinute] = useRecoilState(minueState);
  const [hour, setHour] = useRecoilState(hourSelector);

  const onMinuteChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMinute(+e.currentTarget.value);
  };

  const onHourChange = (e: React.FormEvent<HTMLInputElement>) => {
    setHour(+e.currentTarget.value);
  };
  return (
    <>
      <input
        value={minute}
        onChange={onMinuteChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hour}
        onChange={onHourChange}
        type="number"
        placeholder="Hours"
      />
    </>
  );
}

export default App;
