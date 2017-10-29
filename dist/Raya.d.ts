/// <reference types="react" />
import { Component, ReactElement } from "react";
import { RayaStore } from "./RayaStore";
export interface RayaProps<RState> {
    render: (store: RayaStore<RState>) => ReactElement<any>;
}
export declare class Raya<RState> extends Component<RayaProps<RState>, {}> {
    private store;
    constructor(props: RayaProps<RState>, context: {
        rayaStore;
    });
    private onUpdate;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): ReactElement<any>;
}
