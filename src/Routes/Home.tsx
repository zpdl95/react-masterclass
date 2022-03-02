import { useQuery } from "react-query";
import { getMovies } from "../api";

function Home() {
  const { data: nowPlayingData, isLoading: nowPlayingIsLoading } = useQuery(
    ["movies", "nowPlaying"],
    getMovies
  );
  return <div style={{ backgroundColor: "white", height: "200vh" }}></div>;
}
export default Home;
