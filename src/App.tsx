import styled from "styled-components";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 20px;
  display: flex;
  font-size: 28px;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: teal;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      {/* layoutId = 서로다른 컴포넌트를 애니메이션 동기화 시킴 */}
      <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
      <Box>{clicked ? <Circle layoutId="circle" /> : null}</Box>
      <Box
        style={{
          justifyContent: clicked ? "center" : "flex-start",
          alignItems: clicked ? "center" : "flex-start",
        }}
      >
        {/* layout = 컴포넌트의 layout이 변할때 애니메이션을 생성 */}
        <Circle layout />
      </Box>
    </Wrapper>
  );
}

export default App;
