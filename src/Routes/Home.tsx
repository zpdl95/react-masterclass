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
  gap: 10px;
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)`
  background-color: white;
  height: 200px;
`;

const rowVariants: Variants = {
  hidden: { x: window.innerWidth },
  visible: { x: 0, transition: { type: "tween" } },
  exit: {
    x: -window.innerWidth,
    transition: { type: "tween" },
  },
};

function Home() {
  const { data: nowPlayingData, isLoading: nowPlayingIsLoading } =
    useQuery<IGetMoviesResult>(["movies", "nowPlaying"], getMovies);
  const [index, setIndex] = useState(0);

  return (
    <Wrapper>
      {nowPlayingIsLoading && <Loader>Loading...</Loader>}
      {!nowPlayingIsLoading && (
        <>
          <Banner
            onClick={() => setIndex((prev) => prev + 1)}
            bgPhoto={makeImagePath(
              nowPlayingData?.results[0].backdrop_path || ""
            )}
          >
            <Title>{nowPlayingData?.results[0].title}</Title>
            <Overview>{nowPlayingData?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={index}
              >
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Box key={i}>{i}</Box>
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
