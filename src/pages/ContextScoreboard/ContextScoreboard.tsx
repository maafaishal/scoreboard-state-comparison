import { ScoreboardProvider, useScoreboard } from "./context/ScoreboardContext";
import { Scoreboard } from "@/components/Scoreboard";
import { ScoreboardScore } from "@/components/ScoreboardScore";

function LeftTeamScore() {
  const { teams, updateScore, updateTeamName } = useScoreboard();
  return (
    <ScoreboardScore
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
    <ScoreboardScore
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
    <Scoreboard
      title="Context"
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
