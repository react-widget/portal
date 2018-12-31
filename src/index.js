import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export default class Portal extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        getContainer: PropTypes.func,
        didUpdate: PropTypes.func,
    };

    static defaultProps = {
        container: document.body,
        getContainer: () => document.body,
        didUpdate: () => { }
    };

    static getDerivedStateFromProps(props, state) {

        return {
            container: props.getContainer()
        }
    }

    state = {
        container: null
    }

    componentDidUpdate() {
        this.props.didUpdate();
    }

    componentDidMount() {
        this.setState({
            container: this.props.getContainer()
        }, () => {
            this.props.didUpdate();
        });
    }

    render() {
        const container = this.state.container;

        if (!container) return null;

        return createPortal(this.props.children, container);
    }
}