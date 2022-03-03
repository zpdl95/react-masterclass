import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";

const Wrapper = styled.div`
  background-color: black;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    ),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center;
`;

const Title = styled.h2`
  font-size: 60px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 25px;
  width: 35%;
`;

const Slider = styled(motion.div)`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  height: 200px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
`;

const rowVariants: Variants = {
  hidden: { x: window.innerWidth - 10 },
  visible: { x: 0, transition: { type: "tween", duration: 1 } },
  exit: {
    x: -window.innerWidth + 10,
    transition: { type: "tween", duration: 1 },
  },
};

const offset = 6;

function Home() {
  const { data: nowPlayingData, isLoading: nowPlayingIsLoading } =
    useQuery<IGetMoviesResult>(["movies", "nowPlaying"], getMovies);
  const [index, setIndex] = useState(0);
  /* Row가 사라지는 상태를 저장. 애니메이션이 안 겹치게 하기 위함 */
  const [leaving, setLeaving] = useState(false);

  const increaseIndex = () => {
    if (nowPlayingData) {
      if (leaving) return;
      setLeaving(true);
      const totalMovies = nowPlayingData.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  return (
    <Wrapper>
      {nowPlayingIsLoading && <Loader>Loading...</Loader>}
      {!nowPlayingIsLoading && (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(
              nowPlayingData?.results[0].backdrop_path || ""
            )}
          >
            <Title>{nowPlayingData?.results[0].title}</Title>
            <Overview>{nowPlayingData?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            {/* onExitComplete = 애니메이션이 완료되면 함수가 실해됨 */}
            {/* initial={false}처럼 컴포넌트가 mount됐을때 초기 위치or애니메이션을 제거할 수 있다 */}
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={index}
              >
                {nowPlayingData?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      bgPhoto={makeImagePath(movie.backdrop_path)}
                    />
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}
export default Home;
