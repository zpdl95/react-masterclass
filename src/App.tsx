import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
  Variants,
} from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled(motion.div)`
  height: 300vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ;
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
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(238, 0, 0), rgb(238, 0, 153))",
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(221, 0, 238), rgb(143, 0, 238))",
    ]
  );
  /* useViewportScroll = 페이지에서의 스크롤링 값 */
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 2]);
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
