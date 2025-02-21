import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { ScoreboardLayout } from "@/components/ScoreboardLayout";
import { TeamScore } from "@/components/TeamScore";

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
    <TeamScore
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
    <TeamScore
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
    <ScoreboardLayout
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
