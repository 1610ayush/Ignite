import React, { useEffect } from "react";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//components
import Game from "../components/Game";
//Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Extracting the data
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  return (
    <GameList>
      <h1>Upcoming games</h1>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`

`;

const Games = styled(motion.div)``;

export default Home;
