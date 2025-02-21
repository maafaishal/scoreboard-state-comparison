import { ScoreboardProvider, useScoreboard } from "./context/ScoreboardContext";
import { ScoreboardLayout } from "@/components/ScoreboardLayout";
import { TeamScore } from "@/components/TeamScore";

function LeftTeamScore() {
  const { teams, updateScore, updateTeamName } = useScoreboard();
  return (
    <TeamScore
      team={teams[0]}
      updateScore={updateScore}
      updateTeamName={updateTeamName}
      position="left"
    />
  );
}

function RightTeamScore() {
  const { teams, updateScore, updateTeamName } = useScoreboard();
  return (
    <TeamScore
      team={teams[1]}
      updateScore={updateScore}
      updateTeamName={updateTeamName}
      position="right"
    />
  );
}

function Container() {
  const { resetGame } = useScoreboard();

  return (
    <ScoreboardLayout
      leftTeam={<LeftTeamScore />}
      rightTeam={<RightTeamScore />}
      onReset={resetGame}
    />
  );
}

export function ContextScoreboard() {
  return (
    <ScoreboardProvider>
      <Container />
    </ScoreboardProvider>
  );
}
