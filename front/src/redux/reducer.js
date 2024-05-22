import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // Usuario activo
    userActive: {},
    // Turnos que va a tener el usuario activo
    userTurns: [],
};

export const userSlice = createSlice({
    name: "userData",
    initialState: initialState,
    reducers: {
        setUserActive: (state, action) => {
            state.userActive = action.payload;
        },

        setUserTurns: (state, action) => {
            state.userTurns = action.payload;
        },

        removeUser: (state) => {
            state.userActive = {};
        },

        cancelTurnAction: (state, action) => {
            state.userTurns = state.userTurns.map((turn) => {
                if (turn.id === action.payload) {
                    return { ...turn, status: "cancelled" };
                }
                return turn;
            });
        },
    },
});

export const { setUserActive, setUserTurns, removeUser, cancelTurnAction } =
    userSlice.actions;
