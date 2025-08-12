import { createAction, createReducer } from "@reduxjs/toolkit";
import type { AppState } from "../../shared/redux";

export type CounterId = string;

type CounterState = {
  counter: number;
};

type CountersState = Record<CounterId, CounterState | undefined>;

const createCounterState = (): CounterState => ({ counter: 0 });

export const incrementAction = createAction<{ counterId: CounterId }>(
  "counters/increment"
);

export const decrementAction = createAction<{
  counterId: CounterId;
}>("counters/decrement");

const initialCountersState: CountersState = {};

export const countersReducer = createReducer(
  initialCountersState,
  (builder) => {
    builder.addCase(incrementAction, (state, action) => {
      const { counterId } = action.payload;
      if (!state[counterId]) {
        state[counterId] = createCounterState();
      }
      state[counterId].counter++;
    });
    builder.addCase(decrementAction, (state, action) => {
      const { counterId } = action.payload;
      if (!state[counterId]) {
        state[counterId] = createCounterState();
      }
      state[counterId].counter--;
    });
  }
);

export const selectCounter = (state: AppState, counterId: CounterId) =>
  state.counters[counterId];
