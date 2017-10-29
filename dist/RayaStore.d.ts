export interface RayaStore<RRState> {
    getRState: () => RRState;
    setRState: (newRState: RRState) => void;
    subscribe: (listener: () => void) => void;
    unsubscribe: (listener: () => void) => void;
}
export declare function createStore<RState>(initialRState: RState): RayaStore<RState>;
