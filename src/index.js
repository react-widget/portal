import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export default class Portal extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        container: PropTypes.node.isRequired,
    };

    static defaultProps = {
        container: document.body,
    };

    render() {
        return createPortal(this.props.children, this.props.container);
    }
}