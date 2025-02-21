import { create } from "zustand";
import { Team } from "@/types/team";

interface ScoreboardState {
  teams: Team[];
  updateScore: (id: number, increment: boolean) => void;
  updateTeamName: (id: number, newName: string) => void;
  resetGame: () => void;
}

export const useScoreboardStore = create<ScoreboardState>((set) => ({
  teams: [
    { id: 1, name: "TEAM A", score: 0 },
    { id: 2, name: "TEAM B", score: 0 },
  ],
  updateScore: (id: number, increment: boolean) =>
    set((state) => ({
      teams: state.teams.map((team) =>
        team.id === id
          ? {
              ...team,
              score: increment ? team.score + 1 : Math.max(0, team.score - 1),
            }
          : team
      ),
    })),
  updateTeamName: (id: number, newName: string) =>
    set((state) => ({
      teams: state.teams.map((team) =>
        team.id === id ? { ...team, name: newName.toUpperCase() } : team
      ),
    })),
  resetGame: () =>
    set((state) => ({
      teams: state.teams.map((team) => ({ ...team, score: 0 })),
    })),
}));
