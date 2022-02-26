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
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

/* Variants = motion패키지에 있는 Variant type  */
const boxVariants: Variants = {
  hover: { scale: 1.5, rotate: 90 },
  click: { scale: 1, borderRadius: "50%" },
  drag: {
    /* drag 애니메이션 컬러를 string이 아니라 number로 주면 색변화도 애니메이션이 적용된다 */
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    transition: { duration: 5 },
  },
};

function App() {
  return (
    <Wrapper>
      <Box
        /* drag = 컴포넌트에 드래그가능 적용 */
        drag
        variants={boxVariants}
        whileHover={"hover"}
        whileTap={"click"}
        whileDrag={"drag"}
      />
    </Wrapper>
  );
}

export default App;
