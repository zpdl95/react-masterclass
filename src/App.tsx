import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.3);
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
  hover: { scale: 1, rotate: 90 },
  click: { scale: 1, borderRadius: "50%" },
};

function App() {
  const BiggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={BiggerBoxRef}>
        <Box
          /* drag = 컴포넌트에 드래그가능 적용 */
          drag
          /* dragConstraints = 범위제약 */
          /* useRef를 써서 컴포넌트자체를 제약범위로 지정 */
          dragConstraints={BiggerBoxRef}
          /* dragSnapToOrigin = 기존위치로 돌아감 */
          dragSnapToOrigin
          /* dragElastic = 당겨지는 힘. 숫자가 커지면 커서를 완벽하게 따라온다 */
          dragElastic={0.5}
          variants={boxVariants}
          whileHover={"hover"}
          whileTap={"click"}
          whileDrag={"drag"}
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
