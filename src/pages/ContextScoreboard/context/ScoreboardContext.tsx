import React, { createContext, useContext, useState } from "react";
import { Team } from "@/types/team";

interface ScoreboardContextType {
  teams: Team[];
  updateScore: (id: number, increment: boolean) => void;
  updateTeamName: (id: number, newName: string) => void;
  resetGame: () => void;
}

const ScoreboardContext = createContext<ScoreboardContextType | undefined>(
  undefined
);

export function ScoreboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [teams, setTeams] = useState<Team[]>([
    { id: 1, name: "TEAM A", score: 0 },
    { id: 2, name: "TEAM B", score: 0 },
  ]);

  const updateScore = (id: number, increment: boolean) => {
    setTeams(
      teams.map((team) =>
        team.id === id
          ? {
              ...team,
              score: increment ? team.score + 1 : Math.max(0, team.score - 1),
            }
          : team
      )
    );
  };

  const resetGame = () => {
    setTeams(teams.map((team) => ({ ...team, score: 0 })));
  };

  const updateTeamName = (id: number, newName: string) => {
    setTeams(
      teams.map((team) =>
        team.id === id ? { ...team, name: newName.toUpperCase() } : team
      )
    );
  };

  return (
    <ScoreboardContext.Provider
      value={{ teams, updateScore, updateTeamName, resetGame }}
    >
      {children}
    </ScoreboardContext.Provider>
  );
}

export function useScoreboard() {
  const context = useContext(ScoreboardContext);
  if (context === undefined) {
    throw new Error("useScoreboard must be used within a ScoreboardProvider");
  }
  return context;
}
