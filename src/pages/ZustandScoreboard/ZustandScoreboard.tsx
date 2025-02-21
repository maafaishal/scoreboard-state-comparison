import { useScoreboardStore } from "./store/scoreboardStore";
import { ScoreboardLayout } from "../../components/ScoreboardLayout";
import { TeamScore } from "../../components/TeamScore";

function LeftTeamScore() {
  const team = useScoreboardStore((state) => state.teams[0]);
  const updateScore = useScoreboardStore((state) => state.updateScore);
  const updateTeamName = useScoreboardStore((state) => state.updateTeamName);

  return (
    <TeamScore
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
    <TeamScore
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
    <ScoreboardLayout
      leftTeam={<LeftTeamScore />}
      rightTeam={<RightTeamScore />}
      onReset={resetGame}
    />
  );
}
