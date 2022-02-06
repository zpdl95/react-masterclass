import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  /* theme변수 안의 값들을 typescript의 자동완성기능을 사용해 오류없이 사용가능 */
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <div>
      <Container>
        <H1>zㅋㅋㅋㅋㅋㄴ</H1>
      </Container>
    </div>
  );
}

export default App;
