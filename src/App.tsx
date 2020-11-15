import * as React from "react";
import create from "zustand";
import "./styles.css";

type State = {
  count: number;
  inc: () => void;
};

const useStore = create<State>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 }))
}));

// setInterval(() => {
//   useStore.getState().inc();
//   console.log(useStore.getState());
// }, 1000);

export default function App() {
  const { count, inc } = useStore();
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={inc}>one up</button>
    </div>
  );
}
