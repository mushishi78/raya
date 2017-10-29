import { Component, ReactElement } from "react";
import { RayaStore } from "./RayaStore";

export interface RayaProps<RState> {
  render: (store: RayaStore<RState>) => ReactElement<any>;
}

export class Raya<RState> extends Component<RayaProps<RState>, {}> {
  private store: RayaStore<RState>;

  constructor(props: RayaProps<RState>, context: { rayaStore }) {
    super(props, context);
    this.store = context.rayaStore;
  }

  private onUpdate = () => this.forceUpdate();

  componentDidMount() {
    this.store.subscribe(this.onUpdate);
  }

  componentWillUnmount() {
    this.store.unsubscribe(this.onUpdate);
  }

  render() {
    return this.props.render(this.store);
  }
}
