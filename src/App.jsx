import styled from "styled-components";

const Father = styled.div`
  display: flex;
  back
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Input />
    </Father>
  );
}

export default App;
