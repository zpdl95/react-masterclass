import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const animation = keyframes`
  0%{
    transform:rotate(0deg);
  }
  100%{
    transform:rotate(180deg);
  }
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  animation: ${animation} 1s linear infinite;
  &:hover {
    width: 50px;
    height: 50px;
  }
  span {
    font-size: 30px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>🎇</span>
      </Box>
    </Wrapper>
  );
}

export default App;
