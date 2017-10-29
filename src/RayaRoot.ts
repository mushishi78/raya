import {Component, Children} from 'react';
import {RayaStore, createStore} from './RayaStore';

export class RayaRoot<RState> extends Component<{ initialRState: RState }, {}> {
	private store: RayaStore<RState>;

	constructor(props: { initialRState: RState}) {
		super(props);
		this.store = createStore(props.initialRState);
	}

  	getChildContext() {
	    return { rayaStore: this.store };
  	}

  	render() {
    	return Children.only(this.props.children)
  	}
}
