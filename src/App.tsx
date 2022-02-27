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

const Grid = styled.div`
  width: 50vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 20px;
  display: flex;
  font-size: 28px;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 50%;
    height: 30%;
  }
`;

const overlayVariants: Variants = {
  entry: { backgroundColor: "rgba(0, 0, 0, 0)" },
  showing: { backgroundColor: "rgba(0, 0, 0, .6)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function App() {
  const [clicked, setClicked] = useState(false);
  const toggle = () => setClicked((prev) => !prev);
  return (
    /* layoutId를 이용한 멋진 layout애니메이션 */
    <Wrapper onClick={toggle}>
      <Grid>
        <Box layoutId="good" />
        <Box />
        <Box />
        <Box />
      </Grid>
      <AnimatePresence>
        {clicked && (
          <Overlay
            variants={overlayVariants}
            initial="entry"
            animate="showing"
            exit="exit"
          >
            <Box layoutId="good" />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
