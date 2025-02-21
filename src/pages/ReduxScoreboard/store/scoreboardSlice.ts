import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Team } from '../types/team';

interface ScoreboardState {
  teams: Team[];
}

const initialState: ScoreboardState = {
  teams: [
    { id: 1, name: 'TEAM A', score: 0 },
    { id: 2, name: 'TEAM B', score: 0 },
  ],
};

export const scoreboardSlice = createSlice({
  name: 'scoreboard',
  initialState,
  reducers: {
    updateScore: (state, action: PayloadAction<{ id: number; increment: boolean }>) => {
      const { id, increment } = action.payload;
      const team = state.teams.find((t) => t.id === id);
      if (team) {
        team.score = increment ? team.score + 1 : Math.max(0, team.score - 1);
      }
    },
    updateTeamName: (state, action: PayloadAction<{ id: number; name: string }>) => {
      const { id, name } = action.payload;
      const team = state.teams.find((t) => t.id === id);
      if (team) {
        team.name = name.toUpperCase();
      }
    },
    resetGame: (state) => {
      state.teams.forEach((team) => {
        team.score = 0;
      });
    },
  },
});

export const { updateScore, updateTeamName, resetGame } = scoreboardSlice.actions;
export default scoreboardSlice.reducer;