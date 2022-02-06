import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

const Input = styled.input.attrs({ required: true, maxLength: 5 })``;

const animation = keyframes`
  0%{
    transform:rotate(0deg);
  }
  100%{
    transform:rotate(360deg);
  }
`;

const Emoji = styled.span`
  font-size: 36px;
  animation: ${animation} 1s linear infinite;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
    font-size: 95px;
  }
`;

const Title = styled.span`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Title</Title>
      <Box>
        <Emoji>🎇</Emoji>
        <Input />
      </Box>
    </Wrapper>
  );
}

export default App;
