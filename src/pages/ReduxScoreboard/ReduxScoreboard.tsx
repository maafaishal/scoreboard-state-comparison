import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { Scoreboard } from "@/components/Scoreboard";
import { ScoreboardScore } from "@/components/ScoreboardScore";

import { RootState } from "./store/store";
import {
  updateScore,
  updateTeamName,
  resetGame,
} from "./store/scoreboardSlice";

function LeftTeamScore() {
  const team = useSelector((state: RootState) => state.scoreboard.teams[0]);
  const dispatch = useDispatch();

  const handleUpdateScore = (id: number, increment: boolean) => {
    dispatch(updateScore({ id, increment }));
  };

  const handleUpdateTeamName = (id: number, name: string) => {
    dispatch(updateTeamName({ id, name }));
  };

  return (
    <ScoreboardScore
      team={team}
      updateScore={handleUpdateScore}
      updateTeamName={handleUpdateTeamName}
      position="left"
    />
  );
}

function RightTeamScore() {
  const team = useSelector((state: RootState) => state.scoreboard.teams[1]);
  const dispatch = useDispatch();

  const handleUpdateScore = (id: number, increment: boolean) => {
    dispatch(updateScore({ id, increment }));
  };

  const handleUpdateTeamName = (id: number, name: string) => {
    dispatch(updateTeamName({ id, name }));
  };

  return (
    <ScoreboardScore
      team={team}
      updateScore={handleUpdateScore}
      updateTeamName={handleUpdateTeamName}
      position="right"
    />
  );
}

export function Container() {
  const dispatch = useDispatch();

  const handleResetGame = () => {
    dispatch(resetGame());
  };

  return (
    <Scoreboard
      title="Redux"
      leftTeam={<LeftTeamScore />}
      rightTeam={<RightTeamScore />}
      onReset={handleResetGame}
    />
  );
}

export function ReduxScoreboard() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
