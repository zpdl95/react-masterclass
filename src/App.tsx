import styled from "styled-components";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 200px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 20px;
`;

const boxVariants: Variants = {
  start: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  leaving: { opacity: 0, y: 20 },
};

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      {/* AnimatePresence = 제거되는 컴포넌트에 애니메이션 추가 */}
      <AnimatePresence>
        {showing && (
          <Box
            variants={boxVariants}
            initial="start"
            animate="visible"
            exit="leaving"
          />
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
