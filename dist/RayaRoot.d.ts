/// <reference types="react" />
import { Component } from "react";
import { RayaStore } from "./RayaStore";
export declare class RayaRoot<RState> extends Component<{
    initialRState: RState;
}, {}> {
    private store;
    constructor(props: {
        initialRState: RState;
    });
    getChildContext(): {
        rayaStore: RayaStore<RState>;
    };
    render(): React.ReactElement<any>;
}
