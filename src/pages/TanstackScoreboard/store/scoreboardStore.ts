import { Team } from "@/types/team";
import { Store, useStore } from "@tanstack/react-store";

interface ScoreboardState {
  teams: Team[];
}

export const store = new Store<ScoreboardState>({
  teams: [
    { id: 1, name: "TEAM A", score: 0 },
    { id: 2, name: "TEAM B", score: 0 },
  ],
});

export const updateScore = (id: number, increment: boolean) => {
  store.setState((state) => ({
    ...state,
    teams: state.teams.map((team) =>
      team.id === id
        ? {
            ...team,
            score: increment ? team.score + 1 : Math.max(0, team.score - 1),
          }
        : team
    ),
  }));
};

export const updateTeamName = (id: number, newName: string) => {
  store.setState((state) => ({
    ...state,
    teams: state.teams.map((team) =>
      team.id === id ? { ...team, name: newName.toUpperCase() } : team
    ),
  }));
};

export const resetGame = () => {
  store.setState((state) => ({
    ...state,
    teams: state.teams.map((team) => ({ ...team, score: 0 })),
  }));
};

export function useScoreboardStore<T>(
  selector: (state: ScoreboardState) => T
): T {
  return useStore(store, selector);
}
