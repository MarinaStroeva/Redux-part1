import { useAppSelector } from "../../shared/redux";

import {
  type CounterId,
  selectCounter,
  decrementAction,
  incrementAction,
} from "./counters.slise";

import { useDispatch } from "react-redux";

export function Counters() {
  return (
    <div className="flex flex-row items-center justify-center gap-5">
      <Counter counterId="first" />
      <Counter counterId="second" />
    </div>
  );
}

export function Counter({ counterId }: { counterId: CounterId }) {
  const dispatch = useDispatch();
  const counterState = useAppSelector((state) =>
    selectCounter(state, counterId)
  );

  return (
    <div className="flex flex-row items-center justify-center gap-5">
      counter {counterState?.counter}
      <button onClick={() => dispatch(incrementAction({ counterId }))}>
        increment
      </button>
      <button onClick={() => dispatch(decrementAction({ counterId }))}>
        decrement
      </button>
    </div>
  );
}
