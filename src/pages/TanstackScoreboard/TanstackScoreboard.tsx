import {
  useScoreboardStore,
  updateScore,
  updateTeamName,
  resetGame,
} from "./store/scoreboardStore";
import { Scoreboard } from "../../components/Scoreboard";
import { ScoreboardScore } from "../../components/ScoreboardScore";

function LeftTeamScore() {
  const team = useScoreboardStore((state) => state.teams[0]);

  return (
    <ScoreboardScore
      team={team}
      updateScore={updateScore}
      updateTeamName={updateTeamName}
      position="left"
    />
  );
}

function RightTeamScore() {
  const team = useScoreboardStore((state) => state.teams[1]);

  return (
    <ScoreboardScore
      team={team}
      updateScore={updateScore}
      updateTeamName={updateTeamName}
      position="right"
    />
  );
}

export function TanstackScoreboard() {
  return (
    <Scoreboard
      title="Tanstack"
      leftTeam={<LeftTeamScore />}
      rightTeam={<RightTeamScore />}
      onReset={resetGame}
    />
  );
}
