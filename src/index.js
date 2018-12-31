import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export default class Portal extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        getContainer: PropTypes.func,
    };

    static defaultProps = {
        container: document.body,
        getContainer: () => document.body
    };

    static getDerivedStateFromProps(props, state) {

        return {
            container: props.getContainer()
        }
    }

    state = {
        container: null
    }

    componentDidMount() {
        this.setState({
            container: this.props.getContainer()
        });
    }

    render() {
        const container = this.state.container;

        if (!container) return null;

        return createPortal(this.props.children, container);
    }
}