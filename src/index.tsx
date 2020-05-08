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
	/** 渲染容器，默认为：document.body */
	container?: HTMLElement | Promise<HTMLElement | null> | null;
	/** 初始渲染时触发，注：如果container为null时不会触发，直到container存在 */
	onChildrenMount?: () => void;
}

interface PortalState {
	container: HTMLElement | null;
}

export class Portal extends React.Component<PortalProps, PortalState> {
	static defaultProps: PortalProps = {
		container: typeof document !== "undefined" ? document.body : null,
	};

	static getDerivedStateFromProps(nextProps: PortalProps, nextState: PortalState) {
		return {
			container:
				nextProps.container && isPromise(nextProps.container)
					? nextState.container
					: nextProps.container,
		};
	}

	protected unmount: boolean = false;
	protected mounted: boolean = false;
	protected seqId: number = 1;

	state = {
		container: null,
	};

	componentDidUpdate() {
		this.seqId++;
		if (isPromise(this.props.container)) {
			const currentSeqId = this.seqId;
			this.props.container.then(newContainer => {
				if (
					this.unmount ||
					this.state.container === newContainer ||
					this.seqId !== currentSeqId
				) {
					return;
				}

				if (!this.mounted && newContainer && this.props.onChildrenMount) {
					this.mounted = true;
					this.props.onChildrenMount();
				}

				this.setState({
					container: newContainer,
				});
			});
		} else if (this.props.container) {
			if (!this.mounted && this.props.onChildrenMount) {
				this.mounted = true;
				this.props.onChildrenMount();
			}
		}
	}

	componentDidMount() {
		if (
			this.props.container &&
			!isPromise(this.props.container) &&
			this.props.onChildrenMount
		) {
			this.mounted = true;
			this.props.onChildrenMount();
		}

		this.componentDidUpdate();
	}

	componentWillUnmount() {
		this.unmount = true;
	}

	render() {
		const container = this.state.container;

		if (!container) return null;

		return createPortal(this.props.children, container);
	}
}

export default Portal;
