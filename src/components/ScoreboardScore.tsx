import { useEffect, useRef } from "react";
import { Team } from "@/types/team";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface ScoreboardScoreProps {
  team: Team;
  updateScore: (id: number, increment: boolean) => void;
  updateTeamName: (id: number, newName: string) => void;
  position: "left" | "right";
}

export function ScoreboardScore({
  team,
  updateScore,
  updateTeamName,
  position,
}: ScoreboardScoreProps) {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className="text-center space-y-4">
      <div className="text-xs text-muted-foreground mb-2">
        {position === "left" ? "Left" : "Right"} Score Component
        <div className="text-primary font-medium">
          Renders: {renderCount.current}
        </div>
      </div>
      <Input
        value={team.name}
        onChange={(e) => updateTeamName(team.id, e.target.value)}
        className="text-2xl md:text-3xl font-bold text-center bg-transparent hover:border-primary/50 focus:border-primary"
        placeholder="Enter team name"
      />
      <div className="text-6xl md:text-8xl font-bold font-mono py-8 bg-secondary/50 rounded-xl">
        {team.score}
      </div>
      <div className="flex justify-center gap-2">
        <Button
          onClick={() => updateScore(team.id, true)}
          className="text-lg"
          variant="default"
        >
          +1
        </Button>
        <Button
          onClick={() => updateScore(team.id, false)}
          className="text-lg"
          variant="destructive"
        >
          -1
        </Button>
      </div>
    </div>
  );
}
