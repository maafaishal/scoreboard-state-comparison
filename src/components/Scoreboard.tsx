import { RotateCw } from "lucide-react";
import { Team } from "../types/team";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { TeamScore } from "./TeamScore";

interface ScoreboardProps {
  title: string;
  teams: Team[];
  updateScore: (id: number, increment: boolean) => void;
  updateTeamName: (id: number, newName: string) => void;
  resetGame: () => void;
}

export function Scoreboard({
  title,
  teams,
  updateScore,
  updateTeamName,
  resetGame,
}: ScoreboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/80 backdrop-blur border">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center">
              Scoreboard {title && `- ${title}`}
            </h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <TeamScore
                team={teams[0]}
                updateScore={updateScore}
                updateTeamName={updateTeamName}
                position="left"
              />
              <TeamScore
                team={teams[1]}
                updateScore={updateScore}
                updateTeamName={updateTeamName}
                position="right"
              />
            </div>

            <div className="flex justify-center mt-8">
              <Button
                onClick={resetGame}
                variant="outline"
                className="hover:bg-secondary"
              >
                <RotateCw className="w-4 h-4 mr-2" />
                Reset Scores
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
