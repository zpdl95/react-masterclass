import styled from "styled-components";
import { motion, useMotionValue, useTransform, Variants } from "framer-motion";
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
  /* useTransform = interpolation을 사용하는 방법
  x좌표값의 범위를 지정하고 scale값의 범위로 치환 */
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  useEffect(() => {
    scale.onChange(() => console.log(scale.get()));
  }, [scale]);
  return (
    <Wrapper>
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
