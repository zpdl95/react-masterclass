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
`;

const overlayVariants: Variants = {
  entry: { backgroundColor: "rgba(0, 0, 0, 0)" },
  showing: { backgroundColor: "rgba(0, 0, 0, .6)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function App() {
  /* useState로 각 id를 추출하고 */
  const [id, setId] = useState<null | number>(null);

  return (
    /* 추출한 id를 가지고 map과 함께 각각의 박스가 따로 연결된것 처럼 보임 */
    <Wrapper>
      <Grid>
        {[1, 2, 3, 4].map((i) => (
          <Box onClick={() => setId(i)} layoutId={i + ""} key={i}>
            {i}
          </Box>
        ))}
      </Grid>
      <AnimatePresence>
        {id && (
          <>
            <Overlay
              onClick={() => setId(null)}
              variants={overlayVariants}
              initial="entry"
              animate="showing"
              exit="exit"
            ></Overlay>
            <Box
              style={{ width: "50%", height: "30%", position: "absolute" }}
              layoutId={id + ""}
            />
          </>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
