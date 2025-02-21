import { useScoreboardStore } from "./store/scoreboardStore";
import { Scoreboard } from "../../components/Scoreboard";
import { ScoreboardScore } from "../../components/ScoreboardScore";

function LeftTeamScore() {
  const team = useScoreboardStore((state) => state.teams[0]);
  const updateScore = useScoreboardStore((state) => state.updateScore);
  const updateTeamName = useScoreboardStore((state) => state.updateTeamName);

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
  const updateScore = useScoreboardStore((state) => state.updateScore);
  const updateTeamName = useScoreboardStore((state) => state.updateTeamName);

  return (
    <ScoreboardScore
      team={team}
      updateScore={updateScore}
      updateTeamName={updateTeamName}
      position="right"
    />
  );
}

export function ZustandScoreboard() {
  const resetGame = useScoreboardStore((state) => state.resetGame);

  return (
    <Scoreboard
      title="Zustand"
      leftTeam={<LeftTeamScore />}
      rightTeam={<RightTeamScore />}
      onReset={resetGame}
    />
  );
}
