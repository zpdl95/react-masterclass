import styled from "styled-components";
import { motion, Variants } from "framer-motion";

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
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
`;

const Circle = styled(motion.div)`
  width: 75px;
  height: 75px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

/* Variants = motion패키지에 있는 Variant type  */
const boxVariants: Variants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      /* delayChildren = 자식컴포넌트에 애니메이션 딜레이를 준다 */
      delayChildren: 0.5,
      /* staggerChildren = 각각의 자식컴포넌트에 순차적인 애니메이션 딜레이를 준다 */
      staggerChildren: 0.08,
    },
  },
};

const circleVarians: Variants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Wrapper>
      {/* variants에 애니메이션 구성 오브젝트를 넣음,
      initial에 구성 오브젝트의 key값을 넣음,
      animate에 구성 오브젝트의 key값을 넣음 */}
      {/* 부모컴포넌트에 initial과 animate가 있으면 자동으로
      자식컴포넌트에도 initial과 animate prop이 들어간다 */}
      <Box variants={boxVariants} initial={"start"} animate={"end"}>
        <Circle variants={circleVarians}></Circle>
        <Circle variants={circleVarians}></Circle>
        <Circle variants={circleVarians}></Circle>
        <Circle variants={circleVarians}></Circle>
      </Box>
    </Wrapper>
  );
}

export default App;
