import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* 애니메이션 컴포넌트를 스타일드컴포넌트 함수에 넣어서 사용 */
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

/* 애니메이션 구성을 오브젝트로 만듬 */
const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", mass: 5 } },
};

function App() {
  return (
    <Wrapper>
      {/* variants에 애니메이션 구성 오브젝트를 넣음,
      initial에 구성 오브젝트의 key값을 넣음,
      animate에 구성 오브젝트의 key값을 넣음 */}
      <Box variants={myVars} initial="start" animate="end" />
    </Wrapper>
  );
}

export default App;
