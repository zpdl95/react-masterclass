import styled from "styled-components";
import { motion, useMotionValue, Variants } from "framer-motion";
import { useEffect } from "react";

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
  hover: { scale: 1, rotate: 90 },
  click: { scale: 1, borderRadius: "50%" },
};

function App() {
  /* useMotionValue = React의 rerendering에 영향을 주지 않는 값 */
  const x = useMotionValue(0);
  useEffect(() => {
    /* motionValue의 변화를 알 수 있고 */
    /* motionValue의 값을 알 수 있고 */
    x.onChange(() => console.log(x.get()));
  }, [x]);
  return (
    <Wrapper>
      {/* motionValue의 값을 설정할 수 있다 */}
      <button onClick={() => x.set(200)}>버튼</button>
      <Box style={{ x }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
