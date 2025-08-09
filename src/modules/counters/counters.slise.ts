import { createAction, createReducer } from "@reduxjs/toolkit";
import type { AppState } from "../../store";

type CounterState = {
  counter: number;
};

type CountersState = Record<CounterId, CounterState | undefined>;

export type CounterId = string;

export const incrementAction = createAction<{ counterId: CounterId }>(
  "countres/increment"
);

export const decrementAction = createAction<{
  counterId: CounterId;
}>("countres/decrement");

const initialCounterState: CounterState = { counter: 0 };

const initialCountersState: CountersState = {};

export const countersReducer = createReducer(
  initialCountersState,
  (builder) => {
    builder.addCase(incrementAction, (state, action) => {
      const { counterId } = action.payload;
      if (!state[counterId]) {
        state[counterId] = initialCounterState;
      }
      state[counterId].counter++;
    });
    builder.addCase(decrementAction, (state, action) => {
      const { counterId } = action.payload;
      if (!state[counterId]) {
        state[counterId] = initialCounterState;
      }
      state[counterId].counter--;
    });
  }
);

export const selectCounter = (state: AppState, counterId: CounterId) =>
  state.counters[counterId];
