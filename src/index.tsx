import React from "react";
import { createPortal } from "react-dom";

function isPromise(obj: any): obj is Promise<HTMLElement | null> {
	return (
		!!obj &&
		(typeof obj === "object" || typeof obj === "function") &&
		typeof obj.then === "function"
	);
}

export const version = "%VERSION%";

export interface PortalProps {
	container?: HTMLElement | Promise<HTMLElement | null> | null;
}

interface PortalState {
	container: HTMLElement | null;
}

export class Portal extends React.Component<PortalProps, PortalState> {
	static defaultProps: PortalProps = {
		container: typeof document !== "undefined" ? document.body : null,
	};

	static getDerivedStateFromProps(props: PortalProps, state: PortalState) {
		return {
			container:
				props.container && isPromise(props.container) ? state.container : props.container,
		};
	}

	state = {
		container: null,
	};

	componentDidUpdate() {
		if (isPromise(this.props.container)) {
			this.props.container.then(container =>
				this.setState({
					container,
				})
			);
		}
	}

	componentDidMount() {
		this.componentDidUpdate();
	}

	render() {
		const container = this.state.container;

		if (!container) return null;

		return createPortal(this.props.children, container);
	}
}

export default Portal;
