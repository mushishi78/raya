export interface RayaStore<RRState> {
  getRState: () => RRState;
  setRState: (newRState: RRState) => void;
  subscribe: (listener: () => void) => void;
  unsubscribe: (listener: () => void) => void;
}

export function createStore<RState>(initialRState: RState): RayaStore<RState> {
  let listeners: (() => void)[] = [];
  let rState = initialRState;

  return {
    getRState: () => rState,
    setRState: newRState => {
	    rState = newRState;
      listeners.forEach(listener => listener());
    },
    subscribe: listener => listeners.push(listener),
    unsubscribe: listener => listeners = listeners.filter(item => item !== listener)
  };
}
